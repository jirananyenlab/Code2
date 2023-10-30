function isImageFileExtension(fileName) {
    return (/\.(jpg|svg|png|gif|jpeg)$/g).test(fileName) //(?<=\.)
}
console.log(isImageFileExtension('sample.jpg'));
console.log(isImageFileExtension('sample.svg'));
console.log(isImageFileExtension('sample.png'));
console.log(isImageFileExtension('sample.gif'));
console.log(isImageFileExtension('sample.jpeg'));

console.log(isImageFileExtension('sample.pdf'));
console.log(isImageFileExtension('sampng'));
console.log(isImageFileExtension('sample.doc'));
console.log(isImageFileExtension(null));
console.log(isImageFileExtension(undefined));




