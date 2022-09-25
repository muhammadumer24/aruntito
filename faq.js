const faq=(number)=>{
let question=document.getElementsByClassName("faq")[number]
question.addEventListener('click', function(){
    let answer=document.getElementsByClassName('faqa')[number]
    answer.classList.toggle('original')
    let circle=document.getElementsByClassName("plus")[number]
    circle.classList.toggle('minus')
})}
let length=document.getElementsByClassName("faq").length
for(let i=0;i<length;i++){
    faq(i)
}