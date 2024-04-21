let newDiv = document.createElement('div');

let newContent = document.createTextNode('Hello World!');

newDiv.appendChild(newContent);

document.body.append(newDiv);

setTimeout(function () {
    newDiv.remove();
}, 5000)
