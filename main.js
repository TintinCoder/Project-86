var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");
// Object()
var block_img_obj = "";
function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        block_img_obj = Img;

        // Setting Width And Height
        block_img_obj.scaleToWidth = 800;
        block_img_obj.scaleToHeight = 700;
        // X N Y
        block_img_obj.set({
            top:0,
            left:0
        });
        canvas.add(block_img_obj);
    })
}

function playSound(){
	x.play();
}
