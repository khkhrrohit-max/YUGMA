/* =========================================================
   YUGMA TRAINER MANAGEMENT
========================================================= */

"use strict";


/* =========================================================
   STORAGE
========================================================= */

const COURSE_STORAGE_KEY = "yugmaTrainerCourses";
const PROFILE_STORAGE_KEY = "yugmaTrainerProfile";


let courses = JSON.parse(
    localStorage.getItem(COURSE_STORAGE_KEY)
) || [];


let trainerProfile = JSON.parse(
    localStorage.getItem(PROFILE_STORAGE_KEY)
) || {

    name: "Trainer Name",

    role: "Professional Trainer",

    expertise: ["Trainer"],

    organization: ""

};



/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializePage();

});



/* =========================================================
   INITIALIZE
========================================================= */

function initializePage() {

    setupButtons();

    setupForms();

    setupFileInputs();

    setupSearch();

    renderProfile();

    renderCourses();

    updateStatistics();

}



/* =========================================================
   BUTTONS
========================================================= */

function setupButtons() {


    const createCourseHero =
        document.getElementById("createCourseHero");


    if (createCourseHero) {

        createCourseHero.addEventListener(
            "click",
            function () {

                document
                    .getElementById("createTraining")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    }


    const scrollCourses =
        document.getElementById("scrollCourses");


    if (scrollCourses) {

        scrollCourses.addEventListener(
            "click",
            function () {

                document
                    .getElementById("myTrainings")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    }


    const emptyCreateButton =
        document.getElementById("emptyCreateButton");


    if (emptyCreateButton) {

        emptyCreateButton.addEventListener(
            "click",
            function () {

                document
                    .getElementById("createTraining")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    }


    const editProfileBtn =
        document.getElementById("editProfileBtn");


    if (editProfileBtn) {

        editProfileBtn.addEventListener(
            "click",
            openProfileModal
        );

    }


    const closeProfileModal =
        document.getElementById("closeProfileModal");


    if (closeProfileModal) {

        closeProfileModal.addEventListener(
            "click",
            function () {

                closeModal("profileModal");

            }
        );

    }


    const closeModalButton =
        document.getElementById("closeModal");


    if (closeModalButton) {

        closeModalButton.addEventListener(
            "click",
            function () {

                closeModal("courseModal");

            }
        );

    }


    const courseModal =
        document.getElementById("courseModal");


    if (courseModal) {

        courseModal.addEventListener(
            "click",
            function (event) {

                if (event.target === courseModal) {

                    closeModal("courseModal");

                }

            }
        );

    }


    const profileModal =
        document.getElementById("profileModal");


    if (profileModal) {

        profileModal.addEventListener(
            "click",
            function (event) {

                if (event.target === profileModal) {

                    closeModal("profileModal");

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeModal("courseModal");

                closeModal("profileModal");

            }

        }
    );

}



/* =========================================================
   PROFILE
========================================================= */

function openProfileModal() {

    document.getElementById("trainerName").value =
        trainerProfile.name || "";

    document.getElementById("trainerRole").value =
        trainerProfile.role || "";

    document.getElementById("trainerExpertise").value =
        (trainerProfile.expertise || []).join(", ");

    document.getElementById("trainerOrganization").value =
        trainerProfile.organization || "";

    document
        .getElementById("profileModal")
        .classList.add("show");

}



function renderProfile() {

    const name =
        trainerProfile.name || "Trainer Name";


    document.getElementById(
        "displayTrainerName"
    ).textContent = name;


    document.getElementById(
        "displayTrainerRole"
    ).textContent =
        trainerProfile.role ||
        "Professional Trainer";


    const avatar =
        document.getElementById("profileAvatar");


    const initials =
        getInitials(name);


    avatar.textContent = initials;


    const tags =
        document.getElementById("profileTags");


    tags.innerHTML = "";


    const expertise =
        trainerProfile.expertise || [];


    expertise.forEach(function (skill) {

        const span =
            document.createElement("span");

        span.textContent = skill.trim();

        tags.appendChild(span);

    });


    if (
        trainerProfile.organization &&
        trainerProfile.organization.trim() !== ""
    ) {

        const org =
            document.createElement("span");

        org.textContent =
            trainerProfile.organization;

        tags.appendChild(org);

    }

}



function setupForms() {


    const profileForm =
        document.getElementById("profileForm");


    profileForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("trainerName")
                    .value
                    .trim();


            const role =
                document
                    .getElementById("trainerRole")
                    .value
                    .trim();


            const expertiseText =
                document
                    .getElementById("trainerExpertise")
                    .value
                    .trim();


            const organization =
                document
                    .getElementById("trainerOrganization")
                    .value
                    .trim();


            trainerProfile = {

                name:
                    name ||
                    "Trainer Name",

                role:
                    role ||
                    "Professional Trainer",

                expertise:
                    expertiseText
                        ? expertiseText
                            .split(",")
                            .map(item => item.trim())
                            .filter(Boolean)
                        : ["Trainer"],

                organization

            };


            localStorage.setItem(
                PROFILE_STORAGE_KEY,
                JSON.stringify(trainerProfile)
            );


            renderProfile();

            closeModal("profileModal");

            showToast(
                "Trainer profile updated successfully."
            );

        }
    );

}



/* =========================================================
   COURSE FORM
========================================================= */

function setupCourseForm() {

    const form =
        document.getElementById("courseForm");


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            createCourse();

        }
    );


    const resetButton =
        document.getElementById("resetCourse");


    resetButton.addEventListener(
        "click",
        function () {

            resetCourseForm();

        }
    );

}



/* =========================================================
   COURSE CREATION
========================================================= */

function createCourse() {


    const title =
        getValue("courseTitle");


    const category =
        getValue("courseCategory");


    const level =
        getValue("courseLevel");


    const description =
        getValue("courseDescription");


    if (!title || !category || !description) {

        showToast(
            "Please fill all required fields."
        );

        return;

    }


    const course = {

        id:
            Date.now().toString(),

        title,

        category,

        level,

        description,

        duration:
            getValue("courseDuration") ||
            "Not specified",

        maxTrainees:
            Number(
                getValue("maxTrainees")
            ) || 30,

        startDate:
            getValue("startDate"),

        endDate:
            getValue("endDate"),

        registrationDeadline:
            getValue(
                "registrationDeadline"
            ),

        mode:
            getValue("trainingMode"),

        skills:
            getValue("courseSkills")
                ? getValue("courseSkills")
                    .split(",")
                    .map(skill =>
                        skill.trim()
                    )
                    .filter(Boolean)
                : [],

        resources:
            collectResources(),

        questions:
            collectQuestions(),

        trainees: [],

        participation: 0,

        createdAt:
            new Date().toISOString()

    };


    courses.unshift(course);


    saveCourses();

    renderCourses();

    updateStatistics();

    resetCourseForm();


    showToast(
        "Training program created successfully."
    );


    document
        .getElementById("myTrainings")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =========================================================
   QUESTIONS
========================================================= */

function collectQuestions() {

    const rows =
        document.querySelectorAll(
            ".question-builder"
        );


    const questions = [];


    rows.forEach(function (row) {

        const question =
            row.querySelector(
                ".question-input"
            ).value.trim();


        const type =
            row.querySelector(
                ".question-type"
            ).value;


        const answer =
            row.querySelector(
                ".answer-input"
            ).value.trim();


        if (question) {

            questions.push({

                question,

                type,

                answer

            });

        }

    });


    return questions;

}



function addQuestion() {

    const container =
        document.getElementById(
            "questionContainer"
        );


    const number =
        container.querySelectorAll(
            ".question-builder"
        ).length + 1;


    const div =
        document.createElement("div");


    div.className =
        "question-builder";


    div.innerHTML = `

        <div class="question-number">
            Q${number}
        </div>

        <input
            type="text"
            class="question-input"
            placeholder="Enter assessment question..."
        >

        <select class="question-type">

            <option value="mcq">
                MCQ
            </option>

            <option value="text">
                Written Answer
            </option>

        </select>

        <input
            type="text"
            class="answer-input"
            placeholder="Correct answer / option"
        >

    `;


    container.appendChild(div);

}



/* =========================================================
   FILE RESOURCES
========================================================= */

let selectedResources = [];


function setupFileInputs() {


    const pdf =
        document.getElementById(
            "pdfResources"
        );


    const ppt =
        document.getElementById(
            "pptResources"
        );


    const video =
        document.getElementById(
            "videoResources"
        );


    pdf.addEventListener(
        "change",
        function () {

            handleFiles(
                pdf.files,
                "PDF / Document"
            );

        }
    );


    ppt.addEventListener(
        "change",
        function () {

            handleFiles(
                ppt.files,
                "PPT / Presentation"
            );

        }
    );


    video.addEventListener(
        "change",
        function () {

            handleFiles(
                video.files,
                "Training Video"
            );

        }
    );

}



function handleFiles(files, type) {


    Array.from(files).forEach(
        function (file) {

            selectedResources.push({

                name: file.name,

                type,

                size:
                    formatFileSize(
                        file.size
                    )

            });

        }
    );


    renderResourceList();

}



function renderResourceList() {


    const container =
        document.getElementById(
            "resourceList"
        );


    container.innerHTML = "";


    selectedResources.forEach(
        function (resource) {

            const item =
                document.createElement("div");


            item.className =
                "resource-item";


            item.innerHTML = `

                <i class="fa-solid fa-file"></i>

                <span>
                    ${escapeHtml(resource.name)}
                    (${resource.size})
                </span>

            `;


            container.appendChild(item);

        }
    );

}



function collectResources() {

    return selectedResources.map(
        function (resource) {

            return {

                name: resource.name,

                type: resource.type,

                size: resource.size

            };

        }
    );

}



/* =========================================================
   COURSE RENDERING
========================================================= */

function renderCourses() {


    const container =
        document.getElementById(
            "courseContainer"
        );


    const empty =
        document.getElementById(
            "emptyCourses"
        );


    const search =
        (
            document.getElementById(
                "courseSearch"
            ).value || ""
        )
        .toLowerCase()
        .trim();


    const category =
        document.getElementById(
            "categoryFilter"
        ).value;


    let filtered =
        courses.filter(
            function (course) {

                const matchesSearch =

                    course.title
                        .toLowerCase()
                        .includes(search)

                    ||

                    course.category
                        .toLowerCase()
                        .includes(search)

                    ||

                    course.skills
                        .join(" ")
                        .toLowerCase()
                        .includes(search);


                const matchesCategory =

                    category === "all" ||
                    course.category === category;


                return (
                    matchesSearch &&
                    matchesCategory
                );

            }
        );


    container.innerHTML = "";


    if (filtered.length === 0) {

        empty.style.display = "block";

        return;

    }


    empty.style.display = "none";


    filtered.forEach(
        function (course) {

            container.appendChild(
                createCourseCard(course)
            );

        }
    );

}



/* =========================================================
   COURSE CARD
========================================================= */

function createCourseCard(course) {


    const card =
        document.createElement("article");


    card.className =
        "course-card";


    const traineeCount =
        course.trainees
            ? course.trainees.length
            : 0;


    const participation =
        Number(
            course.participation || 0
        );


    card.innerHTML = `

        <div class="course-top">

            <span class="course-category">
                ${escapeHtml(course.category)}
            </span>

            <span>
                ${escapeHtml(course.level)}
            </span>

        </div>


        <h3>
            ${escapeHtml(course.title)}
        </h3>


        <p class="course-description">

            ${escapeHtml(
                truncate(
                    course.description,
                    125
                )
            )}

        </p>


        <div class="course-meta">

            <div>

                <span>
                    Duration
                </span>

                <strong>
                    ${escapeHtml(course.duration)}
                </strong>

            </div>


            <div>

                <span>
                    Mode
                </span>

                <strong>
                    ${escapeHtml(course.mode)}
                </strong>

            </div>


            <div>

                <span>
                    Trainees
                </span>

                <strong>
                    ${traineeCount} /
                    ${course.maxTrainees}
                </strong>

            </div>


            <div>

                <span>
                    Questions
                </span>

                <strong>
                    ${course.questions.length}
                </strong>

            </div>

        </div>


        <div class="progress-area">

            <div class="progress-header">

                <span>
                    Participation
                </span>

                <strong>
                    ${participation}%
                </strong>

            </div>


            <div class="progress-bar">

                <div
                    class="progress-fill"
                    style="width:${participation}%">
                </div>

            </div>

        </div>


        <div class="course-actions">

            <button
                class="view-button"
                data-action="view"
                data-id="${course.id}">

                <i class="fa-solid fa-eye"></i>
                View

            </button>


            <button
                data-action="edit"
                data-id="${course.id}">

                <i class="fa-solid fa-pen"></i>
                Edit

            </button>


            <button
                data-action="delete"
                data-id="${course.id}">

                <i class="fa-solid fa-trash"></i>
                Delete

            </button>

        </div>

    `;


    card
        .querySelectorAll("button")
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        handleCourseAction(
                            button.dataset.action,
                            button.dataset.id
                        );

                    }
                );

            }
        );


    return card;

}



