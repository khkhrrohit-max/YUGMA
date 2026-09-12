/* ============================================================
   YUGMA ANALYSIS ENGINE
   Real saved data only
   ============================================================ */

"use strict";


/* ============================================================
   STORAGE HELPERS
   ============================================================ */

function readStorage(key) {

    try {

        const value = localStorage.getItem(key);

        if (!value) return null;

        return JSON.parse(value);

    } catch (error) {

        console.warn("YUGMA storage error:", key, error);

        return null;
    }
}


function firstStorage(keys) {

    for (const key of keys) {

        const value = readStorage(key);

        if (value !== null) {
            return value;
        }

    }

    return null;
}


function toArray(value) {

    if (!value) return [];

    if (Array.isArray(value)) {
        return value;
    }

    if (Array.isArray(value.results)) {
        return value.results;
    }

    if (Array.isArray(value.history)) {
        return value.history;
    }

    if (Array.isArray(value.tests)) {
        return value.tests;
    }

    if (Array.isArray(value.records)) {
        return value.records;
    }

    return [];
}


/* ============================================================
   USER
   ============================================================ */

function getUser() {

    return readStorage("yugmaUser") || {};
}


function getCandidate() {

    return readStorage("yugmaAIInterviewCandidate") || {};
}


function renderProfile() {

    const user = getUser();

    const candidate = getCandidate();

    const name =
        user.name ||
        candidate.name ||
        "Student";

    const course =
        user.course ||
        candidate.course ||
        "";

    const branch =
        user.branch ||
        candidate.branch ||
        "";

    const college =
        user.college ||
        candidate.college ||
        "";

    document.getElementById("candidateName").textContent = name;

    const details =
        [course, branch, college]
        .filter(Boolean)
        .join(" • ");

    document.getElementById("candidateDetails").textContent =
        details ||
        "Complete your YUGMA profile to personalize your preparation.";

    /*
       Try profile picture from possible storage fields.
    */

    const avatar = document.getElementById("profileAvatar");

    const image =
        user.profilePicture ||
        user.profileImage ||
        user.photo ||
        user.avatar ||
        "";

    if (image) {

        avatar.innerHTML =
            `<img src="${escapeHTML(image)}" alt="Profile">`;

    }
}


/* ============================================================
   AI INTERVIEW DATA
   ============================================================ */

function getInterviewResults() {

    const keys = [

        "yugmaAIInterviewHistory",

        "yugmaInterviewHistory",

        "yugma_ai_interview_history",

        "yugmaAIInterviewResults",

        "yugmaInterviewResults"

    ];

    let data = firstStorage(keys);

    let results = toArray(data);

    /*
       Some implementations may save a single result.
    */

    if (
        results.length === 0 &&
        data &&
        typeof data === "object" &&
        (
            data.score !== undefined ||
            data.overall !== undefined ||
            data.completedAt
        )
    ) {

        results = [data];
    }

    return results.map(normalizeInterview);
}


function normalizeInterview(item) {

    const scores = item.scores || {};

    const rawScore =
        item.score ??
        item.overall ??
        scores.overall ??
        item.totalScore;

    const score = normalizeScore(rawScore);

    return {

        type: "AI Interview",

        date:
            item.completedAt ||
            item.date ||
            item.timestamp ||
            item.createdAt ||
            null,

        company:
            item.company ||
            item.companyName ||
            "General Interview",

        topics:
            item.topics ||
            [],

        score,

        scores: {

            overall: normalizeScore(
                scores.overall ?? score
            ),

            communication: normalizeScore(
                scores.communication ??
                item.communication
            ),

            technical: normalizeScore(
                scores.technical ??
                scores.skill ??
                item.technical
            ),

            confidence: normalizeScore(
                scores.confidence ??
                item.confidence
            ),

            eyeContact: normalizeScore(
                scores.eyeContact ??
                item.eyeContact
            ),

            bodyLanguage: normalizeScore(
                scores.bodyLanguage ??
                item.bodyLanguage
            ),

            language: normalizeScore(
                scores.language ??
                item.language
            ),

            relevance: normalizeScore(
                scores.relevance ??
                item.relevance
            ),

            professionalism: normalizeScore(
                scores.professionalism ??
                item.professionalism
            )

        },

        raw: item
    };
}


