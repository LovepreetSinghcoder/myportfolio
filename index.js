console.log("i am ready.")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.ham').addEventListener("click", ()=>{
document.querySelector('.nav').classList.toggle('navGo')
if(document.querySelector('.nav').classList.contains('navGo')){
    document.querySelector('.ham').style.display = 'inline'
    document.querySelector('.cross').style.display = 'none'
    // document.querySelector('.nav').style.position = 'fixed'


}
else{
    
    document.querySelector('.ham').style.display = 'none'
    
    document.querySelector('.cross').style.display = 'inline'
}

})
document.querySelector('.cross').addEventListener("click", ()=>{
    document.querySelector('.nav').classList.toggle('navGo')
    if(document.querySelector('.nav').classList.contains('navGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    
    }
    else{
        
        document.querySelector('.ham').style.display = 'none'
        
        document.querySelector('.cross').style.display = 'inline'
    }
    
    })
    
