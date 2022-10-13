const btn = document.querySelector(".buttons")
const low = document.querySelector(".low")
const high = document.querySelector(".high")

btn.addEventListener("click",(e)=> {
    if (e.target.classList.contains("palinBtn")) {
      console.log(e.target);
      document.querySelector(".left").innerHTML= `
      ${poli()}
      `
    }
})

const poli = (a,b) =>{
    for(let i =a;i<=b;i++){
        if(i<10){
            return i;
        }
        if(i[0] == i[length-1]){
            return i;
        }
    }
}