/* ============================================================
   PRACTICE DATA
   ============================================================ */

function getPracticeResults() {

    const keys = [

        "yugmaPracticeHistory",

        "yugmaPracticeResults",

        "yugma_practice_history"

    ];

    let data = firstStorage(keys);

    let results = toArray(data);

    /*
       Existing StudyPilot data is also supported.
    */

    const studyPilot = readStorage("studypilot_ai_data");

    if (
        studyPilot &&
        studyPilot.practice &&
        Array.isArray(studyPilot.practice.tests)
    ) {

        results = results.concat(
            studyPilot.practice.tests
        );

    }

    return results.map(normalizePractice);
}


function normalizePractice(item) {

    let score =
        item.score ??
        item.accuracy ??
        item.percentage;

    score = normalizeScore(score);

    /*
       Existing StudyPilot accuracy may already be 0-100.
    */

    if (
        score !== null &&
        score <= 1
    ) {

        score = score * 100;

    }

    return {

        type: "Practice",

        date:
            item.completedAt ||
            item.date ||
            item.timestamp ||
            item.createdAt ||
            null,

        company:
            item.company ||
            "",

        topic:
            item.topic ||
            item.subject ||
            item.title ||
            "Practice Test",

        score,

        correct:
            numberOrNull(item.correct),

        wrong:
            numberOrNull(item.wrong),

        unanswered:
            numberOrNull(item.unanswered),

        alerts:
            numberOrNull(item.alerts),

        raw: item
    };
}


/* ============================================================
   MCQ DATA
   ============================================================ */

function getMCQResults() {

    const keys = [

        "yugmaMCQHistory",

        "yugmaMCQResults",

        "yugma_mcq_history"

    ];

    let data = firstStorage(keys);

    let results = toArray(data);

    if (
        results.length === 0 &&
        data &&
        typeof data === "object" &&
        (
            data.score !== undefined ||
            data.accuracy !== undefined
        )
    ) {

        results = [data];

    }

    return results.map(normalizeMCQ);
}


function normalizeMCQ(item) {

    let score =
        item.score ??
        item.accuracy ??
        item.percentage;

    score = normalizeScore(score);

    if (
        score !== null &&
        score <= 1
    ) {

        score *= 100;

    }

    return {

        type: "MCQ",

        date:
            item.completedAt ||
            item.date ||
            item.timestamp ||
            item.createdAt ||
            null,

        company:
            item.company ||
            item.companyName ||
            "",

        topic:
            item.topic ||
            item.subject ||
            item.testName ||
            "MCQ Test",

        score,

        correct:
            numberOrNull(item.correct),

        wrong:
            numberOrNull(item.wrong),

        unanswered:
            numberOrNull(item.unanswered),

        raw: item
    };
}


/* ============================================================
   RESUME
   ============================================================ */

function getResumeData() {

    const user = getUser();

    const candidate = getCandidate();

    const resume =
        user.resumeText ||
        user.resume ||
        user.resumeData ||
        candidate.resumeText ||
        candidate.resume ||
        "";

    return {

        exists:
            Boolean(
                resume ||
                user.resumeFile ||
                candidate.resumeFile
            ),

        text:
            typeof resume === "string"
                ? resume
                : ""
    };
}


function renderResume() {

    const resume = getResumeData();

    const status =
        document.getElementById("resumeStatus");

    const sub =
        document.getElementById("resumeSub");

    const breakResume =
        document.getElementById("breakResume");

    if (resume.exists) {

        status.textContent = "Added";

        sub.textContent =
            resume.text
                ? "Resume data available"
                : "Resume file available";

        breakResume.textContent =
            "Resume available";

    } else {

        status.textContent = "Not Added";

        sub.textContent =
            "Add your resume";

        breakResume.textContent =
            "Not analyzed";
    }
}


/* ============================================================
   STUDYPILOT DATA
   ============================================================ */

function getStudyPilotData() {

    return readStorage("studypilot_ai_data") || {};

}


