/* =========================================================
   YUGMA PRACTICE SKILL
   ========================================================= */


/* =========================================================
   OPTIONAL BACKEND
   ========================================================= */

/*
   Leave empty for now.

   Later you can connect a real secure coding sandbox.

   Example:

   const CODE_RUNNER_API =
       "https://your-backend.com/api/run-code";

*/

const CODE_RUNNER_API = "";


/* =========================================================
   QUESTION BANK
   ========================================================= */

const questionBank = {

    "DSA": [

        {
            type: "theory",

            q: "What is the average time complexity of Binary Search on a sorted array?",

            options: [
                "O(1)",
                "O(log n)",
                "O(n)",
                "O(n log n)"
            ],

            answer: 1,

            explanation:
                "Binary Search divides the search space into half after every comparison, giving O(log n) time complexity.",

            concept: "Binary Search"
        },


        {
            type: "theory",

            q: "Which data structure follows the LIFO principle?",

            options: [
                "Queue",
                "Stack",
                "Linked List",
                "Graph"
            ],

            answer: 1,

            explanation:
                "Stack follows Last In First Out (LIFO). The last element inserted is removed first.",

            concept: "Stack"
        },


        {
            type: "coding",

            q: "Write a function to find the maximum element in an integer array.",

            starter: `function findMax(arr) {
    // Write your solution
}`,

            concept: "Array Traversal"
        },


        {
            type: "theory",

            q: "What is the worst-case time complexity of Quick Sort?",

            options: [
                "O(n)",
                "O(log n)",
                "O(n log n)",
                "O(n²)"
            ],

            answer: 3,

            explanation:
                "Quick Sort can become O(n²) when the pivot repeatedly creates highly unbalanced partitions.",

            concept: "Sorting"
        }

    ],


    "Web Technology": [

        {
            type: "theory",

            q: "Which keyword creates a block-scoped variable in JavaScript?",

            options: [
                "var",
                "let",
                "define",
                "constant"
            ],

            answer: 1,

            explanation:
                "let creates a block-scoped variable in JavaScript.",

            concept: "JavaScript"
        },


        {
            type: "theory",

            q: "Which HTTP status code means Not Found?",

            options: [
                "200",
                "301",
                "404",
                "500"
            ],

            answer: 2,

            explanation:
                "HTTP 404 means that the requested resource could not be found.",

            concept: "HTTP"
        },


        {
            type: "coding",

            q: "Write JavaScript code to reverse a string.",

            starter: `function reverseString(str) {
    // Write your solution
}`,

            concept: "JavaScript Strings"
        },


        {
            type: "theory",

            q: "What is the main purpose of an API?",

            options: [
                "To design images",
                "To allow software systems to communicate",
                "To compile CSS",
                "To store passwords"
            ],

            answer: 1,

            explanation:
                "APIs provide a defined way for different software systems to communicate and exchange data.",

            concept: "APIs"
        }

    ],


    "LLM & GenAI": [

        {
            type: "theory",

            q: "Which architecture is the foundation of modern large language models?",

            options: [
                "Transformer",
                "Binary Tree",
                "Linked List",
                "MVC"
            ],

            answer: 0,

            explanation:
                "The Transformer architecture uses mechanisms such as self-attention and is widely used in modern LLMs.",

            concept: "Transformers"
        },


        {
            type: "theory",

            q: "What does RAG stand for?",

            options: [
                "Random AI Generation",
                "Retrieval-Augmented Generation",
                "Recursive AI Graph",
                "Real-time Algorithm Generation"
            ],

            answer: 1,

            explanation:
                "RAG combines information retrieval with generation so the model can use external information when producing an answer.",

            concept: "RAG"
        },


        {
            type: "coding",

            q: "Write pseudocode or JavaScript logic to count the frequency of words in a sentence.",

            starter: `function wordFrequency(text) {
    // Write your solution
}`,

            concept: "Text Processing"
        },


        {
            type: "theory",

            q: "What does temperature generally control in text generation?",

            options: [
                "Database size",
                "Randomness of generated output",
                "Internet speed",
                "Number of GPUs"
            ],

            answer: 1,

            explanation:
                "Temperature influences how deterministic or diverse the generated output can be.",

            concept: "LLM Generation"
        }

    ],


    "AI & ML": [

        {
            type: "theory",

            q: "What is supervised learning?",

            options: [
                "Learning without data",
                "Learning using labeled training data",
                "Only reinforcement learning",
                "Learning without a model"
            ],

            answer: 1,

            explanation:
                "Supervised learning trains a model using examples where the desired output or label is known.",

            concept: "Machine Learning"
        },


        {
            type: "theory",

            q: "Which metric is commonly used for classification accuracy?",

            options: [
                "Accuracy",
                "RAM",
                "Latency only",
                "Disk size"
            ],

            answer: 0,

            explanation:
                "Accuracy measures the proportion of correctly classified examples.",

            concept: "Classification"
        },


        {
            type: "coding",

            q: "Write code or pseudocode to calculate the mean of a numerical array.",

            starter: `function mean(arr) {
    // Write your solution
}`,

            concept: "Data Processing"
        }

    ],


    "DBMS & SQL": [

        {
            type: "theory",

            q: "Which normal form removes partial dependency?",

            options: [
                "1NF",
                "2NF",
                "3NF",
                "BCNF"
            ],

            answer: 1,

            explanation:
                "Second Normal Form removes partial dependency on a part of a composite candidate key.",

            concept: "Normalization"
        },


        {
            type: "theory",

            q: "Which SQL command is used to retrieve data?",

            options: [
                "INSERT",
                "UPDATE",
                "SELECT",
                "DELETE"
            ],

            answer: 2,

            explanation:
                "SELECT is used to retrieve records from a database.",

            concept: "SQL"
        },


        {
            type: "coding",

            q: "Write SQL to select employees whose salary is greater than 50000.",

            starter: `SELECT *
FROM employees
WHERE salary > 50000;`,

            concept: "SQL Query"
        }

    ],


    "OOP": [

        {
            type: "theory",

            q: "What is polymorphism?",

            options: [
                "One interface, multiple forms",
                "Data storage",
                "Memory allocation only",
                "Database normalization"
            ],

            answer: 0,

            explanation:
                "Polymorphism allows the same interface or operation to behave differently depending on the object or context.",

            concept: "Polymorphism"
        },


        {
            type: "theory",

            q: "Which OOP concept hides internal implementation details?",

            options: [
                "Inheritance",
                "Encapsulation",
                "Polymorphism",
                "Recursion"
            ],

            answer: 1,

            explanation:
                "Encapsulation combines data and methods and controls access to internal implementation details.",

            concept: "Encapsulation"
        },


        {
            type: "coding",

            q: "Create a simple class representing a Student with name and age.",

            starter: `class Student {

    constructor(name, age) {
        // Write your solution
    }

}`,

            concept: "Classes"
        }

    ],


    "Operating Systems": [

        {
            type: "theory",

            q: "What is a process?",

            options: [
                "A program in execution",
                "A programming language",
                "A database table",
                "A network cable"
            ],

            answer: 0,

            explanation:
                "A process is a program that is currently executing along with its associated resources.",

            concept: "Processes"
        },


        {
            type: "theory",

            q: "Which scheduling algorithm uses a time quantum?",

            options: [
                "FCFS",
                "Round Robin",
                "SJF",
                "DFS"
            ],

            answer: 1,

            explanation:
                "Round Robin scheduling gives each process a fixed time quantum before moving to another process.",

            concept: "CPU Scheduling"
        },


        {
            type: "coding",

            q: "Write pseudocode to calculate factorial using iteration.",

            starter: `function factorial(n) {
    // Write your solution
}`,

            concept: "Algorithms"
        }

    ],


    "Computer Networks": [

        {
            type: "theory",

            q: "Which protocol provides reliable connection-oriented communication?",

            options: [
                "UDP",
                "TCP",
                "DNS",
                "HTTP only"
            ],

            answer: 1,

            explanation:
                "TCP provides connection-oriented and reliable data transmission.",

            concept: "TCP"
        },


        {
            type: "theory",

            q: "What is the main purpose of DNS?",

            options: [
                "Translate domain names to IP addresses",
                "Encrypt files",
                "Compile programs",
                "Create databases"
            ],

            answer: 0,

            explanation:
                "DNS maps human-readable domain names to IP addresses.",

            concept: "DNS"
        },


        {
            type: "coding",

            q: "Write a simple program to check whether an IP address string is empty or not.",

            starter: `function checkIP(ip) {
    // Write your solution
}`,

            concept: "Networking Basics"
        }

    ],


    "Cloud & DevOps": [

        {
            type: "theory",

            q: "What does CI/CD generally mean?",

            options: [
                "Continuous Integration / Continuous Delivery or Deployment",
                "Computer Interface Design",
                "Cloud Internal Database",
                "Code Input Debugging"
            ],

            answer: 0,

            explanation:
                "CI/CD refers to practices that automate building, testing and delivery/deployment of software.",

            concept: "CI/CD"
        },


        {
            type: "theory",

            q: "What is Docker mainly used for?",

            options: [
                "Containerization",
                "Writing HTML",
                "Database normalization",
                "Image editing"
            ],

            answer: 0,

            explanation:
                "Docker is commonly used to package and run applications in containers.",

            concept: "Docker"
        },


        {
            type: "coding",

            q: "Write a simple JavaScript function that checks whether an application environment is 'production'.",

            starter: `function isProduction(environment) {
    // Write your solution
}`,

            concept: "Deployment"
        }

    ],


    "Aptitude": [

        {
            type: "theory",

            q: "A product costs ₹800 and is sold for ₹1000. What is the profit percentage?",

            options: [
                "20%",
                "25%",
                "15%",
                "30%"
            ],

            answer: 0,

            explanation:
                "Profit = 1000 - 800 = 200. Profit percentage = 200/800 × 100 = 25%.",

            concept: "Profit & Loss"
        },


        {
            type: "theory",

            q: "If a worker completes a task in 10 days, what fraction of the task is completed in one day?",

            options: [
                "1/5",
                "1/10",
                "10",
                "1/2"
            ],

            answer: 1,

            explanation:
                "If the complete task takes 10 equal working days, one day's work is 1/10.",

            concept: "Time & Work"
        },


        {
            type: "coding",

            q: "Write a function to calculate the average of three numbers.",

            starter: `function average(a, b, c) {
    // Write your solution
}`,

            concept: "Basic Mathematics"
        }

    ]

};


