const feedback=document.querySelector('.feedback');
const feedbackItems=document.querySelectorAll('.feedback-item');
const prevButton=document.getElementById('leftBtn');
const nextButton=document.getElementById('rightBtn');
const dots=document.querySelectorAll('.carousel-buttons-dots');



let currentIndex=0;
const totalItems=feedbackItems.length;

feedbackItems.forEach((element,index) => {
    element.style.transform=`translateX(${index * 100}vw )`;
});


const showItem=(index)=>{
    console.log(feedback);
    feedback.style.transform=`translateX(-${index * 100}vw)`;
    currentIndex=index;
   

    dots.forEach((item,inx)=>{
        if(inx===currentIndex){
            item.style.opacity="100%";
        }
        else{
            item.style.opacity="50%";
        }
    })
 
    
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


dots.forEach((item,index)=>{

   

    dots[currentIndex].style.opacity="100%";
    
   
    item.addEventListener('click',()=>showItem(index));
})





prevButton.addEventListener('click',prevItem);
nextButton.addEventListener('click',nextItem);