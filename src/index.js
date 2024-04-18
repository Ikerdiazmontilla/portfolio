import './style.css';
import meSmiling from './images/me-smiling.jpg';
import favicon from './images/favicon.ico';
import openInNew from './images/open-in-new.svg';
import phonePic from './images/call.png';
import emailPic from './images/email.png';
import battleshipImg from './images/battleship.webp';
import funcardImg from './images/funcard.png';
import restaurantImg from './images/restaurant.png';
import toDoListImg from './images/to-do-list.webp';
import weatherImg from './images/weather.webp';
import adminImg from './images/admin-dashboard.png';

const link = document.createElement('link');
link.rel = 'icon';
link.href = favicon;
document.head.appendChild(link);

const externalWindow = document.querySelectorAll('.external-window');
externalWindow.forEach(button => {
  const img = new Image();
  img.src = openInNew;
  button.appendChild(img);
});

const footerImg = document.querySelector('.footer-img');
footerImg.src = meSmiling;

const phoneIcon = document.querySelector('.phone-icon');
phoneIcon.src = phonePic;

const emailIcon = document.querySelector('.email-icon');
emailIcon.src = emailPic;

const battleship = document.querySelector('#battleship > img');
battleship.src = battleshipImg;

const funcard = document.querySelector('#funcard > img');
funcard.src = funcardImg;

const restaurant = document.querySelector('#restaurant> img');
restaurant.src = restaurantImg;

const toDoList = document.querySelector('#to-do-list > img');
toDoList.src = toDoListImg;

const weather = document.querySelector('#weather > img');
weather.src = weatherImg;

const adminDashboard = document.querySelector('#admin-dashboard > img');
adminDashboard.src = adminImg;

function openTab(href) {
  window.open(`${href}`, '_blank');
}

const projects = document.querySelectorAll('.project');
projects.forEach(project => {
  const element = project.querySelector('.external-window');
  project.addEventListener('click', event => {
    if (!(event.target.className === 'devicon-github-original')) {
      openTab(element.href);
    }
  });
});
