 function getImageBase64(image) {

        var cnvs = document.createElement("canvas");
        cnvs.width = image.width;
        cnvs.height = image.height;
        cnvs.getContext("2d").drawImage(image, 0, 0);

        const dataURL = cnvs.toDataURL('image/png');
        console.log(dataURL)
        return dataURL;

    }
