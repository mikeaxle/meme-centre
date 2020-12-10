// function to convert file to data url
const getImagebase64 = (file: File) =>
    new Promise(function (resolve, reject) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(`Error: ${error}`);
    });

export { getImagebase64 }