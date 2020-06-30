function hideDrape(){
    var curtain = document.querySelector('#mainScreen');
    curtain.style.opacity = "0";
    curtain.style.height = "0";
    var leftcurtain = document.querySelector('#leftSideCurtain');
    leftcurtain.style.opacity = "1";
    leftcurtain.style.display = "inline"
    var camImg = document.querySelector('#cameraImage');
    camImg.style.opacity = "1";
    camImg.style.display = "inline"
    var rightcurtain = document.querySelector('#rightSideCurtain');
    rightcurtain.style.opacity = "1";
    rightcurtain.style.display = "inline"
    var lensCov = document.querySelector('#lensCover');
    lensCov.style.opacity = "1";
    lensCov.style.display = "inline"
    var head = document.querySelector('.heading');
    head.style.opacity = "1";
    head.style.display = "block"
    var head = document.querySelector('.btn');
    head.style.opacity = "1";
    head.style.display = "inline"
}

function uploadImage(){
    // var disp = document.getElementById('display-section');
    // disp.style.height = "0";
    // disp.style.opacity = "0";
    // var imgsec = document.getElementById('image-section');
    // imgsec.style.opacity = "1";
    // imgsec.style.width = "100vw";
    // imgsec.style.height = "90vh";
    console.log("Hello");
}
function selectFile(){
    
}
// function showText(){
//     var text = document.getElementById('popupText');
//     text.style.opacity = "1";
// }

// function hideText(){
//     var text = document.getElementById('popupText');
//     text.style.opacity = "0";
// }