/* =========================================================
   COURSE ACTION
========================================================= */

function handleCourseAction(action, id) {


    const course =
        courses.find(
            item => item.id === id
        );


    if (!course) return;


    if (action === "view") {

        openCourseDetails(course);

    }


    if (action === "delete") {

        deleteCourse(id);

    }


    if (action === "edit") {

        editCourse(course);

    }

}



/* =========================================================
   COURSE DETAILS
========================================================= */

function openCourseDetails(course) {


    const traineeRows =
        course.trainees &&
        course.trainees.length
            ? course.trainees.map(
                function (trainee) {

                    return `

                        <tr>

                            <td>
                                ${escapeHtml(
                                    trainee.name
                                )}
                            </td>

                            <td>
                                ${escapeHtml(
                                    trainee.course
                                    || "-"
                                )}
                            </td>

                            <td>
                                ${escapeHtml(
                                    trainee.status
                                    || "Active"
                                )}
                            </td>

                        </tr>

                    `;

                }
            ).join("")
            :

            `

                <tr>

                    <td colspan="3">
                        No trainees assigned yet.
                    </td>

                </tr>

            `;


    const skills =
        course.skills.length

            ?

            course.skills.map(
                skill =>
                    `<span>${escapeHtml(skill)}</span>`
            ).join("")

            :

            "<span>No skills added</span>";


    const resources =
        course.resources.length

            ?

            course.resources.map(
                resource => `

                    <p>
                        <i class="fa-solid fa-file"></i>
                        ${escapeHtml(
                            resource.name
                        )}
                    </p>

                `
            ).join("")

            :

            "<p>No resources uploaded.</p>";


    const questions =
        course.questions.length

            ?

            course.questions.map(
                function (question, index) {

                    return `

                        <p>

                            <strong>
                                Q${index + 1}.
                            </strong>

                            ${escapeHtml(
                                question.question
                            )}

                            <br>

                            <small>
                                Type:
                                ${escapeHtml(
                                    question.type
                                )}
                            </small>

                        </p>

                    `;

                }
            ).join("")

            :

            "<p>No assessment questions.</p>";


    const html = `

        <span class="section-label">
            TRAINING DETAILS
        </span>


        <h2 class="detail-title">

            ${escapeHtml(course.title)}

        </h2>


        <p class="detail-description">

            ${escapeHtml(course.description)}

        </p>


        <div class="detail-grid">

            <div class="detail-box">

                <span>
                    Category
                </span>

                <strong>
                    ${escapeHtml(course.category)}
                </strong>

            </div>


            <div class="detail-box">

                <span>
                    Level
                </span>

                <strong>
                    ${escapeHtml(course.level)}
                </strong>

            </div>


            <div class="detail-box">

                <span>
                    Duration
                </span>

                <strong>
                    ${escapeHtml(course.duration)}
                </strong>

            </div>


            <div class="detail-box">

                <span>
                    Start Date
                </span>

                <strong>
                    ${escapeHtml(
                        course.startDate || "-"
                    )}
                </strong>

            </div>


            <div class="detail-box">

                <span>
                    End Date
                </span>

                <strong>
                    ${escapeHtml(
                        course.endDate || "-"
                    )}
                </strong>

            </div>


            <div class="detail-box">

                <span>
                    Registration Deadline
                </span>

                <strong>
                    ${escapeHtml(
                        course.registrationDeadline
                        || "-"
                    )}
                </strong>

            </div>

        </div>


        <div class="detail-section">

            <h4>
                Skills
            </h4>

            <div class="detail-skills">
                ${skills}
            </div>

        </div>


        <div class="detail-section">

            <h4>
                Learning Resources
            </h4>

            ${resources}

        </div>


        <div class="detail-section">

            <h4>
                Assessment
            </h4>

            ${questions}

        </div>


        <div class="detail-section">

            <h4>
                Trainee Management
            </h4>


            <table class="trainee-table">

                <thead>

                    <tr>

                        <th>
                            Trainee
                        </th>

                        <th>
                            Course
                        </th>

                        <th>
                            Status
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${traineeRows}

                </tbody>

            </table>

        </div>

    `;


    document.getElementById(
        "modalBody"
    ).innerHTML = html;


    document
        .getElementById("courseModal")
        .classList.add("show");

}



