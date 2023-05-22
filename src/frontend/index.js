import { AnonymousIdentity } from "@dfinity/agent";
import { backend } from "../declarations/backend";
import { getActor, prepareLoginBotton, seedToIdentity } from "./identity";




const main = async () => {
  document.getElementById("keypad").hidden = true;
  screen.innerHTML = "Pls. Log-in";
  prepareLoginBotton(render);
  
};
 
document.addEventListener("DOMContentLoaded", main);


const render = () => {
  const identity = window.identity;
  const output = document.querySelector("#output");
  if (!output) throw new Error("Output element not found");
  if (identity) {
    document.getElementById("keypad").hidden = false;
  screen.innerHTML = 0;
    const text = document.createElement("h3");
    text.innerHTML = "Welcome user with principal: ";
    document.getElementById("welcome").appendChild(text);
    output.innerHTML = identity.getPrincipal().toString();
  } else {
    output.innerHTML = "No available principal";
    
  }
};

//calculation logic
let i = [];
let b = 0;
let dec = 0;
let nk = document.querySelectorAll(".numKey");
let ok = document.querySelectorAll(".optKey");
const screen = document.getElementById("calcScreen");

for(let a of nk) {
  a.addEventListener("click", async function() {
      let x = this.innerHTML;
      a = i.push(x);
      b = i.join('');
      // dec = Math.round(b * 10000000000) / 10000000000;
      let c = i.toString(b);
      let d = parseFloat(c); 
      screen.innerHTML = b;
      // console.log("clicked no. " + x);
      // console.log("array = " + a);
      // console.log("new float val " + c );
  })   
};

  
// window.addEventListener("load", async function () {
//   const counterDefault = await backend.see();
//   screen.innerHTML = counterDefault;
//   console.log(counterDefault);
// })


document.getElementById("add").addEventListener("click", async function() {
  let pf = parseFloat(b);
  const result = await backend.add(pf);
  screen.innerHTML = Math.round(result * 10000000000) / 10000000000;
  console.log("sum is : " + result);
  i = [];
})

document.getElementById("sub").addEventListener("click", async function() {
  let pf = parseFloat(b);
  const result = await backend.sub(pf);
  screen.innerHTML = Math.round(result * 10000000000) / 10000000000;
  i = [];
  console.log("diff is : " + result);
})

document.getElementById("mul").addEventListener("click", async function() {
  let pf = parseFloat(b);
  const result = await backend.mul(pf);
  screen.innerHTML = Math.round(result * 10000000000) / 10000000000;
  console.log(result);
  i = [];
})

document.getElementById("div").addEventListener("click", async function() {
  let pf = parseFloat(b);
  const result = await backend.div(pf);
  if(result == 0) {
    screen.innerHTML = "Indivisble by 0";
    await backend.reset();
  } else {
    screen.innerHTML = Math.round(result * 10000000000) / 10000000000;
  }
  i = [];
  console.log(result);
})

document.getElementById("reset").addEventListener("click", async function() {
  const result = await backend.reset();
  screen.innerHTML = result;
  i = [];
  console.log("counter has been reset to : " + result);
})

document.getElementById("see").addEventListener("click", async function() {
  const result = await backend.see();
  screen.innerHTML = Math.round(result * 10000000000) / 10000000000;
})

document.getElementById("power").addEventListener("click", async function() {
  let pf = parseFloat(b);
  const result = await backend.power(pf);
  screen.innerHTML = result;
})

document.getElementById("sqrt").addEventListener("click", async function() {
 
  const result = await backend.sqrt();
  i = [];
  screen.innerHTML = Math.round(result * 10000000000) / 10000000000;
})

document.getElementById("floor").addEventListener("click", async function() {
  
  const result = await backend.floor();
  i = [];
  screen.innerHTML = result;
})


// prepareLoginBotton(render);
