let searchbox = document.querySelector(".search-box");
document.querySelector("#search-icon").onclick = ()=>{
    searchbox.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector(".nav-bar");
document.querySelector("#menu-icon").onclick = ()=>{
    navbar.classList.toggle('active');
    searchbox.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchbox.classList.remove('active');
}


let header = document.querySelector("header");
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY > 0)
})