/* =========================================================
   DELETE
========================================================= */

function deleteCourse(id) {


    const course =
        courses.find(
            item => item.id === id
        );


    if (!course) return;


    const confirmed =
        confirm(
            `Delete "${course.title}"?`
        );


    if (!confirmed) return;


    courses =
        courses.filter(
            item => item.id !== id
        );


    saveCourses();

    renderCourses();

    updateStatistics();


    showToast(
        "Training deleted."
    );

}



/* =========================================================
   EDIT
========================================================= */

function editCourse(course) {


    document.getElementById(
        "courseTitle"
    ).value = course.title;


    document.getElementById(
        "courseCategory"
    ).value = course.category;


    document.getElementById(
        "courseLevel"
    ).value = course.level;


    document.getElementById(
        "courseDescription"
    ).value = course.description;


    document.getElementById(
        "courseDuration"
    ).value = course.duration;


    document.getElementById(
        "maxTrainees"
    ).value = course.maxTrainees;


    document.getElementById(
        "startDate"
    ).value = course.startDate;


    document.getElementById(
        "endDate"
    ).value = course.endDate;


    document.getElementById(
        "registrationDeadline"
    ).value =
        course.registrationDeadline;


    document.getElementById(
        "trainingMode"
    ).value = course.mode;


    document.getElementById(
        "courseSkills"
    ).value =
        course.skills.join(", ");


    document
        .getElementById("createTraining")
        .scrollIntoView({
            behavior: "smooth"
        });


    showToast(
        "Course loaded for editing. Create again to save the updated version."
    );

}



