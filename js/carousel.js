const feedback=document.querySelector('.feedback');
const feedbackItems=document.querySelectorAll('.feedback-item');
const prevButton=document.getElementById('leftBtn');
const nextButton=document.getElementById('rightBtn');




let currentIndex=0;

const totalItems=feedbackItems.length;

const showItem=(index)=>{
if(index < 0 || index >= totalItems){
    return;
}

const itemWidth=feedbackItems[0].offsetWidth;
feedback.style.transform=`translateX(-${index * itemWidth}px)`;
currentIndex=index;
}

const nextItem=()=>{
    console.log("clicked");
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

    

    prevButton.addEventListener('click',prevItem);
    nextButton.addEventListener('click',nextItem);

 




 



