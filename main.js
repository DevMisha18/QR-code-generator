const generateQRCode = (url, errorCorrectionLevel) => {
  const qrCodeContainer = document.getElementById("qrcode");
  qrCodeContainer.innerText = '';

  if (url === '') {
    alert("Enter text or url");
  } else {
    new QRCode(qrCodeContainer, {
      text: url,
      width: 256,
      height: 256,
      correctLevel: QRCode.CorrectLevel[errorCorrectionLevel]
    });
  }
}


const button = document.querySelector("button");

button.addEventListener("click", () => {
  const url = document.querySelector(".container input").value;
  const errorCorrectionLevel = document.getElementById("error-correction").value;

  generateQRCode(url, errorCorrectionLevel);
});
