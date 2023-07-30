import { ta } from "date-fns/locale";

export default class CheckBox {
    static createCheckBoxElement (isChecked) {
        const checkBoxElement = document.createElement("span");
    
        checkBoxElement.setAttribute("data-is-completed", `${isChecked}`)
        checkBoxElement.classList.add("check-box", "material-symbols-outlined");
        checkBoxElement.textContent = isChecked ? 'check_circle' : 'radio_button_unchecked';
    
        return checkBoxElement;
    }
    
    static addToggleEventListener (checkBoxElement) {
        checkBoxElement.addEventListener(("click"), () => {
            const newValue = checkBoxElement.dataset.isCompleted === "true" ? false : true;
            checkBoxElement.dataset.isCompleted = newValue;
            checkBoxElement.textContent = newValue ? "check_circle" : "radio_button_unchecked"
        })
    }

    static addCheckBoxCompleteEventListener (checkBoxElement, task) {
        checkBoxElement.addEventListener(("click"), () => {
            task.toggleCompleted();
        });
    }
}


