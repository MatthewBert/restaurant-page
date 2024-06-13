import './style.css'
import createHomePage from './home';
import createMenuPage from './menu';

const content = document.getElementById('content');

function loadHomePage(){
    content.innerHTML = '';
    content.appendChild(createHomePage());
}

function loadMenuPage(){
    content.innerHTML = '';
    content.appendChild(createMenuPage());
}

document.getElementById('homebutton').addEventListener('click', loadHomePage);
document.getElementById('menubutton').addEventListener('click', loadMenuPage);

loadHomePage(); //load the home page by default