function getStudyActivity() {

    const data = getStudyPilotData();

    let count = 0;

    if (
        data.practice &&
        Array.isArray(data.practice.tests)
    ) {

        count += data.practice.tests.length;

    }

    if (
        Array.isArray(data.activity)
    ) {

        count += data.activity.length;

    }

    if (
        Array.isArray(data.activities)
    ) {

        count += data.activities.length;

    }

    if (
        Array.isArray(data.completed)
    ) {

        count += data.completed.length;

    }

    return count;
}


/* ============================================================
   COMPANY ACTIVITY
   ============================================================ */

function getCompanyCount() {

    const sources = [

        readStorage("yugmaCompanyHistory"),

        readStorage("yugmaCompanyPreparation"),

        readStorage("yugmaCompanyDetails")

    ];

    const companies = new Set();

    sources.forEach(source => {

        if (!source) return;

        const arr = toArray(source);

        arr.forEach(item => {

            const name =
                item.company ||
                item.companyName;

            if (name) {
                companies.add(name);
            }

        });

    });

    /*
       Also use companies from real interview/test results.
    */

    getInterviewResults().forEach(item => {

        if (item.company) {
            companies.add(item.company);
        }

    });

    getPracticeResults().forEach(item => {

        if (item.company) {
            companies.add(item.company);
        }

    });

    getMCQResults().forEach(item => {

        if (item.company) {
            companies.add(item.company);
        }

    });

    return companies.size;
}


/* ============================================================
   MAIN DATA
   ============================================================ */

function getAllResults() {

    const interviews = getInterviewResults();

    const practice = getPracticeResults();

    const mcq = getMCQResults();

    return [

        ...interviews,

        ...practice,

        ...mcq

    ].filter(item => item.date);

}


/* ============================================================
   STATISTICS
   ============================================================ */

function normalizeScore(value) {

    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {

        return null;

    }

    const number = Number(value);

    if (!Number.isFinite(number)) {
        return null;
    }

    /*
       Interview scores may be 0-10.
       Convert them to percentage.
    */

    if (number >= 0 && number <= 10) {

        return number * 10;

    }

    return Math.max(
        0,
        Math.min(100, number)
    );
}


function numberOrNull(value) {

    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {

        return null;
    }

    const number = Number(value);

    return Number.isFinite(number)
        ? number
        : null;
}


/* ============================================================
   STAT CARDS
   ============================================================ */

function renderStats() {

    const interviews = getInterviewResults();

    const practice = getPracticeResults();

    const mcq = getMCQResults();

    const all = [
        ...interviews,
        ...practice,
        ...mcq
    ];

    document.getElementById(
        "totalInterviews"
    ).textContent = interviews.length;

    document.getElementById(
        "totalPractice"
    ).textContent = practice.length;

    document.getElementById(
        "totalMCQ"
    ).textContent = mcq.length;


    document.getElementById(
        "interviewSub"
    ).textContent =
        interviews.length
            ? `${average(interviews)}% average`
            : "No completed interview";


    document.getElementById(
        "practiceSub"
    ).textContent =
        practice.length
            ? `${average(practice)}% average`
            : "No completed practice";


    document.getElementById(
        "mcqSub"
    ).textContent =
        mcq.length
            ? `${average(mcq)}% average`
            : "No completed MCQ";


    const studyActivity =
        getStudyActivity();

    document.getElementById(
        "studyActivity"
    ).textContent = studyActivity;


    document.getElementById(
        "studySub"
    ).textContent =
        studyActivity
            ? "Recorded activities"
            : "No study records";


    const validScores =
        all
            .map(x => x.score)
            .filter(x => x !== null);


    if (validScores.length) {

        const overall =
            Math.round(
                validScores.reduce(
                    (a, b) => a + b,
                    0
                ) / validScores.length
            );

        document.getElementById(
            "overallScore"
        ).textContent = `${overall}%`;

        document.getElementById(
            "overallSub"
        ).textContent =
            `${validScores.length} scored activities`;

    } else {

        document.getElementById(
            "overallScore"
        ).textContent = "—";

        document.getElementById(
            "overallSub"
        ).textContent =
            "Not enough data";

    }


    document.getElementById(
        "breakInterview"
    ).textContent =
        `${interviews.length} interview${interviews.length === 1 ? "" : "s"}`;


    document.getElementById(
        "breakPractice"
    ).textContent =
        `${practice.length} test${practice.length === 1 ? "" : "s"}`;


    document.getElementById(
        "breakMCQ"
    ).textContent =
        `${mcq.length} test${mcq.length === 1 ? "" : "s"}`;


    document.getElementById(
        "breakStudy"
    ).textContent =
        `${studyActivity} activit${studyActivity === 1 ? "y" : "ies"}`;


    document.getElementById(
        "breakCompany"
    ).textContent =
        `${getCompanyCount()} compan${getCompanyCount() === 1 ? "y" : "ies"}`;

}


