/* =========================================================
   YUGMA ADMIN CONTROL CENTER
========================================================= */


/* =========================================================
   INITIAL DATA
   ========================================================= */

let adminData = {

    trainers: [
        {
            id: 1,
            name: "Rahul Sharma",
            role: "Trainer",
            expertise: "Data Structures & Algorithms",
            submitted: "Today",
            status: "Pending"
        },

        {
            id: 2,
            name: "Priya Singh",
            role: "Trainer",
            expertise: "Artificial Intelligence",
            submitted: "Yesterday",
            status: "Pending"
        },

        {
            id: 3,
            name: "Aman Verma",
            role: "Trainer",
            expertise: "Web Development",
            submitted: "2 Days Ago",
            status: "Pending"
        }
    ],

    courses: [
        {
            id: 1,
            name: "Advanced DSA Training",
            trainer: "Rahul Sharma",
            duration: "6 Weeks",
            students: 42,
            status: "Published"
        },

        {
            id: 2,
            name: "Artificial Intelligence Fundamentals",
            trainer: "Priya Singh",
            duration: "8 Weeks",
            students: 35,
            status: "Published"
        },

        {
            id: 3,
            name: "Full Stack Web Development",
            trainer: "Aman Verma",
            duration: "10 Weeks",
            students: 51,
            status: "Published"
        }
    ],

    statistics: {

        trainers: 24,

        trainees: 186,

        courses: 18,

        certificates: 129,

        enrollment: 82,

        participation: 76,

        completion: 68,

        certification: 71

    }

};


/* =========================================================
   LOAD SAVED DATA
========================================================= */

function loadData() {

    const saved = localStorage.getItem("yugmaAdminData");

    if (saved) {

        try {

            const parsed = JSON.parse(saved);

            adminData = {
                ...adminData,
                ...parsed
            };

        } catch (error) {

            console.log("Saved admin data could not be loaded.");

        }

    }

}


/* =========================================================
   SAVE DATA
========================================================= */

function saveData() {

    localStorage.setItem(
        "yugmaAdminData",
        JSON.stringify(adminData)
    );

}


/* =========================================================
   HELPER
========================================================= */

function $(id) {
    return document.getElementById(id);
}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    const toast = $("toast");
    const toastMessage = $("toastMessage");

    toastMessage.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


/* =========================================================
   STATISTICS
========================================================= */

function renderStatistics() {

    $("trainerCount").textContent =
        adminData.statistics.trainers;

    $("traineeCount").textContent =
        adminData.statistics.trainees;

    $("courseCount").textContent =
        adminData.statistics.courses;

    $("certificateCount").textContent =
        adminData.statistics.certificates;


    $("enrollmentValue").textContent =
        adminData.statistics.enrollment + "%";

    $("participationValue").textContent =
        adminData.statistics.participation + "%";

    $("completionValue").textContent =
        adminData.statistics.completion + "%";

    $("certificationValue").textContent =
        adminData.statistics.certification + "%";


    setTimeout(() => {

        $("enrollmentBar").style.width =
            adminData.statistics.enrollment + "%";

        $("participationBar").style.width =
            adminData.statistics.participation + "%";

        $("completionBar").style.width =
            adminData.statistics.completion + "%";

        $("certificationBar").style.width =
            adminData.statistics.certification + "%";

    }, 150);

}


/* =========================================================
   PENDING APPROVALS
========================================================= */

function renderApprovals() {

    const table = $("approvalTable");

    table.innerHTML = "";

    const pending =
        adminData.trainers.filter(
            trainer => trainer.status === "Pending"
        );


    $("pendingCount").textContent =
        pending.length + " Pending";


    if (pending.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="6"
                    style="text-align:center;padding:30px;color:#81929d;">
                    No pending trainer approvals.
                </td>
            </tr>
        `;

        return;
    }


    pending.forEach(trainer => {

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${escapeHTML(trainer.name)}</td>

            <td>${escapeHTML(trainer.role)}</td>

            <td>${escapeHTML(trainer.expertise)}</td>

            <td>${escapeHTML(trainer.submitted)}</td>

            <td>
                <span class="approval-status">
                    ${escapeHTML(trainer.status)}
                </span>
            </td>

            <td>

                <div class="action-group">

                    <button
                        class="approve-btn"
                        data-id="${trainer.id}">
                        Approve
                    </button>

                    <button
                        class="reject-btn"
                        data-id="${trainer.id}">
                        Reject
                    </button>

                </div>

            </td>
        `;

        table.appendChild(row);

    });


    document.querySelectorAll(".approve-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => approveTrainer(
                    Number(button.dataset.id)
                )
            );

        });


    document.querySelectorAll(".reject-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => rejectTrainer(
                    Number(button.dataset.id)
                )
            );

        });

}


/* =========================================================
   APPROVE TRAINER
========================================================= */

function approveTrainer(id) {

    const trainer =
        adminData.trainers.find(
            item => item.id === id
        );

    if (!trainer) return;

    trainer.status = "Approved";

    adminData.statistics.trainers++;

    saveData();

    renderAll();

    showToast(
        trainer.name + " has been approved."
    );

}


/* =========================================================
   REJECT TRAINER
========================================================= */

