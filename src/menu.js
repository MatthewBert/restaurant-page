import spaghetti from './assets/spaghetti.jpeg';
import lasagna from './assets/lasagna.jpeg';
import gnocchi from './assets/gnocchi.jpeg';
import tiramisu from './assets/tiramisu.jpeg';
import salad from './assets/salad.jpg';
import wine from './assets/wine.jpg';

export default function createMenuPage() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-container');

    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');
    menuHeader.textContent = 'Ital Pastino Menu';

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');

    const items = [
        { src: spaghetti, alt: 'spaghetti', name: 'Spaghetti' },
        { src: lasagna, alt: 'lasagna', name: 'Lasagna' },
        { src: gnocchi, alt: 'gnocchi', name: 'Gnocchi' },
        { src: salad, alt: 'salad', name: 'Salad' },
        { src: wine, alt: 'wine', name: 'Wine' },
        { src: tiramisu, alt: 'tiramisu', name: 'Tiramisu' },
    ];

    items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;

        const nameDiv = document.createElement('div');
        nameDiv.classList.add('item-name');
        nameDiv.textContent = item.name;

        itemCard.appendChild(img);
        itemCard.appendChild(nameDiv);
        menuItems.appendChild(itemCard);
    });

    menuDiv.appendChild(menuHeader);
    menuDiv.appendChild(menuItems);
    return menuDiv;
}