/* =========================================================
   STATE
   ========================================================= */

let candidate = {
    name: "",
    company: "",
    topics: []
};


let generatedTests = [];

let currentTest = null;

let currentQuestionIndex = 0;

let userAnswers = [];

let timerInterval = null;

let remainingSeconds = 600;

let cameraStream = null;

let recognition = null;

let monitoringEvents = [];


/* =========================================================
   DOM
   ========================================================= */

const generateTestsBtn =
    document.getElementById("generateTestsBtn");

const candidateName =
    document.getElementById("candidateName");

const targetCompany =
    document.getElementById("targetCompany");

const testsSection =
    document.getElementById("testsSection");

const testGrid =
    document.getElementById("testGrid");

const examSection =
    document.getElementById("examSection");

const resultSection =
    document.getElementById("resultSection");

const cameraModal =
    document.getElementById("cameraModal");

const allowCameraBtn =
    document.getElementById("allowCameraBtn");

const cancelCameraBtn =
    document.getElementById("cancelCameraBtn");

const cameraPreview =
    document.getElementById("cameraPreview");

const questionText =
    document.getElementById("questionText");

const questionNumber =
    document.getElementById("questionNumber");

const questionType =
    document.getElementById("questionType");

const questionProgress =
    document.getElementById("questionProgress");

