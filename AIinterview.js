/* =========================================================
   YUGMA AI INTERVIEW
   COMPLETE MATCHED JAVASCRIPT
========================================================= */


/* =========================================================
   CONFIGURATION
========================================================= */

const AI_INTERVIEW_API = "";
const ANSWER_SILENCE_DELAY = 2300;
const MIN_AUTO_ADVANCE_WORDS = 3;
const AI_REPLY_DELAY = 450;

const INTERVIEW_DURATION = 3 * 60;

const FACE_LOOK_AWAY_DELAY = 1800;

const SPEECH_WARNING_COOLDOWN = 7000;


/* =========================================================
   QUESTION BANK
========================================================= */

const QUESTION_BANK = {

    HR: [

        {
            id: "hr_intro",
            topic: "HR",
            type: "basic",
            question:
                "Hi, welcome to YUGMA. Please introduce yourself and tell me a little about your background."
        },

        {
            id: "hr_college",
            topic: "HR",
            type: "basic",
            question:
                "Can you tell me about your college, your course, and what you are currently studying?"
        },

        {
            id: "hr_company",
            topic: "HR",
            type: "company",
            question:
                "Why do you want to join our company, and what interests you about this opportunity?"
        },

        {
            id: "hr_strength",
            topic: "HR",
            type: "behavioral",
            question:
                "What is one of your strongest skills, and can you give me a real example where you used it?"
        },

        {
            id: "hr_weakness",
            topic: "HR",
            type: "behavioral",
            question:
                "What is one area you are trying to improve, and what are you doing to improve it?"
        },

        {
            id: "hr_project",
            topic: "HR",
            type: "project",
            question:
                "Tell me about one project you have worked on. What was your role and what did you learn from it?"
        },

        {
            id: "hr_problem",
            topic: "HR",
            type: "behavioral",
            question:
                "Tell me about a difficult problem you faced while studying or working on a project. How did you solve it?"
        },

        {
            id: "hr_pressure",
            topic: "HR",
            type: "behavioral",
            question:
                "How do you handle pressure when you have a deadline and several tasks to complete?"
        },

        {
            id: "hr_hire",
            topic: "HR",
            type: "behavioral",
            question:
                "Why should we hire you for this role?"
        },

        {
            id: "hr_future",
            topic: "HR",
            type: "behavioral",
            question:
                "Where do you see yourself in the next three to five years?"
        }

    ],


    DSA: [

        {
            id: "dsa_binary",
            topic: "DSA",
            type: "technical",
            question:
                "What is the time complexity of binary search, and why?"
        },

        {
            id: "dsa_stack",
            topic: "DSA",
            type: "technical",
            question:
                "What is the difference between a stack and a queue? Give one practical example of each."
        },

        {
            id: "dsa_hash",
            topic: "DSA",
            type: "technical",
            question:
                "What is a hash table, and what is its average time complexity for searching?"
        },

        {
            id: "dsa_bst",
            topic: "DSA",
            type: "technical",
            question:
                "What is a Binary Search Tree, and what traversal gives its values in sorted order?"
        },

        {
            id: "dsa_graph",
            topic: "DSA",
            type: "technical",
            question:
                "What is the difference between BFS and DFS?"
        },

        {
            id: "dsa_array_linked",
            topic: "DSA",
            type: "technical",
            question:
                "What is the difference between an array and a linked list?"
        },

        {
            id: "dsa_recursion",
            topic: "DSA",
            type: "technical",
            question:
                "What is recursion, and what is a base case?"
        },

        {
            id: "dsa_merge",
            topic: "DSA",
            type: "technical",
            question:
                "What is the time complexity of merge sort?"
        }

    ],


    WEB: [

        {
            id: "web_html",
            topic: "Web Development",
            type: "technical",
            question:
                "What is the role of HTML, CSS, and JavaScript in a web application?"
        },

        {
            id: "web_dom",
            topic: "Web Development",
            type: "technical",
            question:
                "What is the DOM in JavaScript?"
        },

        {
            id: "web_api",
            topic: "Web Development",
            type: "technical",
            question:
                "What is an API, and why is it useful in a web application?"
        },

        {
            id: "web_get_post",
            topic: "Web Development",
            type: "technical",
            question:
                "What is the difference between GET and POST requests?"
        },

        {
            id: "web_responsive",
            topic: "Web Development",
            type: "technical",
            question:
                "What does responsive web design mean?"
        },

        {
            id: "web_variables",
            topic: "Web Development",
            type: "technical",
            question:
                "What is the difference between let, const, and var in JavaScript?"
        }

    ],


    LLM: [

        {
            id: "llm_definition",
            topic: "LLM & GenAI",
            type: "technical",
            question:
                "What is a Large Language Model, or LLM, in simple terms?"
        },

        {
            id: "llm_transformer",
            topic: "LLM & GenAI",
            type: "technical",
            question:
                "What is a Transformer architecture and why is it important for modern AI?"
        },

        {
            id: "llm_attention",
            topic: "LLM & GenAI",
            type: "technical",
            question:
                "What is the purpose of the attention mechanism in a Transformer?"
        },

        {
            id: "llm_rag",
            topic: "LLM & GenAI",
            type: "technical",
            question:
                "What is RAG, and how can RAG reduce problems with an AI model's knowledge?"
        },

        {
            id: "llm_hallucination",
            topic: "LLM & GenAI",
            type: "technical",
            question:
                "What is an AI hallucination?"
        },

        {
            id: "llm_prompt",
            topic: "LLM & GenAI",
            type: "technical",
            question:
                "What is prompt engineering?"
        }

    ],


    AI: [

        {
            id: "ai_supervised",
            topic: "AI & ML",
            type: "technical",
            question:
                "What is supervised learning?"
        },

        {
            id: "ai_classification",
            topic: "AI & ML",
            type: "technical",
            question:
                "What is the difference between classification and regression?"
        },

        {
            id: "ai_overfit",
            topic: "AI & ML",
            type: "technical",
            question:
                "What is overfitting in machine learning?"
        },

        {
            id: "ai_training",
            topic: "AI & ML",
            type: "technical",
            question:
                "What is the purpose of a training dataset?"
        },

        {
            id: "ai_validation",
            topic: "AI & ML",
            type: "technical",
            question:
                "Why do we use a validation dataset?"
        }

    ],


    DBMS: [

        {
            id: "db_normalization",
            topic: "DBMS & SQL",
            type: "technical",
            question:
                "What is database normalization, and why is it used?"
        },

        {
            id: "db_primary",
            topic: "DBMS & SQL",
            type: "technical",
            question:
                "What is a primary key?"
        },

        {
            id: "db_where",
            topic: "DBMS & SQL",
            type: "technical",
            question:
                "What is the difference between WHERE and HAVING in SQL?"
        },

        {
            id: "db_join",
            topic: "DBMS & SQL",
            type: "technical",
            question:
                "What is a JOIN in SQL? Name some common types."
        },

        {
            id: "db_acid",
            topic: "DBMS & SQL",
            type: "technical",
            question:
                "What does ACID mean in database transactions?"
        }

    ],


    OOP: [

        {
            id: "oop_definition",
            topic: "OOP",
            type: "technical",
            question:
                "What is Object Oriented Programming?"
        },

        {
            id: "oop_inheritance",
            topic: "OOP",
            type: "technical",
            question:
                "What is inheritance?"
        },

        {
            id: "oop_polymorphism",
            topic: "OOP",
            type: "technical",
            question:
                "What is polymorphism? Give a simple example."
        },

        {
            id: "oop_encapsulation",
            topic: "OOP",
            type: "technical",
            question:
                "What is encapsulation?"
        },

        {
            id: "oop_abstraction",
            topic: "OOP",
            type: "technical",
            question:
                "What is abstraction?"
        }

    ],


    OS: [

        {
            id: "os_process",
            topic: "Operating Systems",
            type: "technical",
            question:
                "What is a process in an operating system?"
        },

        {
            id: "os_thread",
            topic: "Operating Systems",
            type: "technical",
            question:
                "What is the difference between a process and a thread?"
        },

        {
            id: "os_memory",
            topic: "Operating Systems",
            type: "technical",
            question:
                "What is virtual memory?"
        },

        {
            id: "os_deadlock",
            topic: "Operating Systems",
            type: "technical",
            question:
                "What is a deadlock?"
        }

    ],


    CN: [

        {
            id: "cn_tcp",
            topic: "Computer Networks",
            type: "technical",
            question:
                "What is the difference between TCP and UDP?"
        },

        {
            id: "cn_dns",
            topic: "Computer Networks",
            type: "technical",
            question:
                "What does DNS do?"
        },

        {
            id: "cn_ip",
            topic: "Computer Networks",
            type: "technical",
            question:
                "What is an IP address?"
        },

        {
            id: "cn_http",
            topic: "Computer Networks",
            type: "technical",
            question:
                "What does HTTP status code 404 mean?"
        }

    ],


    APTITUDE: [

        {
            id: "apt_profit",
            topic: "Aptitude",
            type: "aptitude",
            question:
                "If a product is bought for 800 and sold for 1000, what is the profit percentage?"
        },

        {
            id: "apt_work",
            topic: "Aptitude",
            type: "aptitude",
            question:
                "If one person completes a job in 10 days, how much work does the person complete in one day?"
        },

        {
            id: "apt_ratio",
            topic: "Aptitude",
            type: "aptitude",
            question:
                "If the ratio of two numbers is 2:3 and their total is 25, what are the numbers?"
        }

    ]

};


