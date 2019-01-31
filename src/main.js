//get color button node
const colorButtonsNode = document.getElementById('color-buttons');
//get canvas node
const canvasNode = document.getElementById('canvas');
//get transform node
const transformNode = document.getElementById('transform-buttons');
console.log(transformNode);

//create array of colors
const colors = [
    'blue', 
    'green',
    'red',
    'yellow', 
    'black',
    'aqua'
];
const shapes = [
    'square',
    'circle',

];
for(let index = 0; index < colors.length; index++) {
    let color = colors[index];
    console.log(color);
    
    //create button elements
    const colorButton = document.createElement('button');
    
    //add text, class, and value to button
    colorButton.textContent = color;
    colorButton.value = color;
    colorButton.classList.add('color-button');
    colorButton.addEventListener('click', function(){
        paint(color);
    });
    //append button to parent node
    colorButtonsNode.appendChild(colorButton);
    console.log(colorButton);
    //

}
for(let index = 0; index < colors.length; index++) {
    let color = colors[index];
    console.log(shapes);
    
    //create button elements
    const transformButton = document.createElement('button');
    
    //add text, class, and value to button
    transformButton.textContent = color;
    transformButton.value = color;
    transformButton.classList.add('transform-button', color);
    transformButton.addEventListener('click', function(){
        transform(color);
    });
    //append button to parent node
    transformNode.appendChild(transformButton);
    console.log(transformButton);
    //

}

//declare paint function
function paint(color) {
    //create a span element
    const colorBlock = document.createElement('span');
    //add the color class to span element from array
    colorBlock.classList.add(color);
    //add the color-block class to span element
    colorBlock.classList.add('color-block');
    //put the span element into the canvas
    canvasNode.appendChild(colorBlock);
    
}
//create function that creates shapes for canvas
function transform(color) {
    const selector = '.color-block.' + color;
    const colorBlocks = document.querySelectorAll(selector);
    console.log(colorBlocks);

    for(let index = 0; index < colorBlocks.length; index++) {
        colorBlocks[index].classList.add('transform');
    }
}

