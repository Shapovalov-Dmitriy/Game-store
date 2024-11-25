"use strict"

const sidebarMenu = document.querySelector('.sidebar-menu');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger-active')
  sidebarMenu.classList.toggle('sidebar-menu-active')
});