/* =========================================================
   STATE
========================================================= */

const state = {

    candidate: {
        name: "",
        age: "",
        course: "",
        branch: "",
        college: "",
        company: "",
        resume: "",
        topics: []
    },

    questions: [],

    currentQuestion: 0,

    answers: [],

    currentTranscript: "",

    interviewStarted: false,

    interviewFinished: false,

    secondsRemaining: INTERVIEW_DURATION,

    timer: null,

    stream: null,

    recognition: null,

    recognitionSupported: false,

    speechSynthesisSupported:
        "speechSynthesis" in window,

    aiSpeaking: false,

    listeningForAnswer: false,

    monitoringEvents: [],

    lastSpeechWarning: 0,

    lookAwayStarted: null,

    faceMesh: null,

    faceDetectionRunning: false,

    faceLoopActive: false,

    lastFaceCheck: 0,

    lastQuestionSpoken: "",

    answerSilenceTimer: null,

    candidateHasSpoken: false,

    processingCandidateAnswer: false,

    scores: {}
};


/* =========================================================
   DOM HELPERS
========================================================= */

function $(id) {
    return document.getElementById(id);
}

function query(selector) {
    return document.querySelector(selector);
}

function queryAll(selector) {
    return Array.from(document.querySelectorAll(selector));
}


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    setupTopicSelection();

    setupResumeUpload();

    setupCandidateForm();

    setupInterviewButtons();

    setupFullscreenMonitoring();

    loadSavedUser();

});


/* =========================================================
   TOPIC SELECTION
   ROBUST FIX
========================================================= */

function setupTopicSelection() {

    const cards = queryAll(".topic-card");

    cards.forEach(card => {

        const checkbox = card.querySelector(".topicCheck");

        if (!checkbox) return;

        updateTopicCard(card, checkbox.checked);

        /*
         * The card is a label. Clicking the real checkbox lets the
         * browser handle the check normally. Clicking the rest of
         * the card is handled here exactly once.
         */
        card.addEventListener("click", event => {

            if (event.target.closest("input.topicCheck")) {
                return;
            }

            event.preventDefault();

            checkbox.checked = !checkbox.checked;

            checkbox.dispatchEvent(
                new Event("change", { bubbles: true })
            );
        });

        checkbox.addEventListener("change", () => {

            updateTopicCard(card, checkbox.checked);
            updateSelectedTopicCount();

        });

    });

    updateSelectedTopicCount();
}

function updateSelectedTopicCount() {

    const countElement = $("selectedCount");

    if (!countElement) return;

    const count = queryAll(".topicCheck:checked").length;

    countElement.textContent = `${count} selected`;
}

function updateTopicCard(card, selected) {

    card.classList.toggle("selected", Boolean(selected));
}


/* =========================================================
   RESUME UPLOAD
========================================================= */

function setupResumeUpload() {

    const input = $("resumeFile");

    const dropArea =
        $("resumeDropArea");

    if (!input || !dropArea) return;


    input.addEventListener(
        "change",
        async () => {

            const file = input.files[0];

            if (!file) return;

            await handleResumeFile(file);

        }
    );


    dropArea.addEventListener(
        "dragover",
        event => {

            event.preventDefault();

            dropArea.classList.add("dragging");

        }
    );


    dropArea.addEventListener(
        "dragleave",
        () => {

            dropArea.classList.remove("dragging");

        }
    );


    dropArea.addEventListener(
        "drop",
        async event => {

            event.preventDefault();

            dropArea.classList.remove("dragging");

            const file =
                event.dataTransfer.files[0];

            if (!file) return;

            await handleResumeFile(file);

        }
    );

}


async function handleResumeFile(file) {

    const fileName =
        $("resumeFileName");

    fileName.classList.add("selected");

    fileName.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Reading ${escapeHTML(file.name)}...
    `;


    try {

        const extension =
            file.name
                .split(".")
                .pop()
                .toLowerCase();


        let text = "";


        /* TXT */

        if (extension === "txt") {

            text = await file.text();

        }


        /* PDF */

        else if (extension === "pdf") {

            text =
                await readPDF(file);

        }


        /* DOCX */

        else if (extension === "docx") {

            text =
                await readDOCX(file);

        }


        /* DOC */

        else if (extension === "doc") {

            fileName.innerHTML = `
                <i class="fa-solid fa-file-word"></i>
                ${escapeHTML(file.name)}
            `;

            showMessage(
                "Old .doc files cannot be reliably read directly in the browser. Please paste the resume text below."
            );

            return;

        }


        else {

            throw new Error(
                "Unsupported file type."
            );

        }


        if (!text.trim()) {

            throw new Error(
                "No readable text was found in the resume."
            );

        }


        $("resumeText").value =
            text.trim();


        fileName.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            ${escapeHTML(file.name)}
            <span>• Resume text loaded</span>
        `;


    } catch (error) {

        console.error(error);

        fileName.classList.remove("selected");

        fileName.innerHTML = `
            <i class="fa-solid fa-triangle-exclamation"></i>
            Could not read ${escapeHTML(file.name)}
        `;

        showMessage(
            "The file could not be read. Please paste your resume text into the resume box."
        );

    }

}


/* =========================================================
   PDF READER
========================================================= */

async function readPDF(file) {

    if (!window.pdfjsLib) {

        throw new Error(
            "PDF reader is unavailable."
        );

    }


    const arrayBuffer =
        await file.arrayBuffer();


    const pdf =
        await pdfjsLib.getDocument({
            data: arrayBuffer
        }).promise;


    let fullText = "";


    for (
        let pageNumber = 1;
        pageNumber <= pdf.numPages;
        pageNumber++
    ) {

        const page =
            await pdf.getPage(pageNumber);


        const content =
            await page.getTextContent();


        const pageText =
            content.items
                .map(item => item.str)
                .join(" ");


        fullText +=
            pageText + "\n";

    }


    return fullText;

}


/* =========================================================
   DOCX READER
========================================================= */

async function readDOCX(file) {

    if (!window.mammoth) {

        throw new Error(
            "DOCX reader is unavailable."
        );

    }


    const arrayBuffer =
        await file.arrayBuffer();


    const result =
        await mammoth.extractRawText({
            arrayBuffer
        });


    return result.value || "";

}


/* =========================================================
   CANDIDATE FORM
========================================================= */

function setupCandidateForm() {

    const form =
        $("candidateForm");

    if (!form) return;


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            prepareInterview();

        }
    );

}


/* =========================================================
   PREPARE INTERVIEW
========================================================= */

