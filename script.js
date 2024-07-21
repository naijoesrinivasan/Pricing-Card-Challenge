function setWidth() {
    const button = document.querySelector('button');
    const pTag = document.getElementById('button-parent');

    console.log(button.style.width);
    console.log(pTag.style.width);
    button.style.width = pTag.style.width;
}