const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newListIngredients = ingredients.map(elem => {
	const item = document.createElement("li");
	item.textContent = elem;
	item.classList.add('item');
	return item;
	}
);

console.log(newListIngredients);
document.querySelector('#ingredients').append(...newListIngredients);