function prepareInterview() {

    const topics =
        queryAll(".topicCheck:checked")
            .map(input => input.value);


    const resume =
        $("resumeText").value.trim();


    state.candidate = {

        name:
            $("candidateName").value.trim(),

        age:
            $("candidateAge").value.trim(),

        course:
            $("candidateCourse").value.trim(),

        branch:
            $("candidateBranch").value.trim(),

        college:
            $("candidateCollege").value.trim(),

        company:
            $("targetCompany").value.trim(),

        resume,

        topics

    };


    if (!state.candidate.name) {

        showMessage(
            "Please enter your name."
        );

        $("candidateName").focus();

        return;

    }


    if (!state.candidate.age) {

        showMessage(
            "Please enter your age."
        );

        $("candidateAge").focus();

        return;

    }


    if (!state.candidate.course) {

        showMessage(
            "Please enter your course."
        );

        $("candidateCourse").focus();

        return;

    }


    if (!state.candidate.branch) {

        showMessage(
            "Please enter your branch."
        );

        $("candidateBranch").focus();

        return;

    }


    if (!state.candidate.college) {

        showMessage(
            "Please enter your college."
        );

        $("candidateCollege").focus();

        return;

    }


    if (!state.candidate.company) {

        showMessage(
            "Please enter your target company."
        );

        $("targetCompany").focus();

        return;

    }


    if (topics.length === 0) {

        showMessage(
            "Please select at least one interview topic."
        );

        return;

    }


    if (!resume) {

        const confirmWithoutResume =
            confirm(
                "You have not provided a resume. YUGMA can continue, but resume cross-verification will be limited.\n\nContinue without resume?"
            );

        if (!confirmWithoutResume) {
            return;
        }

    }


    localStorage.setItem(
        "yugmaAIInterviewCandidate",
        JSON.stringify(state.candidate)
    );


    generateInterviewQuestions();


    $("setupSection")
        .classList.add("hidden");


    $("interviewPreparation")
        .classList.remove("hidden");


    $("preparationCompany")
        .textContent =
        state.candidate.company;


    $("preparationQuestionCount")
        .textContent =
        state.questions.length;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   QUESTION GENERATION
========================================================= */

function generateInterviewQuestions() {

    const selectedTopics =
        state.candidate.topics;


    let questions = [];


    /* Always begin naturally with HR */

    questions.push(
        QUESTION_BANK.HR[0]
    );

    questions.push(
        QUESTION_BANK.HR[1]
    );


    /* Company question */

    questions.push(
        createCompanyQuestion()
    );


    /* Selected technical topics */

    selectedTopics.forEach(topic => {

        const key =
            normalizeTopic(topic);


        const bank =
            QUESTION_BANK[key];


        if (!bank) return;


        const technicalQuestions =
            shuffleArray(
                bank
            );


        technicalQuestions
            .slice(0, 2)
            .forEach(question => {

                questions.push(question);

            });

    });


    /* HR behavioral */

    const behavioral =
        QUESTION_BANK.HR
            .filter(q =>
                q.type === "behavioral" ||
                q.type === "project"
            );


    shuffleArray(behavioral)
        .slice(0, 3)
        .forEach(question => {

            questions.push(question);

        });


    /* Remove duplicates */

    const unique = [];

    const ids = new Set();


    questions.forEach(question => {

        if (!ids.has(question.id)) {

            ids.add(question.id);

            unique.push(question);

        }

    });


    /* Maximum 10 */

    state.questions =
        unique.slice(0, 10);


    /* Reset */

    state.currentQuestion = 0;

    state.answers = [];

    state.currentTranscript = "";

}


function createCompanyQuestion() {

    const company =
        state.candidate.company;


    return {

        id: "company_dynamic",

        topic: "HR",

        type: "company",

        question:
            `You are preparing for ${company}. What do you know about the company, and why would you like to work there?`

    };

}


function normalizeTopic(topic) {

    const value =
        topic.toLowerCase();


    if (value.includes("dsa")) {
        return "DSA";
    }

    if (
        value.includes("web")
    ) {
        return "WEB";
    }

    if (
        value.includes("llm") ||
        value.includes("genai")
    ) {
        return "LLM";
    }

    if (
        value.includes("ai") ||
        value.includes("ml")
    ) {
        return "AI";
    }

    if (
        value.includes("dbms") ||
        value.includes("sql")
    ) {
        return "DBMS";
    }

    if (
        value.includes("oop")
    ) {
        return "OOP";
    }

    if (
        value.includes("operating")
    ) {
        return "OS";
    }

    if (
        value.includes("network")
    ) {
        return "CN";
    }

    if (
        value.includes("aptitude")
    ) {
        return "APTITUDE";
    }

    return null;

}


/* =========================================================
   INTERVIEW BUTTONS
========================================================= */

function setupInterviewButtons() {

    $("startInterviewButton")
        ?.addEventListener(
            "click",
            () => {

                $("permissionModal")
                    .classList.remove("hidden");

            }
        );


    $("cancelInterviewAccess")
        ?.addEventListener(
            "click",
            () => {

                $("permissionModal")
                    .classList.add("hidden");

            }
        );


    $("allowInterviewAccess")
        ?.addEventListener(
            "click",
            async () => {

                await startInterviewWithPermissions();

            }
        );


    $("nextQuestionButton")
        ?.addEventListener(
            "click",
            () => {

                nextQuestion();

            }
        );


    $("finishInterviewButton")
        ?.addEventListener(
            "click",
            () => {

                finishInterview();

            }
        );


    $("repeatQuestionButton")
        ?.addEventListener(
            "click",
            () => {

                speakCurrentQuestion();

            }
        );


    $("newInterviewButton")
        ?.addEventListener(
            "click",
            () => {

                location.reload();

            }
        );

}


/* =========================================================
   CAMERA + MICROPHONE
========================================================= */

async function startInterviewWithPermissions() {

    const allowButton =
        $("allowInterviewAccess");


    allowButton.disabled = true;

    allowButton.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Requesting access...
    `;


    try {

        await requestCameraAndMicrophone();

        await requestFullscreen();


        $("permissionModal")
            .classList.add("hidden");


        $("interviewPreparation")
            .classList.add("hidden");


        $("interviewScreen")
            .classList.remove("hidden");


        startInterviewSession();


    } catch (error) {

        console.error(error);


        showMessage(
            "Camera and microphone access is required to start the interview. Please allow browser permissions and try again."
        );


        allowButton.disabled = false;

        allowButton.innerHTML = `
            <i class="fa-solid fa-shield-check"></i>
            Allow & Continue
        `;

    }

}


async function requestCameraAndMicrophone() {

    if (
        !navigator.mediaDevices ||
        !navigator.mediaDevices.getUserMedia
    ) {

        throw new Error(
            "Camera and microphone are not supported by this browser."
        );

    }


    state.stream =
        await navigator.mediaDevices.getUserMedia({

            video: {
                facingMode: "user",
                width: {
                    ideal: 1280
                },
                height: {
                    ideal: 720
                }
            },

            audio: {
                echoCancellation: true,
                noiseSuppression: true,
                autoGainControl: true
            }

        });


    const video =
        $("candidateVideo");


    video.srcObject =
        state.stream;


    await video.play();


    updateStatus(
        "cameraStatus",
        "Camera connected",
        true
    );


    updateStatus(
        "micStatus",
        "Microphone connected",
        true
    );

}


/* =========================================================
   FULLSCREEN
========================================================= */

async function requestFullscreen() {

    try {

        if (
            !document.fullscreenElement &&
            document.documentElement.requestFullscreen
        ) {

            await document.documentElement.requestFullscreen();

        }

        updateStatus(
            "fullscreenStatus",
            "Fullscreen active",
            true
        );

    } catch (error) {

        console.warn(
            "Fullscreen request failed:",
            error
        );

        updateStatus(
            "fullscreenStatus",
            "Fullscreen not active",
            false
        );

    }

}


function setupFullscreenMonitoring() {

    document.addEventListener(
        "fullscreenchange",
        () => {

            if (
                state.interviewStarted &&
                !document.fullscreenElement
            ) {

                addMonitoringEvent(
                    "You exited fullscreen during the interview."
                );

                showMonitorWarning(
                    "Please stay in fullscreen during the interview."
                );

            }

        }
    );

}


/* =========================================================
   START SESSION
========================================================= */

function startInterviewSession() {

    state.interviewStarted = true;

    state.interviewFinished = false;

    state.secondsRemaining =
        INTERVIEW_DURATION;


    $("liveCompany")
        .textContent =
        state.candidate.company;


    $("liveCandidateName")
        .textContent =
        state.candidate.name;


    $("totalQuestions")
        .textContent =
        state.questions.length;


    setupSpeechRecognition();

    setupFaceMonitoring();

    startTimer();

    renderCurrentQuestion();

}


/* =========================================================
   RENDER QUESTION
========================================================= */

function renderCurrentQuestion() {

    const question =
        state.questions[
            state.currentQuestion
        ];


    if (!question) {

        finishInterview();

        return;

    }


    state.currentTranscript = "";


    $("liveTranscript")
        .textContent =
        "Start speaking when you are ready...";


    $("questionNumber")
        .textContent =
        state.currentQuestion + 1;


    const total =
        state.questions.length;


    const progress =
        ((state.currentQuestion + 1) /
            total) * 100;


    $("questionProgress")
        .style.width =
        `${progress}%`;


    $("aiQuestion")
        .textContent =
        question.question;


    $("nextQuestionButton")
        .innerHTML =
        state.currentQuestion ===
        state.questions.length - 1

            ? `Finish Interview
               <i class="fa-solid fa-flag-checkered"></i>`

            : `Next Question
               <i class="fa-solid fa-arrow-right"></i>`;


    speakCurrentQuestion();

}


/* =========================================================
   HUMAN-LIKE AI HR SPEECH
========================================================= */

function speakCurrentQuestion() {

    const question = state.questions[state.currentQuestion];

    if (!question) return;

    const text = makeNaturalHRText(question.question);

    state.lastQuestionSpoken = text;
    state.candidateHasSpoken = false;
    clearAnswerSilenceTimer();

    speakAI(text, () => {

        state.listeningForAnswer = true;

        updateStatus(
            "voiceStatus",
            "Listening to your answer",
            true
        );

    });
}

function speakAI(text, onEnd) {

    if (!state.speechSynthesisSupported) {
        if (typeof onEnd === "function") onEnd();
        return;
    }

    window.speechSynthesis.cancel();
    setAvatarSpeaking(true);

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = getBestEnglishVoice();

    if (voice) utterance.voice = voice;

    utterance.lang = "en-US";
    utterance.rate = 0.90;
    utterance.pitch = 0.96;
    utterance.volume = 1;

    state.aiSpeaking = true;
    state.listeningForAnswer = false;

    utterance.onstart = () => {
        state.aiSpeaking = true;
        state.listeningForAnswer = false;
        setAvatarSpeaking(true);

        updateStatus(
            "voiceStatus",
            "AI HR is speaking",
            true
        );
    };

    utterance.onend = () => {
        state.aiSpeaking = false;
        state.listeningForAnswer = true;
        setAvatarSpeaking(false);

        updateStatus(
            "voiceStatus",
            "Listening to your answer",
            true
        );

        if (typeof onEnd === "function") {
            onEnd();
        }
    };

    utterance.onerror = error => {
        console.warn("Speech synthesis error:", error);
        state.aiSpeaking = false;
        state.listeningForAnswer = true;
        setAvatarSpeaking(false);

        if (typeof onEnd === "function") {
            onEnd();
        }
    };

    window.speechSynthesis.speak(utterance);
}

function setAvatarSpeaking(speaking) {

    queryAll(".ai-avatar-large, .ai-hero-avatar")
        .forEach(avatar => {
            avatar.classList.toggle("is-speaking", speaking);
        });
}

function makeNaturalHRText(question) {

    const name = state.candidate.name || "there";
    const company = state.candidate.company || "the company";
    const lower = question.toLowerCase();

    if (lower.includes("introduce yourself")) {
        return `Hello ${name}. Welcome to your YUGMA interview. Please relax and take your time. Let's start with something simple. Could you please introduce yourself and tell me a little about your background?`;
    }

    if (lower.includes("college")) {
        return `Thank you, ${name}. Now let's talk about your academic background. Could you tell me about your college, your course, and what you are currently studying?`;
    }

    if (lower.includes("why do you want to join")) {
        return `Alright. Let's talk about ${company}. Why do you want to join the company, and what interests you about this opportunity?`;
    }

    if (lower.includes("strongest skill")) {
        return `Good. Now let's talk about your strengths. What is one of your strongest skills, and can you give me a real example where you used it?`;
    }

    if (lower.includes("area you are trying")) {
        return `That's a good question to think about. What is one area you are currently trying to improve, and what are you doing to improve it?`;
    }

    if (lower.includes("project")) {
        return `Let's talk about your project. Tell me about one project you have worked on. What was your role, what did you build, and what did you learn from it?`;
    }

    if (lower.includes("difficult problem")) {
        return `Tell me about a difficult problem you faced while studying or working on a project. What happened, and how did you solve it?`;
    }

    if (lower.includes("pressure")) {
        return `Imagine you have a tight deadline and several tasks to complete. How would you handle that situation?`;
    }

    if (lower.includes("why should we hire")) {
        return `Alright. Imagine I am the hiring manager. Why should we hire you for this role?`;
    }

    if (lower.includes("three to five years")) {
        return `Where do you see yourself in the next three to five years, and what kind of professional do you want to become?`;
    }

    return `Okay. Let's move to the technical part. ${question}`;
}

