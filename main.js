//console.log("hello world")
function gettime(){
    let hrs=document.querySelector(".hrs").value
    let mins=document.querySelector(".mins").value
    let secs=document.querySelector(".secs").value 
    // console.log(hrs);
    // console.log(mins);
    // console.log(secs);
    document.querySelector(".hrs").value="00";
    document.querySelector(".mins").value="00";
    document.querySelector(".secs").value="00";
    document.querySelector(".hours").innerHTML=`${hrs}`;
    document.querySelector(".minutes").innerHTML=`${mins}`;
    document.querySelector(".seconds").innerHTML=`${secs}`;
    startcountdown(hrs,mins,secs);
}


function startcountdown(hrs,mins,secs){
    const interval= setInterval(function countdown(){
        // console.log(hrs);
        // console.log(mins);
        // console.log(secs);
        if(secs>0){
            secs=secs-1;
            document.querySelector(".seconds").innerHTML=`${secs}`;
        }
        else if(secs==0 && mins>0){
            secs=59;
            mins=mins-1;
            document.querySelector(".seconds").innerHTML=`${secs}`;
            document.querySelector(".minutes").innerHTML=`${mins}`;
        }
        else if(secs==0 && mins==0 && hrs>0){
            hrs=hrs-1;
            mins=59;
            secs=59;
            document.querySelector(".seconds").innerHTML=`${secs}`;
            document.querySelector(".minutes").innerHTML=`${mins}`;
            document.querySelector(".hours").innerHTML=`${hrs}`;
        }
        else{
            document.querySelector(".print").innerHTML=`${"Your countdown is over"}`;
            clearInterval(interval);
            
    
        }
    
    },1000);
}
