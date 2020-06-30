function showText(){
    var text = document.getElementById('popupText');
    text.style.opacity = "1";
}

function hideText(){
    var text = document.getElementById('popupText');
    text.style.opacity = "0";
}

function uploadImage(){
    var disp = document.getElementById('display-section');
    disp.style.height = "0";
    disp.style.opacity = "0";
    var imgsec = document.getElementById('image-section');
    imgsec.style.opacity = "1";
    imgsec.style.width = "100vw";
    imgsec.style.height = "90vh";
}