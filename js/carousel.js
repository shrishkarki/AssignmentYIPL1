
// alert("hello world");

const feedback=document.querySelector('.feedback');
const feedbackItems=document.querySelectorAll('.feedback-item');


let currentIndex=0;

const totalItems=feedbackItems.length;

const showItem=(index)=>{
if(index < 0 || index >= totalItems){
    return;
}

const itemWidth=feedbackItems[0].offsetWidth;
feedback.computedStyleMap.transform=`translateX(-${index * itemWidth}px)`;
currentIndex=index;
}

const nextItem=()=>{
    currentIndex++;
    if(currentIndex >= totalItems){
        currentIndex=0;
    }

    showItem(currentIndex);
}

const prevItem=()=>{
    currentIndex--;
    if(currentIndex < 0){
        currentIndex= totalItems -1;
    }

    showItem(currentIndex);
}



document.addEventListener('DOMContentLoaded',()=>{

    const nextButton=document.getElementById('rightBtn');
    console.log(nextButton);

    // if(nextButton){
        nextButton && nextButton.addEventListner('click',nextItem);
    // }


const prevButton=document.getElementById('leftBtn');

// - 


 });
