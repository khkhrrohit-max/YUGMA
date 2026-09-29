/* =========================================================
   YUGMA TRAINER–TRAINING ASSIGNMENT
   ========================================================= */


/* ================= STORAGE ================= */

const ASSIGNMENT_KEY = "yugma_assignments";
const TRAINER_KEY = "yugma_trainers";
const RESOURCE_KEY = "yugma_training_resources";


let assignments =
    JSON.parse(localStorage.getItem(ASSIGNMENT_KEY)) || [];

let trainers =
    JSON.parse(localStorage.getItem(TRAINER_KEY)) || [];

let resources =
    JSON.parse(localStorage.getItem(RESOURCE_KEY)) || [];


/* ================= DEFAULT DATA ================= */

if (assignments.length === 0) {

    assignments = [

        {
            id: Date.now() + 1,

            trainer: "Aman Kumar",

            expertise: "DSA, C++, Competitive Programming",

            course: "Data Structures & Algorithms",

            skills: "C++, Algorithms, Problem Solving",

            mode: "Online",

            status: "Active",

            date: "2026-10-05",

            time: "18:00",

            location: "Google Meet",

            notes:
                "Responsible for DSA training and weekly coding practice."
        },

        {
            id: Date.now() + 2,

            trainer: "Priya Sharma",

            expertise: "AI, Machine Learning, Python",

            course: "Artificial Intelligence Fundamentals",

            skills: "Python, ML, AI",

            mode: "Hybrid",

            status: "Scheduled",

            date: "2026-10-12",

            time: "17:00",

            location: "YUGMA Training Center",

            notes:
                "AI fundamentals and practical machine learning sessions."
        }

    ];

    saveAssignments();
}


if (resources.length === 0) {

    resources = [

        {
            id: Date.now() + 3,

            name: "DSA Practice Workbook",

            type: "PDF",

            trainer: "Aman Kumar",

            link: "#"
        },

        {
            id: Date.now() + 4,

            name: "Machine Learning Introduction",

            type: "Video",

            trainer: "Priya Sharma",

            link: "#"
        }

    ];

    saveResources();
}


/* ================= ELEMENTS ================= */

const assignmentContainer =
    document.getElementById("assignmentContainer");

const resourceContainer =
    document.getElementById("resourceContainer");

const scheduleContainer =
    document.getElementById("scheduleContainer");

const emptyState =
    document.getElementById("emptyState");

const searchInput =
    document.getElementById("searchInput");

const statusFilter =
    document.getElementById("statusFilter");

const modeFilter =
    document.getElementById("modeFilter");

const clearFilters =
    document.getElementById("clearFilters");

const resultText =
    document.getElementById("resultText");

const assignmentModal =
    document.getElementById("assignmentModal");

const trainerModal =
    document.getElementById("trainerModal");

const resourceModal =
    document.getElementById("resourceModal");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");


/* ================= SAVE ================= */

function saveAssignments() {

    localStorage.setItem(
        ASSIGNMENT_KEY,
        JSON.stringify(assignments)
    );
}


function saveTrainers() {

    localStorage.setItem(
        TRAINER_KEY,
        JSON.stringify(trainers)
    );
}


function saveResources() {

    localStorage.setItem(
        RESOURCE_KEY,
        JSON.stringify(resources)
    );
}


/* ================= INITIALIZATION ================= */

document.addEventListener("DOMContentLoaded", function () {

    renderAssignments();

    renderResources();

    renderSchedule();

    updateStats();

});


/* ================= ASSIGNMENT RENDER ================= */

function renderAssignments() {

    const search =
        searchInput.value.trim().toLowerCase();

    const status =
        statusFilter.value;

    const mode =
        modeFilter.value;


    const filtered =
        assignments.filter(function (item) {

            const searchable =
                (
                    item.trainer +
                    " " +
                    item.expertise +
                    " " +
                    item.course +
                    " " +
                    item.skills
                ).toLowerCase();


            const searchMatch =
                searchable.includes(search);


            const statusMatch =
                status === "all" ||
                item.status === status;


            const modeMatch =
                mode === "all" ||
                item.mode === mode;


            return (
                searchMatch &&
                statusMatch &&
                modeMatch
            );

        });


    assignmentContainer.innerHTML = "";


    if (filtered.length === 0) {

        emptyState.classList.remove("hidden");

        resultText.textContent =
            "No matching trainer assignments.";

        return;

    }


    emptyState.classList.add("hidden");


    resultText.textContent =
        `${filtered.length} assignment${filtered.length === 1 ? "" : "s"} found`;


    filtered.forEach(function (item) {

        assignmentContainer.appendChild(
            createAssignmentCard(item)
        );

    });

}


