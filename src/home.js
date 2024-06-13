export default function createHomePage(){
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.textContent = "Ital Pastino";

    const subtitleDiv = document.createElement('div');
    subtitleDiv.classList.add('subtitle');
    subtitleDiv.textContent = "The best Pasta in town";

    homeDiv.appendChild(titleDiv);
    homeDiv.appendChild(subtitleDiv);

    return homeDiv;
}