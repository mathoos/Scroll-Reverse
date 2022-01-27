// CURSOR 

const cursor = document.getElementsByClassName('cursor')[0];

document.onmousemove = (ev) => {
    cursor.style.top = ev.clientY+"px";
    cursor.style.left = ev.clientX+"px";  
}

// SURVOL IMAGE

document.querySelectorAll('.image').forEach(item => {
    item.addEventListener('mouseover', event => {
        cursor.classList.add("active")
    })
    item.addEventListener('mouseleave', event => {
        cursor.classList.remove("active")
    })
})


// REVERSE SCROLL JQUERY

var winHeight = $(window).innerHeight();
$(document).ready(function () {
   
});

window.addEventListener('resize', function (event) {
    //$(".panel").height($(window).innerHeight());
});
$(window).on('scroll',function(){
    $(".container-2").css('bottom',$(window).scrollTop()*-1);
});







