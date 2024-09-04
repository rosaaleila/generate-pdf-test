export function verifyIfImageAlreadyUploaded(images: File[], newImage: File) {
    if(images.find(file => file.name === newImage.name)) {
        return true;
    }
}