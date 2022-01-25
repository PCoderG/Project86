var canvas = new fabric.Canvas('myCanvas');
var can = document.getElementById("myCanvas")

 

function new_image()
{ 
    
    fabric.Image.fromURL("BirthdayImage.jpg",function (Img) {
        block_image_object=Img;
        block_image_object.scaleToWidth(can.width);
        block_image_object.scaleToHeight(can.height);

        block_image_object.set({
            top:0,left:0
        });
        canvas.add(block_image_object);
    });
    
}
var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}