/* ============================================================
   AVERAGE
   ============================================================ */

function average(results) {

    const values =
        results
            .map(item => item.score)
            .filter(score => score !== null);

    if (!values.length) {
        return "—";
    }

    return Math.round(
        values.reduce(
            (a, b) => a + b,
            0
        ) / values.length
    );
}


/* ============================================================
   LAST 7 DAYS
   ============================================================ */

function getLastSevenDays() {

    const days = [];

    const today = new Date();

    today.setHours(
        0,
        0,
        0,
        0
    );

    for (let i = 6; i >= 0; i--) {

        const date = new Date(today);

        date.setDate(
            today.getDate() - i
        );

        days.push(date);

    }

    return days;
}


function sameDay(dateA, dateB) {

    return (
        dateA.getFullYear() === dateB.getFullYear() &&
        dateA.getMonth() === dateB.getMonth() &&
        dateA.getDate() === dateB.getDate()
    );

}


function getDayScore(results, date) {

    const values =
        results
            .filter(item => {

                if (!item.date) {
                    return false;
                }

                const itemDate =
                    new Date(item.date);

                return sameDay(
                    itemDate,
                    date
                );

            })
            .map(item => item.score)
            .filter(score => score !== null);

    if (!values.length) {
        return 0;
    }

    return Math.round(
        values.reduce(
            (a, b) => a + b,
            0
        ) / values.length
    );

}


function getDayActivity(results, date) {

    return results.filter(item => {

        if (!item.date) {
            return false;
        }

        return sameDay(
            new Date(item.date),
            date
        );

    }).length;

}


/* ============================================================
   CHART
   ============================================================ */

function renderWeeklyChart() {

    const chart =
        document.getElementById(
            "weeklyChart"
        );

    chart.innerHTML = "";

    const days =
        getLastSevenDays();

    const interviews =
        getInterviewResults();

    const practice =
        getPracticeResults();

    const mcq =
        getMCQResults();

    const all =
        [
            ...interviews,
            ...practice,
            ...mcq
        ];


    days.forEach(day => {

        const interviewScore =
            getDayScore(
                interviews,
                day
            );

        const practiceScore =
            getDayScore(
                practice,
                day
            );

        const mcqScore =
            getDayScore(
                mcq,
                day
            );

        const activity =
            getDayActivity(
                all,
                day
            );


        const dayElement =
            document.createElement("div");

        dayElement.className =
            "chart-day";


        const bars =
            document.createElement("div");

        bars.className = "bars";


        bars.appendChild(
            createBar(
                "interview",
                interviewScore
            )
        );


        bars.appendChild(
            createBar(
                "practice",
                practiceScore
            )
        );


        bars.appendChild(
            createBar(
                "mcq",
                mcqScore
            )
        );


        /*
           Activity is represented as a small
           percentage based on number of
           actual activities.
        */

        const activityScore =
            Math.min(
                100,
                activity * 20
            );


        bars.appendChild(
            createBar(
                "activity",
                activityScore
            )
        );


        const label =
            document.createElement("label");

        label.textContent =
            day.toLocaleDateString(
                undefined,
                {
                    weekday: "short"
                }
            );


        dayElement.appendChild(bars);

        dayElement.appendChild(label);

        chart.appendChild(dayElement);

    });

}


/* ============================================================
   CREATE BAR
   ============================================================ */