/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {


    document
        .getElementById("courseSearch")
        .addEventListener(
            "input",
            renderCourses
        );


    document
        .getElementById("categoryFilter")
        .addEventListener(
            "change",
            renderCourses
        );

}



/* =========================================================
   STATISTICS
========================================================= */

function updateStatistics() {


    const totalCourses =
        courses.length;


    let totalTrainees = 0;

    let totalAssessments = 0;

    let participationTotal = 0;


    courses.forEach(
        function (course) {

            totalTrainees +=
                course.trainees
                    ? course.trainees.length
                    : 0;


            totalAssessments +=
                course.questions
                    ? course.questions.length
                    : 0;


            participationTotal +=
                Number(
                    course.participation || 0
                );

        }
    );


    const averageParticipation =
        totalCourses
            ?

            Math.round(
                participationTotal /
                totalCourses
            )

            :

            0;


    document.getElementById(
        "totalCourses"
    ).textContent =
        totalCourses;


    document.getElementById(
        "totalTrainees"
    ).textContent =
        totalTrainees;


    document.getElementById(
        "totalAssessments"
    ).textContent =
        totalAssessments;


    document.getElementById(
        "averageParticipation"
    ).textContent =
        averageParticipation + "%";


    document.getElementById(
        "profileCourseCount"
    ).textContent =
        totalCourses;


    document.getElementById(
        "profileTraineeCount"
    ).textContent =
        totalTrainees;


    document.getElementById(
        "profileCompletion"
    ).textContent =
        averageParticipation + "%";

}