/* =========================================================
   VOICE SELECTION
========================================================= */

function getBestEnglishVoice() {

    const voices =
        window.speechSynthesis
            .getVoices();


    if (!voices.length) {
        return null;
    }


    const preferredMaleNames = [
        "David",
        "Guy",
        "Mark",
        "Daniel",
        "George",
        "Microsoft David",
        "Google US English Male",
        "Google UK English Male"
    ];

    const preferredMale =
        voices.find(voice =>
            preferredMaleNames.some(name =>
                voice.name.toLowerCase().includes(name.toLowerCase())
            )
        );

    if (preferredMale) {
        return preferredMale;
    }

    const preferred =
        voices.find(
            voice =>
                voice.lang === "en-US"
        );


    if (preferred) {
        return preferred;
    }


    const english =
        voices.find(
            voice =>
                voice.lang.startsWith("en")
        );


    return english || voices[0];

}


if ("speechSynthesis" in window) {

    window.speechSynthesis
        .addEventListener(
            "voiceschanged",
            () => {
                getBestEnglishVoice();
            }
        );

}


/* =========================================================
   SPEECH RECOGNITION
========================================================= */

function setupSpeechRecognition() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        state.recognitionSupported =
            false;

        updateStatus(
            "voiceStatus",
            "Voice recognition unavailable",
            false
        );

        return;

    }


    state.recognitionSupported =
        true;


    const recognition =
        new SpeechRecognition();


    recognition.continuous =
        true;


    recognition.interimResults =
        true;


    recognition.lang =
        "en-US";


    recognition.onstart = () => {

        updateStatus(
            "voiceStatus",
            "Listening to your answer",
            true
        );

    };


    recognition.onresult = event => {

        let finalText = "";

        let interimText = "";


        for (
            let i = event.resultIndex;
            i < event.results.length;
            i++
        ) {

            const text =
                event.results[i][0]
                    .transcript;


            if (
                event.results[i].isFinal
            ) {

                finalText +=
                    text + " ";

            } else {

                interimText +=
                    text;

            }

        }


        const recognizedText =
            (finalText + " " + interimText).trim();

        /*
         * While AI HR is speaking, the microphone can hear the
         * synthetic voice. We use that event only for monitoring
         * and never put the AI's words into the candidate answer.
         */
        if (state.aiSpeaking) {

            if (recognizedText) {
                analyzeSpeechActivity(recognizedText);
            }

            return;
        }

        if (finalText) {

            state.currentTranscript +=
                finalText;

        }


        const display =
            (
                state.currentTranscript +
                interimText
            ).trim();


        if (display) {

            $("liveTranscript")
                .textContent =
                display;

        }


        analyzeSpeechActivity(
            display
        );

    };


    recognition.onerror = event => {

        console.warn(
            "Speech recognition:",
            event.error
        );

    };


    recognition.onend = () => {

        if (
            state.interviewStarted &&
            !state.interviewFinished
        ) {

            try {

                recognition.start();

            } catch (error) {
                // already running
            }

        }

    };


    state.recognition =
        recognition;


    try {

        recognition.start();

    } catch (error) {

        console.warn(error);

    }

}


/* =========================================================
   SPEECH ACTIVITY
========================================================= */

function analyzeSpeechActivity(text) {

    if (!text) return;


    /*
      Important:
      During the candidate's answer, speech is expected.
      Therefore we only warn when speech occurs while the
      AI HR is still speaking.
    */

    if (
        state.aiSpeaking
    ) {

        const now =
            Date.now();


        if (
            now -
            state.lastSpeechWarning
            >
            SPEECH_WARNING_COOLDOWN
        ) {

            state.lastSpeechWarning =
                now;


            addMonitoringEvent(
                "Speech was detected while the AI HR was asking a question."
            );


            showMonitorWarning(
                "Please don't talk to another person. Please listen to the interviewer."
            );


            speakWarning(
                "Please don't talk to another person. Please listen to me."
            );

        }

    }

    /* After the candidate becomes silent, automatically continue. */
    if (
        !state.aiSpeaking &&
        state.listeningForAnswer &&
        state.interviewStarted
    ) {
        state.candidateHasSpoken = true;
        scheduleCandidateTurnCompletion();
    }

}


/* =========================================================
   REAL-TIME CANDIDATE TURN
========================================================= */

function scheduleCandidateTurnCompletion() {

    clearAnswerSilenceTimer();

    if (!state.listeningForAnswer || state.aiSpeaking) {
        return;
    }

    const answer = state.currentTranscript.trim();
    const words = answer ? answer.split(/\s+/).filter(Boolean) : [];

    if (words.length < MIN_AUTO_ADVANCE_WORDS) {
        return;
    }

    state.answerSilenceTimer = setTimeout(() => {
        completeCandidateTurn();
    }, ANSWER_SILENCE_DELAY);
}

function clearAnswerSilenceTimer() {

    if (state.answerSilenceTimer) {
        clearTimeout(state.answerSilenceTimer);
        state.answerSilenceTimer = null;
    }
}

