document.querySelector('.navTrigger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('mainListDiv').classList.toggle('show_list');
});


