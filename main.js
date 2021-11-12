function preload(){

}

function setup(){
    canvas=createCanvas(450,460)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video,90,100,300,220)

   fill(40,90,460,90)
   stroke(40,90,460,90)
   rect(10,10,10,430)
   rect(430,10,10,430)
   rect(10,10,430,10)
   rect(20,430,420,10)
}

function take_snapshot(){  

    save("student_name.png");
    
  }