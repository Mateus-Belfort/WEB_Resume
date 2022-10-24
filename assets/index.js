var btn = document.querySelector("button");
const printPage = () => {
    const printFrame = document.createElement('iframe');
    printFrame.style.display  ='none';
    printFrame.src = 'index.html';

    document.body.appendChild(printFrame);

    printFrame.contentWindow.focus();
    printFrame.contentWindow.print();
}

btn.onclick = () => {
    window.print();
}