const optionsContainer =
    document.getElementById("optionsContainer");

const codingContainer =
    document.getElementById("codingContainer");

const codeEditor =
    document.getElementById("codeEditor");

const codeOutput =
    document.getElementById("codeOutput");

const runCodeBtn =
    document.getElementById("runCodeBtn");

const languageSelect =
    document.getElementById("languageSelect");

const codeFileName =
    document.getElementById("codeFileName");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");

const submitTestBtn =
    document.getElementById("submitTestBtn");

const timer =
    document.getElementById("timer");

const cameraStatus =
    document.getElementById("cameraStatus");

const micStatus =
    document.getElementById("micStatus");

const fullscreenStatus =
    document.getElementById("fullscreenStatus");

const monitorAlert =
    document.getElementById("monitorAlert");


/* =========================================================
   MOBILE NAV
   ========================================================= */

const mobileMenu =
    document.getElementById("mobileMenu");

const navLinks =
    document.querySelector(".nav-links");


if (mobileMenu) {

    mobileMenu.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}


/* =========================================================
   LOAD SAVED PROFILE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    try {

        const savedUser =
            JSON.parse(
                localStorage.getItem("yugmaUser")
            );

        if (savedUser) {

            if (savedUser.name) {

                candidateName.value =
                    savedUser.name;

            }

        }

    } catch (error) {

        console.log("No saved YUGMA profile.");

    }

});


/* =========================================================
   GENERATE TESTS
   ========================================================= */

generateTestsBtn.addEventListener(
    "click",
    generatePersonalizedTests
);


