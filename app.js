audio = new Audio('clockaudio.mp3');

// x=45;

setInterval(() => {
    audio.play();
    // image=document.querySelector(".image");
    // image.style.transform=`rotate(${x}deg)`;
    // x=x+45;
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    date=document.querySelector(".date");
    date.innerText=`${htime}:${mtime}:${stime}`;

    body=document.querySelector("body");

    greeting=document.querySelector(".greet");

    if(htime>3&&htime<12)
    {
        greeting.innerText="Good Morning";
        body.style.color="Orange";
        

    }
    else if(htime>=12&&htime<17)
    {
        greeting.innerText="Good Afternoon";
        body.style.color="Orange";
    }
    else if(htime>=17&&htime<22)
    {
        greeting.innerText="Good Evening";
        body.style.color="Orange";
    }
    else
    {
        greeting.innerText="Good Night";
        body.style.color="Orange";
    }
    

    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime+(stime/10);
    srotation = 6*stime;

    hour=document.querySelector("#hour");
    minute=document.querySelector("#minute");
    second=document.querySelector("#second");

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = "rotate("+srotation+"deg)";
}, 1000);