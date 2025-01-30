const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(evn){
        console.log(evn);
        console.log(evn.target)
        if (evn.target.id==='grey') {
            body.style.backgroundColor=evn.target.id
        }
        if (evn.target.id==='white') {
            body.style.backgroundColor=evn.target.id
        }
        if (evn.target.id==='blue') {
            body.style.backgroundColor=evn.target.id
        }
        if (evn.target.id==='purple') {
            body.style.backgroundColor=evn.target.id
        }
    });
});
