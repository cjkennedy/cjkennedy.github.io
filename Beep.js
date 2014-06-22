var count = 30;
var counter = setInterval(timer, 1000);
var walkCount = 90;
var walkCounter;
var runCount = 60;
var runCounter= setInterval(runTimer,1000);
var totalcount= 1200;
var totalCounter = setInterval(totalTimer,1000);

function timer()
{
    count = count-1;
    if (count <= 0)
    {
        PlaySound("beep");
        count =30;
    }
    document.getElementById("timer").innerHTML=count +" secs";
}

function runTimer()
{
	runCount = runCount-1;
	if(runCount <=1)
	{
		PlaySound("beep1");
		clearInterval(runCounter);
		runCount=60;
		walkCounter = setInterval(walkTimer,1000);
	}
	    document.getElementById("runTimer").innerHTML=runCount +" secs";
}

function walkTimer()
{
	walkCount = walkCount-1;
	if(walkCount <=1)
	{
		PlaySound("beep3");
		clearInterval(walkCounter);
		walkCount=90;
		runCounter = setInterval(runTimer,1000);
	}
	    document.getElementById("walkTimer").innerHTML=walkCount +" secs";
}

function totalTimer()
{
	totalcount = totalcount -1;
	if(totalcount<=599 || totalcount <=1)
	{
		playSound("beep2");
		clearInterval(walkCounter);
		clearInterval(runCounter);
		clearInterval(Counter);
		clearInterval(totalCounter);
	}
	document.getElementbyId("totalTimer").innerHTML = totalCount +" secs";
}





function PlaySound(soundObj)
{
    var sound = document.getElementById(soundObj);
    sound.Play();
}