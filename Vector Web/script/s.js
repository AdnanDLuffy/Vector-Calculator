let U = document.querySelector(".U");
const V = document.querySelector(".V");
const alpha = document.querySelector(".alpha");
const degree = document.querySelector(".degree");
const R = document.querySelector(".R");
let a = '';
   let b = '';
   let c = '';

let resultR = '';
let resultAl = '';
let resultU1 = '';
let resultU2 = '';
let ResultV1 = '';
let ResultV2 ='';
let ResultTH = '';
let ResultU ='';
let ResultV = '';

const st = document.querySelector(".u");
const nd = document.querySelector(".v");
const rd = document.querySelector(".Alpha");
const rth = document.querySelector(".Degree");
const th = document.querySelector(".r");


function submit () {
           
let u = U.value;
let v = V.value ;
let Al = alpha.value;
let de = degree.value ;
let r = R.value;

  
first (u,v,Al,de,r);


  

};

function  first(u,v,Al,de,r) {
  

   if (r === '' && u !== '' && v !== '' && Al !== '') {
      let form1 =((u**2)+(v**2)+ (2*u*v* Math.cos(Al*(Math.PI/180)))); 
  resultR = Math.sqrt(form1) ;
  r = resultR ;
  console.log(`r --> ${resultR}`);
   };
  
    if (Al === '' && r !== '' && u !== '' && v !== '' ) {
      let from2 = ((r**2)-((u**2)+(v**2)))/(2*u*v);
       resultAl = (Math.acos(from2)*180)/Math.PI;
       Al = resultAl ;
       console.log(`alpha -->${resultAl}`);
   };
   if (u === ''  && Al !== '' && r !== '' && v !== '' ) {
  
       
        b = (2*Math.cos((Al*Math.PI)/180))*v; 
        c = -((r**2) - (v**2));
  
     if (u === '') {
         a = 1  ; 
     
           
           
        
         if (Math.round(((-b+Math.sqrt((b**2)-4*a*c))/(2*a))) > 0) {
            resultU1 = Math.round(((-b+Math.sqrt((b**2)-4*a*c))/(2*a)));
            u = resultU1 ;
            console.log(`u -- ${resultU1}`);
         }
        else {
         u = resultU2
         resultU2 =  Math.round(((-b-(Math.sqrt((b**2)-4*a*c)))/(2*a))) ;
         console.log(`u -- ${resultU2}`);
        }
  
     }
     else {
        a = u ;
        resultU1= Math.round(((-b+Math.sqrt((b**2)-4*a*c))/(2*a))) ;
        resultU2 = Math.round( ((-b-(Math.sqrt((b**2)-4*a*c)))/(2*a))) ;
        console.log(`results are -- ${resultU1} and ${resultU2}`);
     };
   
  
   }

   if (v === ''  && Al !== '' && r !== '' && u !== '' ) {
  
       
      b = (2*Math.cos((Al*Math.PI)/180))*u; 
      c = -((r**2) - (u**2));

   if (v === '') {
       a = 1  ; 
   
         if ( Math.round(((-b+Math.sqrt((b**2)-4*a*c))/(2*a))) > 0) {
            ResultV1 = Math.round(((-b+Math.sqrt((b**2)-4*a*c))/(2*a))) ;
            console.log(`v results are -- ${ResultV1}`);
            v = ResultV1 ;
         }
         else {
             ResultV2 =  Math.round(((-b-(Math.sqrt((b**2)-4*a*c)))/(2*a))) ;
             console.log(`v  -- ${ResultV2}`);
            v = ResultV2 ;
            }
      
      

   }
   else {
      a = v ;
       ResultV1 = ((-b+Math.sqrt((b**2)-4*a*c))/(2*a)) ;
       ResultV2 =  ((-b-(Math.sqrt((b**2)-4*a*c)))/(2*a)) ;
      console.log(`v results are -- ${ResultV1} and ${ResultV2}`);
   };
 
 };  

 if (de === '' && Al !== '' && v !=='' && u !== '') {
  let VW = Math.sin((Al*Math.PI)/180);
  let VB = v*(Math.cos((Al*Math.PI)/180));
  VW = VW*v;
  let VG = Number(u) + Number(VB)
   let Num = VW/VG
   ResultTH = Math.atan(Num)*180/Math.PI
   de = ResultTH ;
   console.log(`𝛉 -- > ${ResultTH}`);
 }


 if (de !== '' && Al !== '' && v ==='' && u !== '') {
   
 let C1 = u*(Math.tan(de*Math.PI/180));
 let C2 = (Math.tan(de*Math.PI/180))*(Math.cos(Al*Math.PI/180));
 let C3 = Math.sin(Al*Math.PI/180);
 let C4 = C1/(C3-C2);
     ResultV = Math.round(C4) ;
     v = ResultV ;
     console.log(`V -- ${ResultV}`);
  }

  
  
   if (de !== '' && Al !== '' && u ==='' && v !== '') {
   
      let C1 = (Math.tan(de*Math.PI/180));
      
      let C2 = (Math.tan(de*Math.PI/180))*v*(Math.cos(Al*Math.PI/180));
      
      let C3 = v*Math.sin(Al*Math.PI/180);
      
      let C4 = (C3-C2)/C1;
          ResultU = Math.round(C4) ;
          u = ResultU ;
          console.log(`U -- ${ResultU}`);
       }
      

  
   st.innerText = `${u}`;
   nd.innerText = `${v}`;
   rd.innerText = `${Al}`+ `°` ;
   rth.innerText = `${de}`+ `°`;
   th.innerText = `${r}`;
        
};



 
  

