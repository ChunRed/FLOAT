var socket;
var Fogs = [20];
var mousex, mousex;
var st, it;


function setup(){

  socket = io.connect("http://localhost:3000");
  //createCanvas(500, 500);

  var c=createElement("div");
  c.size(400,400);
  c.style("background-color","rgb(0,0,0)");
  c.style("margin","auto");
  c.style("margin-top","50px");


//---------------------------------------
  var t1=createInput("title");
  t1.parent(c);
  t1.style("position","absolute");
  t1.style("margin-top","20px");
  t1.style("margin-left","20px");
  t1.input(input1);


//-----------------------------------------
  ti =createP("title");
  ti.parent(c);
  ti.style("color","rgb(255,255,255)");
  ti.style("position","absolute");
  ti.style("margin-top","60px");
  ti.style("margin-left","20px");

  //-----------------------------------------
  var s1=createSlider("slideP2");
  s1.parent(c);
  s1.style("position","absolute");
  s1.style("margin-top","100px");
  s1.style("margin-left","20px");
  s1.input(slide1);

  //-----------------------------------------
  st =createP("0");
  st.parent(c);
  st.style("color","rgb(255,255,255)");
  st.style("position","absolute");
  st.style("margin-top","140px");
  st.style("margin-left","20px");
  
  //------------------------------------------
  var button=createButton("send MSG");
  button.parent(c);
  button.style("position","absolute");
  button.style("margin-top","180px");
  button.style("margin-left","20px");
  button.mousePressed(send_MSG);


  socket.on('Member', function (data) {
    if(data != 0){
      socket.emit('Text', ti.html());
      socket.emit('value', st.html());
    }
  });

}


function draw(){

  //background(200);
  
   
}


function input1(){
  ti.html(this.value());
}

function send_MSG(){
  socket.emit('Text', ti.html());
  socket.emit('value', st.html());
  
}


function slide1(){
  st.html(this.value());
}
  

