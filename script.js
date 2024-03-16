let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let texts = document.getElementById('texts');

function generateQR(){
        if(texts.value.length > 0) {
            qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + texts.value;
            imgBox.classList.add("show-img");
        }

        else {
            texts.classList.add('error')
            setTimeout(() => {
                texts.classList.remove('error')
            }, 1000)
        }
}