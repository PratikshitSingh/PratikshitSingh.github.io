// Helper Functions
const vh = (percent) => {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
}

// Navbar Hamburger
const navbarOpen = document.getElementById("navbar-hb-open");

navbarOpen.addEventListener("click", () => {
    let links = document.getElementById("navbar-links-hb");
    if (links.style.display == "flex") {
        links.style.display = "none";
        navbarOpen.classList.remove("fa-times");
        navbarOpen.classList.add("fa-bars");
    }
    else {
        links.style.display = "flex";
        navbarOpen.classList.remove("fa-bars");
        navbarOpen.classList.add("fa-times");
    }
});

window.onscroll = () => {
    // Navbar Reduce Height
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.height = "7vh";
        document.getElementById("navbar-logo").style.width = "4wh";
        document.getElementById("navbar-logo").style.height = "4vh";

        // Reduce nav link size
        const navLinks = document.querySelectorAll(".navbar-link");
        navLinks.forEach(link => {
            link.style.fontSize = "14px";
        });

    } else {
        document.getElementById("navbar").style.height = "10vh";
        document.getElementById("navbar-logo").style.width = "8wh";
        document.getElementById("navbar-logo").style.height = "8vh";

        // Reset nav link size
        const navLinks = document.querySelectorAll(".navbar-link");
        navLinks.forEach(link => {
            link.style.fontSize = "18px"; // Reset to original size
        });
    }

    // Navbar Links Color Change
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#navbar-links > .navbar-link");

    sections.forEach((s) => {
        if (s.getBoundingClientRect().top < vh(10) && s.getBoundingClientRect().top > vh(-8)) {
            navLinks.forEach(l => {
                if (l.getAttribute("href") == `#${s.id}`) {
                    l.classList.add("navbar-link-active");
                } else {
                    l.classList.remove("navbar-link-active");
                }
            })
        }
    })
};

// Modal
const modalOpen = document.getElementById("modal-open")
const modalClose = document.getElementById("modal-close")
const modal = document.getElementById("modal")

modalOpen.addEventListener("click", () => {
    modal.style.display = "block"
})
modalClose.addEventListener("click", () => {
    modal.style.display = "none"
})
window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
})

// Carousel
// image array with local paths
const imgArr = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg',
    './assets/7.jpg',
    './assets/8.jpg',
  ];
  
  let i = 0;
  const imgHolder = document.getElementById("carousel-img");
  const leftBtn = document.getElementById("ca-arrow-left");
  const rightBtn = document.getElementById("ca-arrow-right");
  
  // Set the image to the first image in the array
  imgHolder.src = imgArr[i];
  
  const changeImage = (direction) => {
    imgHolder.classList.remove('slideFromRight', 'slideFromLeft');
    void imgHolder.offsetWidth;
    imgHolder.classList.add(`slideFrom${direction}`);
  };
  
  leftBtn.addEventListener("click", () => {
    i = (i === 0) ? imgArr.length - 1 : i - 1;
    imgHolder.src = imgArr[i];
    changeImage('Left');
  });
  
  rightBtn.addEventListener("click", () => {
    i = (i === imgArr.length - 1) ? 0 : i + 1;
    imgHolder.src = imgArr[i];
    changeImage('Right');
  });
  