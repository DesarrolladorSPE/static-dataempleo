const saveImages = (array) => {
    const images = [];

    array?.forEach((item, index) => {
        const canvas = document.getElementById(`myChart${index}`);
        if (canvas) {
            const imageDataURL = canvas.toDataURL(); 
            images.push(imageDataURL); 
        }
    });

    return images; // Devolver el array de URLs de imagen
}

export { saveImages };