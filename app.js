// variables
const hamburgerIcon = document.querySelector('#hamburger-icon');
const hamburgerItem = document.querySelector('.hamburger-item');
const cross = document.querySelector('.cross');


// addEventListener
hamburgerIcon.addEventListener('click', (e) => {
    console.log(hamburgerItem);
    hamburgerItem.classList.remove('hidden');
});

cross.addEventListener('click', (e) => {
    console.log(hamburgerItem);
    hamburgerItem.classList.add('hidden');
});

