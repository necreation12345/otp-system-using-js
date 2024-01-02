var getotp=document.getElementById("getotp");
var textar=document.getElementById("num");
var press=0;
var otp='';
var count=5;
getotp.addEventListener("click",otpsend);

function otpsend(){
    if(press===0)
    {
        for(i=0;i<4;i++)
        {
            otp+=Math.floor(Math.random()*10);
        }
            alert("Your Otp is   :"+otp);
            press=1;
            textar.value="ENTER OTP";
            getotp.value="Verify OTP";
    }
    else if(press===1){
        if(otp==textar.value)
        {
         alert("logined Succesfully");
         textar.style.color="green";
         window.open("https://www.jiocinema.com/");
         press=0;
         otp='';
        }
        else{
            if(count>0)
            {
            textar.style.color="red";
            alert("WRONG OTP , ATTEMPT LEFT("+count+")");
            count-=1;
            }
            else{
                alert("ATTEMPT COMPLEATED , TRY AFTER 24 HR");
                window.open(mian.html);
            }
        }
        }
}