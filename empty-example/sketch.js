class BinaryTree
{
  constructor()
  {
  this.root = null;
  }

  add(nodee)
  {
    const node = tree.root;
    if (node == null)
    {     
          tree.root = new Node(nodee.value,nodee.x,nodee.y);
          actualNodeList.push(tree.root);     
          untouchedNodeList.push(tree.root);     
    }
    else
    { 

      this.place(node,nodee);
    }

  }

  place(node,objectnode)
  { 
    objectnode.y = objectnode.y + screen.height/10;
    if (temp < node.value)
    {        logger("left");

      if (node.left == null)
      {

        objectnode.x = objectnode.x-screen.width/20;

        node.left = new Node(temp, objectnode.x,objectnode.y,node);
        actualNodeList.push(node.left);
        untouchedNodeList.push(node.left)
        logger("blank");

      }
      else if (node.left != null)
      {


         objectnode.x= objectnode.x-screen.width/20;

         this.place(node.left,objectnode);
      }
    }
    if (temp > node.value)
    {         logger("right");
      if (node.right == null)
      {objectnode.x = objectnode.x+screen.width/20;

        node.right = new Node(temp, objectnode.x,objectnode.y,node);
        actualNodeList.push(node.right);
        untouchedNodeList.push(node.right)
        logger("blank")
        
      }
      else if (node.right != null)
      { objectnode.x = objectnode.x+screen.width/20;
         this.place(node.right, objectnode);
      }
    }

  }


}

class Node
{
  constructor(value, x = canvasx/2, y= canvasy/4, parent = null, left = null, right = null )
  {
    this.value = value;
    this.left = left;
    this.right = right;
    this.x = x;
    this.y = y;
    this.parent = parent;
  }
}

function draw() {
  // put drawing code here
  textSize(80);
  textFont('Didot');
  fill(0)
  textAlign(CENTER)
  text("Binary Tree",screen.width/2,screen.height/10);
  buttonLeftClicked();
  buttonRightClicked();
  currentNumber()
  solved()

}



function setup() {
  createCanvas(screen.width,screen.height);// put setup code here
  background('rgba(159,211,95,1)'); 
  alert("Welcome to Binary Tree Guide! Input Number of Nodes");
  nodeNumber = prompt("Number of Nodes: ");
  tree = new BinaryTree();
  buttons();
  RNG();
  console.log(nodes);
  console.log(tree);
  textAlign(CENTER);
  textSize(20)
  fill(800)
  text("["+nodes+"]",screen.width/2+20,150);
  console.log(loggerlist)
  addNodesToTree();
  console.log(actualNodeList)
   textSize(20);
          fill(0)
          ellipse(actualNodeList[0].x,actualNodeList[0].y,60,60)
          fill(255)
          text(actualNodeList[0].value,actualNodeList[0].x,actualNodeList[0].y);
  actualNodeList = actualNodeList.splice(1)
  noStroke()
  fill('rgba(239,237,124,1)')
	ellipse(canvasx/2,canvasy/4-40,10,10)
	noStroke()
	point = new pointer();
}

// Initializes variables for global use
var nodeNumber;
var objectNodeList = [];
var canvasx = screen.width;
var canvasy = screen.height;
var nodes = [];
var tree;
var temp;
var objectnodelist = [];
var loggerlist = [];
var counter = 0;
var finish = [];
var actualNodeList = [];
var untouchedNodeList = [];
var countMove = 0;

//Generates Random Numbers and adds to 'nodes' list
function RNG() {
  while (nodeNumber > 0) { 
    var temp = Math.floor(Math.random()*100);
    while (nodes.includes(temp)){
    var temp = Math.floor(Math.random()*100);
    }
    nodes.push(temp);
    nodeNumber--;
  }
}

//initializes nodes and adds them to 'objectnodelist' then places updated nodes in tree.
function addNodesToTree(){
  for (var i = 0; i < nodes.length ; i++)
  {
    temp = nodes[i];
    objectnodelist.push(new Node(temp));
    console.log(objectnodelist.length);
    tree.add(objectnodelist[i]);

  }

}


