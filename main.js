const shareIcon = document.querySelector('.share-icon')
const hiddenDiv = document.querySelector('.hidden')



shareIcon.addEventListener('click',()=>{
  hiddenDiv.classList.toggle('is-active')
  console.log(hiddenDiv)
  console.log(shareIcon)
})