function generatePersonalizedTests() {

    const name =
        candidateName.value.trim();

    const company =
        targetCompany.value.trim();


    const selectedTopics =
        [...document.querySelectorAll(
            ".topicCheck:checked"
        )].map(
            checkbox => checkbox.value
        );


    if (!name) {

        alert("Please enter your name.");

        candidateName.focus();

        return;

    }


    if (selectedTopics.length === 0) {

        alert(
            "Please select at least one topic."
        );

        return;

    }


    candidate = {
        name,
        company,
        topics: selectedTopics
    };


    generatedTests =
        createTests(selectedTopics);


    renderTests();


    testsSection.classList.remove("hidden");

    testsSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   CREATE TESTS
   ========================================================= */

function createTests(topics) {

    const allQuestions = [];


    topics.forEach(topic => {

        if (questionBank[topic]) {

            questionBank[topic].forEach(question => {

                allQuestions.push({
                    ...question,
                    topic
                });

            });

        }

    });


    shuffle(allQuestions);


    const tests = [

        {
            title:
                "Core Technical Practice",

            description:
                "Fundamental concepts and coding questions important for technical interviews.",

            questions:
                createQuestionSet(allQuestions, 10)
        },


        {
            title:
                "Advanced Skill Assessment",

            description:
                "Mixed questions designed to test deeper technical understanding.",

            questions:
                createQuestionSet(
                    shuffle([...allQuestions]),
                    10
                )
        },


        {
            title:
                "Final Interview Challenge",

            description:
                "A final mixed assessment covering your selected preparation areas.",

            questions:
                createQuestionSet(
                    shuffle([...allQuestions]),
                    10
                )

        }

    ];


    return tests;

}


/* =========================================================
   QUESTION SET
   ========================================================= */

function createQuestionSet(
    questions,
    count
) {

    const selected = [];


    for (
        let i = 0;
        i < count && i < questions.length;
        i++
    ) {

        selected.push({
            ...questions[i]
        });

    }


    return selected;

}


/* =========================================================
   RENDER TESTS
   ========================================================= */

function renderTests() {

    testGrid.innerHTML = "";


    generatedTests.forEach(
        (test, index) => {

            const card =
                document.createElement("div");

            card.className =
                "test-card";


            const topics =
                [...new Set(
                    test.questions.map(
                        q => q.topic
                    )
                )];


            card.innerHTML = `

                <div class="test-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <h3>
                    ${escapeHTML(test.title)}
                </h3>

                <p>
                    ${escapeHTML(test.description)}
                </p>

                <div class="test-meta">

                    <span>
                        ${test.questions.length} Questions
                    </span>

                    <span>
                        10 Minutes
                    </span>

                    <span>
                        ${topics.length} Topics
                    </span>

                </div>

                <button
                    class="primary-btn"
                    onclick="openTest(${index})">

                    Start Test

                    <i class="fa-solid fa-arrow-right"></i>

                </button>

            `;


            testGrid.appendChild(card);

        }
    );

}


/* =========================================================
   OPEN TEST
   ========================================================= */

window.openTest = function(index) {

    currentTest =
        generatedTests[index];

    currentQuestionIndex = 0;

    userAnswers =
        new Array(
            currentTest.questions.length
        ).fill(null);

    monitoringEvents = [];


    document.getElementById(
        "examTitle"
    ).textContent =
        currentTest.title;


    cameraModal.classList.remove("hidden");

};


/* =========================================================
   CAMERA ACCESS
   ========================================================= */

allowCameraBtn.addEventListener(
    "click",
    startMonitoredTest
);


cancelCameraBtn.addEventListener(
    "click",
    () => {

        cameraModal.classList.add("hidden");

    }
);


async function startMonitoredTest() {

    try {

        cameraStream =
            await navigator.mediaDevices.getUserMedia({

                video: true,

                audio: true

            });


        cameraPreview.srcObject =
            cameraStream;


        setStatus(
            cameraStatus,
            "success",
            "Ready"
        );


        setStatus(
            micStatus,
            "success",
            "Ready"
        );


        cameraModal.classList.add(
            "hidden"
        );


        examSection.classList.remove(
            "hidden"
        );


        document.getElementById(
            "setupSection"
        ).classList.add("hidden");


        testsSection.classList.add(
            "hidden"
        );


        examSection.scrollIntoView({
            behavior: "smooth"
        });


        startFullscreen();


        startSpeechMonitoring();


        startTimer();


        renderQuestion();

    } catch (error) {

        console.error(error);


        alert(
            "Camera and microphone permission is required to start the monitored test."
        );

    }

}


/* =========================================================
   STATUS
   ========================================================= */

function setStatus(
    element,
    status,
    text
) {

    element.classList.remove(
        "pending",
        "success",
        "warning",
        "error"
    );


    element.classList.add(status);


    const strong =
        element.querySelector("strong");


    if (strong) {

        strong.textContent = text;

    }

}


/* =========================================================
   FULLSCREEN
   ========================================================= */

async function startFullscreen() {

    try {

        await document.documentElement.requestFullscreen();

        setStatus(
            fullscreenStatus,
            "success",
            "Active"
        );

    } catch (error) {

        setStatus(
            fullscreenStatus,
            "warning",
            "Unavailable"
        );

    }

}


document.addEventListener(
    "fullscreenchange",
    () => {

        if (
            examSection.classList.contains(
                "hidden"
            )
        ) {

            return;

        }


        if (!document.fullscreenElement) {

            setStatus(
                fullscreenStatus,
                "error",
                "Exited"
            );


            addMonitoringEvent(
                "Fullscreen was exited."
            );


            showMonitorAlert(
                "Please stay in fullscreen during the test."
            );

        }

    }
);


/* =========================================================
   SPEECH MONITORING
   ========================================================= */

function startSpeechMonitoring() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        setStatus(
            micStatus,
            "warning",
            "Browser unsupported"
        );

        return;

    }


    recognition =
        new SpeechRecognition();


    recognition.continuous = true;

    recognition.interimResults = true;

    recognition.lang = "en-US";


    recognition.onresult =
        () => {

            addMonitoringEvent(
                "Speech activity detected."
            );


            showMonitorAlert(
                "Please do not talk during the test."
            );

        };


    recognition.onerror =
        error => {

            console.log(
                "Speech monitoring:",
                error
            );

        };


    recognition.onend =
        () => {

            if (
                examSection.classList.contains(
                    "hidden"
                )
            ) {

                return;

            }


            try {

                recognition.start();

            } catch (error) {}

        };


    try {

        recognition.start();

    } catch (error) {

        console.log(error);

    }

}


