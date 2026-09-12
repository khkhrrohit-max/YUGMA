/* =========================================================
   YUGMA INTRODUCTION PAGE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PAGE LOAD ANIMATION
       ===================================================== */

    document.body.classList.add("loaded");


    /* =====================================================
       CONTINUE BUTTON
       ===================================================== */

    const continueButton =
        document.querySelector(".continue-button");


    if (continueButton) {

        continueButton.addEventListener("click", function (event) {

            event.preventDefault();

            this.classList.add("loading");

            const originalText =
                this.querySelector("span");

            if (originalText) {
                originalText.textContent = "ENTERING YUGMA...";
            }

            setTimeout(() => {

                window.location.href =
                    this.getAttribute("href");

            }, 500);

        });

    }


    /* =====================================================
       FEATURE CARD EFFECT
       ===================================================== */

    const cards =
        document.querySelectorAll(".feature-card");


    cards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 70}ms`;

    });


    /* =====================================================
       WORKFLOW CARD EFFECT
       ===================================================== */

    const workflow =
        document.querySelectorAll(".flow-item");


    workflow.forEach((item, index) => {

        item.addEventListener("mouseenter", () => {

            item.style.transform =
                "translateX(7px)";

        });


        item.addEventListener("mouseleave", () => {

            item.style.transform =
                "translateX(0)";

        });

    });


    /* =====================================================
       MOUSE MOVEMENT EFFECT
       ===================================================== */

    const visual =
        document.querySelector(".visual-image");


    if (visual && window.innerWidth > 900) {

        document.addEventListener("mousemove", (event) => {

            const x =
                (window.innerWidth / 2 - event.clientX) / 120;

            const y =
                (window.innerHeight / 2 - event.clientY) / 120;


            visual.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".main-card, .practice-section, .purpose-card, .government-card, .permission-section"
        );


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });


    /* =====================================================
       AI STATUS EFFECT
       ===================================================== */

    const aiStatus =
        document.querySelector(".ai-status");


    if (aiStatus) {

        setInterval(() => {

            aiStatus.style.opacity = "0.55";

            setTimeout(() => {

                aiStatus.style.opacity = "1";

            }, 250);

        }, 3000);

    }


    /* =====================================================
       PREVENT DOUBLE CLICK
       ===================================================== */

    let clicked = false;


    if (continueButton) {

        continueButton.addEventListener("click", () => {

            if (clicked) return;

            clicked = true;

            setTimeout(() => {

                clicked = false;

            }, 1500);

        });

    }

});