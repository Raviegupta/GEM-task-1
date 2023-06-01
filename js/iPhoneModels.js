// variables
const iPhoneSearchInput = document.querySelector("#iPhone-search-input");
let iphoneLists = document.querySelector(".mobiles-list");
const errorMessaage = document.querySelector('.error-msg');

const arrOfiPhoneAvailable = [
    "iphone 14 Pro Max",
    "iPhone 14 Pro",
    "iPhone 14 Plus",
    "iPhone 14",
    "iphone 13 Pro Max",
    "iPhone 13 Pro",
    "iPhone 13",
    "iPhone 13 Mini",
    "iphone 12 Pro Max",
    "iPhone 12 Pro",
    "iPhone 12",
    "iPhone 12 Mini",
    "iphone 11 Pro Max",
  "iPhone 11 Pro",
  "iPhone 11",
  "iPhone XR",
  "iphone XS Max",
  "iPhone XS",
  "iPhone X",
  "iPhone 8 Plus",
  "iPhone 8",
  "iPhone 7 Plus",
  "iPhone 7",
  "iPhone 6S Plus",
];

const displayPhones = (phone) => {
    iphoneLists.innerHTML += phone
}

for (let i=0; i<arrOfiPhoneAvailable.length; i++) {
  displayPhones(`<button>${arrOfiPhoneAvailable[i]}</button>`);
}

// function to display error message on screen 
function dispalyErrorMessage(message) {
    errorMessaage.textContent = message;       
    
    setTimeout(() => { 
        errorMessaage.textContent = ''
    }, 1500);
}


// function to search phone
function searchPhone() {
    const searchValue = iPhoneSearchInput.value
    console.log(searchValue)
    const searchResult = arrOfiPhoneAvailable.filter(val => {
        if(val.includes(searchValue)) return val;
    })
    console.log(searchResult);

    iphoneLists.innerHTML = '';
    if(searchResult.length > 0)  searchResult.map(val => displayPhones(`<button>${val}</button>`));
    else dispalyErrorMessage('No Data Available!!');
}

// addEventListener
iPhoneSearchInput.addEventListener('input', searchPhone);