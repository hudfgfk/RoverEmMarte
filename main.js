canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverWidth=100;
roverHeight=90;
backgroundImage="mars.jpg";
roverImage="rover.png";
roverX=25;
roverY=25;

marsImgLista=["marte1.jpeg", "marte2.jpg", "marte3.jpg", "marte4.jpg", "marte5.jpg"]
numeroAleatorio=Math.floor(Math.random()*4)
backgroundImage=marsImgLista[numeroAleatorio]
function add(){
    backgroundImg=new Image();
    backgroundImg.onload=uploadBackground;
    backgroundImg.src=backgroundImage;
    
    roverImg=new Image();
    roverImg.onload=uploadRover;
    roverImg.src=roverImage;


    }
    
    function uploadBackground(){
        ctx.drawImage(backgroundImg,0,0,canvas.width,canvas.height)
    }
    function uploadRover(){
        ctx.drawImage(roverImg,roverX,roverY,roverWidth,roverHeight)
    }

    window.addEventListener("keydown",myKeyDown);
    function myKeyDown(e){
        keyPressed=e.keyCode;
        console.log(keyPressed);
        if (keyPressed=="87"){
            up();
        }
        if (keyPressed=="83"){
            down();
        }
        if (keyPressed=="65"){
            left();
        }
        if (keyPressed=="68"){
            right();
        }
    }

    function up(){
        if (roverY>=0){
            roverY=roverY-10;
            uploadBackground();
            uploadRover();
        }
    }
    
    function down(){
        if (roverY<=500){
            roverY=roverY+10;
            uploadBackground();
            uploadRover();
        }
    }
    function left()
{
    if(roverX >= 0)
    {
        roverX =roverX - 10;
        console.log("Quando direcional esquerda for pressionada,  x = " + roverX + " | y = " +roverY);
        uploadBackground();
         uploadRover();
    }
}
function right()
{
    if(roverX <= 700)
    {
        roverX =roverX + 10;
        console.log("Quando direcional direita for pressionada,  x = " + roverX + " | y = " +roverY);
        uploadBackground();
        uploadRover();
   }
}

    