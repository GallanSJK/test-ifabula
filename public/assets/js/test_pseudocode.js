window.console = {
  log: function(str){
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLog").appendChild(node);
  }
}

for (var angka = 50; angka <= 100; angka += 5) {
  var keterangan = "";

  if (angka <= 60) {
    keterangan = "KURANG";
  } else if (angka <= 70) {
    keterangan = "CUKUP";
  } else if (angka <= 80) {
    keterangan = "BAIK";
  } else {
    keterangan = "LUAR BIASA";
  }

  console.log(angka + " - " + keterangan);
}

function fibonacci(n) {
  var sequence = [0, 1];

  for (var i = 2; i < n; i++) {
    var next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
  }

  return sequence;
}

var fibonacciSequence = fibonacci(20);
console.log(fibonacciSequence.join(' '));

function generatePattern(x) {
  for (var i = 1; i <= x; i++) {
    var row = '';
    for (var j = 1; j <= i; j++) {
      row += '* ';
    }
    console.log(row);
  }
}

var x = 5;
generatePattern(x);

function numberToWords(number) {
  var units = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan'];
  var teens = ['Sepuluh', 'Sebelas', 'Dua Belas', 'Tiga Belas', 'Empat Belas', 'Lima Belas', 'Enam Belas', 'Tujuh Belas', 'Delapan Belas', 'Sembilan Belas'];
  var tens = ['', 'Sepuluh', 'Dua Puluh', 'Tiga Puluh', 'Empat Puluh', 'Lima Puluh', 'Enam Puluh', 'Tujuh Puluh', 'Delapan Puluh', 'Sembilan Puluh'];
  var thousands = ['', 'Ribu', 'Juta', 'Miliar', 'Triliun'];

  if (number === 0) {
    return 'Nol';
  }

  var result = '';
  var digitGroups = [];

  // Pisahkan angka menjadi kelompok 3 digit
  while (number > 0) {
    digitGroups.push(number % 1000);
    number = Math.floor(number / 1000);
  }

  // Proses setiap kelompok digit
  for (var i = 0; i < digitGroups.length; i++) {
    var groupText = '';
    var group = digitGroups[i];

    if (group >= 100) {
      var hundredsDigit = Math.floor(group / 100);
      groupText += units[hundredsDigit] + ' Ratus ';
      group %= 100;
    }

    if (group >= 10 && group <= 19) {
      groupText += teens[group - 10] + ' ';
    } else if (group >= 20) {
      var tensDigit = Math.floor(group / 10);
      groupText += tens[tensDigit] + ' ';
      group %= 10;
    }

    if (group >= 1 && group <= 9) {
      groupText += units[group] + ' ';
    }

    if (groupText !== '') {
      result = groupText + thousands[i] + ' ' + result;
    }
  }

  return result.trim();
}

var x1 = 2234;
var x2 = 8500;
var x3 = 7001;

var terbilang1 = numberToWords(x1);
var terbilang2 = numberToWords(x2);
var terbilang3 = numberToWords(x3);

console.log(x1 + ' = ' + terbilang1);
console.log(x2 + ' = ' + terbilang2);
console.log(x3 + ' = ' + terbilang3);