/* ================= CREATE ASSIGNMENT CARD ================= */

function createAssignmentCard(item) {

    const card =
        document.createElement("article");

    card.className = "assignment-card";


    const initials =
        getInitials(item.trainer);


    card.innerHTML = `

        <div class="card-top">

            <div class="trainer-info">

                <div class="trainer-avatar">
                    ${escapeHTML(initials)}
                </div>

                <div>

                    <h3>
                        ${escapeHTML(item.trainer)}
                    </h3>

                    <p>
                        ${escapeHTML(item.expertise)}
                    </p>

                </div>

            </div>


            <span class="status ${item.status.toLowerCase()}">
                ${escapeHTML(item.status)}
            </span>

        </div>


        <div class="course-box">

            <span>ASSIGNED TRAINING PROGRAM</span>

            <h4>
                ${escapeHTML(item.course)}
            </h4>

        </div>


        <div class="assignment-details">

            <div class="detail">

                <span>Required Skills</span>

                <strong>
                    ${escapeHTML(item.skills)}
                </strong>

            </div>


            <div class="detail">

                <span>Training Mode</span>

                <strong>
                    ${escapeHTML(item.mode)}
                </strong>

            </div>


            <div class="detail">

                <span>Date</span>

                <strong>
                    ${formatDate(item.date)}
                </strong>

            </div>


            <div class="detail">

                <span>Time</span>

                <strong>
                    ${escapeHTML(item.time)}
                </strong>

            </div>

        </div>


        <div class="card-actions">

            <button
                class="card-action"
                onclick="viewAssignment(${item.id})">

                <i class="fa-solid fa-eye"></i>
                View

            </button>


            <button
                class="card-action"
                onclick="changeStatus(${item.id})">

                <i class="fa-solid fa-arrows-rotate"></i>
                Status

            </button>


            <button
                class="card-action delete"
                onclick="deleteAssignment(${item.id})">

                <i class="fa-solid fa-trash"></i>

            </button>

        </div>

    `;


    return card;

}


/* ================= RESOURCE RENDER ================= */

function renderResources() {

    resourceContainer.innerHTML = "";


    resources.forEach(function (resource) {

        const card =
            document.createElement("article");

        card.className = "resource-card";


        card.innerHTML = `

            <div class="resource-icon">

                ${getResourceIcon(resource.type)}

            </div>


            <h3>
                ${escapeHTML(resource.name)}
            </h3>


            <p>
                ${escapeHTML(resource.type)}
                •
                ${escapeHTML(resource.trainer)}
            </p>


            <a
                href="${safeURL(resource.link)}"
                target="_blank"
                class="resource-link">

                Open Resource
                <i class="fa-solid fa-arrow-up-right-from-square"></i>

            </a>

        `;


        resourceContainer.appendChild(card);

    });

}


/* ================= SCHEDULE ================= */

function renderSchedule() {

    scheduleContainer.innerHTML = "";


    const upcoming =
        [...assignments]

            .filter(function (item) {

                return item.date;

            })

            .sort(function (a,b) {

                return new Date(a.date) -
                       new Date(b.date);

            })

            .slice(0,6);


    upcoming.forEach(function (item) {

        const row =
            document.createElement("div");

        row.className = "schedule-item";


        row.innerHTML = `

            <div class="schedule-date">

                ${formatShortDate(item.date)}

                <strong>
                    ${escapeHTML(item.time)}
                </strong>

            </div>


            <div class="schedule-info">

                <h3>
                    ${escapeHTML(item.course)}
                </h3>

                <p>
                    Trainer:
                    ${escapeHTML(item.trainer)}
                    •
                    ${escapeHTML(item.location || "Training Center")}
                </p>

            </div>


            <div class="schedule-mode">

                ${escapeHTML(item.mode)}

            </div>

        `;


        scheduleContainer.appendChild(row);

    });

}


