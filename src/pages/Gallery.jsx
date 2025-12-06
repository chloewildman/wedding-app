import React, { useEffect } from "react";
import { populateImage } from "../lib/populateGallery.js";
import "../css/reset.css"
import "../css/gallery.css"
import "../css/style.css"

function Gallery() {
    useEffect(() => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const caption = document.getElementById('caption');
        const closeBtn = document.querySelector('.close');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');

        let currentIndex = 0;
        let galleryImages = [];

        async function fetchImagesData() {
            try {
                const res = await fetch(`${import.meta.env.BASE_URL}/data/imgs.json`);
                const data = await res.json();

                const allImages = data.imgs.map(img => ({
                    ...img,
                    url: `${import.meta.env.BASE_URL}${img.url}`,
                    sortNumber: Math.random()
                }));

                allImages.sort((a, b) => a.sortNumber - b.sortNumber);

                allImages.forEach((image, index) => {
                    const img = populateImage(image);
                    img.dataset.index = index;
                    document.getElementById("imgContainer").appendChild(img);
                });

                galleryImages = document.querySelectorAll(".galleryImages");
                galleryImages.forEach(img => {
                    img.addEventListener("click", () => {
                        currentIndex = parseInt(img.dataset.index);
                        openLightbox(img);
                    });
                });
            } catch (err) {
                console.error(err);
            }
        }

        fetchImagesData();

        closeBtn.addEventListener("click", closeLightbox);

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            showImage(currentIndex);
        });

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % galleryImages.length;
            showImage(currentIndex);
        });

        function openLightbox(img) {
            lightbox.classList.remove("hidden");
            updateLightboxContent(img);
        }

        function closeLightbox() {
            lightbox.classList.add("hidden");
        }

        function showImage(index) {
            const img = galleryImages[index];
            if (!img) return;
            updateLightboxContent(img);
        }

        function updateLightboxContent(img) {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.title;
            caption.textContent = img.year + ": " + img.description;
        }

    }, []);

    return (
        <div className="galleryPage">
            <h2 className="galleryHeading">Gallery</h2>
            <p>Click on an image to learn more about the memory.</p>
            <section id="imgContainer"></section>
            <div id="lightbox" className="lightbox hidden">
                <span className="close">&times;</span>
                <div className="lightboxGrid">
                    <button className="prev">&#10094;</button>
                    <img className="lightbox-content" id="lightbox-img" />
                    <div id="caption"></div>
                    <button className="next">&#10095;</button>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
