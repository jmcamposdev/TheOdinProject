function printCategoriesList(tasks) {
    const categoriesContainer = document.querySelector('.category-container');
    categoriesContainer.innerHTML = '';
    const categoriesList = document.createElement('ul');
    categoriesList.classList.add('categories-list');
    const categories = getCategories(tasks);
    categories.forEach(category => {
        const categoryElement = document.createElement('li');
        categoryElement.textContent = category;
        categoryElement.classList.add('category');
        categoriesList.appendChild(categoryElement);
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

export default printCategoriesList;