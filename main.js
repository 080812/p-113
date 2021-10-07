function preload(){

}

function setup(){
    canvas=createCanvas(450,550)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video,0,0,700,770)

   fill(40,90,460,90)
   stroke(40,90,460,90)
   
}

function take_snapshot(){  

    save("student_name.png");
    
  }