async function completeCandidateTurn() {

    if (
        !state.interviewStarted ||
        state.interviewFinished ||
        state.processingCandidateAnswer
    ) {
        return;
    }

    const answer = state.currentTranscript.trim();

    if (answer.split(/\s+/).filter(Boolean).length < MIN_AUTO_ADVANCE_WORDS) {
        return;
    }

    state.processingCandidateAnswer = true;
    clearAnswerSilenceTimer();
    state.listeningForAnswer = false;

    saveCurrentAnswer();

    const currentQuestion =
        state.questions[state.currentQuestion];

    const response =
        await getInterviewerResponse(
            currentQuestion,
            answer
        );

    if (!state.interviewStarted || state.interviewFinished) {
        state.processingCandidateAnswer = false;
        return;
    }

    if (
        state.currentQuestion >=
        state.questions.length - 1
    ) {

        state.processingCandidateAnswer = false;

        speakAI(
            `${response.acknowledgement} Thank you. That completes your interview. I will now prepare your performance analysis.`,
            () => finishInterview()
        );

        return;
    }

    const nextQuestion = response.followUpQuestion;

    if (nextQuestion) {

        state.questions.splice(
            state.currentQuestion + 1,
            0,
            {
                id: `followup_${Date.now()}`,
                topic: currentQuestion.topic,
                type: "follow-up",
                question: nextQuestion
            }
        );

        /* Keep the interview from growing forever. */
        if (state.questions.length > 12) {
            state.questions.splice(12);
        }
    }

    state.currentQuestion++;
    state.processingCandidateAnswer = false;

    renderCurrentQuestion();
}

async function getInterviewerResponse(question, answer) {

    /*
     * If a secure backend endpoint is configured, YUGMA can ask
     * a real LLM for the next conversational response. The API key
     * must stay on the backend, never in this browser file.
     */
    if (AI_INTERVIEW_API) {

        try {

            const response = await fetch(
                AI_INTERVIEW_API,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        candidate: state.candidate,
                        question,
                        answer,
                        history: state.answers
                    })
                }
            );

            if (response.ok) {

                const data = await response.json();

                if (data && (data.acknowledgement || data.followUpQuestion)) {
                    return {
                        acknowledgement:
                            data.acknowledgement ||
                            "Thank you. That's helpful.",
                        followUpQuestion:
                            data.followUpQuestion || ""
                    };
                }
            }

        } catch (error) {
            console.warn(
                "AI backend unavailable. Using local adaptive interviewer.",
                error
            );
        }
    }

    return buildLocalInterviewerResponse(question, answer);
}

function buildLocalInterviewerResponse(question, answer) {

    const text = answer.toLowerCase();
    const q = question.question.toLowerCase();

    let acknowledgement = "Thank you. That's helpful.";

    if (text.includes("i don't know") || text.includes("dont know")) {
        acknowledgement =
            "That's okay. Thank you for being honest.";
    } else if (answer.split(/\s+/).filter(Boolean).length < 12) {
        acknowledgement =
            "Thank you. Please try to keep your answer clear and specific.";
    } else if (text.includes("project")) {
        acknowledgement =
            "Good. You have explained the project clearly.";
    } else if (text.includes("because") || text.includes("example")) {
        acknowledgement =
            "Good. I like that you supported your answer with a reason or example.";
    }

    let followUpQuestion = "";

    /* Resume/project based follow-up */
    if (
        text.includes("project") ||
        q.includes("project") ||
        text.includes("internship")
    ) {
        followUpQuestion =
            "You mentioned that experience. What was your specific role, and what was the most important thing you learned from it?";
    }

    /* Skill based follow-up */
    else if (
        text.includes("python") ||
        text.includes("java") ||
        text.includes("javascript") ||
        text.includes("react") ||
        text.includes("c++") ||
        text.includes("sql")
    ) {
        followUpQuestion =
            "You mentioned a technical skill. Can you give me one practical example of how you have used it?";
    }

    /* Technical explanation follow-up */
    else if (
        question.type === "technical" ||
        question.type === "follow-up"
    ) {
        followUpQuestion =
            "Good. Can you explain that with a simple practical example?";
    }

    return {
        acknowledgement,
        followUpQuestion
    };
}


/* =========================================================
   AI WARNING SPEECH
========================================================= */

function speakWarning(text) {

    if (!state.speechSynthesisSupported) {
        return;
    }

    speakAI(text);
}


/* =========================================================
   FACE MONITORING
========================================================= */

function setupFaceMonitoring() {

    if (
        !window.FaceMesh
    ) {

        console.warn(
            "MediaPipe Face Mesh unavailable."
        );

        return;

    }


    const video =
        $("candidateVideo");


    state.faceMesh =
        new FaceMesh({

            locateFile: file =>
                `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`

        });


    state.faceMesh.setOptions({

        maxNumFaces: 1,

        refineLandmarks: true,

        minDetectionConfidence: 0.55,

        minTrackingConfidence: 0.55

    });


    state.faceMesh.onResults(
        handleFaceResults
    );


    state.faceDetectionRunning =
        true;


    startFaceLoop(video);

}


async function startFaceLoop(video) {

    if (
        state.faceLoopActive
    ) {

        return;

    }


    state.faceLoopActive =
        true;


    const loop = async () => {

        if (
            !state.interviewStarted ||
            state.interviewFinished
        ) {

            state.faceLoopActive =
                false;

            return;

        }


        const now =
            Date.now();


        /*
          Analyze approximately every 250 ms
          to reduce CPU usage.
        */

        if (
            now -
            state.lastFaceCheck
            >
            250
        ) {

            state.lastFaceCheck =
                now;


            try {

                if (
                    video.readyState >= 2
                ) {

                    await state.faceMesh.send({
                        image: video
                    });

                }

            } catch (error) {

                console.warn(
                    "Face monitoring error:",
                    error
                );

            }

        }


        requestAnimationFrame(
            loop
        );

    };


    loop();

}


/* =========================================================
   FACE RESULTS
========================================================= */

function handleFaceResults(results) {

    if (
        !results.multiFaceLandmarks ||
        results.multiFaceLandmarks.length === 0
    ) {

        handleFaceAway();

        return;

    }


    const landmarks =
        results.multiFaceLandmarks[0];


    /*
      Approximate face orientation.

      Nose tip = landmark 1
      Face sides = landmarks 234 and 454

      This is an approximate browser-based check,
      not a medical or security-grade eye tracker.
    */

    const nose =
        landmarks[1];


    const leftFace =
        landmarks[234];


    const rightFace =
        landmarks[454];


    const faceWidth =
        Math.abs(
            rightFace.x -
            leftFace.x
        );


    if (
        faceWidth < 0.02
    ) {

        handleFaceAway();

        return;

    }


    const faceCenter =
        (
            leftFace.x +
            rightFace.x
        ) / 2;


    const horizontalOffset =
        Math.abs(
            nose.x -
            faceCenter
        ) / faceWidth;


    /*
      If the face turns significantly away,
      start a timer.
    */

    if (
        horizontalOffset > 0.23
    ) {

        handleFaceAway();

    } else {

        handleFaceLookingHere();

    }

}


function handleFaceAway() {

    if (
        !state.interviewStarted ||
        state.interviewFinished
    ) {

        return;

    }


    if (
        state.lookAwayStarted === null
    ) {

        state.lookAwayStarted =
            Date.now();

        return;

    }


    const elapsed =
        Date.now() -
        state.lookAwayStarted;


    if (
        elapsed >=
        FACE_LOOK_AWAY_DELAY
    ) {

        state.lookAwayStarted =
            null;


        addMonitoringEvent(
            "Candidate looked away from the camera."
        );


        showMonitorWarning(
            "Please don't look away. Please look here."
        );


        speakWarning(
            "Please don't look away. Please look here."
        );

    }

}


function handleFaceLookingHere() {

    state.lookAwayStarted =
        null;

}


/* =========================================================
   MONITORING WARNING UI
========================================================= */

