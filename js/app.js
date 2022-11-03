'use strict'
console.log("asd");

let faq_btn = document.querySelectorAll('.faq_btn');
let faq_li = document.querySelectorAll('.faq_li');

faq_btn.forEach( ( v, i )=>{
    faq_btn[i].addEventListener('click', ()=>{
        
       //faq_li[i].classList.add('activo')
       
       
        if( faq_li[i].classList.contains('activo') ){
            faq_li[i].classList.remove('activo')
        }else{
            faq_li.forEach( (v, i) =>{ faq_li[i].classList.remove('activo') })
            faq_li[i].classList.add('activo')
        }   

})

})
