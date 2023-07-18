export default function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Don\'t Remember';
    
    header.appendChild(title);

    return header;
}

