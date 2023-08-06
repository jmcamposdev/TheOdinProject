import DOMTodoList from "../../..";

function printCategoryList(tasks) {
    const categoriesContainer = document.querySelector('.category-container');
    categoriesContainer.innerHTML = '';
    const categoriesList = document.createElement('ul');
    categoriesList.classList.add('categories-list');
    const categories = getCategories(tasks);
    categories.forEach(category => {
        const categoryElement = document.createElement('li');
        categoryElement.textContent = category;
        categoryElement.classList.add('category');
        categoryElement.setAttribute("data-category", category)
        categoriesList.appendChild(categoryElement);
        createCategoryEvent(categoryElement);
    });

    categoriesContainer.appendChild(categoriesList);
}

/**
 * 
 * @param {Array} tasks 
 * @returns 
 */
function getCategories(tasks) {
    const categories = [];
    tasks.forEach(task => {
        const taskCategories = task.getCategories();
        taskCategories.forEach(category => {
            if (!categories.includes(category)) {
                categories.push(category);
            }
        });
    });
    return categories;
}

function createCategoryEvent (categoryElement) {
    categoryElement.addEventListener('click', () => {
        categoryElement.classList.toggle('selected');
        const selectedCategories = getSelectedCategories();
        console.log(selectedCategories);
        DOMTodoList.printByCategories(selectedCategories)
    });
}

function getSelectedCategories () {
    const selectedCategoriesElement = Array.from(document.querySelectorAll('.category.selected'));
    const selectedCategories = [];
    selectedCategoriesElement.forEach(categoryElement => {
        const category = categoryElement.dataset.category;
        selectedCategories.push(category);
    })

    return selectedCategories;
}

export default printCategoryList;