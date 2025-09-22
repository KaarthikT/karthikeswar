let list = document.querySelectorAll('.navList li a');
let menu = document.querySelector('.navList');
let certificateSlide = document.querySelectorAll('.certificateSlide');
let mobBtn = document.querySelector('.navBar .mobileBtn');

list.forEach((data) => {
    NavAnimation(null, list[0])
    data.onclick = NavAnimation;
});

mobBtn.onclick = (e) => {
    e.target.parentNode.classList.toggle('active');
}

function NavAnimation(e, newData=null) {
    mobBtn.parentNode.classList.toggle('active');
    let childNode;
    if(e != null) childNode = e.target.getBoundingClientRect();
    if(newData != null) childNode = newData.getBoundingClientRect();
    
    let parentNode = menu.getBoundingClientRect();
    menu.style = `--left:${childNode.left - parentNode.left}px; --width:${childNode.width}px; --top:${childNode.top - parentNode.top}px;`;
}
let index = 0
let timer = setInterval(() => {
    certificateSlide.forEach((data, i) => {
        data.style.transform = `translateX(-${index * 100}%)`;
        if (index == certificateSlide.length) {
            // clearInterval(timer)
            data.style.transform = `translateX(-${i * 100}%)`;
            index = 0;
        }
    });
    index++;
}, 5000);