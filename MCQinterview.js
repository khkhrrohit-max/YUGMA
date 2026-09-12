/* =========================================================
   YUGMA AI MCQ INTERVIEW
   ========================================================= */


let candidate = {};

let generatedTests = [];

let activeTest = null;

let currentQuestionIndex = 0;

let userAnswers = [];

let timerInterval = null;

let remainingSeconds = 600;

let cameraStream = null;


/* =========================================================
   QUESTION BANK
   ========================================================= */

const questionBank = {


    DSA: [

        {
            q: "What is the time complexity of binary search on a sorted array?",
            options: [
                "O(n)",
                "O(log n)",
                "O(n log n)",
                "O(1)"
            ],
            answer: 1,
            explanation:
                "Binary search repeatedly divides the search space into two halves. Therefore, the maximum number of comparisons grows logarithmically with n, giving O(log n) time complexity.",
            level: "High",
            concept: "Searching"
        },


        {
            q: "Which data structure follows the LIFO principle?",
            options: [
                "Queue",
                "Linked List",
                "Stack",
                "Heap"
            ],
            answer: 2,
            explanation:
                "A stack follows Last-In-First-Out. The most recently inserted element is removed first.",
            level: "High",
            concept: "Stack"
        },


        {
            q: "What is the average time complexity of quicksort?",
            options: [
                "O(n)",
                "O(log n)",
                "O(n log n)",
                "O(n²)"
            ],
            answer: 2,
            explanation:
                "With reasonably balanced partitions, quicksort divides the array into subproblems and performs O(n) partition work at each level, resulting in average O(n log n). Its worst case is O(n²).",
            level: "High",
            concept: "Sorting"
        },


        {
            q: "Which traversal of a Binary Search Tree gives sorted order?",
            options: [
                "Preorder",
                "Postorder",
                "Level order",
                "Inorder"
            ],
            answer: 3,
            explanation:
                "For a Binary Search Tree, inorder traversal visits left subtree, root and right subtree, producing elements in ascending order.",
            level: "High",
            concept: "Trees"
        },


        {
            q: "Which technique is commonly used to find the shortest path from a source in a graph with non-negative edge weights?",
            options: [
                "DFS",
                "Dijkstra's algorithm",
                "Binary Search",
                "Merge Sort"
            ],
            answer: 1,
            explanation:
                "Dijkstra's algorithm repeatedly selects the unvisited vertex with the smallest known distance and relaxes its edges. It works correctly when edge weights are non-negative.",
            level: "High",
            concept: "Graphs"
        },


        {
            q: "What is the worst-case time complexity of accessing an element by index in an array?",
            options: [
                "O(1)",
                "O(log n)",
                "O(n)",
                "O(n log n)"
            ],
            answer: 0,
            explanation:
                "Arrays provide direct memory access using an index, so accessing an element takes constant time O(1).",
            level: "High",
            concept: "Arrays"
        }

    ],


    LLM: [

        {
            q: "What architecture is the foundation of most modern Large Language Models such as GPT?",
            options: [
                "Decision Tree",
                "Transformer",
                "Linked List",
                "Naive Bayes"
            ],
            answer: 1,
            explanation:
                "Modern LLMs such as GPT are based on the Transformer architecture. Its attention mechanism allows the model to process relationships between tokens efficiently.",
            level: "High",
            concept: "Transformers"
        },


        {
            q: "What is the primary purpose of attention in a Transformer?",
            options: [
                "Compress images",
                "Determine relationships between tokens",
                "Store passwords",
                "Compile code"
            ],
            answer: 1,
            explanation:
                "Attention allows a model to determine which tokens are important relative to another token. This helps the model understand contextual relationships.",
            level: "High",
            concept: "Attention"
        },


        {
            q: "What is RAG primarily used for?",
            options: [
                "Increasing monitor resolution",
                "Retrieving external information before generating an answer",
                "Sorting arrays",
                "Managing operating system processes"
            ],
            answer: 1,
            explanation:
                "Retrieval-Augmented Generation retrieves relevant external information and supplies it to the language model before generation. This can improve grounding and usefulness.",
            level: "High",
            concept: "RAG"
        },


        {
            q: "What is a token in the context of an LLM?",
            options: [
                "Only a complete sentence",
                "A unit of text processed by the model",
                "A database table",
                "A network packet"
            ],
            answer: 1,
            explanation:
                "A token is a unit of text processed by an LLM. Depending on the tokenizer, it may represent a word, part of a word, punctuation or another text unit.",
            level: "High",
            concept: "Tokenization"
        },


        {
            q: "What does temperature generally control during LLM text generation?",
            options: [
                "GPU temperature",
                "Database size",
                "Randomness of token selection",
                "Internet speed"
            ],
            answer: 2,
            explanation:
                "Temperature controls how strongly the probability distribution is flattened or sharpened during generation. Higher values generally produce more varied outputs.",
            level: "Medium",
            concept: "Generation"
        },


        {
            q: "What is a hallucination in an LLM?",
            options: [
                "A model generating unsupported or incorrect information",
                "A GPU failure",
                "A type of database",
                "A sorting algorithm"
            ],
            answer: 0,
            explanation:
                "An LLM hallucination occurs when the model produces information that may sound plausible but is unsupported, fabricated or incorrect.",
            level: "High",
            concept: "AI Reliability"
        }

    ],


    DBMS: [

        {
            q: "Which normal form primarily removes partial dependency?",
            options: [
                "1NF",
                "2NF",
                "3NF",
                "BCNF"
            ],
            answer: 1,
            explanation:
                "Second Normal Form removes partial dependency of a non-key attribute on part of a composite candidate key.",
            level: "High",
            concept: "Normalization"
        },


        {
            q: "Which SQL command is used to retrieve data?",
            options: [
                "SELECT",
                "UPDATE",
                "DELETE",
                "DROP"
            ],
            answer: 0,
            explanation:
                "SELECT is used to retrieve rows and columns from one or more database tables.",
            level: "High",
            concept: "SQL"
        },


        {
            q: "Which property of a transaction ensures that committed data survives system failure?",
            options: [
                "Atomicity",
                "Consistency",
                "Isolation",
                "Durability"
            ],
            answer: 3,
            explanation:
                "Durability guarantees that once a transaction has been committed, its changes persist even after system failures.",
            level: "High",
            concept: "Transactions"
        },


        {
            q: "Which SQL clause is used to filter rows before grouping?",
            options: [
                "ORDER BY",
                "WHERE",
                "HAVING",
                "GROUP BY"
            ],
            answer: 1,
            explanation:
                "WHERE filters individual rows before grouping. HAVING filters groups after GROUP BY is applied.",
            level: "High",
            concept: "SQL"
        }

    ],


    OOP: [

        {
            q: "Which OOP concept allows the same interface to represent different implementations?",
            options: [
                "Encapsulation",
                "Polymorphism",
                "Inheritance",
                "Compilation"
            ],
            answer: 1,
            explanation:
                "Polymorphism allows the same interface or method call to behave differently depending on the object or implementation.",
            level: "High",
            concept: "Polymorphism"
        },


        {
            q: "What is encapsulation?",
            options: [
                "Combining data and methods while controlling access",
                "Creating multiple databases",
                "Sorting objects",
                "Deleting classes"
            ],
            answer: 0,
            explanation:
                "Encapsulation bundles data and related methods together and can restrict direct access to internal state.",
            level: "High",
            concept: "Encapsulation"
        },


        {
            q: "Which mechanism allows a class to acquire properties of another class?",
            options: [
                "Inheritance",
                "Abstraction",
                "Overloading",
                "Parsing"
            ],
            answer: 0,
            explanation:
                "Inheritance allows a derived class to reuse or extend members of a base class.",
            level: "High",
            concept: "Inheritance"
        }

    ],


    OS: [

        {
            q: "What is a process?",
            options: [
                "A program in execution",
                "Only source code",
                "A database table",
                "A network protocol"
            ],
            answer: 0,
            explanation:
                "A process is a program that is currently executing, along with its associated execution state and resources.",
            level: "High",
            concept: "Processes"
        },


        {
            q: "Which scheduling algorithm gives each process a fixed time quantum?",
            options: [
                "FCFS",
                "Round Robin",
                "SJF",
                "Priority only"
            ],
            answer: 1,
            explanation:
                "Round Robin scheduling assigns each ready process a fixed time quantum in a cyclic order.",
            level: "High",
            concept: "CPU Scheduling"
        },


        {
            q: "What is virtual memory?",
            options: [
                "A technique that provides an abstraction of larger memory using storage and RAM",
                "A CPU register",
                "A type of compiler",
                "A network protocol"
            ],
            answer: 0,
            explanation:
                "Virtual memory allows the operating system to provide processes with an abstraction of memory larger than available physical RAM, commonly using secondary storage.",
            level: "Medium",
            concept: "Memory Management"
        }

    ],


    CN: [

        {
            q: "Which protocol is connection-oriented?",
            options: [
                "UDP",
                "TCP",
                "IP",
                "DNS"
            ],
            answer: 1,
            explanation:
                "TCP establishes a connection and provides reliable, ordered delivery using acknowledgements and retransmission mechanisms.",
            level: "High",
            concept: "TCP/IP"
        },


        {
            q: "What is the primary purpose of DNS?",
            options: [
                "Encrypt files",
                "Translate domain names to IP addresses",
                "Compile programs",
                "Store passwords"
            ],
            answer: 1,
            explanation:
                "DNS maps human-readable domain names to IP addresses and other DNS records.",
            level: "High",
            concept: "DNS"
        },


        {
            q: "Which HTTP status code means Not Found?",
            options: [
                "200",
                "301",
                "404",
                "500"
            ],
            answer: 2,
            explanation:
                "HTTP 404 indicates that the requested resource could not be found on the server.",
            level: "High",
            concept: "HTTP"
        }

    ],


    Web: [

        {
            q: "Which JavaScript keyword creates a block-scoped variable that can be reassigned?",
            options: [
                "var",
                "let",
                "const",
                "static"
            ],
            answer: 1,
            explanation:
                "let declares a block-scoped variable that can be reassigned. const is also block-scoped but cannot be reassigned.",
            level: "High",
            concept: "JavaScript"
        },


        {
            q: "What does an API commonly provide?",
            options: [
                "A way for software components to communicate",
                "Only image compression",
                "A replacement for RAM",
                "A CPU instruction"
            ],
            answer: 0,
            explanation:
                "An API defines a way for different software components or systems to communicate and exchange data or functionality.",
            level: "High",
            concept: "APIs"
        },


        {
            q: "Which technology is commonly used to describe the structure of a web page?",
            options: [
                "HTML",
                "SQL",
                "Python",
                "Git"
            ],
            answer: 0,
            explanation:
                "HTML defines the structure and semantic elements of web pages.",
            level: "High",
            concept: "HTML"
        }

    ],


    Aptitude: [

        {
            q: "If a product costs ₹500 and is sold at ₹600, what is the profit percentage?",
            options: [
                "10%",
                "15%",
                "20%",
                "25%"
            ],
            answer: 2,
            explanation:
                "Profit = 600 - 500 = ₹100. Profit percentage = 100/500 × 100 = 20%.",
            level: "Medium",
            concept: "Profit & Loss"
        },


        {
            q: "If 5 workers complete a task in 10 days, assuming equal productivity, how many days will 10 workers take?",
            options: [
                "2 days",
                "5 days",
                "10 days",
                "20 days"
            ],
            answer: 1,
            explanation:
                "Total work = 5 × 10 = 50 worker-days. With 10 workers, required time = 50/10 = 5 days.",
            level: "Medium",
            concept: "Time & Work"
        }

    ],


    Interview: [

        {
            q: "Which answer is generally strongest when an interviewer asks 'Tell me about yourself'?",
            options: [
                "A long description of your personal life",
                "A concise summary of education, relevant skills, projects and career direction",
                "Only your marks",
                "Only your hobbies"
            ],
            answer: 1,
            explanation:
                "A strong introduction connects your education, relevant technical skills, projects or experience and career direction to the role.",
            level: "High",
            concept: "HR Interview"
        },


        {
            q: "What is the best approach when you don't know the answer to a technical interview question?",
            options: [
                "Invent an answer confidently",
                "Remain silent",
                "Be honest, explain what you know and describe how you would learn or solve it",
                "Leave the interview"
            ],
            answer: 2,
            explanation:
                "Interviewers often value reasoning and honesty. Explain the part you understand and, if appropriate, describe how you would investigate or solve the unknown part.",
            level: "High",
            concept: "Interview Skills"
        }

    ]

};


