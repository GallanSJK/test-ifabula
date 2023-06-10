const express = require("express");
const path = require("path");
const apiRouter = express.Router();

const publicDir = path.join(process.cwd(), "public");

//endpoint static
apiRouter.use('/', express.static('public')); //serve index.html
apiRouter.use('/tu12', express.static(publicDir + '/testutama1-2.html')); //serve Tugas nomer 1-2
apiRouter.use('/tu37', express.static(publicDir + '/testutama3-7.html')); //serve Tugas nomer 3-7
apiRouter.use('/testdebug', express.static(publicDir + '/testdebug.html')); //serve Tugas nomer 8
apiRouter.use('/tu9', express.static(publicDir + '/testutama9.html')); //serve Tugas nomer 9

// API dengan method GET
apiRouter.get('/api/data', (req, res) => {
  // Validasi header
  const userId = req.headers['user-id'];
  const scope = req.headers['scope'];
  
  // Cek apakah header sesuai dengan yang diharapkan
  if (userId === 'ifabula' && scope === 'user') {
    // Jika header cocok, berikan response dengan data
    const data = {
      message: 'Ini adalah response dari API dengan method GET',
      userId: userId,
      scope: scope
    };
    res.json(data);
  } else {
    // Jika header tidak cocok, berikan response dengan status 401 Unauthorized
    res.status(401).json({ responseCode: 401, responseMessage: 'UNAUTHORIZED' });
  }
});

// API dengan method POST
apiRouter.post('/api/data', (req, res) => {
  // Validasi header
  const userId = req.headers['user-id'];
  const scope = req.headers['scope'];
  
  // Cek apakah header sesuai dengan yang diharapkan
  if (userId === 'ifabula' && scope === 'user') {
    // Jika header cocok, berikan response dengan data yang dikirimkan
    const requestData = req.body;
    const responseData = {
      message: 'Ini adalah response dari API dengan method POST',
      userId: userId,
      scope: scope,
      requestData: requestData
    };
    res.json(responseData);
  } else {
    // Jika header tidak cocok, berikan response dengan status 401 Unauthorized
    res.status(401).json({ responseCode: 401, responseMessage: 'UNAUTHORIZED' });
  }
});

module.exports = apiRouter;
