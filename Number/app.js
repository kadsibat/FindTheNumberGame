let attemps =document.getElementById(`attemps`);
let random =Math.floor(Math.random()*100+1);
let liste =[1,100];
let sayac=1;
let mySpan =document.getElementById("try");
let btn =document.getElementById("button_");

btn.addEventListener("click",()=>{

let tahmin = document.getElementById(`input`).value;

if(tahmin==random){
    alert("TEBRİKLER!!! DOĞRU TAHMİN ETTİNİZ "
    + sayac + " SAYAC");
}
else if(tahmin >random){
    sayac++;
    alert("ÜZGÜNÜM BİLEMEDİNİZ!! DAHA KÜÇÜK BİR NUMARA DENEYİN");

}
 else{
    sayac++;
    alert("ÜZGÜNÜM BİLEMEDİNİZ!! DAHA BÜYÜK BİR NUMARA DENEYİN");

 }
 mySpan.innerHTML =sayac;
 
})

 