function createBar(type, score) {

    const bar =
        document.createElement("div");

    bar.className =
        `bar ${type}`;

    bar.style.height =
        `${Math.max(2, score * 2.5)}px`;

    bar.title =
        `${type}: ${score}%`;

    return bar;
}


/* ============================================================
   WEEKLY CHANGE
   ============================================================ */

function renderWeeklyChange() {

    const all =
        getAllResults();

    const days =
        getLastSevenDays();

    const scores =
        days.map(day =>
            getDayScore(
                all,
                day
            )
        );


    const valid =
        scores.filter(
            score => score > 0
        );


    if (valid.length < 2) {

        document.getElementById(
            "weeklyChange"
        ).textContent = "—";

        return;
    }


    const first =
        valid[0];

    const last =
        valid[valid.length - 1];


    const change =
        Math.round(
            last - first
        );


    const element =
        document.getElementById(
            "weeklyChange"
        );


    if (change > 0) {

        element.textContent =
            `+${change}%`;

    } else {

        element.textContent =
            `${change}%`;

    }

}


/* ============================================================
   READINESS
   ============================================================ */

function renderReadiness() {

    const interviews =
        getInterviewResults();

    const practice =
        getPracticeResults();

    const mcq =
        getMCQResults();

    const all = [
        ...interviews,
        ...practice,
        ...mcq
    ];


    const scores =
        all
            .map(x => x.score)
            .filter(x => x !== null);


    if (!scores.length) {

        document.getElementById(
            "readinessScore"
        ).textContent = "—";

        document.getElementById(
            "readinessText"
        ).textContent =
            "Complete real activities";

        return;

    }


    let readiness =
        scores.reduce(
            (a, b) => a + b,
            0
        ) / scores.length;


    /*
       Slightly reward activity breadth,
       but never invent scores.
    */

    const modules =
        [
            interviews.length > 0,
            practice.length > 0,
            mcq.length > 0,
            getResumeData().exists
        ].filter(Boolean).length;


    readiness +=
        Math.min(
            8,
            modules * 2
        );


    readiness =
        Math.round(
            Math.min(
                100,
                readiness
            )
        );


    document.getElementById(
        "readinessScore"
    ).textContent =
        `${readiness}%`;


    let text =
        "Keep practicing";


    if (readiness >= 85) {

        text =
            "Strong preparation";

    } else if (readiness >= 70) {

        text =
            "Good progress";

    } else if (readiness >= 50) {

        text =
            "Improving";

    }


    document.getElementById(
        "readinessText"
    ).textContent = text;

}


/* ============================================================
   RECENT RESULTS
   ============================================================ */

function renderRecentResults() {

    const container =
        document.getElementById(
            "recentResults"
        );

    const results =
        getAllResults()
            .sort(
                (a, b) =>
                    new Date(b.date) -
                    new Date(a.date)
            )
            .slice(0, 8);


    if (!results.length) {

        container.innerHTML = `

            <div class="empty-state">

                <i class="fa-solid fa-chart-simple"></i>

                <p>No completed tests yet.</p>

                <span>
                    Complete an interview or test
                    to see results here.
                </span>

            </div>

        `;

        return;

    }


    container.innerHTML = "";


    results.forEach(item => {

        const div =
            document.createElement("div");

        div.className =
            "result-item";


        let icon =
            "fa-chart-line";


        if (item.type === "AI Interview") {

            icon =
                "fa-user-tie";

        } else if (item.type === "Practice") {

            icon =
                "fa-code";

        } else if (item.type === "MCQ") {

            icon =
                "fa-circle-question";

        }


        const score =
            item.score === null
                ? "—"
                : `${Math.round(item.score)}%`;


        div.innerHTML = `

            <div class="result-icon">
                <i class="fa-solid ${icon}"></i>
            </div>

            <div class="result-info">

                <strong>
                    ${escapeHTML(
                        item.topic ||
                        item.company ||
                        item.type
                    )}
                </strong>

                <span>
                    ${escapeHTML(item.type)}
                    •
                    ${formatDate(item.date)}
                </span>

            </div>

            <div class="result-score">
                ${score}
            </div>

        `;


        container.appendChild(div);

    });

}


/* ============================================================
   INTERVIEW SKILLS
   ============================================================ */

