let menu=document.getElementsByClassName("product")[0]
menu.addEventListener('click', function(){
    let dropDown=document.getElementsByClassName("product-items")[0]
    dropDown.classList.toggle("display-none")
})

let mediaMenuProduct=document.getElementsByClassName("product")[1]
mediaMenuProduct.addEventListener('click', function(){
    let dropDown=document.getElementsByClassName("product-items")[1]
    dropDown.classList.toggle("display-none")
})

let mediaHeaderMenu=document.getElementsByClassName("fa-bars")[0]
mediaHeaderMenu.addEventListener('click', function(){
    let dropDown=document.getElementsByClassName("media-header-dropdown")[0]
    dropDown.classList.toggle("display-none")
    setTimeout(function(){
        document.getElementsByClassName("product-items")[1].classList.toggle("actually-none")  
    }, 300);
})