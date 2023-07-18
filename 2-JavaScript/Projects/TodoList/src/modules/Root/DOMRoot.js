/**
 * Add element to root div
 * @param {Element} element 
 */
function addRoot(element) {
    const root = document.querySelector('#root');
    root.appendChild(element);
}

/**
 * Clear root div
 */
function clearRoot() {
    const root = document.querySelector('#root');
    root.textContent = '';
}

export {addRoot, clearRoot};

