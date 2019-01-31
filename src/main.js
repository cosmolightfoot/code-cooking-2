//get color button node
const colorButtonsNode = document.getElementById('color-buttons');
console.log(colorButtonsNode);

//create array of colors
const colors = [
    'blue', 
    'green',
    'red',
    'yellow', 
    'black',
    'aqua'
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
        console.log(color + ' clicked');
    })
    //append button to parent node
    colorButtonsNode.appendChild(colorButton);

    console.log(colorButton)
}





