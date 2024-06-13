import './style.css'
import createHomePage from './home';
import createMenuPage from './menu';
import createAboutPage from './about';

const content = document.getElementById('content');

function loadHomePage() {
    content.innerHTML = '';
    content.appendChild(createHomePage());
}

function loadMenuPage() {
    content.innerHTML = '';
    content.appendChild(createMenuPage());
}

function loadAboutPage() {
    content.innerHTML = '';
    content.appendChild(createAboutPage());
}

document.getElementById('homebutton').addEventListener('click', loadHomePage);
document.getElementById('menubutton').addEventListener('click', loadMenuPage);
document.getElementById('aboutbutton').addEventListener('click', loadAboutPage);

loadHomePage(); //load the home page by default