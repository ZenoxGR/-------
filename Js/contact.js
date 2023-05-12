const btn = document.querySelector('#but');


const link1 = document.querySelector('#soc1');
const link2 = document.querySelector('#soc2');
const link3 = document.querySelector('#soc3');


link1.addEventListener('click', transfer1);
link2.addEventListener('click', transfer2);
link3.addEventListener('click', transfer3);


function transfer1(){
    window.open('https://vk.com/popchanski')
}
function transfer2(){
    window.open('https://www.instagram.com/zenoxgr')
}
function transfer3(){
    window.open('https://web.telegram.org/k/')
}