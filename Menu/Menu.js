/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

// Dylan's code

function createMenuComponent() {
    const menu = document.createElement("div");
    const menuList = document.createElement("ul");

    menuItems.forEach(links => {
        const menuItem = document.createElement("li");
        const menuButton = document.createElement("a");

        menuItem.appendChild(menuButton);
        menuButton.textContent = `${links}`;
        menuList.appendChild(menuItem);

    });
    menu.appendChild(menuList);
    menu.classList.add("menu");

    const menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", () => menu.classList.toggle("menu--open"));

    const menuH1 = document.querySelector(".header h1");
    parentContainer = menuH1.parentNode;
    parentContainer.insertBefore(menu, menuH1);

    return menu;

}
createMenuComponent();

// Chris' code

/*function menuCreator(listItem) {
    const menu = document.createElement('div');
    const menuList = document.createElement('ul');
    const menuItem = document.createElement('li');
    const menuButton = document.createElement('a');

    menu.classList.add('menu');
    menuButton.classList.add('menu-button');

    menuItem.textContent = listItem;

    menuButton.addEventListener('click', () => {
        menu.toggle('menu--open');
    });

    menu.appendChild(menuList);
    menuList.appendChild(menuItem);
    menuItem.appendChild(menuButton);

    return menu;
}

const menu = document.querySelector('.menu-button');

menuItems.forEach((d) => {
    menu.appendChild(menuCreator(d));
});*/

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
