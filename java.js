class Rectangle {
    static count = 0;

    constructor(width, height) {
        this.width = width;
        this.height = height;
        Rectangle.count++;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }

    updateDimensions(newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;
    }

    displayProperties() {
        console.log(newWidth , newHeight);
    }
}

let rect1 = new Rectangle(10, 20);
rect1.displayProperties(); 

rect1.updateDimensions(15, 25);
rect1.displayProperties();

console.log(rect1);

//__________________________________oop and dom task_____________________________
const imageContainer = document.createElement('div');
document.body.appendChild(imageContainer);

const imageUrls = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg'
];
for (let i = 0; i < 10; i++) {
    const img = document.createElement('img');
    img.src = imageUrls[i];
    img.alt = Image ${i + 1};
    imageContainer.appendChild(img);
}