// variables
const iPhoneSearchInput = document.querySelector("#iPhone-search-input");
const iphoneSearchBtn = document.querySelector("#iphone-search-btn");
let iphoneListsBox = document.querySelector("#mobile-lists-box");
let iphoneLists = document.querySelector(".mobiles-list");

const iPhoneAvailable = [
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

for (let i=0; i<iPhoneAvailable.length; i++) {
  displayPhones(`<button>${iPhoneAvailable[i]}</button>`);
}


