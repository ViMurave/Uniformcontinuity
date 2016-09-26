var tdforbutton=document.getElementsByName("2"); // создаем кнопки
var btn=document.createElement('input');
btn.type='button';
btn.value='   Начать cначала   '
btn.onclick=click_begin;
tdforbutton[0].appendChild(btn);

var tdforbutton1=document.getElementsByName("3"); // создаем кнопки
var btn1=document.createElement('input');
btn1.type='button';
btn1.value='   Старт   ';
btn1.onclick=pause;
tdforbutton1[0].appendChild(btn1);
var flag_pause=false;
var counter=0;
function pause(){
	if(a<=25)
	{
		if(counter==0)
		{
			counter=1;
			click_start();
			btn1.value='   Пауза   ';
		}
		else{
			if(flag_pause==false)
			{
				click_pause();
				btn1.value='   Продолжить   ';
			}
			else{
				click_start();
				btn1.value='   Пауза   ';
				
			}
		}
	}
}

var tdforbutton0=document.getElementsByName("0"); // создаем кнопки
var btn0=document.createElement('input');

var plot = new Plotter('plot',{
left: -5,
right: 5,
top: 5,
bottom: -1,
width:1000,
height: 600,
accuracy: 5000,
zoom: false});

var func=plot.addFunc(function(x){
	return x*x;	
},{strokeWidth:1.5})
var flag_pause=false;
var a=-1.6;
var b=-1.75;
var shadedArea1 = draw_area_1(a,b);
var shadedArea2 = draw_area_2(a,b);
var timer;

function draw_area_1(a,b){
	
	return plot.shadedArea(function (x) {
		return x*x;
	}, {
right: a,
left: b,
fill:2,
fillOpacity:0.7,
		
		//strokeWidth: 1.1,
		//color:2,
axe: 'x'
	});
}
function draw_area_2(a,b){
	return plot.shadedArea(function (x) {
		return x*x;
	}, {
right: a,
left: b,
fill:18,
fillOpacity:0.9,
		
		//strokeWidth: 1.1,
		//color:2,
axe: 'y'
	});
}
function click_begin(){
	plot.plot.setTop(5);
	plot.plot.setBottom(-1);
	plot.plot.setRight(5);
	plot.plot.setLeft(-5);
	plot.draw();
	if(!flag_pause)
	{
		if(a>25)
		{
			a=-1.6;
			b=-1.75;
			plot.remove(shadedArea1);
			plot.remove(shadedArea2);
			shadedArea1 = draw_area_1(a,b);
			shadedArea2 = draw_area_2(a,b);
			counter=0;
			btn1.value='   Старт   ';
		}
		else
		{
			a=-1.6;
			b=-1.75;
		}		
	}
	else{
		a=-1.6;
		b=-1.75;	
		plot.remove(shadedArea1);
		plot.remove(shadedArea2);
		shadedArea1 = draw_area_1(a,b);
		shadedArea2 = draw_area_2(a,b);
		counter=0;
		btn1.value='   Старт   ';
		
	}

}

function click_pause(){
	clearInterval(timer);

	flag_pause=true;
}
function click_start() {
	
	flag_pause=false;
	
	
	timer = setInterval(function()
	{
		
		if(a>17)
		{
			clearInterval(timer);
		}
		else
		{
			if(a<=2.236)
			{
				plot.remove(shadedArea1);
				plot.remove(shadedArea2);
				
				a=a+0.0025;
				b=b+0.0025;
				
				shadedArea1 = draw_area_1(a,b);
				shadedArea2 = draw_area_2(a,b);
			}
			else{
				plot.remove(shadedArea1);
				plot.remove(shadedArea2);
				
				/*a=a+0.005;
			b=b+0.005;*/
				a=a+0.02;
				b=b+0.02;
				plot.plot.setTop(a*a+0.1);
				plot.plot.setBottom(a*a+0.1-6);
				if(a>5)
				{plot.plot.setRight(a);
				plot.plot.setLeft(-a);
			}plot.draw();
				shadedArea1 = draw_area_1(a,b);
				shadedArea2 = draw_area_2(a,b);
				
			}
		}	
	}, 1);


}
var customSelect = new eulerface.Select(document.getElementById('secSelect')),
output = document.getElementById('output'),
selectContainer = document.getElementById('secSelect');