/* ================= STATS ================= */

function updateStats() {

    document.getElementById("totalTrainers")
        .textContent = getTrainerCount();


    document.getElementById("totalCourses")
        .textContent = getCourseCount();


    document.getElementById("totalAssignments")
        .textContent = assignments.length;


    document.getElementById("activeAssignments")
        .textContent =
            assignments.filter(function (item) {

                return (
                    item.status === "Active" ||
                    item.status === "Scheduled"
                );

            }).length;

}


/* ================= TRAINER COUNT ================= */

function getTrainerCount() {

    const names =
        new Set();

    trainers.forEach(function (trainer) {

        names.add(trainer.name);

    });


    assignments.forEach(function (item) {

        names.add(item.trainer);

    });


    return names.size;

}


/* ================= COURSE COUNT ================= */

function getCourseCount() {

    const courses =
        new Set();

    assignments.forEach(function (item) {

        courses.add(item.course);

    });


    return courses.size;

}


/* ================= CREATE ASSIGNMENT ================= */

document
    .getElementById("assignmentForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        const assignment = {

            id: Date.now(),

            trainer:
                document.getElementById("trainerName").value.trim(),

            expertise:
                document.getElementById("trainerExpertise").value.trim(),

            course:
                document.getElementById("courseName").value.trim(),

            skills:
                document.getElementById("requiredSkills").value.trim(),

            mode:
                document.getElementById("trainingMode").value,

            status:
                document.getElementById("assignmentStatus").value,

            date:
                document.getElementById("trainingDate").value,

            time:
                document.getElementById("trainingTime").value,

            location:
                document.getElementById("trainingLocation").value.trim(),

            notes:
                document.getElementById("assignmentNotes").value.trim()

        };


        assignments.unshift(assignment);

        saveAssignments();

        renderAssignments();

        renderSchedule();

        updateStats();

        this.reset();

        closeModal(assignmentModal);

        showToast(
            "Trainer assigned successfully."
        );

    });


/* ================= ADD TRAINER ================= */

document
    .getElementById("trainerForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        const trainer = {

            id: Date.now(),

            name:
                document.getElementById("newTrainerName").value.trim(),

            email:
                document.getElementById("newTrainerEmail").value.trim(),

            skills:
                document.getElementById("newTrainerSkills").value.trim(),

            availability:
                document.getElementById("newTrainerAvailability").value

        };


        trainers.push(trainer);

        saveTrainers();

        updateStats();

        this.reset();

        closeModal(trainerModal);

        showToast(
            "Trainer added successfully."
        );

    });


/* ================= ADD RESOURCE ================= */

document
    .getElementById("resourceForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        const resource = {

            id: Date.now(),

            name:
                document.getElementById("resourceName").value.trim(),

            type:
                document.getElementById("resourceType").value,

            trainer:
                document.getElementById("resourceTrainer").value.trim(),

            link:
                document.getElementById("resourceLink").value.trim()

        };


        resources.unshift(resource);

        saveResources();

        renderResources();

        this.reset();

        closeModal(resourceModal);

        showToast(
            "Training resource saved."
        );

    });


/* ================= MODALS ================= */

document
    .getElementById("openAssignmentBtn")
    .addEventListener("click", function () {

        openModal(assignmentModal);

    });


document
    .getElementById("addTrainerBtn")
    .addEventListener("click", function () {

        openModal(trainerModal);

    });


document
    .getElementById("addResourceBtn")
    .addEventListener("click", function () {

        openModal(resourceModal);

    });


document
    .getElementById("closeAssignmentModal")
    .addEventListener("click", function () {

        closeModal(assignmentModal);

    });


document
    .getElementById("closeTrainerModal")
    .addEventListener("click", function () {

        closeModal(trainerModal);

    });


document
    .getElementById("closeResourceModal")
    .addEventListener("click", function () {

        closeModal(resourceModal);

    });


