function populateImage(image) {

    const img = document.createElement('img');
    img.src = image.url;
    img.title = image.title;
    img.alt = image.title;
    img.id = image.id;
    img.year = image.year;
    img.description = image.description;
    img.classList.add('galleryImages');
    return img;
}

export{populateImage}