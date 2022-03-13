// let category_id= "";

async function editFormHandler(event) {
    event.preventDefault();

    const recipe_name = document.querySelector('input[name="recipe-title"]').value;
    const recipe_instructions = document.querySelector('textarea[name="recipe-text"]').value;
    const ingredients = document.querySelector('textarea[name="recipe-ingredients"]').value;
    const recipe_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/recipes/${recipe_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            recipe_name,
            recipe_instructions,
            ingredients,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-recipe-form').addEventListener('submit', editFormHandler);

// document.querySelectorAll('.dropdown-item').forEach(item => {
//     item.addEventListener('click', function(e) {
//     category_id = e.target.dataset.value;
//     document.querySelector('#dropdownMenuButton1').textContent= e.target.textContent;
//   })
//   })