customSelect.addOption(document.getElementById('x*x'), 'x*x');
customSelect.addOption(document.getElementById('x'), 'x');
customSelect.addOption(document.getElementById('sin'), 'sin');
customSelect.addOption(document.getElementById('ln'), 'ln');
customSelect.addOption(document.getElementById('1/x'), '1/x');
customSelect.addOption(document.getElementById('sinxx'), 'sinxx');

selectContainer.addEventListener('change', Update);


var count=0;
function Update() {
	clearInterval(timer);
	var state = selectContainer.getAttribute('value');
	switch(state)
	{
	case 'x*x':
		plot = new Plotter('plot',{
left: -5,
right: 5,
top: 5,
bottom: -1,
width:1000,
height: 600,
accuracy: 5000,
zoom: false});
		func=plot.addFunc(function(x){
			return x*x;	
		},{strokeWidth:1.5})
		a=-1.6;
		b=-1.75;
		flag_pause=false;
		shadedArea1 = draw_area_1(a,b);
		shadedArea2 = draw_area_2(a,b);
		btn1.value='   Старт   ';
		counter=0;
		btn.onclick=click_begin;
		btn1.onclick=pause;
		//btn0.onclick=click_begin;
		break;
		
	case 'sinxx':
		plot = new Plotter('plot',{
			//left: 0,
			//right: 25,
left:0,
right:25,
top: 2,
bottom: -2,
width:1000,
height: 600,
accuracy: 5000,
zoom: false});
		func=plot.addFunc(function(x){
			return Math.sin(x*x);	
		},{left:0,right:26,strokeWidth:1.5,accuracy:20000});

		b=0.5;
		a=0.6;
		flag_pause=false;
		btn1.value='   Старт   ';
		counter=0;
		shadedArea1 = draw6_area_1(a,b);
		shadedArea2 = draw6_area_2(a,b);
		
		btn.onclick=click_begin6;
		btn1.onclick=pause6;
		//btn0.onclick=click_begin6;
		break;
		
	case 'x':
		plot = new Plotter('plot',{
left: -10,
right: 10,
top: 6,
bottom: -6,
width:1000,
height: 600,
accuracy: 5000,
zoom: false});
		func=plot.addFunc(function(x){
			return x;	
		},{strokeWidth:1.5})
		b=-6;
		a=-5.8;
		flag_pause=false;
		btn1.value='   Старт   ';
		counter=0;
		shadedArea1 = draw1_area_1(a,b);
		shadedArea2 = draw1_area_2(a,b);
		btn.onclick=click_begin1;
		btn1.onclick=pause1;
		break;
		
	case 'sin':
		plot = new Plotter('plot',{
left: -6,
right: 6,
top: 2,
bottom: -2,
width:1000,
height: 600,
accuracy: 5000,
zoom: false});
		func=plot.addFunc(function(x){
			return Math.sin(x);
		},{strokeWidth:1.5})
		b=-6;
		a=-5.85;
		flag_pause=false;
		btn1.value='   Старт   ';
		counter=0;
		shadedArea1 = draw2_area_1(a,b);
		shadedArea2 = draw2_area_2(a,b);
		btn.onclick=click_begin2;
		btn1.onclick=pause2;
		break;
		

		
	case 'ln':
		plot = new Plotter('plot',{
left: -2,
right: 7,
top: 3,
bottom: -5,
width:1000,
height: 600,
zoom: false});
		func=plot.addFunc(function(x){
			return Math.log(x-0.014);
		},
		{
breaks: [0],
accuracy: 5000,
left:0.014,
strokeWidth:1.3
		})
		b=6.8;
		a=6.9;
		flag_pause=false;
		btn1.value='   Старт   ';
		counter=0;
		shadedArea1 = draw4_area_1(a,b);
		shadedArea2 = draw4_area_2(a,b);
		btn.onclick=click_begin4;
		btn1.onclick=pause4;
		break;
		
	case '1/x':
		plot = new Plotter('plot',{
left: -6,
right: 6,
top: 9,
bottom: -9,
width:1000,
accuracy:5000,
height: 600,
zoom: false});
		func=plot.addFunc(function(x){
			return 1/x;
		},
		{
breaks: [0],
strokeWidth:1.5
		})
		b=-5.92;
		a=-5.8;
		flag_pause=false;
		btn1.value='   Старт   ';
		counter=0;
		shadedArea1 = draw5_area_1(a,b);
		shadedArea2 = draw5_area_2(a,b);
		btn.onclick=click_begin5;
		btn1.onclick=pause5;
		break;
	}
	
}

