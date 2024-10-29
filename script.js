let s1=document.getElementById("sh1")
    s1.addEventListener("mouseenter",function(){
        let p= Math.floor(Math.random()*1000);
        s1.innerHTML=`<h1>${p}<h1>`;
    })
    

s1.addEventListener("mouseleave",function(){
    s1.innerHTML="<h1>1</h1>";
})
let s2=document.getElementById("sh2");
let clr="red"
s2.addEventListener("mouseenter",function(){
    if(clr=="red"){
    s2.style.backgroundColor="red";
        clr="green";
}
    else if(clr=="green"){
        s2.style.backgroundColor="green";
        clr="blue";
    }
    else{
        s2.style.backgroundColor="blue";
        clr="red";
    }
})
s2.addEventListener("mouseleave",function(){
    s2.style.color="white";
    s2.style.backgroundColor="";
})

let s3= document.getElementById("sh3");
s3.addEventListener("mouseenter",function(){
    let c1=Math.floor(Math.random()*256);
    let c2=Math.floor(Math.random()*256);
    let c3=Math.floor(Math.random()*256);
    s3.style.backgroundColor=`rgb(${c1},${c2},${c3})`
})
s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor="";
})



let s4= document.getElementById("sh4");
s4.addEventListener("click",function(){
    let r1=Math.floor(Math.random()*256);
    let r2=Math.floor(Math.random()*256);
    let r3=Math.floor(Math.random()*256);

    s1.style.backgroundColor=`rgb(${r1},${r2},${r3})`
    s2.style.backgroundColor=`rgb(${r3},${r1},${r2})`
    s3.style.backgroundColor=`rgb(${r2},${r3},${r1})`
})

s4.addEventListener("mouseleave",function(){

   s1.style.backgroundColor="";
    s2.style.backgroundColor="";  //white
   s3.style.backgroundColor="";
}) 
