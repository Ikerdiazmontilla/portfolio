import './style.css';
// import meCoolLight from './images/me-cool-light.jpg';
import meSmiling from './images/me-smiling.jpg';
import favicon from './images/favicon.ico';
import openInNew from './images/open-in-new.svg';
import phonePic from './images/call.png';
import emailPic from './images/email.png';
// import projects from './images/'

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

// const projectImg = document.querySelector('.project-img');
// projectImg.src = ;
// externalWindow.appendChild(img);

// const imgElement = document.querySelector('.me-img');
// imgElement.src = meCoolLight;
