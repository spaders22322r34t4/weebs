/* bruh*/
window.onscroll = () => {
let header = document.querySelector('.mbar');

header.classList.toggle('toppin', window.scrollY > 100);
};