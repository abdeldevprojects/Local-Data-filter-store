const menu =  [
    {
        id: 1,
        title: "Birthday Choclate Cake",
        category: "Cakes",
        price: 15.99,
        img: "./img/cake-1.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Magni minus neque quos incidunt ad. Perferendis sed harum 
        voluptas odit. Quae.`,
    },
    {
        id: 2,
        title: "Weeding Cake",
        category: "Cakes",
        price: 17.99,
        img: "./img/cake-2.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Magni minus neque quos incidunt ad. Perferendis sed harum 
        voluptas odit. Quae.`,
    },
    {
        id: 3,
        title: "Lover's Cake",
        category: "Cakes",
        price: 19.99,
        img: "./img/cake-3.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Magni minus neque quos incidunt ad. Perferendis sed harum 
        voluptas odit. Quae.`,
    },
    {
        id: 4,
        title: "Sweet Desert",
        category: "Sweets",
        price: 13.99,
        img: "./img/sweets-3.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Magni minus neque quos incidunt ad. Perferendis sed harum 
        voluptas odit. Quae.`,
    },
    {
        id: 5,
        title: "Strawberry Doughnut",
        category: "Doughnuts",
        price: 15.99,
        img: "./img/doughnut-1.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Magni minus neque quos incidunt ad. Perferendis sed harum 
        voluptas odit. Quae.`,
    },
    {
        id: 6,
        title: "American Doughnuts",
        category: "Doughnuts",
        price: 6.99,
        img: "./img/doughnut-2.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Magni minus neque quos incidunt ad. Perferendis sed harum 
        voluptas odit. Quae.`,
    },
    {
        id: 7,
        title: "Sweets",
        category: "Sweets",
        price: 12.99,
        img: "./img/sweets-2.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Magni minus neque quos incidunt ad. Perferendis sed harum 
        voluptas odit. Quae.`,
    },
    {
        id: 7,
        title: "Fairy Cupcake",
        category: "Cupcakes",
        price: 12.99,
        img: "./img/cupcake-3.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Magni minus neque quos incidunt ad. Perferendis sed harum 
        voluptas odit. Quae.`,
    },
    {
        id: 7,
        title: "Chocalate Cupcake",
        category: "Cupcakes",
        price: 12.99,
        img: "./img/cupcake-2.jpeg",
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Magni minus neque quos incidunt ad. Perferendis sed harum 
        voluptas odit. Quae.`,
    },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
    displayMenuButtons()
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        
        return `<article class="menu-item">
        <img class="photo" src=${item.img} alt=${item.title}>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>` 
    })
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {

    /* Filter UNIQUE Categories */
    const categories = menu.reduce(function(values, item) {
        if(!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    },["All"]);
    
    /* Buttons to HTML*/
    const categoryBtns = categories.map(function(category) {
        return `<button class="filter-btn" type="button" 
        data-filter=${category}>${category}</button>
        `
    }).join("");
    container.innerHTML = categoryBtns

    const filterBtn = document.querySelectorAll(".filter-btn");
    
    filterBtn.forEach(function (btn) {
        {
            btn.addEventListener("click", function(e) {
                const category = e.currentTarget.dataset.filter;
                const menuCategory = menu.filter(function(menuItem) {
                    
                    if (menuItem.category === category) {
                        return menuItem;
                    }
                });
        
                // console.log(menuCategory);
                if (category === "All") {
                    displayMenuItems(menu);
                    console.log("All")
                } else {
                    displayMenuItems(menuCategory);
                }
            
            });
        }
    });
}