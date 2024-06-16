// Array of image URLs
const imageUrls = [
    './mens-Img/cloth20.jpg',
    './mens-Img/cloth18.jpg',
    './mens-Img/cloth14.jpg',
    './mens-Img/cloth15.jpg',
    './mens-Img/cloth13.jpg',
    './mens-Img/cloth24.jpg',
    './mens-Img/cloth7.jpg',
    './mens-Img/cloth8.jpg',
    './mens-Img/cloth21.jpg',
    './mens-Img/cloth30.jpg',
    './mens-Img/cloth31.jpg',
    './mens-Img/cloth32.jpg',
    './mens-Img/cloth25.jpg',
    './mens-Img/cloth9.jpg',
    './mens-Img/cloth10.jpg',
    './mens-Img/cloth11.jpg',
    './mens-Img/cloth12.jpg',
    './mens-Img/cloth26.jpg',
    './mens-Img/cloth6.jpg',
    './mens-Img/cloth4.jpg',
    './mens-Img/cloth27.jpg',
    './mens-Img/cloth5.jpg',
    './mens-Img/cloth16.jpg',
    './mens-Img/cloth17.jpg',
    './mens-Img/cloth28.jpg',
    './mens-Img/cloth3.jpg',
    './mens-Img/cloth19.jpg',
    './mens-Img/cloth29.jpg',
    './mens-Img/cloth2.jpg',
    './mens-Img/cloth22.jpg',
    './mens-Img/cloth1.jpg',
    './mens-Img/cloth23.jpg'
    
];

// Ensure the imageUrls array has 32 items to match the 32 cloth elements
if (imageUrls.length !== 32) {
    console.error("The number of image URLs does not match the number of cloth elements (32).");
}

// Loop through elements and set background images
for (let i = 0; i < 32; i++) {
    let clothId = `cloth${i + 1}`;
    let clothElement = document.getElementById(clothId);
    if (clothElement) {
        clothElement.style.backgroundImage = `url('${imageUrls[i]}')`;
        console.log(`Setting background image for ${clothId}`);
    } else {
        console.log(`Element with ID ${clothId} not found`);
    }
}

function toggleMenu() {
    var navLinks = document.querySelector('.nav-bar ul');
    navLinks.classList.toggle('show');
}
