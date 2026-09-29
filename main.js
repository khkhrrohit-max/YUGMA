/* =========================================================
   YUGMA - MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("YUGMA Main Page Loaded");


    /* =====================================================
       FEATURE CARD REVEAL
    ===================================================== */

    const cards =
        document.querySelectorAll(".mainpart > div");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "show-card"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        cards.forEach(function (card, index) {

            card.style.transitionDelay =
                `${index * 0.08}s`;

            observer.observe(card);

        });

    } else {

        cards.forEach(function (card) {

            card.classList.add("show-card");

        });

    }


    /* =====================================================
       NAVBAR BUTTONS
    ===================================================== */

    const navbarButtons =
        document.querySelectorAll(
            "#navbar button"
        );


    navbarButtons.forEach(function (button) {

        const text =
            button.textContent
                .trim()
                .toLowerCase();


        button.addEventListener(
            "click",
            function () {


                /* SIGN UP / LOGIN */

                if (
                    text.includes("sign up") ||
                    text.includes("login")
                ) {

                    window.location.href =
                        "signuplogin.html";

                }


                /* PROFILE */

                else if (
                    text.includes("profile")
                ) {

                    window.location.href =
                        "profile.html";

                }


                /* ABOUT US */

                else if (
                    text.includes("about")
                ) {

                    window.location.href =
                        "about us.html";

                }


                /* HELP */

                else if (
                    text.includes("help")
                ) {

                    window.location.href =
                        "help us.html";

                }


                /* ANALYSIS */

                else if (
                    text.includes("analysis")
                ) {

                    window.location.href =
                        "analysis.html";

                }

            }
        );

    });


    /* =====================================================
       FEATURE CARD CLICK
    ===================================================== */

    const featureButtons =
        document.querySelectorAll(
            ".mainpart button"
        );


    featureButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function (event) {

                /*
                   If button already contains an <a>,
                   let the browser follow the link.
                */

                const link =
                    button.querySelector("a");


                if (link) {

                    return;

                }


                const card =
                    button.closest(
                        ".mainpart > div"
                    );


                if (!card) return;


                const id =
                    card.id;


                const pages = {

                    feature1:
                        "internship.html",

                    feature2:
                        "resume.html",

                    feature3:
                        "AIinterview.html",

                    feature4:
                        "MCQinterview.html",

                    feature5:
                        "companydetails.html",

                    feature6:
                        "practiceskill.html"

                };


                if (pages[id]) {

                    window.location.href =
                        pages[id];

                }

            }
        );

    });


    /* =====================================================
       CARD HOVER EFFECT
    ===================================================== */

    cards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                this.style.zIndex = "5";

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                this.style.zIndex = "1";

            }
        );

    });


    /* =====================================================
       HERO IMAGE MOUSE EFFECT
    ===================================================== */

    const hero =
        document.querySelector(".intro");


    const heroImages =
        document.querySelectorAll(
            ".intro img"
        );


    if (hero && heroImages.length) {

        hero.addEventListener(
            "mousemove",
            function (event) {

                /*
                   Disable strong movement on mobile
                */

                if (window.innerWidth < 800) {
                    return;
                }


                const rect =
                    hero.getBoundingClientRect();


                const mouseX =
                    event.clientX -
                    rect.left;


                const mouseY =
                    event.clientY -
                    rect.top;


                const rotateY =
                    ((mouseX / rect.width) - 0.5) * 4;


                const rotateX =
                    ((mouseY / rect.height) - 0.5) * -3;


                if (heroImages[0]) {

                    heroImages[0].style.transform =
                        `translateY(-4px)
                         rotateY(${rotateY}deg)
                         rotateX(${rotateX}deg)`;

                }


                if (heroImages[1]) {

                    heroImages[1].style.transform =
                        `translateY(-3px)
                         rotateY(${rotateY / 2}deg)`;

                }

            }
        );


        hero.addEventListener(
            "mouseleave",
            function () {

                if (heroImages[0]) {

                    heroImages[0].style.transform =
                        "";

                }


                if (heroImages[1]) {

                    heroImages[1].style.transform =
                        "";

                }

            }
        );

    }


    /* =====================================================
       BUTTON PRESS ANIMATION
    ===================================================== */

    document
        .querySelectorAll("button")
        .forEach(function (button) {

            button.addEventListener(
                "mousedown",
                function () {

                    this.style.transform =
                        "scale(0.97)";

                }
            );


            button.addEventListener(
                "mouseup",
                function () {

                    this.style.transform =
                        "";

                }
            );


            button.addEventListener(
                "mouseleave",
                function () {

                    this.style.transform =
                        "";

                }
            );

        });


    /* =====================================================
       NAVBAR SHADOW ON SCROLL
    ===================================================== */

    const navbar =
        document.getElementById(
            "navbar"
        );


    window.addEventListener(
        "scroll",
        function () {

            if (!navbar) return;


            if (window.scrollY > 30) {

                navbar.style.boxShadow =
                    "0 12px 35px rgba(30,50,90,0.12)";

            } else {

                navbar.style.boxShadow =
                    "0 8px 30px rgba(30,50,90,0.07)";

            }

        }
    );


    /* =====================================================
       FIX COMPANY DETAILS BUTTON
       
       Your HTML currently has:
       <button>
          <a href="companydetails.html"></a>
          Explore Companies
       </button>
       
       This makes the whole button clickable.
    ===================================================== */

    const companyButton =
        document.querySelector(
            "#feature5 button"
        );


    if (companyButton) {

        companyButton.addEventListener(
            "click",
            function () {

                window.location.href =
                    "companydetails.html";

            }
        );

    }


    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    const copyright =
        document.querySelector(
            "#bottom p"
        );


    if (copyright) {

        copyright.textContent =
            `© ${new Date().getFullYear()} YUGMA. ALL rights reserved`;

    }


    /* =====================================================
       LOG
    ===================================================== */

    console.log(
        "%cYUGMA",
        "font-size:28px;font-weight:900;color:#1955d1;"
    );

    console.log(
        "AI Career Readiness Platform"
    );

});
/* =========================================================
   YUGMA MAIN.JS
   FEATURE 7, 8 & 9
   ========================================================= */