/* =========================================================
   MONITOR EVENT
   ========================================================= */

function addMonitoringEvent(
    message
) {

    monitoringEvents.push({

        message,

        time:
            new Date().toLocaleTimeString()

    });

}


/* =========================================================
   MONITOR ALERT
   ========================================================= */

let alertTimeout;


function showMonitorAlert(
    message
) {

    monitorAlert.classList.remove(
        "hidden"
    );


    monitorAlert.querySelector(
        "span"
    ).textContent = message;


    clearTimeout(alertTimeout);


    alertTimeout =
        setTimeout(
            () => {

                monitorAlert.classList.add(
                    "hidden"
                );

            },
            4000
        );

}


/* =========================================================
   TIMER
   ========================================================= */

function startTimer() {

    clearInterval(timerInterval);


    remainingSeconds = 600;


    updateTimer();


    timerInterval =
        setInterval(
            () => {

                remainingSeconds--;


                updateTimer();


                if (
                    remainingSeconds <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );


                    submitTest();

                }

            },
            1000
        );

}


function updateTimer() {

    const minutes =
        Math.floor(
            remainingSeconds / 60
        );


    const seconds =
        remainingSeconds % 60;


    timer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    if (
        remainingSeconds <= 60
    ) {

        timer.style.color =
            "var(--red)";

    } else {

        timer.style.color =
            "var(--navy)";

    }

}


/* =========================================================
   RENDER QUESTION
   ========================================================= */