function rejectTrainer(id) {

    const trainer =
        adminData.trainers.find(
            item => item.id === id
        );

    if (!trainer) return;

    trainer.status = "Rejected";

    saveData();

    renderAll();

    showToast(
        trainer.name + " application rejected."
    );

}


/* =========================================================
   COURSES
========================================================= */

function renderCourses() {

    const grid = $("courseGrid");

    grid.innerHTML = "";

    adminData.courses.forEach(course => {

        const card =
            document.createElement("div");

        card.className = "course-card";

        card.innerHTML = `

            <div class="course-top">

                <div class="course-icon">
                    <i class="fa-solid fa-book-open"></i>
                </div>

                <span class="course-status">
                    ${escapeHTML(course.status)}
                </span>

            </div>

            <h3>
                ${escapeHTML(course.name)}
            </h3>

            <p>
                Trainer:
                ${escapeHTML(course.trainer)}
            </p>

            <div class="course-meta">

                <span>
                    <i class="fa-regular fa-clock"></i>
                    ${escapeHTML(course.duration)}
                </span>

                <span>
                    <i class="fa-solid fa-users"></i>
                    ${course.students} trainees
                </span>

            </div>
        `;

        grid.appendChild(card);

    });

}


/* =========================================================
   PROGRAM MODAL
========================================================= */

const programModal =
    $("programModal");

const addProgramBtn =
    $("addProgramBtn");

const closeProgramModal =
    $("closeProgramModal");


addProgramBtn.addEventListener(
    "click",
    () => {

        programModal.classList.add("show");

    }
);


closeProgramModal.addEventListener(
    "click",
    () => {

        programModal.classList.remove("show");

    }
);


programModal.addEventListener(
    "click",
    event => {

        if (event.target === programModal) {

            programModal.classList.remove("show");

        }

    }
);


/* =========================================================
   CREATE PROGRAM
========================================================= */

$("programForm").addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            $("programName").value.trim();

        const trainer =
            $("programTrainer").value.trim();

        const duration =
            $("programDuration").value.trim();

        const deadline =
            $("programDeadline").value;

        const description =
            $("programDescription").value.trim();


        if (!name || !trainer) {

            showToast(
                "Please enter program name and trainer."
            );

            return;
        }


        const newCourse = {

            id: Date.now(),

            name: name,

            trainer: trainer,

            duration:
                duration || "Not specified",

            students: 0,

            status: "Published",

            deadline: deadline,

            description: description

        };


        adminData.courses.unshift(
            newCourse
        );


        adminData.statistics.courses =
            adminData.courses.length;


        saveData();

        renderAll();


        $("programForm").reset();

        programModal.classList.remove(
            "show"
        );


        showToast(
            "Training program published successfully."
        );

    }
);


/* =========================================================
   ACHIEVEMENT
========================================================= */

$("publishAchievement")
    .addEventListener(
        "click",
        publishAchievement
    );


function publishAchievement() {

    const title =
        $("achievementTitle")
            .value.trim();

    const organization =
        $("achievementOrganization")
            .value.trim();

    const description =
        $("achievementDescription")
            .value.trim();


    if (!title ||
        !organization ||
        !description) {

        $("achievementMessage")
            .textContent =
            "Please fill all achievement details.";

        return;
    }


    const achievement = {

        id: Date.now(),

        title,

        organization,

        description,

        date: new Date()
            .toLocaleDateString()

    };


    const old =
        JSON.parse(
            localStorage.getItem(
                "yugmaAchievements"
            ) || "[]"
        );


    old.unshift(achievement);


    localStorage.setItem(
        "yugmaAchievements",
        JSON.stringify(old)
    );


    $("achievementMessage")
        .textContent =
        "Achievement published successfully.";


    $("achievementTitle").value = "";
    $("achievementOrganization").value = "";
    $("achievementDescription").value = "";


    showToast(
        "Achievement published."
    );

}


/* =========================================================
   MANAGEMENT CARDS
========================================================= */

document.querySelectorAll(
    ".management-card"
).forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const section =
                card.dataset.section;


            if (section === "trainers") {

                document.querySelector(
                    ".approval-table-wrapper"
                ).scrollIntoView({
                    behavior: "smooth"
                });

            }


            else if (section === "trainees") {

                showToast(
                    "Trainee management selected."
                );

            }


            else if (section === "courses") {

                document.querySelector(
                    "#courseGrid"
                ).scrollIntoView({
                    behavior: "smooth"
                });

            }


            else if (section === "assessments") {

                document.querySelector(
                    ".analytics-grid"
                ).scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});


/* =========================================================
   REFRESH
========================================================= */

$("refreshBtn")
    .addEventListener(
        "click",
        () => {

            renderAll();

            showToast(
                "Dashboard data refreshed."
            );

        }
    );


/* =========================================================
   VIEW ALL
========================================================= */

$("viewAllCourses")
    .addEventListener(
        "click",
        () => {

            $("courseGrid").scrollIntoView({
                behavior: "smooth"
            });

        }
    );


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   RENDER EVERYTHING
========================================================= */

function renderAll() {

    renderStatistics();

    renderApprovals();

    renderCourses();

}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadData();

        renderAll();

    }
);