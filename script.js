const number = document.querySelector('.count');
// const add = document.querySelector('.add');
// const resetCount = document.querySelector('.reset');
// const sub = document.querySelector('.subtract');

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) =>{
    // event delegation
    if(e.target.classList.contains('add')){
        // console.log('adding');
        number.innerHTML++;
        setColor();
    }
    if(e.target.classList.contains('subtract')){
        // console.log('subtract');
        number.innerHTML--;
        setColor();
    }
    if(e.target.classList.contains('reset')){
        // console.log('reset');
        number.innerHTML = 0;
        setColor();
    }
});

function setColor(){
    if(number.innerHTML > 0){
        number.style.color = 'yellow';
    }else if(number.innerHTML < 0){
        number.style.color = 'orangered';
    }else{
        number.style.color = 'white';
    }
}


// add.addEventListener('click', () =>{
//     number.innerHTML++;
// });

// sub.addEventListener('click', () =>{
//     number.innerHTML--;
// });

// resetCount.addEventListener('click', () =>{
//     number.innerHTML = 0;
// });