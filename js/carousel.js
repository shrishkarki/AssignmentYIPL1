const feedback=document.querySelector('.feedback');
const feedbackItems=document.querySelectorAll('.feedback-item');
const prevButton=document.getElementById('leftBtn');
const nextButton=document.getElementById('rightBtn');
const dots=document.querySelectorAll('.carousel-buttons-dots');

console.log(dots,feedbackItems);




// let itemWidth=feedbackItems[0].offsetWidth;
// console.log(itemWidth);
feedbackItems.forEach((element,index) => {
    element.style.transform=`translateX(${index * 100}vw )`;
});





let currentIndex=0;

const totalItems=feedbackItems.length;






const showItem=(index)=>{

console.log(index);
if(index < 0 || index >= totalItems){
    return;
}


// console.log(itemWidth,"hello world");

// feedbackItems.forEach((element,index) => {
//     element.style.transform=`translateX(-${index * itemWidth}px )`;
// });

// feedbackItems[index].style.transform=`translateX(-${index * itemWidth}px )`;
// let itemWidth=feedbackItems[0].offsetWidth;
// feedback.style.transform=`translateX(-${index * itemWidth}px )`;

feedback.style.transform=`translateX(-${index * 100}vw )`;

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



dots.forEach((item,index)=>{
    console.log("clickkkk me");
    item.addEventListener('click',showItem(index));
})

    

    prevButton.addEventListener('click',prevItem);
    nextButton.addEventListener('click',nextItem);

 




 



