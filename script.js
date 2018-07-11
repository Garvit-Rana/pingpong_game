var box=document.querySelector('#two');



document.addEventListener('keypress',function(){
	var x=box.getBoundingClientRect().x;
	var y=box.getBoundingClientRect().y;
console.log(event.key);
if (event.key=='w'&&(y)>0)
{
	y-=20;
box.style.top=y+'px';
}
if (event.key=='s'&&(y+box.getBoundingClientRect().height)<window.innerHeight)
{
	y+=20;
	box.style.top=y+'px';
}
});
var box2=document.querySelector('#one');
 var q=0;
 document.addEventListener('keypress',function(){
 	var x1=box2.getBoundingClientRect().x;
 	var y1=box2.getBoundingClientRect().y;
 console.log(event.key);
 if (event.key=='p'&&(y1)>0)
 {
 	y1-=20;
 box2.style.top=y1+'px';
 }
 if (event.key=='l'&&(y1+box2.getBoundingClientRect().height)<window.innerHeight)
 {
 	y1+=20;
 	box2.style.top=y1+'px';
 }
 });



/*	y=box2.getBoundingClientRect().y ;
if (q<18){  y+=20; box2.style.top= y+'px';   }   
  else if (q<36)  {
   y-=20; box2.style.top= y+'px';
    }
     else q=-1; q+=1; */   
       
var box3=document.querySelector('#three');
var s=box3.getBoundingClientRect().width;
var w2=box3.getBoundingClientRect().height;
var movex=1;var g=0;
var movey=1;
var d=0;
var t=0;
var newx;var newy;
var n=0;
function random(u,l){
	return  (Math.floor((Math.random()*(u-l))+l));

}
var f=setInterval(function(){
n=0;
console.log(g);	
	var w=box3.getBoundingClientRect().y;
		var w3=box3.getBoundingClientRect().x;

if (d==0)
{
	w+=movey;w3+=movex;
	box3.style.top=w+'px';
	box3.style.left=w3+'px';
d++;
t++;
}
else if (w== window.innerHeight){

if (d%2!=0){console.log(random(0,w));
movey=-1;movex=1;}
else
{movey=-1;movex=-1;}
	w+=movey;w3+=movex;
	box3.style.top=w+'px';
	box3.style.left=w3+'px';

t++;
d++;
}
else if(w==0)
{ 
	if (d==6)
	{
		movex=1;movey=1;
	}
else if (d%2==0)
{
	movex=-1;movey=1;}
else{ movex=1;movey=1;}

	w+=movey;w3+=movex;
		box3.style.top=w+'px';
		box3.style.left=w3+'px';


d++;
if (g==0)
t++;
else {g=0;movex=1;movey=1;}

}
else if ((w>=box2.getBoundingClientRect().y && w<=box2.getBoundingClientRect().y+box2.getBoundingClientRect().height)&&w3==box2.getBoundingClientRect().width){
	if (d%2==0)
	{movey=1;movex=1;}
else{
	movey=-1;movex=1;
}

w+=movey;w3+=movex;
		box3.style.top=w+'px';
		box3.style.left=w3+'px';
	

t=1;g=1;
d++;
}
else if((w>=box.getBoundingClientRect().y && w<=box.getBoundingClientRect().y+box.getBoundingClientRect().height)&& w3==(window.innerWidth-box.getBoundingClientRect().width)){
	
if (d%2==0){
movex=-1;movey=-1;}
else{
	movey=1;movex=-1;
}
w+=movey;w3+=movex;
	box3.style.top=w+'px';
	box3.style.left=w3+'px';

n=1;	
d++;
t++;
}
else{

	if (n==1)
	{
movey=-1;
		w+=movey;w3+=movex;
			box3.style.top=w+'px';
			box3.style.left=w3+'px';
	}

else if (t==1&&w<window.innerHeight)
{
	w+=movey;w3+=movex;
		box3.style.top=w+'px';
		box3.style.left=w3+'px';
}
else if (t==2)

{

	movey=-1;
	w+=movey;w3+=movex;
		box3.style.top=w+'px';
		box3.style.left=w3+'px';
}
else if (t==3&&w>0){movex=-1;movey=-1;
	w+=movey;w3+=movex;
		box3.style.top=w+'px';
		box3.style.left=w3+'px';
}
else{

	movex=-1;
	w+=movey;w3+=movex;
		box3.style.top=w+'px';
		box3.style.left=w3+'px';
}

}
 if(w3>window.innerWidth)
{
	clearInterval(f);
	alert('YOU LOST THE MATCH');
}
},0);





