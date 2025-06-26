const genBtn = document.getElementById('btn');
const pass = document.getElementById('pass');
const range = document.getElementById('range');
const rangeVal = document.getElementById('rangeVal');
const upperCase = document.getElementById('upperCase');
const lowerCase = document.getElementById('lowerCase');
const numbers = document.getElementById('numbers');
const symbol = document.getElementById('symbol');
const copyBtn = document.getElementById('cpyBtn');

rangeVal.innerText = range.value;

range.addEventListener('input', () => {
    rangeVal.innerText = range.value;
})

genBtn.addEventListener('click', () => {
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let num = '0123456789';
    let sym = '@#$';
    let finalStr = '';
    let genPass = '';
    if (upperCase.checked) {
        finalStr += upper;
    }
    if (lowerCase.checked) {
        finalStr += lower;
    }
    if (numbers.checked) {
        finalStr += num;
    }
    if (symbol.checked) {
        finalStr += sym;
    }
    if (finalStr === '') {
        pass.innerText = 'Please select at least one option'
        return
    }
    for (let i = 0; i < range.value; i++) {
        let rnum = Math.floor(Math.random() * finalStr.length);
        genPass += finalStr[rnum];
    }
    pass.innerText = genPass;
})

copyBtn.addEventListener('click',()=>{
    window.navigator.clipboard.writeText(pass.innerText);
})