let checkbox=document.getElementById("toggle");
let backdrop=document.getElementById("backdrop");
const hamIcons=document.querySelectorAll('.ham-icon');



const toggleWithTransition=()=>{
    document.body.classList.toggle('overflow-hidden');
    backdrop.classList.toggle('backdrop-display');

    // for x icon

    if(checkbox.checked){
        hamIcons[0].style.transform="translateY(4.5px) rotate(45deg)";
        hamIcons[1].style.transform="scale(0)";
      
        hamIcons[2].style.transform="translateY(-15px) rotate(-45deg)";
    }
    else{
        hamIcons.forEach((item,index)=>{
            item.style.transform="";
        })
    }
    
}

checkbox.addEventListener('click',toggleWithTransition);

backdrop.addEventListener('click',()=>{

    checkbox.checked=false;
   toggleWithTransition();
   
    
});