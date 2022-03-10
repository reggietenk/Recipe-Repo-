const { Categories } = require('../models');

const categoryData = [
    {
        id: 1,
        str_category: "Beef",
        str_category_thumb: "https:\/\/www.themealdb.com\/images\/category\/beef.png",
        str_category_description: "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
    },
    {
        str_category: "Chicken",
        str_category_thumb: "https:\/\/www.themealdb.com\/images\/category\/chicken.png",
        str_category_description: "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets."
    },
    {
        str_category: "Dessert",
        str_category_thumb: "https:\/\/www.themealdb.com\/images\/category\/dessert.png",
        str_category_description: "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere."
    },
    {
        str_category: "Lamb",
        str_category_thumb: "https:\/\/www.themealdb.com\/images\/category\/lamb.png",
        str_category_description: "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages. A sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal."
    },
    {
        str_category: "Miscellaneous",
        str_category_thumb: "https:\/\/www.themealdb.com\/images\/category\/miscellaneous.png",
        str_category_description: "General foods that don't fit into another category"
    },
    {
        str_category: "Pasta",
        str_category_thumb: "https:\/\/www.themealdb.com\/images\/category\/beef.png",
        str_category_description: "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.\r\n\r\nAlso commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking."
    },
    {
        str_category: "Pork",
        str_category_thumb: "https:\/\/www.themealdb.com\/images\/category\/pork.png",
        str_category_description: "Pork is the culinary name for meat from a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide,[1] with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch of cooking devoted to prepared meat products, many from pork."
    },
    {
        str_category: "Seafood",
        str_category_thumb: "https:\/\/www.themealdb.com\/images\/category\/seafood.png",
        str_category_description: "Seafood is any form of sea life regarded as food by humans. Seafood prominently includes fish and shellfish. Shellfish include various species of molluscs, crustaceans, and echinoderms. Historically, sea mammals such as whales and dolphins have been consumed as food, though that happens to a lesser extent in modern times. Edible sea plants, such as some seaweeds and microalgae, are widely eaten as seafood around the world, especially in Asia (see the category of sea vegetables)."
    },
    {
        str_category: "Side",
        str_category_thumb: "https:\/\/www.themealdb.com\/images\/category\/side.png",
        str_category_description: "A side dish, sometimes referred to as a side order, side item, or simply a side, is a food item that accompanies the entrée or main course at a meal. Side dishes such as salad, potatoes and bread are commonly used with main courses throughout many countries of the western world."
    },
    {
        str_category: "Starter",
        str_category_thumb: "https:\/\/www.themealdb.com\/images\/category\/starter.png",
        str_category_description: "An entrée in modern French table service and that of much of the English-speaking world (apart from the United States and parts of Canada) is a dish served before the main course of a meal; it may be the first dish served, or it may follow a soup or other small dish or dishes."
    },
    {
        str_category: "Vegetarian",
        str_category_thumb: "https:\/\/www.themealdb.com\/images\/category\/vegetarian.png",
        str_category_description: "Vegetarianism is the practice of abstaining from the consumption of meat (red meat, poultry, seafood, and the flesh of any other animal), and may also include abstention from by-products of animal slaughter.\r\n\r\nVegetarianism may be adopted for various reasons. Many people object to eating meat out of respect for sentient life."
    },
    {
        str_category: "Vegan",
        str_category_thumb: "https:\/\/www.themealdb.com\/images\/category\/vegan.png",
        str_category_description:"Veganism is both the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals.[b] A follower of either the diet or the philosophy is known as a vegan (pronounced VEE-gən). Distinctions are sometimes made between several categories of veganism."
    },
    {
        str_category: "Breakfast",
        str_category_thumb: "https:\/\/www.themealdb.com\/images\/category\/breakfast.png",
        str_category_description: "Breakfast is the first meal of a day. The word in English refers to breaking the fasting period of the previous night. There is a strong likelihood for one or more \"typical\", or \"traditional\", breakfast menus to exist in most places, but their composition varies widely from place to place, and has varied over time, so that globally a very wide range of preparations and ingredients are now associated with breakfast."
    },
    {
        str_category: "Goat",
        str_category_thumb:"https:\/\/www.themealdb.com\/images\/category\/goat.png",
        str_category_description: "The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat. Goats are one of the oldest domesticated species of animal, and have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese."
    }

];

const seedCategories = () => Categories.bulkCreate(categoryData);

module.exports = seedCategories;