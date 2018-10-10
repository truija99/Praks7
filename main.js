// DOM Elements
let kgInput = document.getElementById('kgInput');
let gramOutput = document.getElementById('gramOutput');
let poundOutput = document.getElementById('poundOutput')
let ozOutput = document.getElementById('ozOutput')


 // Listening to events
kgInput.addEventListener('input', event => {
    let kg = event.target.value;
     gramOutput.innerHTML = `${kg * 1000} g`;
     poundOutput.innerHTML = `${kg * 2.20462262} lb`;
     ozOutput.innerHTML = `${kg * 35.2739619} oz`;
}); 

