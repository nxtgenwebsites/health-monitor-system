let content = document.getElementById('dropdown-content');
let searchBar = document.getElementById('search-bar');

content.addEventListener('click', (e) => {
    e.preventDefault();
<<<<<<< HEAD

=======
>>>>>>> 8b36752cdd7f0d4283b4549e7d65e2f0596e45a0
    searchBar.value = content.innerText;
});