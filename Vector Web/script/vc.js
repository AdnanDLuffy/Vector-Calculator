const i = document.querySelector(".i");
const j = document.querySelector(".j");
const k = document.querySelector(".k"); 
const a21 = document.querySelector(".A21");
const a22 = document.querySelector(".A22");
const a23 = document.querySelector(".A23");
const a31 = document.querySelector(".A31");
const a32 = document.querySelector(".A32");
const a33 = document.querySelector(".A33");
   
const x = document.querySelector(".x");
const abv  = document.querySelector(".abv");
const dot = document.querySelector(".dot");

function sbmit () {
    let I = (a21.value*a32.value)-(a31.value*a22.value);
    let J = ((a33.value*a21.value)-(a31.value*a23.value));
    let K = (a33.value*a22.value)-(a32.value*a23.value);
    let Abv = Math.sqrt((I**2)+(J**2)+(K**2));
    let result3 = (a21.value*a31.value) + (a22.value * a32.value) + (a23.value * a33.value);  
    if (i.value === '' && j.value === '' && k.value ==='') {
        i.value = "î";
        j.value = "ĵ";
        k.value = "k̂";
        

    }
    else {
        i.value = i.value ;
        j.value = j.value ;
        k.value = k.value ;
    }
    if (J > 0) {
        J = "+" + J;
    }
    else if (J<0) {
        J = "-" + (J*(-1)) ;
    }
    if (K > 0) {
        K = "+" + K;
    }
    else if (J<0) {
        K = "-" + (K*(-1)) ;
    }

    let result = I +i.value + J +j.value + K + k.value;

    x.innerText = result ;
    abv.innerText = Abv.toFixed(9) ;
    dot.innerText = result3 ;
  
    
}