/* =========================================================
   RESET FORM
========================================================= */

function resetCourseForm() {


    document
        .getElementById("courseForm")
        .reset();


    selectedResources = [];


    renderResourceList();


    const questionContainer =
        document.getElementById(
            "questionContainer"
        );


    questionContainer.innerHTML = `

        <div class="question-builder">

            <div class="question-number">
                Q1
            </div>

            <input
                type="text"
                class="question-input"
                placeholder="Enter assessment question..."
            >

            <select class="question-type">

                <option value="mcq">
                    MCQ
                </option>

                <option value="text">
                    Written Answer
                </option>

            </select>

            <input
                type="text"
                class="answer-input"
                placeholder="Correct answer / option"
            >

        </div>

    `;


    showToast(
        "Training form reset."
    );

}



/* =========================================================
   STORAGE
========================================================= */

function saveCourses() {

    localStorage.setItem(
        COURSE_STORAGE_KEY,
        JSON.stringify(courses)
    );

}



/* =========================================================
   MODAL
========================================================= */

function closeModal(id) {

    const modal =
        document.getElementById(id);


    if (modal) {

        modal.classList.remove("show");

    }

}



/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(message) {


    const toast =
        document.getElementById("toast");


    const text =
        document.getElementById(
            "toastMessage"
        );


    text.textContent = message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(
            function () {

                toast.classList.remove(
                    "show"
                );

            },
            3000
        );

}



