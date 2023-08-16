document.addEventListener('DOMContentLoaded', function () {
  const luasForm = document.getElementById('luasForm');
  luasForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const alas = parseFloat(document.getElementById('input-alas').value);
    const tinggi = parseFloat(document.getElementById('input-tinggi').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
      resultDiv.textContent = 'Masukkan angka yang valid.';
    } else {
      const luas = 0.5 * alas * tinggi;
      resultDiv.textContent = 'Luas: ' + luas.toFixed(2);
    }
  });

  const kelilingForm = document.getElementById('kelilingForm');
  kelilingForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const sisiA = parseFloat(document.getElementById('input-sisi-a').value);
    const sisiB = parseFloat(document.getElementById('input-sisi-b').value);
    const sisiC = parseFloat(document.getElementById('input-sisi-c').value);
    const resultDiv = document.getElementById('kelilingresult');

    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC) || sisiA <= 0 || sisiB <= 0 || sisiC <= 0) {
      resultDiv.textContent = 'Masukkan angka yang valid.';
    } else {
      const keliling = sisiA + sisiB + sisiC;
      resultDiv.textContent = 'Keliling: ' + keliling.toFixed(2);
    }
  });
});
