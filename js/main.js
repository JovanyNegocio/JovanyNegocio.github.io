const btnHire = document.querySelector('.hero-btn')
const modal = document.querySelector('.modal')
const contentModal = document.querySelector('.content-modal')
const closeModal = document.querySelector('.close-modal')

console.log(contentModal)

btnHire.addEventListener('click', () => {
    //console.log('click')
    modal.classList.add('show-modal')
    contentModal.classList.add('show-modal')
    //console.log(contentModal.getAttribute('class'))
    //contentModal.style.display = 'block'

})

closeModal.addEventListener('click', () =>{
    modal.classList.remove('show-modal')
    contentModal.classList.remove('show-modal')
})

modal.addEventListener('click', () =>{
    modal.classList.remove('show-modal')
    contentModal.classList.remove('show-modal')
})
