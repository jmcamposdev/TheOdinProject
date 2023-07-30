export default class CheckBox {
    static createCheckBoxElement (isChecked) {
        const checkBoxElement = document.createElement("span");
    
        checkBoxElement.setAttribute("data-is-completed", `${isChecked}`)
        checkBoxElement.classList.add("check-box", "material-symbols-outlined");
        checkBoxElement.textContent = isChecked ? 'check_circle' : 'radio_button_unchecked';
    
        return checkBoxElement;
    }
    
    static addToggleEventListener (checkBox) {
        checkBox.addEventListener(("click"), () => {
            const currentValue = checkBox.dataset.isCompleted;
            log(currentValue);
        })
    }
}