function openModal(modal) {

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeModal(modal) {

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


/* ================= CLOSE OUTSIDE ================= */

document.querySelectorAll(".modal-overlay")
    .forEach(function (overlay) {

        overlay.addEventListener("click", function (event) {

            if (event.target === overlay) {

                closeModal(overlay);

            }

        });

    });


/* ================= FILTERS ================= */

searchInput.addEventListener(
    "input",
    renderAssignments
);

statusFilter.addEventListener(
    "change",
    renderAssignments
);

modeFilter.addEventListener(
    "change",
    renderAssignments
);


clearFilters.addEventListener(
    "click",
    function () {

        searchInput.value = "";

        statusFilter.value = "all";

        modeFilter.value = "all";

        renderAssignments();

    }
);


/* ================= DELETE ================= */

function deleteAssignment(id) {

    const confirmDelete =
        confirm(
            "Do you want to delete this trainer assignment?"
        );


    if (!confirmDelete) {
        return;
    }


    assignments =
        assignments.filter(function (item) {

            return item.id !== id;

        });


    saveAssignments();

    renderAssignments();

    renderSchedule();

    updateStats();

    showToast(
        "Assignment deleted."
    );

}


/* ================= STATUS ================= */

function changeStatus(id) {

    const item =
        assignments.find(function (assignment) {

            return assignment.id === id;

        });


    if (!item) {
        return;
    }


    const statuses = [
        "Pending",
        "Scheduled",
        "Active",
        "Completed"
    ];


    const current =
        statuses.indexOf(item.status);


    item.status =
        statuses[
            (current + 1) % statuses.length
        ];


    saveAssignments();

    renderAssignments();

    renderSchedule();

    updateStats();

    showToast(
        "Assignment status updated."
    );

}


/* ================= VIEW ================= */

function viewAssignment(id) {

    const item =
        assignments.find(function (assignment) {

            return assignment.id === id;

        });


    if (!item) {
        return;
    }


    alert(

        "TRAINER ASSIGNMENT\n\n" +

        "Trainer: " +
        item.trainer +

        "\nExpertise: " +
        item.expertise +

        "\n\nTraining Program: " +
        item.course +

        "\nRequired Skills: " +
        item.skills +

        "\n\nMode: " +
        item.mode +

        "\nStatus: " +
        item.status +

        "\nDate: " +
        formatDate(item.date) +

        "\nTime: " +
        item.time +

        "\nLocation: " +
        (item.location || "Not specified") +

        "\n\nNotes:\n" +
        (item.notes || "No notes added.")

    );

}


/* ================= SEARCH ================= */

function getInitials(name) {

    return name
        .split(" ")
        .filter(Boolean)
        .slice(0,2)
        .map(function (word) {

            return word.charAt(0).toUpperCase();

        })
        .join("");

}


/* ================= DATE ================= */

function formatDate(dateString) {

    if (!dateString) {
        return "Not set";
    }


    const date =
        new Date(dateString + "T00:00:00");


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


function formatShortDate(dateString) {

    if (!dateString) {
        return "N/A";
    }


    const date =
        new Date(dateString + "T00:00:00");


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short"
        }
    );

}


/* ================= RESOURCE ICON ================= */

function getResourceIcon(type) {

    const icons = {

        PDF:
            '<i class="fa-solid fa-file-pdf"></i>',

        Video:
            '<i class="fa-solid fa-video"></i>',

        PPT:
            '<i class="fa-solid fa-file-powerpoint"></i>',

        Questionnaire:
            '<i class="fa-solid fa-clipboard-question"></i>',

        Other:
            '<i class="fa-solid fa-file"></i>'

    };


    return icons[type] ||
           icons.Other;

}


/* ================= SAFE HTML ================= */

function escapeHTML(value) {

    return String(value || "")

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");

}


/* ================= SAFE URL ================= */

function safeURL(url) {

    if (!url) {
        return "#";
    }


    if (
        url.startsWith("https://") ||
        url.startsWith("http://")
    ) {

        return url;

    }


    return "#";

}


/* ================= TOAST ================= */

function showToast(message) {

    toastMessage.textContent = message;

    toast.classList.add("show");


    setTimeout(function () {

        toast.classList.remove("show");

    }, 2800);

}


/* ================= ESC KEY ================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            document.querySelectorAll(
                ".modal-overlay.show"
            ).forEach(function (modal) {

                closeModal(modal);

            });

        }

    }
);