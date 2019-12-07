import React from 'react';

/* IMAGES */
import wobble from './images/wobble.png';
import wobble2 from './images/wobble-2.png';
import project1 from './images/eurostall.png';
import project2 from './images/note-detect.png';
import project3 from './images/wobble.png'; // TO DO
import project4 from './images/podroze.png';

/*
    TO DO !!!!!!!!!
*/

class Images {

    constructor() {
        console.log("Images created");
    };

    images = [
        {
            path: wobble
        },
        {
            path: wobble2
        },
        {
            path: project1
        },
        {
            path: project2
        },
        {
            path: project3
        },
        {
            path: project4
        }
    ]

    loadImage(url, successCallback, failCallback) {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.height = img.naturalHeight;
            canvas.width = img.naturalWidth;
            ctx.drawImage(img, 0, 0);
            let dataURL = canvas.toDataURL();
            localStorage.setItem(url, dataURL);
            successCallback();
        };
        img.onerror = () => {
            failCallback();
        }
        img.src = url;
    }

    loadAllImages(successCallback, failCallback) {
        this.images.forEach(({ path }) => {
            this.loadImage(path, successCallback, failCallback);
        })
    }

    getImage(index) {
        return localStorage.getItem(this.images[index].path);
    }
}

export default Images;