var favicon_images = [
                    './img/ooh-icon.png',
                    './img/ooh-wink.png',
                ],
    image_counter = 0; // To keep track of the current image

setInterval(function() {
    // remove current favicon
    if(document.querySelector("link[rel='icon']") !== null)
        document.querySelector("link[rel='icon']").remove();
    if(document.querySelector("link[rel='shortcut icon']") !== null)
        document.querySelector("link[rel='shortcut icon']").remove();
        
    // add new favicon image
    document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/png">');
    
    // If last image then goto first image
    // Else go to next image    
    if(image_counter == favicon_images.length -1)
        image_counter = 0;
    else
        image_counter++;
}, 400);