const skillNames = {

    communication:
        "Communication",

    technical:
        "Technical Skill",

    confidence:
        "Confidence",

    eyeContact:
        "Eye Contact",

    bodyLanguage:
        "Body Language",

    language:
        "Language",

    relevance:
        "Answer Relevance",

    professionalism:
        "Professionalism"

};


function renderSkills() {

    const interviews =
        getInterviewResults();


    const container =
        document.getElementById(
            "skillScores"
        );


    if (!interviews.length) {

        container.innerHTML = `

            <div class="empty-state">

                <i class="fa-solid fa-user-tie"></i>

                <p>
                    No AI interview score yet.
                </p>

                <span>
                    Complete an AI interview.
                </span>

            </div>

        `;

        return;

    }


    container.innerHTML = "";


    Object.entries(
        skillNames
    ).forEach(
        ([key, name]) => {


            const values =
                interviews
                    .map(
                        interview =>
                            interview.scores[key]
                    )
                    .filter(
                        score =>
                            score !== null
                    );


            const score =
                values.length
                    ? Math.round(
                        values.reduce(
                            (a, b) =>
                                a + b,
                            0
                        ) / values.length
                    )
                    : null;


            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "skill-row";


            const percent =
                score === null
                    ? 0
                    : score;


            row.innerHTML = `

                <div>

                    <span>
                        ${name}
                    </span>

                    <strong>
                        ${
                            score === null
                                ? "—"
                                : `${score}%`
                        }
                    </strong>

                </div>

                <div class="skill-progress">

                    <span
                        style="width:${percent}%">
                    </span>

                </div>

            `;


            container.appendChild(row);

        }
    );

}


/* ============================================================
   WEAK AREAS
   ============================================================ */

function renderWeakAreas() {

    const interviews =
        getInterviewResults();


    const container =
        document.getElementById(
            "weakAreas"
        );


    if (!interviews.length) {

        container.innerHTML = `

            <div class="empty-state">

                <i class="fa-solid fa-lightbulb"></i>

                <p>
                    No weak areas detected yet.
                </p>

                <span>
                    Complete more AI interviews.
                </span>

            </div>

        `;

        return;

    }


    const areas = [];


    Object.entries(
        skillNames
    ).forEach(
        ([key, name]) => {

            const values =
                interviews
                    .map(
                        x =>
                            x.scores[key]
                    )
                    .filter(
                        x =>
                            x !== null
                    );


            if (!values.length) {
                return;
            }


            const score =
                values.reduce(
                    (a, b) =>
                        a + b,
                    0
                ) / values.length;


            areas.push({
                name,
                score:
                    Math.round(score)
            });

        }
    );


    areas.sort(
        (a, b) =>
            a.score -
            b.score
    );


    const weak =
        areas
            .filter(
                item =>
                    item.score < 70
            )
            .slice(0, 6);


    if (!weak.length) {

        container.innerHTML = `

            <div class="empty-state">

                <i class="fa-solid fa-circle-check"></i>

                <p>
                    No major weak area detected.
                </p>

                <span>
                    Your recorded interview skills are above 70%.
                </span>

            </div>

        `;

        return;

    }


    container.innerHTML = "";


    weak.forEach(item => {

        const card =
            document.createElement("div");

        card.className =
            "weak-card";


        card.innerHTML = `

            <h3>
                ${escapeHTML(item.name)}
            </h3>

            <p>
                This area has a lower recorded
                interview performance.
            </p>

            <div class="weak-score">
                Current average: ${item.score}%
            </div>

        `;


        container.appendChild(card);

    });

}


/* ============================================================
   ACTIVITY TIMELINE
   ============================================================ */

