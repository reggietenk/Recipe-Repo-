let category_id = "";

async function newFormHandler(event) {
    event.preventDefault();
  
    const recipe_name = document.querySelector('input[name="recipe-title"]').value;
    const recipe_instructions = document.querySelector('textarea[name="recipe-text"]').value;
    const ingredients = document.querySelector('textarea[name="recipe-ingredients"]').value;
    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({
        recipe_name,
        recipe_instructions,
        ingredients,
        category_id,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
   }
  
  document.querySelector('.new-recipe-form').addEventListener('submit', newFormHandler);

  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
    category_id = e.target.dataset.value;
    document.querySelector('#dropdownMenuButton1').textContent= e.target.textContent;
  })
  })