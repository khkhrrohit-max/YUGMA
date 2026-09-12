/* =====================================================
   YUGMA ABOUT US JAVASCRIPT
===================================================== */


/* =====================================================
   PROJECT LINKS
===================================================== */

const projectLinks = {

    rohitLinkedin:
        "https://www.linkedin.com/in/rohit-khokhar-50b464382",

    shubhamLinkedin:
        "https://www.linkedin.com/in/shubhamkumar2103",

    sonuLinkedin:
        "https://www.linkedin.com/in/sonu-kumar-chaudhary-31720a383",

    fastGo:
        "https://khkhrrohit-max.github.io/FAST--GO/",

    myStudent:
        "https://khkhrrohit-max.github.io/MY-STUDENT/",

    dashboard:
        "https://khkhrrohit-max.github.io/dashboard/"

};


/* =====================================================
   LINK FUNCTION
===================================================== */

function connectLink(id, url) {

    const element =
        document.getElementById(id);

    if (!element) {
        return;
    }

    element.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            window.open(
                url,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}


/* =====================================================
   CONNECT LINKEDIN
===================================================== */

connectLink(
    "rohitLinkedin",
    projectLinks.rohitLinkedin
);


connectLink(
    "shubhamLinkedin",
    projectLinks.shubhamLinkedin
);


connectLink(
    "sonuLinkedin",
    projectLinks.sonuLinkedin
);


/* =====================================================
   CONNECT PROJECTS
===================================================== */

connectLink(
    "fastGoLink",
    projectLinks.fastGo
);


connectLink(
    "studentLink",
    projectLinks.myStudent
);


connectLink(
    "dashboardLink",
    projectLinks.dashboard
);


/* =====================================================
   REVEAL ANIMATION
===================================================== */

const animatedElements =
    document.querySelectorAll(
        ".feature-card, .team-card, .project-card, .step"
    );


const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(
                function(entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


animatedElements.forEach(
    function(element) {

        observer.observe(element);

    }
);


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const navLinks =
    document.querySelectorAll(
        "nav a"
    );


navLinks.forEach(
    function(link) {

        link.addEventListener(
            "click",
            function() {

                navLinks.forEach(
                    function(item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );

                this.classList.add(
                    "active"
                );

            }
        );

    }
);