function showMonitorWarning(text) {

    const alert =
        $("monitorAlert");


    if (!alert) return;


    alert.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation"></i>
        <span>${escapeHTML(text)}</span>
    `;


    alert.classList.add("show");


    clearTimeout(
        alert.hideTimer
    );


    alert.hideTimer =
        setTimeout(
            () => {

                alert.classList.remove(
                    "show"
                );

            },
            4500
        );

}


/* =========================================================
   MONITORING EVENTS
========================================================= */

function addMonitoringEvent(message) {

    state.monitoringEvents.push({

        message,

        time:
            new Date()
                .toLocaleTimeString()

    });

    updateStatus(
        "monitoringCount",
        String(
            state.monitoringEvents.length
        ),
        false
    );

}


/* =========================================================
   TIMER
========================================================= */

function startTimer() {

    clearInterval(
        state.timer
    );

    clearAnswerSilenceTimer();


    updateTimerUI();


    state.timer =
        setInterval(
            () => {

                state.secondsRemaining--;


                updateTimerUI();


                if (
                    state.secondsRemaining <= 0
                ) {

                    clearInterval(
                        state.timer
                    );


                    finishInterview();

                }

            },
            1000
        );

}


function updateTimerUI() {

    const minutes =
        Math.floor(
            state.secondsRemaining / 60
        );


    const seconds =
        state.secondsRemaining % 60;


    $("interviewTimer")
        .textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    if (
        state.secondsRemaining <= 30
    ) {

        $("interviewTimer")
            .style.color =
            "#f04438";

    } else {

        $("interviewTimer")
            .style.color =
            "";

    }

}


/* =========================================================
   NEXT QUESTION
========================================================= */

function nextQuestion() {

    if (
        !state.interviewStarted ||
        state.interviewFinished ||
        state.processingCandidateAnswer
    ) {

        return;

    }


    clearAnswerSilenceTimer();
    state.listeningForAnswer = false;
    saveCurrentAnswer();


    if (
        state.currentQuestion >=
        state.questions.length - 1
    ) {

        finishInterview();

        return;

    }


    state.currentQuestion++;


    renderCurrentQuestion();

}


/* =========================================================
   SAVE ANSWER
========================================================= */

function saveCurrentAnswer() {

    const question =
        state.questions[
            state.currentQuestion
        ];


    if (!question) return;


    const existing =
        state.answers[
            state.currentQuestion
        ];


    const answer =
        state.currentTranscript
            .trim();


    state.answers[
        state.currentQuestion
    ] = {

        questionId:
            question.id,

        question:
            question.question,

        topic:
            question.topic,

        type:
            question.type,

        answer,

        words:
            answer
                ? answer
                    .split(/\s+/)
                    .filter(Boolean)
                    .length
                : 0,

        skipped:
            !answer,

        timestamp:
            Date.now()

    };

}


/* =========================================================
   FINISH
========================================================= */

function finishInterview() {

    if (
        state.interviewFinished
    ) {

        return;

    }


    saveCurrentAnswer();


    state.interviewFinished =
        true;


    state.interviewStarted =
        false;


    clearInterval(
        state.timer
    );


    if (
        window.speechSynthesis
    ) {

        window.speechSynthesis.cancel();

    }


    if (
        state.recognition
    ) {

        try {

            state.recognition.stop();

        } catch (error) {}

    }


    stopCamera();


    exitFullscreen();


    $("interviewScreen")
        .classList.add("hidden");


    $("analysisLoading")
        .classList.remove("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    /*
      Small delay makes the analysis feel like a real
      interview processing stage.
    */

    setTimeout(
        () => {

            generateFinalAnalysis();

        },
        2200
    );

}


/* =========================================================
   STOP CAMERA
========================================================= */

function stopCamera() {

    if (
        state.stream
    ) {

        state.stream
            .getTracks()
            .forEach(
                track =>
                    track.stop()
            );

        state.stream =
            null;

    }

}


/* =========================================================
   EXIT FULLSCREEN
========================================================= */

async function exitFullscreen() {

    try {

        if (
            document.fullscreenElement &&
            document.exitFullscreen
        ) {

            await document.exitFullscreen();

        }

    } catch (error) {

        console.warn(error);

    }

}


/* =========================================================
   FINAL ANALYSIS
========================================================= */

function generateFinalAnalysis() {

    const resumeAnalysis =
        analyzeResume();


    const answerAnalysis =
        analyzeAnswers();


    const monitoringAnalysis =
        analyzeMonitoring();


    const scores =
        calculateScores(
            resumeAnalysis,
            answerAnalysis,
            monitoringAnalysis
        );


    state.scores =
        scores;


    renderResults(
        resumeAnalysis,
        answerAnalysis,
        monitoringAnalysis,
        scores
    );


    $("analysisLoading")
        .classList.add("hidden");


    $("interviewResult")
        .classList.remove("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   RESUME ANALYSIS
========================================================= */

function analyzeResume() {

    const text =
        state.candidate.resume || "";


    if (!text.trim()) {

        return {

            provided: false,

            checks: [
                {
                    type: "warning",
                    text:
                        "No resume was provided, so YUGMA could not perform complete resume cross-verification."
                }
            ]

        };

    }


    const normalized =
        text.toLowerCase();


    const checks = [];


    /* Name */

    if (
        containsMeaningful(
            normalized,
            state.candidate.name
        )
    ) {

        checks.push({
            type: "good",
            text:
                "Your name appears in the resume and matches the candidate details."
        });

    } else {

        checks.push({
            type: "warning",
            text:
                "Your entered name was not clearly found in the resume."
        });

    }


    /* College */

    if (
        containsMeaningful(
            normalized,
            state.candidate.college
        )
    ) {

        checks.push({
            type: "good",
            text:
                "Your college information appears in the resume."
        });

    } else {

        checks.push({
            type: "warning",
            text:
                "Your college information was not clearly found in the resume."
        });

    }


    /* Course */

    if (
        containsMeaningful(
            normalized,
            state.candidate.course
        )
    ) {

        checks.push({
            type: "good",
            text:
                "Your course information appears to match your resume."
        });

    } else {

        checks.push({
            type: "warning",
            text:
                "Your course was not clearly found in the resume."
        });

    }


    /* Skills */

    const commonSkills = [

        "c",

        "c++",

        "java",

        "python",

        "javascript",

        "typescript",

        "html",

        "css",

        "react",

        "node.js",

        "nodejs",

        "express",

        "sql",

        "mysql",

        "mongodb",

        "postgresql",

        "git",

        "github",

        "docker",

        "aws",

        "machine learning",

        "artificial intelligence",

        "data science",

        "data analysis",

        "llm",

        "generative ai",

        "figma"

    ];


    const foundSkills =
        commonSkills.filter(
            skill =>
                normalized.includes(
                    skill
                )
        );


    if (
        foundSkills.length > 0
    ) {

        checks.push({
            type: "good",
            text:
                `Detected skills in resume: ${foundSkills.slice(0, 10).join(", ")}.`
        });

    } else {

        checks.push({
            type: "warning",
            text:
                "Technical skills were not clearly detected in the resume."
        });

    }


    /* Email */

    if (
        /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i
            .test(text)
    ) {

        checks.push({
            type: "good",
            text:
                "An email address is present in the resume."
        });

    }


    /* Projects */

    if (
        normalized.includes("project") ||
        normalized.includes("projects")
    ) {

        checks.push({
            type: "good",
            text:
                "Project information is present in the resume."
        });

    } else {

        checks.push({
            type: "warning",
            text:
                "No clear project section was detected."
        });

    }


    return {

        provided: true,

        checks

    };

}


/* =========================================================
   ANSWER ANALYSIS
========================================================= */

function analyzeAnswers() {

    const answered =
        state.answers.filter(
            item =>
                item &&
                item.answer
        );


    const skipped =
        state.answers.filter(
            item =>
                item &&
                item.skipped
        );


    const details =
        state.answers.map(
            (answer, index) => {

                if (!answer) {

                    return {

                        index,

                        quality: 0,

                        answer: "",

                        reason:
                            "Question was not answered."

                    };

                }


                const text =
                    answer.answer
                        .trim();


                if (!text) {

                    return {

                        index,

                        quality: 0,

                        answer: "",

                        reason:
                            "No spoken answer was detected."

                    };

                }


                const words =
                    answer.words;


                let quality = 4;


                if (
                    words >= 20
                ) {

                    quality += 1;

                }


                if (
                    words >= 45
                ) {

                    quality += 1;

                }


                if (
                    words >= 80
                ) {

                    quality += 1;

                }


                const relevanceWords = [

                    "because",

                    "therefore",

                    "example",

                    "experience",

                    "project",

                    "result",

                    "solution",

                    "learned",

                    "worked",

                    "implemented",

                    "used",

                    "improved"

                ];


                const relevanceCount =
                    relevanceWords.filter(
                        word =>
                            text
                                .toLowerCase()
                                .includes(word)
                    ).length;


                quality +=
                    Math.min(
                        2,
                        relevanceCount * 0.4
                    );


                quality =
                    Math.min(
                        10,
                        Math.round(
                            quality * 10
                        ) / 10
                    );


                let reason =
                    "Answer can be improved with more detail and a clear example.";


                if (
                    quality >= 8
                ) {

                    reason =
                        "Good answer structure and useful supporting details.";

                } else if (
                    quality >= 6
                ) {

                    reason =
                        "Reasonable answer, but it could be more specific.";

                }


                return {

                    index,

                    quality,

                    answer: text,

                    reason

                };

            }
        );


    const average =
        details.length
            ? details.reduce(
                (sum, item) =>
                    sum + item.quality,
                0
            ) / details.length
            : 0;


    return {

        answered:

            answered.length,

        skipped:

            skipped.length,

        details,

        average:

            Math.round(
                average * 10
            ) / 10

    };

}


/* =========================================================
   MONITORING ANALYSIS
========================================================= */

function analyzeMonitoring() {

    const events =
        state.monitoringEvents;


    return {

        count:
            events.length,

        events

    };

}


/* =========================================================
   SCORE CALCULATION
========================================================= */

function calculateScores(
    resumeAnalysis,
    answerAnalysis,
    monitoringAnalysis
) {

    const answerBase =
        answerAnalysis.average || 0;


    let communication =
        clamp(
            answerBase + 0.4,
            0,
            10
        );


    let technical =
        calculateTechnicalScore(
            answerAnalysis
        );


    let language =
        calculateLanguageScore(
            answerAnalysis
        );


    let relevance =
        calculateRelevanceScore(
            answerAnalysis
        );


    let eyeContact =
        calculateEyeContactScore(
            monitoringAnalysis
        );


    let bodyLanguage =
        calculateBodyLanguageScore(
            monitoringAnalysis
        );


    let confidence =
        calculateConfidenceScore(
            answerAnalysis,
            monitoringAnalysis
        );


    let professionalism =
        calculateProfessionalismScore(
            monitoringAnalysis
        );


    communication =
        roundScore(
            communication
        );


    technical =
        roundScore(
            technical
        );


    language =
        roundScore(
            language
        );


    relevance =
        roundScore(
            relevance
        );


    eyeContact =
        roundScore(
            eyeContact
        );


    bodyLanguage =
        roundScore(
            bodyLanguage
        );


    confidence =
        roundScore(
            confidence
        );


    professionalism =
        roundScore(
            professionalism
        );


    const overall =
        (
            communication * 0.15 +
            technical * 0.20 +
            confidence * 0.15 +
            eyeContact * 0.10 +
            bodyLanguage * 0.10 +
            language * 0.10 +
            relevance * 0.10 +
            professionalism * 0.10
        );


    return {

        communication,

        technical,

        confidence,

        eyeContact,

        bodyLanguage,

        language,

        relevance,

        professionalism,

        overall:
            roundScore(overall)

    };

}


/* =========================================================
   TECHNICAL SCORE
========================================================= */

function calculateTechnicalScore(
    answerAnalysis
) {

    const technicalIndexes =
        state.questions
            .map(
                (question, index) => ({
                    question,
                    index
                })
            )
            .filter(
                item =>
                    item.question.type ===
                    "technical"
            )
            .map(
                item =>
                    item.index
            );


    if (
        technicalIndexes.length === 0
    ) {

        return 7;

    }


    const scores =
        technicalIndexes.map(
            index => {

                const detail =
                    answerAnalysis.details[
                        index
                    ];


                return detail
                    ? detail.quality
                    : 0;

            }
        );


    return (
        scores.reduce(
            (a, b) => a + b,
            0
        ) / scores.length
    );

}


/* =========================================================
   LANGUAGE
========================================================= */

function calculateLanguageScore(
    answerAnalysis
) {

    let score =
        answerAnalysis.average || 0;


    const allText =
        state.answers
            .filter(Boolean)
            .map(
                item =>
                    item.answer || ""
            )
            .join(" ")
            .toLowerCase();


    const fillerWords = [

        "um",

        "uh",

        "like",

        "you know",

        "actually",

        "basically"

    ];


    let fillerCount = 0;


    fillerWords.forEach(
        filler => {

            const matches =
                allText.match(
                    new RegExp(
                        `\\b${escapeRegExp(filler)}\\b`,
                        "gi"
                    )
                );

            if (matches) {

                fillerCount +=
                    matches.length;

            }

        }
    );


    if (
        fillerCount > 10
    ) {

        score -= 1;

    } else if (
        fillerCount > 5
    ) {

        score -= 0.5;

    }


    return clamp(
        score,
        0,
        10
    );

}


/* =========================================================
   RELEVANCE
========================================================= */

function calculateRelevanceScore(
    answerAnalysis
) {

    const scores =
        answerAnalysis.details.map(
            detail =>
                detail.quality
        );


    if (!scores.length) {

        return 0;

    }


    return (
        scores.reduce(
            (a, b) => a + b,
            0
        ) / scores.length
    );

}


/* =========================================================
   EYE CONTACT
========================================================= */

function calculateEyeContactScore(
    monitoring
) {

    const lookAwayEvents =
        monitoring.events.filter(
            event =>
                event.message
                    .toLowerCase()
                    .includes("looked away")
        ).length;


    /*
      This is an approximate score.
      Actual eye-gaze quality requires more advanced
      computer vision.
    */

    if (
        lookAwayEvents === 0
    ) {

        return 8.5;

    }


    if (
        lookAwayEvents <= 2
    ) {

        return 7;

    }


    if (
        lookAwayEvents <= 4
    ) {

        return 5.5;

    }


    return 4;

}


/* =========================================================
   BODY LANGUAGE
========================================================= */

function calculateBodyLanguageScore(
    monitoring
) {

    const lookAwayEvents =
        monitoring.events.filter(
            event =>
                event.message
                    .toLowerCase()
                    .includes("looked away")
        ).length;


    if (
        lookAwayEvents === 0
    ) {

        return 8;

    }


    if (
        lookAwayEvents <= 2
    ) {

        return 7;

    }


    if (
        lookAwayEvents <= 4
    ) {

        return 5.5;

    }


    return 4;

}


/* =========================================================
   CONFIDENCE
========================================================= */

function calculateConfidenceScore(
    answerAnalysis,
    monitoring
) {

    let score =
        answerAnalysis.average || 0;


    const skipped =
        answerAnalysis.skipped;


    score -=
        skipped * 0.4;


    score -=
        monitoring.count * 0.25;


    return clamp(
        score,
        0,
        10
    );

}


/* =========================================================
   PROFESSIONALISM
========================================================= */

function calculateProfessionalismScore(
    monitoring
) {

    let score = 9;


    score -=
        monitoring.count * 0.6;


    return clamp(
        score,
        0,
        10
    );

}


/* =========================================================
   RENDER RESULTS
========================================================= */

function renderResults(
    resumeAnalysis,
    answerAnalysis,
    monitoringAnalysis,
    scores
) {

    $("overallScore")
        .textContent =
        scores.overall.toFixed(1);


    $("communicationScore")
        .textContent =
        scores.communication.toFixed(1);


    $("technicalScore")
        .textContent =
        scores.technical.toFixed(1);


    $("confidenceScore")
        .textContent =
        scores.confidence.toFixed(1);


    $("eyeContactScore")
        .textContent =
        scores.eyeContact.toFixed(1);


    $("bodyLanguageScore")
        .textContent =
        scores.bodyLanguage.toFixed(1);


    $("languageScore")
        .textContent =
        scores.language.toFixed(1);


    $("relevanceScore")
        .textContent =
        scores.relevance.toFixed(1);


    $("professionalismScore")
        .textContent =
        scores.professionalism.toFixed(1);


    $("answeredCount")
        .textContent =
        answerAnalysis.answered;


    $("skippedCount")
        .textContent =
        answerAnalysis.skipped;


    $("monitoringCount")
        .textContent =
        monitoringAnalysis.count;


    renderScoreTitle(
        scores.overall
    );


    renderResumeVerification(
        resumeAnalysis
    );


    renderMistakes(
        answerAnalysis
    );


    renderMonitoring(
        monitoringAnalysis
    );


    renderImprovementPlan(
        scores,
        answerAnalysis,
        resumeAnalysis,
        monitoringAnalysis
    );


    renderSummary(
        scores,
        answerAnalysis
    );

}


/* =========================================================
   SCORE TITLE
========================================================= */

function renderScoreTitle(score) {

    let title =
        "Keep practicing";


    if (score >= 8.5) {

        title =
            "Excellent Interview Readiness";

    } else if (score >= 7) {

        title =
            "Good Interview Foundation";

    } else if (score >= 5) {

        title =
            "Needs More Preparation";

    } else {

        title =
            "Build Your Fundamentals First";

    }


    $("scoreTitle")
        .textContent =
        title;

}


/* =========================================================
   RESUME RESULT
========================================================= */

function renderResumeVerification(
    analysis
) {

    const container =
        $("resumeVerification");


    if (!analysis.checks.length) {

        container.innerHTML =
            `
            <div class="verification-item warning">
                <i class="fa-solid fa-circle-info"></i>
                Resume information could not be analyzed.
            </div>
            `;

        return;

    }


    container.innerHTML =
        analysis.checks
            .map(check => {

                const icon =
                    check.type === "good"
                        ? "fa-circle-check"
                        : check.type === "error"
                            ? "fa-circle-xmark"
                            : "fa-triangle-exclamation";


                return `
                    <div class="verification-item ${check.type}">
                        <i class="fa-solid ${icon}"></i>
                        <span>
                            ${escapeHTML(check.text)}
                        </span>
                    </div>
                `;

            })
            .join("");

}


/* =========================================================
   MISTAKES
========================================================= */

function renderMistakes(
    answerAnalysis
) {

    const container =
        $("mistakesContainer");


    const mistakes =
        answerAnalysis.details
            .filter(
                detail =>
                    detail.quality < 6 ||
                    !detail.answer
            );


    if (
        mistakes.length === 0
    ) {

        container.innerHTML = `
            <div class="no-events">
                <i class="fa-solid fa-circle-check"></i>
                Great work. No major answer problems were detected.
            </div>
        `;

        return;

    }


    container.innerHTML =
        mistakes
            .map(detail => {

                const question =
                    state.questions[
                        detail.index
                    ];


                const answer =
                    detail.answer ||
                    "No answer detected.";


                return `
                    <div class="mistake-item">

                        <h4>
                            Question ${detail.index + 1}:
                            ${escapeHTML(
                                question
                                    ? question.question
                                    : ""
                            )}
                        </h4>

                        <p>
                            ${escapeHTML(
                                detail.reason
                            )}
                        </p>

                        <div class="mistake-answer">
                            <strong>Your answer:</strong>
                            ${escapeHTML(answer)}
                        </div>

                    </div>
                `;

            })
            .join("");

}


/* =========================================================
   MONITORING RESULT
========================================================= */

function renderMonitoring(
    analysis
) {

    const container =
        $("monitoringReport");


    if (
        analysis.events.length === 0
    ) {

        container.innerHTML = `
            <div class="no-events">
                <i class="fa-solid fa-circle-check"></i>
                No monitoring alerts were recorded during your interview.
            </div>
        `;

        return;

    }


    container.innerHTML =
        analysis.events
            .map(event => {

                return `
                    <div class="monitor-event">

                        <i class="fa-solid fa-triangle-exclamation"></i>

                        <span>
                            <strong>
                                ${escapeHTML(event.time)}
                            </strong>
                            —
                            ${escapeHTML(event.message)}
                        </span>

                    </div>
                `;

            })
            .join("");

}


/* =========================================================
   IMPROVEMENT PLAN
========================================================= */

function renderImprovementPlan(
    scores,
    answerAnalysis,
    resumeAnalysis,
    monitoring
) {

    const recommendations = [];


    if (
        scores.communication < 7
    ) {

        recommendations.push({

            title:
                "Improve communication",

            text:
                "Give answers in a simple structure: situation, action, and result. Avoid one-line answers."

        });

    }


    if (
        scores.technical < 7
    ) {

        recommendations.push({

            title:
                "Strengthen technical fundamentals",

            text:
                "Revise the important concepts from your selected topics and practice explaining them aloud."

        });

    }


    if (
        scores.eyeContact < 7
    ) {

        recommendations.push({

            title:
                "Improve eye contact",

            text:
                "Look toward the camera while answering. Avoid repeatedly looking at another side of the screen."

        });

    }


    if (
        scores.language < 7
    ) {

        recommendations.push({

            title:
                "Improve spoken English",

            text:
                "Speak slowly and clearly. Reduce filler words and take a short pause before answering difficult questions."

        });

    }


    if (
        scores.relevance < 7
    ) {

        recommendations.push({

            title:
                "Give more relevant answers",

            text:
                "Answer the exact question first, then support your answer with a short example from your project or experience."

        });

    }


    if (
        answerAnalysis.skipped > 0
    ) {

        recommendations.push({

            title:
                "Reduce skipped questions",

            text:
                "If you do not know an answer, explain what you know and describe how you would learn or solve it."

        });

    }


    if (
        monitoring.count > 0
    ) {

        recommendations.push({

            title:
                "Stay focused",

            text:
                "During a real interview, keep your attention on the interviewer and avoid talking while the interviewer is speaking."

        });

    }


    if (
        !resumeAnalysis.provided
    ) {

        recommendations.push({

            title:
                "Keep your resume ready",

            text:
                "A complete resume allows YUGMA to cross-check your education, skills, projects and experience."

        });

    }


    if (
        recommendations.length === 0
    ) {

        recommendations.push({

            title:
                "Keep practicing",

            text:
                "Your overall performance is strong. Continue practicing realistic interviews to maintain consistency."

        });

    }


    $("improvementPlan")
        .innerHTML =
        recommendations
            .slice(0, 6)
            .map(item => {

                return `
                    <div class="improvement-item">

                        <strong>
                            ${escapeHTML(item.title)}
                        </strong>

                        <p>
                            ${escapeHTML(item.text)}
                        </p>

                    </div>
                `;

            })
            .join("");

}


/* =========================================================
   SUMMARY
========================================================= */

function renderSummary(
    scores,
    answerAnalysis
) {

    let summary = "";


    if (
        scores.overall >= 8.5
    ) {

        summary =
            `Excellent performance. Your answers were generally clear and relevant. Keep practicing company-specific questions and maintain your eye contact and professional communication.`;

    } else if (
        scores.overall >= 7
    ) {

        summary =
            `You have a good interview foundation. Your next step is to make your technical answers more specific and practice giving confident examples from your projects and experience.`;

    } else if (
        scores.overall >= 5
    ) {

        summary =
            `You have a starting foundation, but several areas need improvement. Focus on technical fundamentals, structured answers, spoken English and consistent eye contact.`;

    } else {

        summary =
            `Use this interview as a learning session. Build your fundamentals first, practice speaking answers aloud, and then repeat the interview after preparation.`;

    }


    $("interviewSummary")
        .textContent =
        summary;

}


/* =========================================================
   SAVED USER
========================================================= */

function loadSavedUser() {

    try {

        const saved =
            localStorage.getItem(
                "yugmaUser"
            );


        if (!saved) return;


        const user =
            JSON.parse(saved);


        if (
            user.name &&
            !$("candidateName").value
        ) {

            $("candidateName").value =
                user.name;

        }


        if (
            user.course &&
            !$("candidateCourse").value
        ) {

            $("candidateCourse").value =
                user.course;

        }


        if (
            user.branch &&
            !$("candidateBranch").value
        ) {

            $("candidateBranch").value =
                user.branch;

        }


        if (
            user.college &&
            !$("candidateCollege").value
        ) {

            $("candidateCollege").value =
                user.college;

        }

    } catch (error) {

        console.warn(
            "Could not load saved YUGMA user.",
            error
        );

    }

}


/* =========================================================
   STATUS HELPER
========================================================= */

function updateStatus(
    elementId,
    text,
    good
) {

    const element =
        $(elementId);


    if (!element) return;


    const span =
        element.querySelector("span");


    if (span) {

        span.textContent =
            text;

    }


    const icon =
        element.querySelector("i");


    if (icon) {

        icon.style.color =
            good
                ? "var(--green)"
                : "var(--red)";

    }

}


/* =========================================================
   MESSAGE
========================================================= */

function showMessage(message) {

    /*
      Simple alert is intentionally used here so the
      page does not depend on another notification library.
    */

    alert(message);

}


/* =========================================================
   UTILITIES
========================================================= */

function shuffleArray(array) {

    const copy =
        [...array];


    for (
        let i = copy.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            copy[i],
            copy[j]
        ] =
        [
            copy[j],
            copy[i]
        ];

    }


    return copy;

}


function clamp(
    value,
    min,
    max
) {

    return Math.max(
        min,
        Math.min(
            max,
            value
        )
    );

}


function roundScore(value) {

    return Math.round(
        value * 10
    ) / 10;

}


function containsMeaningful(
    text,
    value
) {

    if (!value) return false;


    const clean =
        value
            .toLowerCase()
            .trim();


    if (
        clean.length < 3
    ) {

        return false;

    }


    return text.includes(
        clean
    );

}


function escapeHTML(value) {

    return String(value || "")
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


function escapeRegExp(value) {

    return String(value)
        .replace(
            /[.*+?^${}()|[\]\\]/g,
            "\\$&"
        );

}


/* =========================================================
   BEFORE PAGE CLOSE
========================================================= */

window.addEventListener(
    "beforeunload",
    event => {

        if (
            state.interviewStarted &&
            !state.interviewFinished
        ) {

            event.preventDefault();

            event.returnValue =
                "Your interview is still running.";

        }

    }
);


/* =========================================================
   PUBLIC YUGMA INTERVIEW API
   Useful later when connecting real AI backend.
========================================================= */

window.YUGMAInterview = {

    state,

    start:
        startInterviewSession,

    next:
        nextQuestion,

    finish:
        finishInterview,

    warnFace:
        () => {

            addMonitoringEvent(
                "Candidate looked away from the camera."
            );

            showMonitorWarning(
                "Please don't look away. Please look here."
            );

            speakWarning(
                "Please don't look away. Please look here."
            );

        },

    warnSpeech:
        () => {

            addMonitoringEvent(
                "Speech was detected while the AI HR was speaking."
            );

            showMonitorWarning(
                "Please don't talk to another person. Please listen to me."
            );

            speakWarning(
                "Please don't talk to another person. Please listen to me."
            );

        },

    analyzeResume

};