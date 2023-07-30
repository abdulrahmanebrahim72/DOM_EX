var imgs = Array.from(document.querySelectorAll('.row img'));
var layer = document.querySelector('.layer');
var imgInLayer = document.querySelector('.innerLayer img');
var nxt = document.querySelector('.innerLayer .nxt');
var prv = document.querySelector('.innerLayer .prv');
var closeLayer = document.querySelector('.innerLayer .close');

var currentIndx = 0;
//Event to images
for(var i=0; i<imgs.length; i++){
    imgs[i].addEventListener('click' , function(e){
        var imgSrc = e.target.getAttribute('src');
        layer.classList.remove("d-none");
        imgInLayer.setAttribute("src" , `${imgSrc}`);
        currentIndx = imgs.indexOf(e.target);
    });
}


//Hide Layer
layer.addEventListener('click' , function(e){
    if(e.target == this){
        layer.classList.add("d-none");
    }
});
document.addEventListener('keyup' , function(e){
    if(e.code == 'Escape'){
        layer.classList.add("d-none");
    }
});
closeLayer.addEventListener('click' , function(){
    layer.classList.add("d-none");
});


//next image
nxt.addEventListener('click' , function(){
    currentIndx++;
    if(currentIndx >= imgs.length){
        currentIndx = 0;
    }
    imgInLayer.setAttribute("src" , `${imgs[currentIndx].getAttribute('src')}`);
});


//previous image
prv.addEventListener('click' , function(){
    currentIndx--;
    if(currentIndx < 0){
        currentIndx = imgs.length -1;
    }
    imgInLayer.setAttribute("src" , `${imgs[currentIndx].getAttribute('src')}`);
});
