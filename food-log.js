document.addEventListener('DOMContentLoaded', () => {
const foodNameInput = document.getElementById('foodName');
const caloriesInput = document.getElementById('calories');
const addFoodBtn = document.getElementById('addFoodBtn');
const foodList = document.getElementById('foodList');
const totalCaloriesSpan = document.getElementById('totalCalories');

let foods = JSON.parse(localStorage.getItem('foodLog')) || [];

function renderFoodList() {
foodList.innerHTML = '';
let totalCalories = 0;
foods.forEach((food, index) => {
const listItem = document.createElement('li');
listItem.classList.add('food-item');
if (food.completed) {
listItem.classList.add('completed');
}
if (!food.completed) {
totalCalories += food.calories;
}
listItem.innerHTML = `<div class="food-item-details">
<span class="food-item-name">${food.name}</span>
<span class="food-item-calories">${food.calories} kcal</span>
</div>
<div class="food-item-actions">
<button class="complete-btn" data-index="${index}">
<i class="fas fa-check"></i>
</button>
<button class="delete-btn" data-index="${index}">
<i class="fas fa-trash-alt"></i>
</button>
</div>`;
foodList.appendChild(listItem);
});
totalCaloriesSpan.textContent = totalCalories;
localStorage.setItem('foodLog', JSON.stringify(foods));
}

addFoodBtn.addEventListener('click', () => {
const name = foodNameInput.value.trim();
const calories = parseInt(caloriesInput.value);
if (name && !isNaN(calories) && calories > 0) {
const newFood = { name: name, calories: calories, completed: false };
foods.push(newFood);
foodNameInput.value = '';
caloriesInput.value = '';
renderFoodList();
} else {
alert('Por favor, ingresa un nombre de comida y calorías válidas.');
}
});

foodList.addEventListener('click', (e) => {
const target = e.target;
const button = target.closest('button');
if (button) {
const index = parseInt(button.dataset.index);
if (button.classList.contains('complete-btn')) {
foods[index].completed = !foods[index].completed;
} else if (button.classList.contains('delete-btn')) {
foods.splice(index, 1);
}
renderFoodList();
}
});

renderFoodList();
});