/* =========================================================
   COMPANY PRIORITIES
   ========================================================= */

const companyTopics = {

    google: ["DSA", "OOP", "DBMS", "CN", "OS", "LLM"],

    microsoft: ["DSA", "OOP", "OS", "DBMS", "CN"],

    amazon: ["DSA", "DBMS", "OOP", "OS", "CN"],

    meta: ["DSA", "Web", "DBMS", "OOP"],

    apple: ["DSA", "OS", "CN", "OOP"],

    infosys: ["DSA", "DBMS", "OOP", "Aptitude", "Interview"],

    tcs: ["DSA", "DBMS", "OOP", "Aptitude", "Interview"],

    wipro: ["DSA", "DBMS", "OOP", "Aptitude", "Interview"],

    cognizant: ["DSA", "DBMS", "OOP", "Aptitude", "Interview"],

    default: ["DSA", "DBMS", "OOP", "OS", "CN", "Interview"]

};


/* =========================================================
   DOM
   ========================================================= */

const candidateForm =
    document.getElementById("candidateForm");

const setupSection =
    document.getElementById("setupSection");

const testsSection =
    document.getElementById("testsSection");

const testGrid =
    document.getElementById("testGrid");

const testScreen =
    document.getElementById("testScreen");

const resultSection =
    document.getElementById("resultSection");

