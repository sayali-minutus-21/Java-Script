# projects related to DOM

##project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


#solution code

## Project 1 -Colour Switcher

```javascript
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

```

## Project 2 -BMI generator

```javascript
const form=document.querySelector('form')

//its giving null value
//const weight=parseInt(document.querySelector('#weight').value)

form.addEventListener('submit',function(e){
    e.preventDefault()
   const height= parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=parseInt(document.querySelector('#result'))

    if (height===''||height<0 || isNaN(height)) {
        result.innerHTML=`Please give a valid height ${height}`
    }
    else if(weight===''||weight<0 || isNaN(weight)) {
        result.innerHTML=`Please give a valid weight ${weight}`
    }
    else{
        const bmi=(weight/(height*height)/10000).toFixed(2);
        //show the result
        result.innerHTML=`<span>${bmi}</span>`
    }
});

```