import "../css/contact.css";

import { addMain, clearMain } from "..";
import bgImage from "../img/products-background.jpg";
import createBanner from "../modules/Global/banner/globalBanner";


export default function createContactPage() {
    clearMain();
    addMain(createBanner("Contact", "Growth resides in getting to know the different opinions", bgImage));
    addMain(createContactSection());
}

function createContactSection() {
    const contactSection = document.createElement('section');
    contactSection.classList.add('contact');

    const contactContent = document.createElement('div');
    contactContent.classList.add('container');

    contactSection.appendChild(contactContent);
    contactContent.appendChild(createInfo());
    contactContent.appendChild(createForm());

    return contactSection;
}

function createInfo() {
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = "Contact details";

    const address = document.createElement('p');
    address.classList.add('address');
    address.innerHTML = "785 15h Street, Office 478 <br> Berlin, De 81566";

    const email = document.createElement('a');
    email.classList.add('email');
    email.setAttribute('href', 'mailto:info@email.com"');
    email.textContent = "info@email.com";

    const phone = document.createElement('a');
    phone.classList.add('phone');
    phone.setAttribute('href', 'tel:+49123456789');
    phone.textContent = "+49 123 456 789";

    infoContainer.appendChild(title);
    infoContainer.appendChild(address);
    infoContainer.appendChild(email);
    infoContainer.appendChild(phone);

    return infoContainer;
}

function createForm() {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    const form = document.createElement('form');
    form.classList.add('form');

    const name = createInput('name', 'text', 'Name');
    const email = createInput('email', 'email', 'Email');
    const phone = createInput('phone', 'number', 'Phone');
    const subject = createInput('subject', 'text', 'Subject');
    const message = createTextArea('message', 'Message');

    const submit = document.createElement('button');
    submit.classList.add('submit');
    submit.setAttribute('type', 'submit');
    submit.textContent = "Get in Touch";

    form.appendChild(createInputWrapper('input-wrapper', name));
    form.appendChild(createInputWrapper('input-wrapper', email));
    form.appendChild(createInputWrapper('input-wrapper', phone));
    form.appendChild(createInputWrapper('input-wrapper', subject));
    form.appendChild(createInputWrapper('input-wrapper-textArea', message));

    form.appendChild(submit);

    formContainer.appendChild(form);

    return formContainer;
}

function createInputWrapper(className, input) {
    const inputWrapper = document.createElement('div');
    inputWrapper.classList.add(className);
    inputWrapper.classList.add(`${input.id}-container`);
    inputWrapper.appendChild(input);

    return inputWrapper;
}

function createTextArea(name, placeholder) {
    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    textarea.id = `${name}-container`;
    textarea.setAttribute('name', name);
    textarea.setAttribute('placeholder', placeholder);

    return textarea;
}

function createInput(name, type, placeholder) {
    const input = document.createElement('input');
    input.classList.add('input');
    input.id = name;
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('placeholder', placeholder);
    input.setAttribute('required', '');

    return input;
}