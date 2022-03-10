async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title-edit"]').value.trim();
    const recipe_text = document.querySelector('textarea[name="recipe-content-edit"]').value.trim();
    const recipe_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/recipes/${recipe_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            recipe_id
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

document.querySelector('#edit-recipe-form').addEventListener('submit', editFormHandler);