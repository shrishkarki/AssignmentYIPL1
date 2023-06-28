let checkbox=document.getElementById("toggle");
let backdrop=document.getElementById("backdrop");


checkbox.addEventListener('click',()=>{
    
    document.body.classList.toggle('overflow-hidden');
    backdrop.classList.toggle('backdrop-display');
    
});
backdrop.addEventListener('click',()=>{
//    console.log("clicked");
    checkbox.checked=false;
    backdrop.classList.toggle('backdrop-display');
    document.body.classList.toggle('overflow-hidden');
   
    
});