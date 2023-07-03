import '../../../css/header.css';
import logoImg from '../../../img/logo.png';
const navItems = [
  {
    name: 'Home',
    link: '#'
  },
  {
    name: 'Menu',
    link: '#'
  },
  {
    name: 'Contact',
    link: '#'
  }
];

export default function createHeader() {
  const header = document.createElement('header')
  header.classList.add('header')

  // Logo
  const logo = document.createElement('div')
  logo.classList.add('logo')
  logo.innerHTML = `<img src="${logoImg}" alt="logo">`

  // Nav
  const nav = document.createElement('nav')
  nav.classList.add('nav')

  const navList = document.createElement('ul')
  navList.classList.add('nav__list')
  // Add nav items
  navItems.forEach(item => {
    const navItem = document.createElement('li')
    navItem.classList.add('nav__item')
    const navLink = document.createElement('a')
    navLink.classList.add('nav__link')
    navLink.setAttribute('href', item.link)
    navLink.textContent = item.name

    navItem.appendChild(navLink)
    navList.appendChild(navItem)
  })
  // Add nav list to nav
  nav.appendChild(navList)
  // Add nav and logo to header
  header.appendChild(logo)
  header.appendChild(nav)

  return header
}