const cameraModal =
    document.getElementById("cameraModal");


/* =========================================================
   PROFILE FORM
   ========================================================= */

candidateForm.addEventListener("submit", function(e) {

    e.preventDefault();


    const selectedTopics =
        [...document.querySelectorAll(".topicCheck:checked")]
        .map(input => input.value);


    candidate = {

        name:
            document.getElementById("candidateName").value.trim(),

        age:
            document.getElementById("candidateAge").value,

        course:
            document.getElementById("candidateCourse").value.trim(),

        branch:
            document.getElementById("candidateBranch").value.trim(),

        college:
            document.getElementById("candidateCollege").value.trim(),

        company:
            document.getElementById("targetCompany").value.trim(),

        topics:
            selectedTopics

    };


    if (candidate.topics.length === 0) {

        alert(
            "Please select at least one preparation topic."
        );

        return;

    }


    generatePersonalizedTests();

});


/* =========================================================
   GENERATE TESTS
   ========================================================= */

function generatePersonalizedTests() {

    const company =
        candidate.company.toLowerCase();


    let priorityTopics =
        companyTopics.default;


    for (const key in companyTopics) {

        if (
            key !== "default" &&
            company.includes(key)
        ) {

            priorityTopics =
                companyTopics[key];

            break;

        }

    }


    let topics =
        candidate.topics.slice();


    /*
       Add important company-related topics
       without exceeding 6 topics.
    */

    priorityTopics.forEach(topic => {

        if (
            !topics.includes(topic) &&
            topics.length < 6
        ) {

            topics.push(topic);

        }

    });


    /*
       Test 1 = core technical
       Test 2 = advanced/company focused
       Test 3 = mixed interview
    */

    const test1Topics =
        topics.slice(0, Math.min(3, topics.length));

    const test2Topics =
        topics.slice(
            2,
            Math.min(6, topics.length)
        );

    const test3Topics =
        topics;


    generatedTests = [

        createTest(
            "Core Technical Interview",
            test1Topics,
            "Fundamental concepts frequently tested in internship and fresher technical interviews."
        ),

        createTest(
            "Advanced & Company Preparation",
            test2Topics,
            "Higher-value questions designed around your selected skills and target company."
        ),

        createTest(
            "Final Mixed Interview Assessment",
            test3Topics,
            "A mixed technical and interview-readiness assessment."
        )

    ];


    document.getElementById("testIntro").textContent =
        `${candidate.name}, YUGMA created these assessments for your ${candidate.company} preparation.`;


    document.getElementById("aiSummary").innerHTML = `

        <strong>
            <i class="fa-solid fa-wand-magic-sparkles"></i>
            YUGMA Personalized Recommendation
        </strong>

        <p>
            Based on your ${candidate.course} ${candidate.branch}
            profile and target company <strong>${escapeHTML(candidate.company)}</strong>,
            YUGMA recommends focusing on:
            <strong>${topics.join(", ")}</strong>.
            These tests emphasize fundamental concepts that are
            commonly useful in technical internship and fresher interviews.
        </p>

    `;


    renderTests();


    setupSection.classList.add("hidden");

    testsSection.classList.remove("hidden");

    testsSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   CREATE TEST
   ========================================================= */

function createTest(title, topics, description) {

    let pool = [];


    topics.forEach(topic => {

        if (questionBank[topic]) {

            pool.push(
                ...questionBank[topic].map(q => ({
                    ...q,
                    topic
                }))
            );

        }

    });


    /*
       Remove duplicates
    */

    pool = [...new Map(
        pool.map(q => [q.q, q])
    ).values()];


    shuffle(pool);


    return {

        title,

        description,

        topics,

        questions:
            pool.slice(0, Math.min(10, pool.length))

    };

}


/* =========================================================
   RENDER TEST CARDS
   ========================================================= */

function renderTests() {

    testGrid.innerHTML = "";


    generatedTests.forEach((test, index) => {

        const card =
            document.createElement("div");

        card.className = "test-card";


        card.innerHTML = `

            <div class="test-number">
                0${index + 1}
            </div>

            <h3>
                ${escapeHTML(test.title)}
            </h3>

            <p>
                ${escapeHTML(test.description)}
            </p>

            <div class="test-info">

                <span>
                    <i class="fa-regular fa-circle-question"></i>
                    ${test.questions.length} Questions
                </span>

                <span>
                    <i class="fa-regular fa-clock"></i>
                    10 Minutes
                </span>

                <span>
                    ${test.topics.length} Topics
                </span>

            </div>

            <button
                class="start-test-btn"
                onclick="prepareTest(${index})">

                Start Test

                <i class="fa-solid fa-arrow-right"></i>

            </button>

        `;


        testGrid.appendChild(card);

    });

}


/* =========================================================
   PREPARE TEST
   ========================================================= */

function prepareTest(index) {

    activeTest =
        generatedTests[index];

    cameraModal.classList.remove("hidden");

}


/* =========================================================
   CAMERA PERMISSION
   ========================================================= */

document.getElementById("allowCameraBtn")
    .addEventListener("click", async function() {

        try {

            cameraStream =
                await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: false
                });


            document.getElementById("cameraVideo").srcObject =
                cameraStream;


            cameraModal.classList.add("hidden");

            startTest();

        }

        catch(error) {

            alert(
                "Camera permission is required to start this proctored test. Please allow camera access in your browser and try again."
            );

        }

    });


