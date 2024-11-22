const postBtn = document.getElementById('post-question');
const postForm = document.getElementById('post-form');
const cancleBtn = document.getElementById('post-cancel-btn');

postBtn.addEventListener('click' , () => {
    postForm.classList.add('show-form');
})
cancleBtn.addEventListener('click' , () => {
    postForm.classList.remove('show-form');
<<<<<<< HEAD
})

// Posted popup 
const popup = document.getElementById('popup');
const postedBtn = document.getElementById('post-btn');
const okBtn = document.getElementById('ok-btn');
const closeBtn = document.getElementById('close-btn');

postedBtn.addEventListener('click', (e) => {
    e.preventDefault()
    popup.classList.remove('d-none')
})

closeBtn.addEventListener('click', () => {
    popup.classList.add('d-none')
})
okBtn.addEventListener('click', () => {
    popup.classList.add('d-none')
=======
>>>>>>> 8b36752cdd7f0d4283b4549e7d65e2f0596e45a0
})