function renderQuestion() {

    const question =
        currentTest.questions[
            currentQuestionIndex
        ];


    questionNumber.textContent =
        `Question ${currentQuestionIndex + 1}`;


    questionProgress.textContent =
        `Question ${currentQuestionIndex + 1} of ${currentTest.questions.length}`;


    questionText.textContent =
        question.q;


    questionType.textContent =
        question.type === "coding"
            ? "CODING"
            : "THEORY";


    optionsContainer.innerHTML = "";

    codingContainer.classList.add(
        "hidden"
    );


    if (question.type === "theory") {

        optionsContainer.classList.remove(
            "hidden"
        );


        renderOptions(question);

    } else {

        optionsContainer.classList.add(
            "hidden"
        );


        codingContainer.classList.remove(
            "hidden"
        );


        codeEditor.value =
            userAnswers[
                currentQuestionIndex
            ]?.code ||
            question.starter ||
            "";


        updateFileName();

    }


    previousBtn.disabled =
        currentQuestionIndex === 0;


    if (
        currentQuestionIndex ===
        currentTest.questions.length - 1
    ) {

        nextBtn.classList.add(
            "hidden"
        );

        submitTestBtn.classList.remove(
            "hidden"
        );

    } else {

        nextBtn.classList.remove(
            "hidden"
        );

        submitTestBtn.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   OPTIONS
   ========================================================= */

function renderOptions(question) {

    question.options.forEach(
        (option, index) => {

            const div =
                document.createElement("div");


            div.className =
                "option";


            if (
                userAnswers[
                    currentQuestionIndex
                ] === index
            ) {

                div.classList.add(
                    "selected"
                );

            }


            div.innerHTML = `

                <span class="option-letter">
                    ${String.fromCharCode(65 + index)}
                </span>

                <span>
                    ${escapeHTML(option)}
                </span>

            `;


            div.addEventListener(
                "click",
                () => {

                    userAnswers[
                        currentQuestionIndex
                    ] = index;


                    document
                        .querySelectorAll(".option")
                        .forEach(
                            item =>
                                item.classList.remove(
                                    "selected"
                                )
                        );


                    div.classList.add(
                        "selected"
                    );

                }
            );


            optionsContainer.appendChild(div);

        }
    );

}


/* =========================================================
   NEXT
   ========================================================= */

nextBtn.addEventListener(
    "click",
    () => {

        saveCurrentCodingAnswer();


        if (
            currentQuestionIndex <
            currentTest.questions.length - 1
        ) {

            currentQuestionIndex++;

            renderQuestion();

        }

    }
);


/* =========================================================
   PREVIOUS
   ========================================================= */

previousBtn.addEventListener(
    "click",
    () => {

        saveCurrentCodingAnswer();


        if (
            currentQuestionIndex > 0
        ) {

            currentQuestionIndex--;

            renderQuestion();

        }

    }
);


/* =========================================================
   SAVE CODING
   ========================================================= */

function saveCurrentCodingAnswer() {

    const question =
        currentTest.questions[
            currentQuestionIndex
        ];


    if (
        question.type === "coding"
    ) {

        userAnswers[
            currentQuestionIndex
        ] = {

            code:
                codeEditor.value,

            language:
                languageSelect.value

        };

    }

}


/* =========================================================
   SUBMIT
   ========================================================= */

submitTestBtn.addEventListener(
    "click",
    () => {

        if (
            confirm(
                "Are you sure you want to submit the test?"
            )
        ) {

            submitTest();

        }

    }
);


function submitTest() {

    clearInterval(
        timerInterval
    );


    saveCurrentCodingAnswer();


    stopMonitoring();


    calculateResult();


    examSection.classList.add(
        "hidden"
    );


    resultSection.classList.remove(
        "hidden"
    );


    resultSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   STOP MONITORING
   ========================================================= */

function stopMonitoring() {

    if (cameraStream) {

        cameraStream
            .getTracks()
            .forEach(
                track =>
                    track.stop()
            );

        cameraStream = null;

    }


    if (recognition) {

        try {

            recognition.stop();

        } catch (error) {}

        recognition = null;

    }


    if (document.fullscreenElement) {

        try {

            document.exitFullscreen();

        } catch (error) {}

    }

}


/* =========================================================
   RESULT
   ========================================================= */

function calculateResult() {

    let correct = 0;

    let wrong = 0;

    let unanswered = 0;

    const mistakes = [];


    currentTest.questions.forEach(
        (question, index) => {

            const answer =
                userAnswers[index];


            if (question.type === "theory") {

                if (
                    answer === null ||
                    answer === undefined
                ) {

                    unanswered++;

                    return;

                }


                if (
                    answer ===
                    question.answer
                ) {

                    correct++;

                } else {

                    wrong++;

                    mistakes.push({
                        question,
                        index,
                        userAnswer:
                            question.options[
                                answer
                            ],
                        correctAnswer:
                            question.options[
                                question.answer
                            ]
                    });

                }

            } else {

                if (
                    !answer ||
                    !answer.code ||
                    answer.code.trim().length < 5
                ) {

                    unanswered++;

                } else {

                    /*
                        IMPORTANT:

                        Frontend-only code cannot safely
                        compile and execute C/C++.

                        Therefore coding questions are
                        marked as attempted here.

                        A real backend judge should be
                        connected later for exact correctness.
                    */

                    correct++;

                }

            }

        }
    );


    const total =
        currentTest.questions.length;


    const score =
        Math.round(
            (correct / total) * 100
        );


    document.getElementById(
        "scorePercent"
    ).textContent =
        `${score}%`;


    document.getElementById(
        "correctCount"
    ).textContent =
        correct;


    document.getElementById(
        "wrongCount"
    ).textContent =
        wrong;


    document.getElementById(
        "unansweredCount"
    ).textContent =
        unanswered;


    document.getElementById(
        "monitorEventCount"
    ).textContent =
        monitoringEvents.length;


    showResultMessage(score);


    renderAreaAnalysis();


    renderMistakes(mistakes);


    renderMonitoringReport();


    renderImprovement(score);


    renderQuestionReview();

}


/* =========================================================
   RESULT MESSAGE
   ========================================================= */

function showResultMessage(score) {

    let title;

    let message;


    if (score >= 85) {

        title =
            "Excellent Interview Readiness";

        message =
            "Your fundamentals are strong. Focus now on advanced problems and explaining your approach clearly.";

    } else if (score >= 70) {

        title =
            "Good Foundation — Keep Practicing";

        message =
            "You have a good foundation. More timed practice can improve your interview performance.";

    } else if (score >= 50) {

        title =
            "Needs More Preparation";

        message =
            "You understand some concepts, but several areas need additional practice.";

    } else {

        title =
            "Build Your Fundamentals First";

        message =
            "Focus on core concepts before moving to advanced interview questions.";

    }


    document.getElementById(
        "resultTitle"
    ).textContent = title;


    document.getElementById(
        "resultMessage"
    ).textContent = message;

}


/* =========================================================
   AREA ANALYSIS
   ========================================================= */

function renderAreaAnalysis() {

    const topicStats = {};


    currentTest.questions.forEach(
        (question, index) => {

            if (!topicStats[question.topic]) {

                topicStats[question.topic] = {

                    total: 0,

                    correct: 0

                };

            }


            topicStats[
                question.topic
            ].total++;


            if (
                question.type === "theory" &&
                userAnswers[index] ===
                question.answer
            ) {

                topicStats[
                    question.topic
                ].correct++;

            }


            if (
                question.type === "coding" &&
                userAnswers[index] &&
                userAnswers[index].code
            ) {

                topicStats[
                    question.topic
                ].correct++;

            }

        }
    );


    const strong = [];

    const weak = [];


    Object.entries(
        topicStats
    ).forEach(
        ([topic, stats]) => {

            const percentage =
                Math.round(
                    (stats.correct /
                        stats.total) *
                    100
                );


            if (percentage >= 70) {

                strong.push({
                    topic,
                    percentage
                });

            } else {

                weak.push({
                    topic,
                    percentage
                });

            }

        }
    );


    const strengthContent =
        document.getElementById(
            "strengthContent"
        );


    const weakContent =
        document.getElementById(
            "weakContent"
        );


    if (strong.length) {

        strengthContent.innerHTML =
            strong.map(
                item => `

                    <div class="area-item">

                        <span>
                            ${escapeHTML(item.topic)}
                        </span>

                        <span
                            class="area-score"
                            style="color:var(--green)">
                            ${item.percentage}%
                        </span>

                    </div>

                `
            ).join("");

    } else {

        strengthContent.innerHTML =
            "<p>No strong area yet. Keep practicing.</p>";

    }


    if (weak.length) {

        weakContent.innerHTML =
            weak.map(
                item => `

                    <div class="area-item">

                        <span>
                            ${escapeHTML(item.topic)}
                        </span>

                        <span
                            class="area-score"
                            style="color:var(--red)">
                            ${item.percentage}%
                        </span>

                    </div>

                `
            ).join("");

    } else {

        weakContent.innerHTML =
            "<p>Great! No major weak area detected.</p>";

    }

}


/* =========================================================
   MISTAKES
   ========================================================= */

function renderMistakes(
    mistakes
) {

    const container =
        document.getElementById(
            "mistakesContent"
        );


    if (!mistakes.length) {

        container.innerHTML = `

            <div class="mistake-item">

                <div class="mistake-question">
                    Excellent! No theory mistakes were recorded.
                </div>

                <div class="explanation">
                    Continue practicing coding and advanced interview questions.
                </div>

            </div>

        `;

        return;

    }


    container.innerHTML =
        mistakes.map(
            mistake => `

                <div class="mistake-item">

                    <div class="mistake-question">

                        Q${mistake.index + 1}.
                        ${escapeHTML(
                            mistake.question.q
                        )}

                    </div>


                    <div class="answer-row answer-wrong">

                        <strong>
                            Your answer:
                        </strong>

                        ${escapeHTML(
                            mistake.userAnswer
                        )}

                    </div>


                    <div class="answer-row answer-correct">

                        <strong>
                            Correct answer:
                        </strong>

                        ${escapeHTML(
                            mistake.correctAnswer
                        )}

                    </div>


                    <div class="explanation">

                        <strong>
                            Explanation:
                        </strong>

                        ${escapeHTML(
                            mistake.question.explanation
                        )}

                    </div>

                </div>

            `
        ).join("");

}


/* =========================================================
   MONITORING REPORT
   ========================================================= */

function renderMonitoringReport() {

    const container =
        document.getElementById(
            "monitoringReport"
        );


    if (!monitoringEvents.length) {

        container.innerHTML = `

            <div class="area-item">

                <span>
                    No monitoring alerts recorded.
                </span>

                <span
                    class="area-score"
                    style="color:var(--green)">
                    Good
                </span>

            </div>

        `;

        return;

    }


    container.innerHTML =
        monitoringEvents.map(
            event => `

                <div class="area-item">

                    <span>
                        ${escapeHTML(event.message)}
                    </span>

                    <span>
                        ${escapeHTML(event.time)}
                    </span>

                </div>

            `
        ).join("");

}


/* =========================================================
   IMPROVEMENT
   ========================================================= */

function renderImprovement(score) {

    const container =
        document.getElementById(
            "improvementContent"
        );


    const recommendations = [];


    if (score < 70) {

        recommendations.push(
            "Revise the fundamentals of your weak topics before attempting advanced interview questions."
        );

    }


    if (score < 85) {

        recommendations.push(
            "Practice at least one timed technical test every day."
        );

    }


    recommendations.push(
        "When solving coding problems, explain your approach, time complexity and space complexity."
    );


    recommendations.push(
        "Practice DSA patterns such as arrays, strings, hashing, binary search, recursion, trees and graphs."
    );


    recommendations.push(
        "Prepare real projects from your resume because interviewers often ask about implementation decisions."
    );


    recommendations.push(
        "For HR rounds, practice a concise introduction and use the STAR structure for behavioral answers."
    );


    container.innerHTML = `

        <div class="improvement-list">

            ${recommendations.map(
                recommendation => `

                    <div>

                        <i class="fa-solid fa-check"></i>

                        <span>
                            ${escapeHTML(
                                recommendation
                            )}
                        </span>

                    </div>

                `
            ).join("")}

        </div>

    `;

}


/* =========================================================
   QUESTION REVIEW
   ========================================================= */

function renderQuestionReview() {

    const container =
        document.getElementById(
            "questionReview"
        );


    container.innerHTML =
        currentTest.questions.map(
            (question, index) => {

                let status =
                    "unanswered";

                let statusText =
                    "Unanswered";


                if (
                    question.type === "theory"
                ) {

                    const answer =
                        userAnswers[index];


                    if (
                        answer !== null &&
                        answer !== undefined
                    ) {

                        if (
                            answer ===
                            question.answer
                        ) {

                            status =
                                "correct";

                            statusText =
                                "Correct";

                        } else {

                            status =
                                "wrong";

                            statusText =
                                "Wrong";

                        }

                    }

                } else {

                    if (
                        userAnswers[index] &&
                        userAnswers[index].code
                    ) {

                        status =
                            "correct";

                        statusText =
                            "Attempted";

                    }

                }


                return `

                    <div class="review-item">

                        <div class="review-top">

                            <div class="review-question">

                                Q${index + 1}.
                                ${escapeHTML(
                                    question.q
                                )}

                            </div>

                            <span
                                class="review-status ${status}">

                                ${statusText}

                            </span>

                        </div>


                        <div class="review-answer">

                            Topic:
                            <strong>
                                ${escapeHTML(
                                    question.topic
                                )}
                            </strong>

                            &nbsp; • &nbsp;

                            Type:
                            ${question.type}

                        </div>

                    </div>

                `;

            }
        ).join("");

}


/* =========================================================
   RUN CODE
   ========================================================= */

runCodeBtn.addEventListener(
    "click",
    runCode
);


async function runCode() {

    const code =
        codeEditor.value.trim();


    if (!code) {

        codeOutput.textContent =
            "Please write some code first.";

        return;

    }


    const language =
        languageSelect.value;


    codeOutput.textContent =
        "Running...";


    /*
        JavaScript can be executed locally
        for this demo.

        C/C++ should use a backend sandbox.
    */


    if (
        language === "javascript"
    ) {

        runJavaScript(code);

        return;

    }


    if (
        language === "c" ||
        language === "cpp"
    ) {

        if (!CODE_RUNNER_API) {

            codeOutput.textContent =
                `C/C++ compiler backend is not connected.

For real YUGMA code checking, connect a secure backend compiler/Judge service.

Do NOT compile untrusted C/C++ code directly inside your browser or Node.js server without sandboxing.`;

            return;

        }


        runRemoteCode(
            code,
            language
        );

    }

}


/* =========================================================
   JAVASCRIPT RUNNER
   ========================================================= */

function runJavaScript(code) {

    try {

        const logs = [];


        const fakeConsole = {

            log: (...args) => {

                logs.push(
                    args
                        .map(
                            value =>
                                typeof value ===
                                "object"
                                    ? JSON.stringify(value)
                                    : String(value)
                        )
                        .join(" ")
                );

            }

        };


        const fn =
            new Function(
                "console",
                code
            );


        fn(fakeConsole);


        codeOutput.textContent =
            logs.length
                ? logs.join("\n")
                : "Code executed successfully.\nNo console output.";

    } catch (error) {

        codeOutput.textContent =
            `Runtime Error:\n${error.message}`;

    }

}


/* =========================================================
   REMOTE CODE RUNNER
   ========================================================= */

async function runRemoteCode(
    code,
    language
) {

    try {

        const languageId =
            language === "c"
                ? 50
                : 54;


        const response =
            await fetch(
                CODE_RUNNER_API,
                {

                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        source_code:
                            btoa(
                                unescape(
                                    encodeURIComponent(
                                        code
                                    )
                                )
                            ),

                        language_id:
                            languageId

                    })

                }
            );


        if (!response.ok) {

            throw new Error(
                `Compiler service returned ${response.status}`
            );

        }


        const data =
            await response.json();


        codeOutput.textContent =
            data.output ||
            data.stdout ||
            data.stderr ||
            "No output.";

    } catch (error) {

        codeOutput.textContent =
            `Compiler Error:\n${error.message}`;

    }

}


/* =========================================================
   FILE NAME
   ========================================================= */

languageSelect.addEventListener(
    "change",
    updateFileName
);


function updateFileName() {

    const language =
        languageSelect.value;


    if (language === "c") {

        codeFileName.textContent =
            "solution.c";

    } else if (
        language === "cpp"
    ) {

        codeFileName.textContent =
            "solution.cpp";

    } else {

        codeFileName.textContent =
            "solution.js";

    }

}


/* =========================================================
   NEW PRACTICE
   ========================================================= */

document.getElementById(
    "newPracticeBtn"
).addEventListener(
    "click",
    () => {

        resultSection.classList.add(
            "hidden"
        );


        document.getElementById(
            "setupSection"
        ).classList.remove(
            "hidden"
        );


        document.getElementById(
            "setupSection"
        ).scrollIntoView({
            behavior: "smooth"
        });

    }
);


/* =========================================================
   BACK TO TESTS
   ========================================================= */

document.getElementById(
    "backToTestsBtn"
).addEventListener(
    "click",
    () => {

        resultSection.classList.add(
            "hidden"
        );


        testsSection.classList.remove(
            "hidden"
        );


        testsSection.scrollIntoView({
            behavior: "smooth"
        });

    }
);


/* =========================================================
   SHUFFLE
   ========================================================= */

function shuffle(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];

    }


    return array;

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value)
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