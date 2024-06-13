import './style.css'
import createHomePage from './home';

const content = document.getElementById('content');

function loadHomePage(){
    content.innerHTML = '';
    content.appendChild(createHomePage());
}

document.getElementById('homebutton').addEventListener('click', loadHomePage);

loadHomePage(); //load the home page by default