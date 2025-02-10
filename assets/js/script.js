
document.addEventListener("DOMContentLoaded", function () {
    let items = [
        {
            img: "assets/img/Asset 6.png",
            title: "WHERE YOU LIVE",
            description: "Lorem ipsum dolor"
        },
        {
            img: "assets/img/Asset 7.png",
            title: "WHERE YOU LIVE",
            description: "Lorem ipsum dolor"
        },
        {
            img: "assets/img/Asset 8.png",
            title: "WHERE YOU LIVE",
            description: "Lorem ipsum dolor"
        },
        {
            img: "assets/img/Asset 6.png",
            title: "WHERE YOU LIVE",
            description: "Lorem ipsum dolor"
        },
        {
            img: "assets/img/Asset 7.png",
            title: "WHERE YOU LIVE",
            description: "Lorem ipsum dolor"
        },
        {
            img: "assets/img/Asset 8.png",
            title: "WHERE YOU LIVE",
            description: "Lorem ipsum dolor"
        }
    ];

    let carouselInner = document.querySelector("#multiCarousel .carousel-inner");
    let isMobile = window.innerWidth < 768;
    let chunkSize = isMobile ? 1 : 3; // 1 item per slide on mobile, 3 items per slide on desktop

    for (let i = 0; i < items.length; i += chunkSize) {
        let activeClass = i === 0 ? "active" : "";
        let slideItems = items.slice(i, i + chunkSize)
            .map(item => `
                <div class="col-12 col-md-4">
                    <div class="carousel-content">
                                <img src="${item.img}" alt="">
                                <div class="overlay"></div>
                                <div class="carousel-caption">
                                <h3>${item.title}</h3>
                                <p>${item.description}</p>
                                </div>
                            </div>
                        </div>
                    
            `).join("");

        let slide = `<div class="carousel-item ${activeClass}">
                        <div class="row widthspec justify-content-center">${slideItems}</div>
                     </div>`;
        carouselInner.innerHTML += slide;
    }
});



document.addEventListener("DOMContentLoaded", function () {
    let items2 = [
        {
            img: "assets/img/Asset 15.png",
            name: "MANOJ KUMAR",
            title: "Business",
            description: "Lorem ipssum doolor sit amet, consectetuereer adipiscing elit, sed diam nonummy nibh euismod tincidunt ugfdgsx sdfsdf laoreet dolore."
        },
        {
            img: "assets/img/Asset 15.png",
            name: "MANOJ KUMAR",
            title: "Business",
            description: "Lorem ipssum doolor sit amet, consectetuereer adipiscing elit, sed diam nonummy nibh euismod tincidunt ugfdgsx sdfsdf laoreet dolore."
        },
        {
            img: "assets/img/Asset 15.png",
            name: "MANOJ KUMAR",
            title: "Business",
            description: "Lorem ipssum doolor sit amet, consectetuereer adipiscing elit, sed diam nonummy nibh euismod tincidunt ugfdgsx sdfsdf laoreet dolore."
        },
        {
            img: "assets/img/Asset 15.png",
            name: "MANOJ KUMAR",
            title: "Business",
            description: "Lorem ipssum doolor sit amet, consectetuereer adipiscing elit, sed diam nonummy nibh euismod tincidunt ugfdgsx sdfsdf laoreet dolore."
        },
        {
            img: "assets/img/Asset 15.png",
            name: "MANOJ KUMAR",
            title: "Business",
            description: "Lorem ipssum doolor sit amet, consectetuereer adipiscing elit, sed diam nonummy nibh euismod tincidunt ugfdgsx sdfsdf laoreet dolore."
        },
        {
            img: "assets/img/Asset 15.png",
            name: "MANOJ KUMAR",
            title: "Business",
            description: "Lorem ipssum doolor sit amet, consectetuereer adipiscing elit, sed diam nonummy nibh euismod tincidunt ugfdgsx sdfsdf laoreet dolore."
        }
    ];

    let carouselInner2 = document.querySelector("#multiCarousel2 .carousel-inner");
    let isMobile = window.innerWidth < 768;
    let chunkSize = isMobile ? 1 : 3; // 1 item per slide on mobile, 3 items per slide on desktop

    for (let i = 0; i < items2.length; i += chunkSize) {
        let activeClass = i === 0 ? "active" : "";
        let slideItems2 = items2.slice(i, i + chunkSize)
            .map(item2 => `
                <div class="col-12 col-md-4">
                    <div class="carousel-content">
                        <div class="card-container">
                            <div class="card-shadow-wrapper">
                                <img src="${item2.img}" alt="">
                                <h2>${item2.name}</h2>
                                <h5>${item2.title}</h5>
                                <p>${item2.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `).join("");

        let slide2 = `<div class="carousel-item ${activeClass}">
                        <div class="row justify-content-center">${slideItems2}</div>
                     </div>`;
        carouselInner2.innerHTML += slide2;
    }
});


document.getElementById("openVideo").onclick = function() {
    document.getElementById("videoModal").style.display = "block";
};

document.querySelector(".close").onclick = function() {
    let modal = document.getElementById("videoModal");
    modal.style.display = "none";

    // Stop the video when the modal closes
    let iframe = document.getElementById("videoFrame");
    iframe.src = iframe.src;
};

window.onclick = function(event) {
    let modal = document.getElementById("videoModal");
    if (event.target === modal) {
        modal.style.display = "none";
        let iframe = document.getElementById("videoFrame");
        iframe.src = iframe.src;
    }
};


document.getElementById("mobileMenuToggle").onclick = function () {
    document.getElementById("mobileMenuItems").classList.add("active");
    document.getElementById("overlay").classList.add("active");
};

document.getElementById("closeMenu").onclick = function () {
    document.getElementById("mobileMenuItems").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
};

// Close menu when clicking outside
window.onclick = function (event) {
    let menu = document.getElementById("mobileMenuItems");
    let button = document.getElementById("mobileMenuToggle");
    let overlay = document.getElementById("overlay");

    if (event.target === overlay) {
        menu.classList.remove("active");
        overlay.classList.remove("active");
    }
};
