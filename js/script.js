'use strict'

//Cuando mouseover en .Charlie-li
//a Charlie-Img se le remove la class isActive
//y se le ad++ la class isActive a Charlie-li con el mismo index

const charlieLi=document.querySelectorAll(`.Charlie-li`)
const charlieImg=document.querySelectorAll(`.Charlie-img`)

console.log(charlieLi)
console.log(charlieImg)

let fotoIndex=0


charlieLi.forEach((forEachLi , index)=>{
    charlieLi[index].addEventListener(`mouseover`, ()=>{

        fotoIndex=index
         
        charlieLi.forEach((eachLi , index )=>{
            charlieLi[index].classList.remove(`isActive`)
        })
        charlieImg.forEach((eachImg , index )=>{
            charlieImg[index].classList.remove(`isActive`)
        })
        charlieLi[fotoIndex].classList.add(`isActive`)
        charlieImg[fotoIndex].classList.add(`isActive`)
    })
})

charlieLi.forEach((forEachLi , index)=>{
    charlieLi[index].addEventListener(`mouseout`, ()=>{

        charlieLi.forEach((eachLi , index )=>{
            charlieLi[index].classList.add(`isActive`)
        })
        charlieImg.forEach((eachImg , index )=>{
            charlieImg[index].classList.remove(`isActive`)
        })
        // charlieLi[fotoIndex].classList.add(`charlie-li`)
        // charlieImg[fotoIndex].classList.add(`isActive`)
    })



})
