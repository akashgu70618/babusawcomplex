const topBtn = document.getElementById("topBtn");

// Show button when page is scrolled
window.onscroll = function () {

    if (document.documentElement.scrollTop > 200) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

// Scroll to top
topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};