/* =========================================================
   CANCEL CAMERA
   ========================================================= */

document.getElementById("cancelCameraBtn")
    .addEventListener("click", function() {

        cameraModal.classList.add("hidden");

    });


/* =========================================================
   START TEST
   ========================================================= */

function startTest() {

    currentQuestionIndex = 0;

    userAnswers =
        new Array(
            activeTest.questions.length
        ).fill(null);


    remainingSeconds = 600;


    document.getElementById("activeTestTitle")
        .textContent =
        activeTest.title;


    document.getElementById("totalQuestions")
        .textContent =
        activeTest.questions.length;


    testsSection.classList.add("hidden");

    resultSection.classList.add("hidden");

    testScreen.classList.remove("hidden");


    document.getElementById("cameraPlaceholder")
        .classList.add("hidden");


    document.getElementById("cameraStatus")
        .textContent = "Active";


    renderQuestion();

    startTimer();


    testScreen.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   TIMER
   ========================================================= */

function startTimer() {

    clearInterval(timerInterval);


    updateTimer();


    timerInterval =
        setInterval(() => {

            remainingSeconds--;

            updateTimer();


            if (remainingSeconds <= 0) {

                clearInterval(timerInterval);

                alert(
                    "Time is over. Your test will be submitted automatically."
                );

                submitTest();

            }

        }, 1000);

}


function updateTimer() {

    const minutes =
        Math.floor(remainingSeconds / 60);

    const seconds =
        remainingSeconds % 60;


    document.getElementById("timer")
        .textContent =
        `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;

}


/* =========================================================
   RENDER QUESTION
   ========================================================= */

function renderQuestion() {

    const question =
        activeTest.questions[currentQuestionIndex];


    document.getElementById("currentQuestion")
        .textContent =
        currentQuestionIndex + 1;


    const percent =
        ((currentQuestionIndex + 1) /
        activeTest.questions.length) * 100;


    document.getElementById("questionProgress")
        .style.width =
        percent + "%";


    const container =
        document.getElementById("questionContainer");


    container.innerHTML = `

        <div class="question-card">

            <h3>
                ${currentQuestionIndex + 1}.
                ${escapeHTML(question.q)}
            </h3>

            <div class="options">

                ${question.options.map(
                    (option, index) => `

                    <div
                        class="option
                        ${
                            userAnswers[currentQuestionIndex] === index
                                ? "selected"
                                : ""
                        }"
                        onclick="selectAnswer(${index})">

                        <span class="option-letter">
                            ${String.fromCharCode(65 + index)}
                        </span>

                        <span>
                            ${escapeHTML(option)}
                        </span>

                    </div>

                `).join("")}

            </div>

        </div>

    `;


    document.getElementById("previousBtn")
        .style.visibility =
        currentQuestionIndex === 0
            ? "hidden"
            : "visible";


    const lastQuestion =
        currentQuestionIndex ===
        activeTest.questions.length - 1;


    document.getElementById("nextQuestionBtn")
        .classList.toggle(
            "hidden",
            lastQuestion
        );


    document.getElementById("submitTestBtn")
        .classList.toggle(
            "hidden",
            !lastQuestion
        );

}


/* =========================================================
   SELECT ANSWER
   ========================================================= */

function selectAnswer(index) {

    userAnswers[currentQuestionIndex] =
        index;

    renderQuestion();

}


/* =========================================================
   NEXT
   ========================================================= */

document.getElementById("nextQuestionBtn")
    .addEventListener("click", function() {

        if (
            currentQuestionIndex <
            activeTest.questions.length - 1
        ) {

            currentQuestionIndex++;

            renderQuestion();

        }

    });


/* =========================================================
   PREVIOUS
   ========================================================= */

document.getElementById("previousBtn")
    .addEventListener("click", function() {

        if (currentQuestionIndex > 0) {

            currentQuestionIndex--;

            renderQuestion();

        }

    });


/* =========================================================
   SUBMIT
   ========================================================= */

document.getElementById("submitTestBtn")
    .addEventListener("click", function() {

        const unanswered =
            userAnswers.filter(
                answer => answer === null
            ).length;


        if (unanswered > 0) {

            const confirmSubmit =
                confirm(
                    `You have ${unanswered} unanswered question(s). Submit anyway?`
                );

            if (!confirmSubmit) return;

        }


        submitTest();

    });


/* =========================================================
   SUBMIT TEST
   ========================================================= */

function submitTest() {

    clearInterval(timerInterval);


    let correct = 0;

    let wrong = 0;

    let unanswered = 0;


    const mistakes = [];


    activeTest.questions.forEach(
        (question, index) => {

            const selected =
                userAnswers[index];


            if (selected === null) {

                unanswered++;

                mistakes.push({
                    question,
                    selected: null
                });

            }

            else if (
                selected === question.answer
            ) {

                correct++;

            }

            else {

                wrong++;

                mistakes.push({
                    question,
                    selected
                });

            }

        }
    );


    if (cameraStream) {

        cameraStream
            .getTracks()
            .forEach(track => track.stop());

    }


    const total =
        activeTest.questions.length;


    const score =
        Math.round(
            (correct / total) * 100
        );


    testScreen.classList.add("hidden");

    showResult(
        correct,
        wrong,
        unanswered,
        score,
        mistakes
    );

}


/* =========================================================
   SHOW RESULT
   ========================================================= */

function showResult(
    correct,
    wrong,
    unanswered,
    score,
    mistakes
) {

    resultSection.classList.remove("hidden");


    document.getElementById("resultGreeting")
        .textContent =
        `${candidate.name}, here is your detailed ${activeTest.title} performance analysis.`;


    document.getElementById("finalScore")
        .textContent =
        `${score}%`;


    document.querySelector(".score-circle")
        .style.setProperty(
            "--score",
            `${score}%`
        );


    document.getElementById("correctAnswers")
        .textContent =
        correct;


    document.getElementById("wrongAnswers")
        .textContent =
        wrong;


    document.getElementById("unansweredAnswers")
        .textContent =
        unanswered;


    let title;

    let description;


    if (score >= 85) {

        title =
            "Excellent Interview Readiness";

        description =
            "Your fundamentals are strong. Focus now on advanced problem solving, project discussions and explaining your approach clearly.";

    }

    else if (score >= 70) {

        title =
            "Good Foundation — Keep Practicing";

        description =
            "You have a good foundation, but some concepts need more revision before a high-pressure technical interview.";

    }

    else if (score >= 50) {

        title =
            "Needs More Preparation";

        description =
            "Your basic understanding is developing. Strengthen weak concepts and practice interview-style questions regularly.";

    }

    else {

        title =
            "Build Your Fundamentals First";

        description =
            "Before focusing on advanced interview questions, revise the fundamental concepts identified in this assessment.";

    }


    document.getElementById("performanceTitle")
        .textContent =
        title;


    document.getElementById("performanceDescription")
        .textContent =
        description;


    generateAreaAnalysis();

    renderMistakes(mistakes);

    generateImprovementPlan(score);


    resultSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   AREA ANALYSIS
   ========================================================= */

function generateAreaAnalysis() {

    const topicStats = {};


    activeTest.questions.forEach(
        (question, index) => {

            const topic =
                question.topic;


            if (!topicStats[topic]) {

                topicStats[topic] = {
                    correct: 0,
                    total: 0
                };

            }


            topicStats[topic].total++;


            if (
                userAnswers[index] ===
                question.answer
            ) {

                topicStats[topic].correct++;

            }

        }
    );


    const strong = [];

    const weak = [];


    Object.entries(topicStats)
        .forEach(([topic, data]) => {

            const percentage =
                data.correct /
                data.total *
                100;


            if (percentage >= 70) {

                strong.push(
                    `${topic} — ${Math.round(percentage)}%`
                );

            }
            else {

                weak.push(
                    `${topic} — ${Math.round(percentage)}%`
                );

            }

        });


    document.getElementById("strongAreas")
        .innerHTML =
        createAnalysisList(
            strong,
            "No strong topic yet — keep practicing."
        );


    document.getElementById("weakAreas")
        .innerHTML =
        createAnalysisList(
            weak,
            "No major weak area detected."
        );


    const readiness =
        document.getElementById("readinessAnalysis");


    readiness.innerHTML = `

        <div class="analysis-list">

            <span>
                <strong>Target:</strong>
                ${escapeHTML(candidate.company)}
            </span>

            <span>
                <strong>Course:</strong>
                ${escapeHTML(candidate.course)}
            </span>

            <span>
                <strong>Branch:</strong>
                ${escapeHTML(candidate.branch)}
            </span>

            <span>
                Focus on explaining your reasoning,
                not only selecting the correct answer.
            </span>

        </div>

    `;

}


function createAnalysisList(
    items,
    emptyMessage
) {

    if (!items.length) {

        return `
            <div class="analysis-list">
                <span>${emptyMessage}</span>
            </div>
        `;

    }


    return `

        <div class="analysis-list">

            ${items.map(
                item => `<span>${escapeHTML(item)}</span>`
            ).join("")}

        </div>

    `;

}


/* =========================================================
   MISTAKES
   ========================================================= */

function renderMistakes(mistakes) {

    const container =
        document.getElementById("mistakesContainer");


    if (!mistakes.length) {

        container.innerHTML = `

            <div class="mistake-card"
                 style="border-left-color:#079455">

                <div class="mistake-question">

                    <i class="fa-solid fa-circle-check"></i>

                    Excellent! You answered every question correctly.

                </div>

                <div class="explanation">

                    Your next step should be advanced problem solving,
                    company-specific interview questions and project
                    explanation practice.

                </div>

            </div>

        `;

        return;

    }


    container.innerHTML =
        mistakes.map(
            (item, index) => {

                const q =
                    item.question;


                const selected =
                    item.selected === null
                        ? "Not answered"
                        : q.options[item.selected];


                const correct =
                    q.options[q.answer];


                return `

                    <div class="mistake-card">

                        <div class="mistake-question">

                            ${index + 1}.
                            ${escapeHTML(q.q)}

                        </div>

                        <div class="mistake-answer">

                            <span class="wrong-text">

                                <strong>
                                    Your answer:
                                </strong>

                                ${escapeHTML(selected)}

                            </span>

                            <span class="correct-text">

                                <strong>
                                    Correct answer:
                                </strong>

                                ${escapeHTML(correct)}

                            </span>

                        </div>

                        <div class="explanation">

                            <strong>
                                Why?
                            </strong>

                            <br>

                            ${escapeHTML(q.explanation)}

                        </div>

                    </div>

                `;

            }
        ).join("");

}


/* =========================================================
   IMPROVEMENT PLAN
   ========================================================= */

function generateImprovementPlan(score) {

    const container =
        document.getElementById("improvementPlan");


    let plans = [];


    if (score < 70) {

        plans.push({

            title:
                "Strengthen Fundamentals",

            text:
                "Revise the core concepts of your weakest topics before moving to advanced interview problems."

        });

    }


    plans.push({

        title:
            "Practice With a Timer",

        text:
            "Solve interview questions under time limits so that your speed and decision-making improve under pressure."

    });


    plans.push({

        title:
            "Explain Your Thinking",

        text:
            "During a real interview, explain your approach, assumptions, complexity and trade-offs instead of giving only the final answer."

    });


    plans.push({

        title:
            "Prepare Your Projects",

        text:
            "Be ready to explain your project architecture, technologies, challenges, decisions and what you personally contributed."

    });


    if (score >= 70) {

        plans.push({

            title:
                "Move to Advanced Questions",

            text:
                "Start practicing harder DSA, system design fundamentals, debugging and company-specific interview problems."

        });

    }


    container.innerHTML = `

        <div class="improvement-plan">

            ${plans.map(
                plan => `

                    <div class="plan-item">

                        <strong>
                            ${escapeHTML(plan.title)}
                        </strong>

                        <p>
                            ${escapeHTML(plan.text)}
                        </p>

                    </div>

                `
            ).join("")}

        </div>

    `;

}


/* =========================================================
   NEW TEST
   ========================================================= */

document.getElementById("newTestBtn")
    .addEventListener("click", function() {

        resultSection.classList.add("hidden");

        testsSection.classList.remove("hidden");

        testsSection.scrollIntoView({
            behavior: "smooth"
        });

    });


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
   SECURITY / HTML ESCAPE
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   SAVE PROFILE
   ========================================================= */

window.addEventListener("load", function() {

    try {

        const saved =
            JSON.parse(
                localStorage.getItem("yugmaUser")
            );


        if (saved) {

            if (saved.name) {

                document.getElementById(
                    "candidateName"
                ).value =
                    saved.name;

            }

            if (saved.course) {

                document.getElementById(
                    "candidateCourse"
                ).value =
                    saved.course;

            }

            if (saved.branch) {

                document.getElementById(
                    "candidateBranch"
                ).value =
                    saved.branch;

            }

            if (saved.college) {

                document.getElementById(
                    "candidateCollege"
                ).value =
                    saved.college;

            }

        }

    }
    catch(error) {

        console.log(
            "YUGMA profile not available."
        );

    }

});