/* =========================================================
   FEATURE 7
   TRAINER TRAINING MANAGEMENT
   ========================================================= */

function openTrainerFeature() {

    const trainerPage = document.querySelector(
        'a[href="trainer.html"]'
    );

    if (trainerPage) {

        trainerPage.addEventListener("click", function () {

            localStorage.setItem(
                "yugma_selected_feature",
                "Trainer Training Management"
            );

        });

    }

}


/* =========================================================
   FEATURE 8
   ADMIN CAPACITY-BUILDING CONTROL CENTER
   ========================================================= */

function openAdminFeature() {

    /*
       Find the Admin page link.

       If admin.html exists in your project,
       this automatically connects it.
    */

    const adminPage = document.querySelector(
        'a[href="admin.html"]'
    );

    if (adminPage) {

        adminPage.addEventListener("click", function () {

            localStorage.setItem(
                "yugma_selected_feature",
                "Admin Capacity-Building Control Center"
            );

        });

    }

}


/* =========================================================
   FEATURE 9
   TRAINER–TRAINING ASSIGNMENT
   & RESOURCE MANAGEMENT
   ========================================================= */

function openTrainerAssignmentFeature() {

    /*
       This connects the assignment/resource page.

       Expected page:
       trainer-assignment.html
    */

    const assignmentPage = document.querySelector(
        'a[href="trainer-assignment.html"]'
    );

    if (assignmentPage) {

        assignmentPage.addEventListener("click", function () {

            localStorage.setItem(
                "yugma_selected_feature",
                "Trainer Training Assignment & Resource Management"
            );

        });

    }

}


/* =========================================================
   SAVE MAIN PAGE VISIT
   ========================================================= */

function saveMainPageVisit() {

    let visits =
        Number(localStorage.getItem("yugma_main_visits")) || 0;

    visits++;

    localStorage.setItem(
        "yugma_main_visits",
        visits
    );

}


/* =========================================================
   SAVE FEATURE USAGE
   ========================================================= */

function saveFeatureUsage(featureName) {

    let usage =
        JSON.parse(
            localStorage.getItem("yugma_feature_usage")
        ) || {};

    if (!usage[featureName]) {

        usage[featureName] = 0;

    }

    usage[featureName]++;

    localStorage.setItem(
        "yugma_feature_usage",
        JSON.stringify(usage)
    );

}


/* =========================================================
   TRACK FEATURE 7
   ========================================================= */

function trackTrainerUsage() {

    const trainerLinks =
        document.querySelectorAll(
            'a[href="trainer.html"]'
        );

    trainerLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            saveFeatureUsage(
                "Trainer Training Management"
            );

        });

    });

}


/* =========================================================
   TRACK FEATURE 8
   ========================================================= */

function trackAdminUsage() {

    const adminLinks =
        document.querySelectorAll(
            'a[href="admin.html"]'
        );

    adminLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            saveFeatureUsage(
                "Admin Capacity-Building Control Center"
            );

        });

    });

}


/* =========================================================
   TRACK FEATURE 9
   ========================================================= */

function trackAssignmentUsage() {

    const assignmentLinks =
        document.querySelectorAll(
            'a[href="trainer-assignment.html"]'
        );

    assignmentLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            saveFeatureUsage(
                "Trainer Training Assignment & Resource Management"
            );

        });

    });

}


/* =========================================================
   INITIALIZE MAIN PAGE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        saveMainPageVisit();

        openTrainerFeature();

        openAdminFeature();

        openTrainerAssignmentFeature();

        trackTrainerUsage();

        trackAdminUsage();

        trackAssignmentUsage();

    }
);