function changeImage(x) {
    const mainImage = document.getElementById('mainDisplay');
    const newImage = x.getAttribute('src');
    
    mainImage.src = newImage;
}