function renderActivity() {

    const container =
        document.getElementById(
            "activityTimeline"
        );


    const results =
        getAllResults()
            .sort(
                (a, b) =>
                    new Date(b.date) -
                    new Date(a.date)
            )
            .slice(0, 10);


    if (!results.length) {

        container.innerHTML = `

            <div class="empty-state">

                <i class="fa-solid fa-clock-rotate-left"></i>

                <p>
                    No activity yet.
                </p>

                <span>
                    Your real activity will appear here.
                </span>

            </div>

        `;

        return;

    }


    container.innerHTML = "";


    results.forEach(item => {

        const div =
            document.createElement(
                "div"
            );

        div.className =
            "activity-item";


        let icon =
            "fa-chart-line";


        if (
            item.type === "AI Interview"
        ) {

            icon =
                "fa-user-tie";

        } else if (
            item.type === "Practice"
        ) {

            icon =
                "fa-code";

        } else if (
            item.type === "MCQ"
        ) {

            icon =
                "fa-circle-question";

        }


        div.innerHTML = `

            <div class="activity-icon">

                <i class="fa-solid ${icon}">
                </i>

            </div>

            <div class="activity-content">

                <strong>
                    ${escapeHTML(
                        item.type
                    )} completed
                </strong>

                <span>
                    ${
                        escapeHTML(
                            item.topic ||
                            item.company ||
                            "Activity"
                        )
                    }
                    •
                    ${formatDate(item.date)}
                    ${
                        item.score !== null
                            ? ` • ${Math.round(item.score)}%`
                            : ""
                    }
                </span>

            </div>

        `;


        container.appendChild(div);

    });

}


/* ============================================================
   DATE
   ============================================================ */

function formatDate(date) {

    if (!date) {
        return "Unknown date";
    }

    const parsed =
        new Date(date);

    if (
        Number.isNaN(
            parsed.getTime()
        )
    ) {

        return "Unknown date";

    }


    return parsed.toLocaleString(
        undefined,
        {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }
    );

}


/* ============================================================
   ESCAPE HTML
   ============================================================ */

function escapeHTML(value) {

    return String(
        value ?? ""
    )
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* ============================================================
   LAST UPDATED
   ============================================================ */

function updateTime() {

    const element =
        document.getElementById(
            "lastUpdated"
        );

    element.textContent =
        `Updated ${new Date().toLocaleTimeString()}`;

}


/* ============================================================
   COMPLETE ANALYSIS
   ============================================================ */

function renderAnalysis() {

    renderProfile();

    renderResume();

    renderStats();

    renderWeeklyChart();

    renderWeeklyChange();

    renderReadiness();

    renderRecentResults();

    renderSkills();

    renderWeakAreas();

    renderActivity();

    updateTime();

}


/* ============================================================
   REAL-TIME REFRESH
   ============================================================ */

/*
   Refresh when another YUGMA page changes localStorage.
*/

window.addEventListener(
    "storage",
    function(event) {

        if (
            event.storageArea === localStorage
        ) {

            renderAnalysis();

        }

    }
);


/*
   Refresh when user returns to the page.
*/

document.addEventListener(
    "visibilitychange",
    function() {

        if (
            document.visibilityState === "visible"
        ) {

            renderAnalysis();

        }

    }
);


/*
   Local real-time polling.

   This does NOT create data.
   It only checks whether another YUGMA
   module has saved new data.
*/

setInterval(
    renderAnalysis,
    2000
);


/* ============================================================
   PUBLIC YUGMA ANALYTICS API
   ============================================================ */

/*
   Other YUGMA pages can use these functions
   when they finish an activity.

   Example:

   window.YUGMA_ANALYTICS.saveInterview({
       company: "Google",
       score: 8.2
   });
*/


window.YUGMA_ANALYTICS = {


    saveInterview(result) {

        saveHistory(
            "yugmaAIInterviewHistory",
            result
        );

    },


    savePractice(result) {

        saveHistory(
            "yugmaPracticeHistory",
            result
        );

    },


    saveMCQ(result) {

        saveHistory(
            "yugmaMCQHistory",
            result
        );

    }

};


/* ============================================================
   SAVE HISTORY
   ============================================================ */

function saveHistory(
    key,
    result
) {

    if (
        !result ||
        typeof result !== "object"
    ) {

        return;

    }


    const current =
        readStorage(key);


    let history =
        toArray(current);


    const record = {

        ...result,

        completedAt:
            result.completedAt ||
            new Date().toISOString()

    };


    history.push(record);


    localStorage.setItem(
        key,
        JSON.stringify(history)
    );


    renderAnalysis();

}


/* ============================================================
   START
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        renderAnalysis();

    }
);