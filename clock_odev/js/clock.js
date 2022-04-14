let myName = prompt("Adınız Nedir? ")
let adAlani = document.querySelector("span#myName")


adAlani.innerHTML = myName;

function showTime(){
    const daysinWeek=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]//js de hafta pazardan başlar
    let time =new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let day = daysinWeek[time.getDay()];
    time = `${hour}:${min}:${sec} ${day}`;
    document.getElementById("myClock").innerHTML=time
}
setInterval(showTime,1000);