/* =========================================================
   HELPERS
========================================================= */

function getValue(id) {

    const element =
        document.getElementById(id);


    return element
        ? element.value.trim()
        : "";

}



function getInitials(name) {

    const words =
        name
            .trim()
            .split(/\s+/)
            .filter(Boolean);


    if (!words.length) {

        return "TR";

    }


    if (words.length === 1) {

        return words[0]
            .substring(0,2)
            .toUpperCase();

    }


    return (
        words[0][0] +
        words[words.length - 1][0]
    ).toUpperCase();

}



function truncate(text, length) {

    if (!text) return "";

    if (text.length <= length) {

        return text;

    }

    return text.substring(0, length) + "...";

}



function formatFileSize(bytes) {

    if (bytes === 0) {

        return "0 Bytes";

    }


    const sizes = [
        "Bytes",
        "KB",
        "MB",
        "GB"
    ];


    const i =
        Math.floor(
            Math.log(bytes) /
            Math.log(1024)
        );


    return (
        Math.round(
            bytes /
            Math.pow(1024, i) *
            100
        ) / 100
    )
    + " "
    + sizes[i];

}



function escapeHtml(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}



/* =========================================================
   INITIAL FORM SETUP
========================================================= */

setupCourseForm = setupCourseForm;

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const addQuestionButton =
            document.getElementById(
                "addQuestion"
            );


        if (addQuestionButton) {

            addQuestionButton.addEventListener(
                "click",
                addQuestion
            );

        }

    }
);