function draw1_area_1(a,b){
	
	return plot.shadedArea(function (x) {
		return x;
	}, {
right: a,
left: b,
fill:2,
fillOpacity:0.7,
		
		//strokeWidth: 1.1,
		//color:2,
axe: 'x'
	});
}
function draw1_area_2(a,b){
	return plot.shadedArea(function (x) {
		return x;
	}, {
right: a,
left: b,
fill:18,
fillOpacity:0.9,
		
		//strokeWidth: 1.1,
		//color:2,
axe: 'y'
	});
}
function click_start1() {
	
	flag_pause=false;
	
	
	timer = setInterval(function()
	{
		
		if(a>6)
		{
			clearInterval(timer);
		}
		else
		{
			plot.remove(shadedArea1);
			plot.remove(shadedArea2);
			
			a=a+0.005;
			b=b+0.005;
			
			shadedArea1 = draw1_area_1(a,b);
			shadedArea2 = draw1_area_2(a,b);
		}	
	}, 1);


}
function click_begin1(){
	if(!flag_pause)
	{
		if(a>6)
		{
			a=-5.8;
			b=-6;	
			plot.remove(shadedArea1);
			plot.remove(shadedArea2);
			shadedArea1 = draw1_area_1(a,b);
			shadedArea2 = draw1_area_2(a,b);
			counter=0;
			btn1.value='   Старт   ';
		}
		else
		{
			a=-5.8;
			b=-6;	
		}		
	}
	else{
		a=-5.8;
		b=-6;		
		plot.remove(shadedArea1);
		plot.remove(shadedArea2);
		shadedArea1 = draw1_area_1(a,b);
		shadedArea2 = draw1_area_2(a,b);
		counter=0;
		btn1.value='   Старт   ';
	}

}
function pause1(){
	if(a<=6)
	{
		if(counter==0)
		{
			counter=1;
			click_start1();
			btn1.value='   Пауза   ';
		}
		else{
			if(flag_pause==false)
			{
				click_pause();
				btn1.value='   Продолжить   ';
			}
			else{
				click_start1();
				btn1.value='   Пауза   ';
				
			}
		}
	}
}
function draw2_area_1(a,b){
	
	return plot.shadedArea(function (x) {
		return Math.sin(x);
	}, {
right: a,
left: b,
fill:2,
fillOpacity:0.7,
		
		//strokeWidth: 1.1,
		//color:2,
axe: 'x'
	});
}
function draw2_area_2(a,b){
	return plot.shadedArea(function (x) {
		return Math.sin(x);
	}, {
right: a,
left: b,
fill:18,
fillOpacity:0.9,
		
		//strokeWidth: 1.1,
		//color:2,
axe: 'y'
	});
}
function click_start2() {
	
	flag_pause=false;
	
	
	timer = setInterval(function()
	{
		
		if(a>6)
		{
			clearInterval(timer);
		}
		else
		{
			plot.remove(shadedArea1);
			plot.remove(shadedArea2);
			
			a=a+0.005;
			b=b+0.005;
			
			shadedArea1 = draw2_area_1(a,b);
			shadedArea2 = draw2_area_2(a,b);
		}	
	}, 1);


}
function click_begin2(){
	if(!flag_pause)
	{
		if(a>6)
		{
			b=-6;
			a=-5.85;	
			plot.remove(shadedArea1);
			plot.remove(shadedArea2);
			shadedArea1 = draw2_area_1(a,b);
			shadedArea2 = draw2_area_2(a,b);
			counter=0;
			btn1.value='   Старт   ';
		}
		else
		{
			b=-6;
			a=-5.85;
		}		
	}
	else{
		b=-6;
		a=-5.85;	
		plot.remove(shadedArea1);
		plot.remove(shadedArea2);
		shadedArea1 = draw2_area_1(a,b);
		shadedArea2 = draw2_area_2(a,b);
		counter=0;
		btn1.value='   Старт   ';
	}
}
function pause2(){
	if(a<=6)
	{
		if(counter==0)
		{
			counter=1;
			click_start2();
			btn1.value='   Пауза   ';
		}
		else{
			if(flag_pause==false)
			{
				click_pause();
				btn1.value='   Продолжить   ';
			}
			else{
				click_start2();
				btn1.value='   Пауза   ';
				
			}
		}
	}
}
function draw4_area_1(a,b){
	
	return plot.shadedArea(function (x) {
		return Math.log(x-0.014);
	}, {
right: a,
left: b,
fill:2,
fillOpacity:0.7,
		
		//strokeWidth: 1.1,
		//color:2,
axe: 'x'
	});
}
function draw4_area_2(a,b){
	return plot.shadedArea(function (x) {
		return Math.log(x-0.014);
	}, {
right: a,
left: b,
fill:18,
fillOpacity:0.9,
		
		//strokeWidth: 1.1,
		//color:2,
axe: 'y'
	});
}
function click_start4() {
	
	flag_pause=false;
	
	
	timer = setInterval(function()
	{
		
		if(b<0.0145)
		{
			clearInterval(timer);
		}
		else
		{
			if(b>=0.5)
			{
				plot.remove(shadedArea1);
				plot.remove(shadedArea2);
				
				a=a-0.005;
				b=b-0.005;
				
				shadedArea1 = draw4_area_1(a,b);
				shadedArea2 = draw4_area_2(a,b);
			}
			else{
				plot.remove(shadedArea1);
				plot.remove(shadedArea2);
				
				a=a-0.001;
				b=b-0.001;
				
				shadedArea1 = draw4_area_1(a,b);
				shadedArea2 = draw4_area_2(a,b);
			}
		}	
	}, 1);


}
function click_begin4(){
	if(!flag_pause)
	{
		if(b<0.0145)
		{
			b=6.8;
			a=7;	
			plot.remove(shadedArea1);
			plot.remove(shadedArea2);
			shadedArea1 = draw4_area_1(a,b);
			shadedArea2 = draw4_area_2(a,b);
			counter=0;
			btn1.value='   Старт   ';
		}
		else
		{
			b=6.8;
			a=7;
		}		
	}
	else{
		b=6.8;
		a=7;	
		plot.remove(shadedArea1);
		plot.remove(shadedArea2);
		shadedArea1 = draw4_area_1(a,b);
		shadedArea2 = draw4_area_2(a,b);
		counter=0;
		btn1.value='   Старт   ';
	}
}
function pause4(){
	if(b>=0.0145)
	{
		if(counter==0)
		{
			counter=1;
			click_start4();
			btn1.value='   Пауза   ';
		}
		else{
			if(flag_pause==false)
			{
				click_pause();
				btn1.value='   Продолжить   ';
			}
			else{
				click_start4();
				btn1.value='   Пауза   ';
				
			}
		}
	}
}
function draw5_area_1(a,b){
	
	return plot.shadedArea(function (x) {
		return 1/x;
	}, {
right: a,
left: b,
fill:2,
fillOpacity:0.7,
		
		//strokeWidth: 1.1,
		//color:2,
axe: 'x'
	});
}
function draw5_area_2(a,b){
	return plot.shadedArea(function (x) {
		return 1/x;
	}, {
right: a,
left: b,
fill:18,
fillOpacity:0.9,
		
		//strokeWidth: 1.1,
		//color:2,
axe: 'y'
	});
}
function click_start5() {
	
	flag_pause=false;
	
	var flag_stop=false;
	timer = setInterval(function()
	{
		
		if(a>6)
		{
			clearInterval(timer);
		}
		else
		{
			if(a<=-1.495)
			{
				plot.remove(shadedArea1);
				plot.remove(shadedArea2);
				
				a=a+0.005;
				b=b+0.005;
				
				shadedArea1 = draw5_area_1(a,b);
				shadedArea2 = draw5_area_2(a,b);
			}
			if(a>=-1.5&&a<0)
			{
				
				plot.remove(shadedArea1);
				plot.remove(shadedArea2);
				
				a=a+0.002;
				b=b+0.002;
				
				shadedArea1 = draw5_area_1(a,b);
				shadedArea2 = draw5_area_2(a,b);
				if(a>-0.005)
				{
					click_pause();
					btn1.value='   Продолжить   ';
					a=0.201;
					b=0.001;
					
				}

			}
			if(a>0&&flag_pause==false&&a<1.5)
			{
				plot.remove(shadedArea1);
				plot.remove(shadedArea2);
				
				a=a+0.002;
				b=b+0.002;
				
				shadedArea1 = draw5_area_1(a,b);
				shadedArea2 = draw5_area_2(a,b);
			}
			if(a>1.5)
			{
				plot.remove(shadedArea1);
				plot.remove(shadedArea2);
				
				a=a+0.005;
				b=b+0.005;
				
				shadedArea1 = draw5_area_1(a,b);
				shadedArea2 = draw5_area_2(a,b);
			}


			
			
		}	
	}, 1);


}
function click_begin5(){
	if(!flag_pause)
	{
		if(a>6)
		{
			b=-6;
			a=-5.8;
			plot.remove(shadedArea1);
			plot.remove(shadedArea2);
			shadedArea1 = draw5_area_1(a,b);
			shadedArea2 = draw5_area_2(a,b);
			counter=0;
			btn1.value='   Старт   ';
		}
		else
		{
			b=-6;
			a=-5.8;
		}		
	}
	else{
		b=-6;
		a=-5.8;	
		plot.remove(shadedArea1);
		plot.remove(shadedArea2);
		shadedArea1 = draw5_area_1(a,b);
		shadedArea2 = draw5_area_2(a,b);
		counter=0;
		btn1.value='   Старт   ';
	}
}
function pause5(){
	if(a<=6)
	{
		if(counter==0)
		{
			counter=1;
			click_start5();
			btn1.value='   Пауза   ';
		}
		else{
			if(flag_pause==false)
			{
				click_pause();
				btn1.value='   Продолжить   ';
			}
			else{
				click_start5();
				btn1.value='   Пауза   ';
				
			}
		}
	}
}
function draw6_area_1(a,b){
	
	return plot.shadedArea(function (x) {
		return Math.sin(x*x);
	}, {
right: a,
left: b,
fill:2,
fillOpacity:0.7,
		
		//strokeWidth: 1.1,
		//color:2,
axe: 'x'
	});
}
function draw6_area_2(a,b){
	return plot.shadedArea(function (x) {
		return Math.sin(x*x);
	}, {
right: a,
left: b,
fill:18,
fillOpacity:0.9,
		
		//strokeWidth: 1.1,
		//color:2,
axe: 'y'
	});
}


