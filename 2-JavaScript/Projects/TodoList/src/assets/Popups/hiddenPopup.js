function createHiddenPopup (message, time = 2000) {
    if (existsHiddenPopup()) return

    const popupContainer = document.querySelector(".popup-container")
    const popup = document.createElement('div')
    popup.classList.add('popup', "face-in")
    popup.innerHTML = message

    const popupHeight = popup.clientHeight;
    popupContainer.appendChild(popup)
    popupContainer.classList.add("grow-up")
    setTimeout(() => {
        popupContainer.classList.remove("grow-up")
        popupContainer.classList.add("grow-down")

        popup.classList.remove('face-in')
        popup.classList.add('face-out')
        popup.addEventListener('animationend', popup.remove)
        
        popupContainer.addEventListener('animationend', () => {
            popupContainer.classList.remove("grow-down")
        });
    }, time)
}

function existsHiddenPopup () {
    const popupContainer = document.querySelector(".popup-container")
    return popupContainer.children.length > 0
}

function removeHiddenPopup () {
    const popupContainer = document.querySelector(".popup-container")
    popupContainer.innerHTML = ''
}

export default createHiddenPopup