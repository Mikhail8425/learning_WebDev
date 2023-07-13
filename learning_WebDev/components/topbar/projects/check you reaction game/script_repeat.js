var timeCreated; var timeClicked; var timeReaction;

function getRandomColor() {
    var letters = '0123456789ABCDEF' 
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}    

function makeBox() {
    
    var time; var top; var left; var radius;

    time=Math.random();
    time=time*5000;
    
    setTimeout(function() {
        //color
        document.getElementById("redBox").style.backgroundColor=getRandomColor();
        //shape
        if (Math.random()>0.5) {
            document.getElementById("redBox").style.borderRadius="100px";
        } else {
            document.getElementById("redBox").style.borderRadius="0";
        }                    
        //to move around randomnly
        top=Math.random();
        top=top*300
        
        left=Math.random();
        left=left*300
        
        document.getElementById("redBox").style.left=left+"px"
        document.getElementById("redBox").style.top=top+"px"
        //do display on click
        document.getElementById("redBox").style.display="block"; 
        //to register time
        timeCreated=Date.now();
    }, time);
}

document.getElementById("redBox").onclick=function() {
    this.style.display="none"; 
    timeClicked=Date.now();
    timeReaction=(timeClicked-timeCreated)/1000;
    document.getElementById("time").innerHTML=timeReaction;
    makeBox();
}

makeBox();