//generates a line that connects node to parent node (if node is left)
function lineLeft (object)
{
  {	fill(0);
  	stroke(0)
  	line(object.x,object.y,object.x+100,object.y-100)}
}
//generates a line that connects node to parent node (if node is right)
function lineRight(object)
{
  	stroke(0)
  	fill(0)
  	line(object.x+15,object.y-10,object.x-95,object.y-100)
}

//generates the key to solving the binary search tree
function logger(text)
{
  loggerlist.push(text);
}
//generates 'left' and 'right' buttons
function buttons()
{
  fill(255);
  rect(3*screen.width/10,1.5*screen.height/10,50,30)
  rect(4*screen.width/10,1.5*screen.height/10,50,30)
  fill(0)
  text("left",3*screen.width/10,2.25*screen.height/10)
  text("right",4*screen.width/10,2.25*screen.height/10)
}

//makes left button darker when held, else regular
function buttonLeftClicked()
{
  if (mouseIsPressed && mouseX >= 3*screen.width/10 && mouseX <= 3*screen.width/10+50
   && mouseY >=1.5*screen.height/10 && mouseY < 1.5*screen.height/10+30 )
  { 
    fill('rgba(117,150,118, .2)')
      rect(3*screen.width/10,1.5*screen.height/10,50,30) 
      
    } 
     else{ 
      fill(255)
      rect(3*screen.width/10,1.5*screen.height/10,50,30)
      
  }
  
  }
  //makes right button darker when held, else regular
  function buttonRightClicked(){
    if (mouseIsPressed && mouseX >= 4*screen.width/10 && mouseX <= 4*screen.width/10+50
     && mouseY >=1.5*screen.height/10&& mouseY < 1.5*screen.height/10+30)
    { 
      fill('rgba(117,150,118, .2)')  
      rect(4*screen.width/10,1.5*screen.height/10,50,30)
      
    }
    else{fill(255)
      rect(4*screen.width/10,1.5*screen.height/10,50,30)

   }}
   //when mouse is pressed at these locations, does an action (buttons)
   function mousePressed()
   {  if (actualNodeList.length!=0)  
	   { if(mouseX >= 3*screen.width/10 && mouseX <= 3*screen.width/10+50
      && mouseY >=1.5*screen.height/10 && mouseY < 1.5*screen.height/10+30 && loggerlist[0] == "left" && loggerlist[1] == "blank")
	    {
				lineLeft(actualNodeList[0]);
	        	fill(0)
	        	ellipse(actualNodeList[0].x+2,actualNodeList[0].y-15,60,60);
	        	fill(255)
	        	text(actualNodeList[0].value,actualNodeList[0].x,actualNodeList[0].y);
				actualNodeList = actualNodeList.splice(1)
				loggerlist = loggerlist.splice(1)
				noStroke()
				fill('rgba(159,211,95,1)') //green
				ellipse(point.x,point.y,10,10)
				point.x = canvasx/2
				point.y = canvasy/4-40
				
  				fill('rgba(239,237,124,1)') //yellow
  				ellipse(point.x,point.y,10,10)
	    }
	    else if(mouseX >=3*screen.width/10 && mouseX <= 3*screen.width/10+50
       && mouseY >=1.5*screen.height/10 && mouseY < 1.5*screen.height/10+30 && loggerlist[0] == "left" 
	    	&& (loggerlist[1] == "right" || loggerlist[1] == "left"))
	    {
	    	loggerlist = loggerlist.splice(1)


	    	fill('rgba(159,211,95,1)') //green
	    		noStroke()
				ellipse(point.x,point.y,10,10)
				point.x = point.x - screen.width/20
				point.y = point.y+ screen.height/10 
				noStroke()
  				fill('rgba(239,237,124,1)') //yellow
  				ellipse(point.x,point.y,10,10)
	    }
	    else if(mouseX >= 3*screen.width/10 && mouseX <= 3*screen.width/10+50
       && mouseY >=1.5*screen.height/10 && mouseY <= 1.5*screen.height/10+30 && loggerlist[0] == "right")
	    {
	      textSize(12)
	      fill(255)
	      text("Are you sure the number is smaller?", 3*screen.width/10,1.25*screen.height/10);
	      noStroke();
	      setTimeout(function() { fill('rgba(159,211,95,1)'), rect(2.35*screen.width/10,1.35*screen.height/10-20,230,15)},3000)
	    }
	    else if (mouseX >= 4*screen.width/10 && mouseX <= 4*screen.width/10+50 && mouseY >=1.5*screen.height/10 
        && mouseY < 1.5*screen.height/10+30 && loggerlist[0] =="right" && loggerlist[1] == "blank")
	    {
				lineRight(actualNodeList[0]);
	        	fill(0)
	        	ellipse(actualNodeList[0].x+2,actualNodeList[0].y-15,60,60);
	        	fill(255)
	        	text(actualNodeList[0].value,actualNodeList[0].x,actualNodeList[0].y);
				actualNodeList = actualNodeList.splice(1)
				loggerlist = loggerlist.splice(1)
				noStroke()
				fill('rgba(159,211,95,1)') //green
				ellipse(point.x,point.y,10,10)
				point.x = canvasx/2
				point.y = canvasy/4-40
				noStroke()
  				fill('rgba(239,237,124,1)') //yellow
  				ellipse(point.x,point.y,10,10)
	    }
	    else if (mouseX >= 4*screen.width/10  && mouseX <= 4*screen.width/10 +50 &&
       mouseY >=1.5*screen.height/10  && mouseY < 1.5*screen.height/10 +30 && loggerlist[0] =="right" 
	    	&& (loggerlist[1] == "right" || loggerlist[1] == "left"))
	    {
	    	loggerlist = loggerlist.splice(1)

	    	fill('rgba(159,211,95,1)') //green
	    		noStroke()
				ellipse(point.x,point.y,10,10)
				point.x = point.x + screen.width/20
				point.y = point.y + screen.height/10
  				fill('rgba(239,237,124,1)') //yellow
  				ellipse(point.x,point.y,10,10)
	    }
	    else if (mouseX >= 4*screen.width/10 && mouseX <= 4*screen.width/10 && mouseY >=1.5*screen.height/10  && mouseY <1.5*screen.height/10  && loggerlist[0] == "left")
	     {
	       textSize(12)
	       fill(255)
	      text("Are you sure the number is bigger?", 4*screen.width/10,1.25*screen.height/10);
	      noStroke();
	      setTimeout(function() { fill('rgba(159,211,95,1)'), rect(3.25*screen.width/10,1.35*screen.height/10-20,230,20)},3000)
	     }
	     if (loggerlist[0] == "blank")
	     	{loggerlist = loggerlist.splice(1)}
}
   }

   //generates message when binary search tree is solved