function click_start6() {
	
	flag_pause=false;
	timer = setInterval(function()
	{
		
		if(a>24.8)
		{
			clearInterval(timer);
		}
		else
		{
			plot.remove(shadedArea1);
			plot.remove(shadedArea2);
			
			a=a+0.005;
			b=b+0.005;
			
			shadedArea1 = draw6_area_1(a,b);
			shadedArea2 = draw6_area_2(a,b);
		}	
	}, 1);
	


}
function click_begin6(){
	if(!flag_pause)
	{
		if(a>=24.8)
		{
			b=0.5;
		a=0.6;
			plot.remove(shadedArea1);
			plot.remove(shadedArea2);
			shadedArea1 = draw6_area_1(a,b);
			shadedArea2 = draw6_area_2(a,b);
			counter=0;
			count=0;
			btn1.value='   Старт   ';
		}
		else
		{
			b=0.5;
		a=0.6;
			count=0;
		}		
	}
	else{
		b=0.5;
		a=0.6;
		plot.remove(shadedArea1);
		plot.remove(shadedArea2);
		shadedArea1 = draw6_area_1(a,b);
		shadedArea2 = draw6_area_2(a,b);
		counter=0;
		count=0;
		btn1.value='   Старт   ';
	}
}
function pause6(){
	if(a<=24.8)
	{
		if(counter==0)
		{
			counter=1;
			click_start6();
			btn1.value='   Пауза   ';
		}
		else{
			if(flag_pause==false)
			{
				click_pause();
				btn1.value='   Продолжить   ';
			}
			else{
				click_start6();
				btn1.value='   Пауза   ';
				
			}
		}
	}
}