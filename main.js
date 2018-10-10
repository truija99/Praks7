// DOM Elements
let kgInput = document.getElementById('kgInput');
let gramOutput = document.getElementById('gramOutput');
let poundOutput = document.getElementById('poundOutput');
let ozOutput = document.getElementById('ozOutput');
let output = document.getElementById('output');
let nightToggle = document.getElementById('nightToggle');
let body = document.querySelector('body');

output.style.visibility = 'hidden';

// Listening to events
kgInput.addEventListener('input', event => {
    let kg = event.target.value;
    
    output.style.visibility = (kg === '0') ? 'hidden' : 'visible';
    
    gramOutput.innerHTML = `${kg * 1000} g`;
    poundOutput.innerHTML = `${(kg * 2.20462262).toFixed(2)} lb`
    ozOutput.innerHTML = `${(kg * 35.2739619).toFixed(2)} oz`
});

nightToggle.addEventListener('click', event => {
    body.classList.toggle('bg');
})