function solved()
  {if (actualNodeList.length ==0)
  	{alert("CONGRATS. YOU COMPLETED THE BINARY TREE")
  	actualNodeList.push(101)	}
  
}
//updates number
function currentNumber()
{ 
  fill('rgba(159,211,95,1)')
  noStroke()
  rect(2.2*screen.width/10,screen.height/22,230,30);
  textSize(20)
  fill(0)
  if (actualNodeList[0] != undefined )
  {text("current number: " + actualNodeList[0].value, 3*screen.width/10,screen.height/15)}
	if(actualNodeList[0] ==101)
		{fill('rgba(159,211,95,1)')
		noStroke()
		rect(2.25*screen.width/10,screen.height/15,240,30)}
}

function input()
{	     
	
	while (actualNodeList > 0)
	{
		
		if (loggerlist[0] == "blank")
		{
			countMove++;
			loggerlist = loggerlist.splice(1);
		}
		while(loggerlist[0] == "left" && loggerlist[1] != "blank")
		{
			//when clicked left

		}
		while(loggerlist[0] == "left" && loggerlist[1] == "blank")
		{   //when clicked left

		}
		while(loggerlist[0] == "right" && loggerlist[1] != "blank")
		{
			//when clicked right
		}
		while(loggerlist[0] == "right" && loggerlist[1] == "blank")
		{	//when clicked right
			lineRight(actualNodeList[0]);
        	fill(0)
        	ellipse(actualNodeList[0].x+2,actualNodeList[0].y-15,60,60);
        	fill(255)
        	text(actualNodeList[0].value,actualNodeList[0].x,actualNodeList[0].y);
			actualNodeList = actualNodeList.splice(1)
		}
		loggerlist = loggerlist.splice(1)


	}
}

class pointer
{
	constructor(x = canvasx/2, y = canvasy/4-40)
	{
		this.x = x
		this.y = y
	}
}
