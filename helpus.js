document.addEventListener("DOMContentLoaded", function () {

    /* ================================
       SMOOTH SCROLL ANIMATION
    ================================= */

    const animatedItems = document.querySelectorAll(
        ".feature-card, .step, .camera-item, .prep-card, .tips-list div"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    animatedItems.forEach(function (item) {

        item.style.opacity = "0";
        item.style.transform = "translateY(25px)";
        item.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(item);

    });


    /* ================================
       ADD SHOW STYLE
    ================================= */

    const style = document.createElement("style");

    style.innerHTML = `

        .feature-card.show,
        .step.show,
        .camera-item.show,
        .prep-card.show,
        .tips-list div.show {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

    `;

    document.head.appendChild(style);


    /* ================================
       HELP BUTTON
    ================================= */

    const helpButton = document.querySelector(".help-btn");

    if (helpButton) {

        helpButton.addEventListener("click", function () {

            console.log("Opening MY STUDENT Help Center...");

        });

    }


    /* ================================
       CURRENT YEAR
    ================================= */

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        const year = new Date().getFullYear();

        copyright.innerHTML =
            `© ${year} YUGMA. All Rights Reserved.`;

    }

});