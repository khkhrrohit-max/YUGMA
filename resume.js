/* =========================================================
   YUGMA RESUME ANALYZER
========================================================= */

const resumeFile = document.getElementById("resumeFile");
const uploadBtn = document.getElementById("uploadBtn");
const uploadArea = document.getElementById("uploadArea");
const fileName = document.getElementById("fileName");

const resumeText = document.getElementById("resumeText");
const newSkills = document.getElementById("newSkills");
const newCourses = document.getElementById("newCourses");

const analyzeBtn = document.getElementById("analyzeBtn");

const analysisSection =
    document.getElementById("analysisSection");

const generatedSection =
    document.getElementById("generatedSection");

const generateResumeBtn =
    document.getElementById("generateResumeBtn");

const downloadResumeBtn =
    document.getElementById("downloadResumeBtn");

const editResumeBtn =
    document.getElementById("editResumeBtn");


/* =========================================================
   FILE UPLOAD
========================================================= */

uploadBtn.addEventListener("click", () => {
    resumeFile.click();
});


resumeFile.addEventListener("change", async () => {

    const file = resumeFile.files[0];

    if (!file) return;

    fileName.innerHTML =
        `<i class="fa-solid fa-file"></i> ${file.name}`;

    const extension =
        file.name.split(".").pop().toLowerCase();


    /* TXT */

    if (extension === "txt") {

        const text = await file.text();

        resumeText.value = text;

        return;
    }


    /* PDF / DOC */

    resumeText.value =
        `File selected: ${file.name}

For the frontend prototype, please paste the resume text into the text box below.

In the production version of YUGMA, the backend will extract text automatically from PDF/DOC/DOCX and send it to the AI resume analyzer.`;
});


/* =========================================================
   DRAG AND DROP
========================================================= */

uploadArea.addEventListener("dragover", (e) => {

    e.preventDefault();

    uploadArea.classList.add("dragging");
});


uploadArea.addEventListener("dragleave", () => {

    uploadArea.classList.remove("dragging");
});


uploadArea.addEventListener("drop", (e) => {

    e.preventDefault();

    uploadArea.classList.remove("dragging");

    const files = e.dataTransfer.files;

    if (!files.length) return;

    resumeFile.files = files;

    resumeFile.dispatchEvent(new Event("change"));
});


/* =========================================================
   ANALYZE RESUME
========================================================= */

analyzeBtn.addEventListener("click", analyzeResume);


function analyzeResume() {

    const text = resumeText.value.trim();

    if (!text) {

        alert(
            "Please upload your resume or paste your resume text first."
        );

        return;
    }


    const lines = text
        .split("\n")
        .map(line => line.trim())
        .filter(line => line.length > 0);


    const analysis = analyzeLines(lines);


    renderAnalysis(
        lines,
        analysis
    );


    analysisSection.classList.remove("hidden");

    analysisSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================================
   LINE ANALYSIS
========================================================= */

function analyzeLines(lines) {

    let good = [];
    let mistakes = [];
    let lineResults = [];

    lines.forEach((line, index) => {

        const lower = line.toLowerCase();

        let status = "good";
        let suggestion = "This line looks clear.";


        /* Very short lines */

        if (line.length < 4) {

            status = "error";

            suggestion =
                "This line is too short or may not contain useful information.";

            mistakes.push(
                `Line ${index + 1} is too short.`
            );
        }


        /* Email */

        else if (lower.includes("@")) {

            status = "good";

            suggestion =
                "Email detected. Keep a professional email address.";

            good.push("Contact email detected.");
        }


        /* Phone */

        else if (
            /\+?\d[\d\s\-()]{8,}/.test(line)
        ) {

            status = "good";

            suggestion =
                "Phone number detected. Make sure it is correct.";

            good.push("Phone number detected.");
        }


        /* Weak words */

        else if (
            lower.includes("hardworking") ||
            lower.includes("good person") ||
            lower.includes("very good") ||
            lower.includes("honest person")
        ) {

            status = "warning";

            suggestion =
                "Avoid generic claims. Replace them with measurable achievements.";

            mistakes.push(
                `Line ${index + 1}: Avoid generic statements such as "${line}".`
            );
        }


        /* Objective */

        else if (
            lower.includes("objective") ||
            lower.includes("career objective")
        ) {

            status = "warning";

            suggestion =
                "Use a short targeted professional summary instead of a generic objective.";

            mistakes.push(
                `Line ${index + 1}: Consider replacing the objective with a targeted summary.`
            );
        }


        /* Skills */

        else if (
            lower.includes("skill") ||
            lower.includes("technical")
        ) {

            status = "good";

            suggestion =
                "Skills section detected. Add relevant technical and job-specific skills.";

            good.push("Skills section detected.");
        }


        /* Education */

        else if (
            lower.includes("education") ||
            lower.includes("b.tech") ||
            lower.includes("bca") ||
            lower.includes("mca") ||
            lower.includes("degree")
        ) {

            status = "good";

            suggestion =
                "Education information detected.";

            good.push("Education information detected.");
        }


        /* Project */

        else if (
            lower.includes("project") ||
            lower.includes("developed") ||
            lower.includes("built")
        ) {

            status = "good";

            suggestion =
                "Project/experience information detected. Add measurable results where possible.";

            good.push("Project or development experience detected.");
        }


        /* Experience */

        else if (
            lower.includes("experience") ||
            lower.includes("internship") ||
            lower.includes("worked")
        ) {

            status = "good";

            suggestion =
                "Experience information detected. Mention impact and achievements.";

            good.push("Experience information detected.");
        }


        /* URLs */

        else if (
            lower.includes("github") ||
            lower.includes("linkedin") ||
            lower.includes("portfolio")
        ) {

            status = "good";

            suggestion =
                "Professional profile link detected.";

            good.push("Professional online profile detected.");
        }


        /* Percentage */

        else if (
            lower.includes("%") ||
            /\b\d+(\.\d+)?\b/.test(line)
        ) {

            status = "good";

            suggestion =
                "Numbers detected. Quantified achievements are useful for recruiters.";
        }


        /* Default */

        else {

            suggestion =
                "Consider rewriting this line using a strong action verb and measurable result.";
        }


        lineResults.push({
            number: index + 1,
            text: line,
            status,
            suggestion
        });

    });


    /* Remove duplicates */

    good = [...new Set(good)];
    mistakes = [...new Set(mistakes)];


    /* Missing sections */

    const fullText = lines.join(" ").toLowerCase();

    let missing = [];

    if (!fullText.includes("skill")) {
        missing.push(
            "Add a dedicated Technical Skills section."
        );
    }

    if (
        !fullText.includes("project") &&
        !fullText.includes("experience")
    ) {
        missing.push(
            "Add projects or practical experience."
        );
    }

    if (!fullText.includes("education")) {
        missing.push(
            "Clearly mention your education and degree."
        );
    }

    if (!fullText.includes("github")) {
        missing.push(
            "Add GitHub if you have coding or software projects."
        );
    }

    if (!fullText.includes("linkedin")) {
        missing.push(
            "Add a professional LinkedIn profile."
        );
    }

    if (!fullText.includes("achievement")) {
        missing.push(
            "Add achievements, certifications or measurable results."
        );
    }


    /* HR suggestions */

    const hr = [
        "Keep the resume concise and focused on the target role.",
        "Use action verbs such as Developed, Built, Designed, Implemented and Optimized.",
        "Mention measurable results wherever possible.",
        "Use keywords related to the job you are applying for.",
        "Avoid unnecessary personal information.",
        "Keep formatting consistent throughout the resume.",
        "Put your strongest and most relevant information near the top.",
        "Use clear section headings so ATS software can understand the resume."
    ];


    return {
        good,
        mistakes,
        missing,
        hr,
        lineResults
    };
}


/* =========================================================
   RENDER ANALYSIS
========================================================= */

function renderAnalysis(lines, analysis) {

    document.getElementById("lineCount").textContent =
        lines.length;

    document.getElementById("mistakeCount").textContent =
        analysis.mistakes.length;

    document.getElementById("suggestionCount").textContent =
        analysis.missing.length + analysis.hr.length;


    const score =
        calculateScore(
            lines,
            analysis
        );


    document.getElementById("resumeScore").textContent =
        score;


    let message =
        "Your resume has room for improvement.";

    if (score >= 85) {
        message =
            "Excellent foundation. Only targeted improvements are needed.";
    } else if (score >= 70) {
        message =
            "Good foundation. Improve the weak areas before applying.";
    } else if (score >= 50) {
        message =
            "Decent start. Several improvements can make it stronger.";
    }


    document.getElementById("scoreMessage").textContent =
        message;


    renderList(
        "presentContent",
        analysis.good,
        "fa-circle-check"
    );


    renderList(
        "mistakeContent",
        analysis.mistakes,
        "fa-triangle-exclamation"
    );


    renderList(
        "missingContent",
        analysis.missing,
        "fa-circle-plus"
    );


    renderList(
        "hrContent",
        analysis.hr,
        "fa-lightbulb"
    );


    renderLineAnalysis(
        analysis.lineResults
    );
}


/* =========================================================
   SCORE
========================================================= */

function calculateScore(lines, analysis) {

    let score = 100;

    score -= analysis.mistakes.length * 7;

    score -= analysis.missing.length * 5;

    if (lines.length < 8) {
        score -= 10;
    }

    if (lines.length > 120) {
        score -= 8;
    }

    return Math.max(
        35,
        Math.min(100, score)
    );
}


/* =========================================================
   LIST RENDERER
========================================================= */

function renderList(
    elementId,
    items,
    icon
) {

    const container =
        document.getElementById(elementId);

    container.innerHTML = "";


    if (!items.length) {

        container.innerHTML = `
            <div class="analysis-item">
                <i class="fa-solid ${icon}"></i>
                <span>No major issue detected.</span>
            </div>
        `;

        return;
    }


    items.forEach(item => {

        const div =
            document.createElement("div");

        div.className = "analysis-item";

        div.innerHTML = `
            <i class="fa-solid ${icon}"></i>
            <span>${escapeHTML(item)}</span>
        `;

        container.appendChild(div);
    });
}


/* =========================================================
   LINE BY LINE
========================================================= */

function renderLineAnalysis(results) {

    const container =
        document.getElementById(
            "lineAnalysisContainer"
        );

    container.innerHTML = "";


    results.forEach(result => {

        const div =
            document.createElement("div");

        div.className = "line-item";


        let statusText = "GOOD";

        if (result.status === "warning") {
            statusText = "IMPROVE";
        }

        if (result.status === "error") {
            statusText = "CHECK";
        }


        div.innerHTML = `

            <div class="line-number">
                ${result.number}
            </div>

            <div>

                <div class="line-text">
                    ${escapeHTML(result.text)}
                </div>

                <div class="line-suggestion">
                    <strong>YUGMA:</strong>
                    ${escapeHTML(result.suggestion)}
                </div>

            </div>

            <div class="line-status
                ${result.status === "good"
                    ? "status-good"
                    : result.status === "warning"
                        ? "status-warning"
                        : "status-error"}">

                ${statusText}

            </div>

        `;

        container.appendChild(div);
    });
}


/* =========================================================
   GENERATE RESUME
========================================================= */

generateResumeBtn.addEventListener(
    "click",
    generateResume
);


function generateResume() {

    const text =
        resumeText.value.trim();

    if (!text) return;


    const lines =
        text.split("\n")
        .map(line => line.trim())
        .filter(Boolean);


    const skills =
        extractSkills(
            text,
            newSkills.value
        );


    const courses =
        newCourses.value
            .split("\n")
            .map(x => x.trim())
            .filter(Boolean);


    const name =
        findName(lines);


    const contact =
        findContact(lines);


    const education =
        findSection(
            lines,
            [
                "education",
                "b.tech",
                "bca",
                "mca",
                "b.e",
                "degree"
            ]
        );


    const experience =
        findSection(
            lines,
            [
                "experience",
                "internship",
                "project",
                "developed",
                "worked"
            ]
        );


    document.getElementById(
        "generatedName"
    ).textContent = name;


    document.getElementById(
        "generatedContact"
    ).textContent =
        contact ||
        "Professional contact information";


    document.getElementById(
        "generatedSummary"
    ).textContent =
        createSummary(
            name,
            skills
        );


    renderGeneratedSkills(
        skills
    );


    document.getElementById(
        "generatedEducation"
    ).innerHTML =
        education ||
        `<div class="resume-entry">
            Education details should be added.
        </div>`;


    document.getElementById(
        "generatedExperience"
    ).innerHTML =
        experience ||
        `<div class="resume-entry">
            Add your projects, internships or work experience.
        </div>`;


    document.getElementById(
        "generatedCourses"
    ).innerHTML =
        courses.length
            ? courses.map(course => `
                <div class="resume-entry">
                    <strong>${escapeHTML(course)}</strong>
                </div>
            `).join("")
            : `
                <div class="resume-entry">
                    Add relevant courses and certifications.
                </div>
            `;


    document.getElementById(
        "generatedAdditional"
    ).innerHTML = `
        <div class="resume-entry">
            ${skills.length > 0
                ? "Technical skills have been organized for better readability."
                : "Add role-relevant technical skills."}
        </div>
    `;


    generatedSection.classList.remove(
        "hidden"
    );


    generatedSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================================
   FIND NAME
========================================================= */

function findName(lines) {

    for (let line of lines.slice(0, 5)) {

        const lower =
            line.toLowerCase();

        if (
            !lower.includes("@") &&
            !/\d{5,}/.test(line) &&
            line.length >= 3 &&
            line.length <= 50
        ) {
            return line;
        }
    }

    return "YOUR NAME";
}


/* =========================================================
   CONTACT
========================================================= */

function findContact(lines) {

    const contacts =
        lines.filter(line =>
            line.includes("@") ||
            /\+?\d[\d\s\-()]{8,}/.test(line) ||
            line.toLowerCase().includes("linkedin")
        );


    return contacts.join(" | ");
}


/* =========================================================
   SKILLS
========================================================= */

function extractSkills(
    text,
    additional
) {

    const commonSkills = [

        "C",
        "C++",
        "Java",
        "Python",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "SQL",
        "MySQL",
        "PostgreSQL",
        "Git",
        "GitHub",
        "Docker",
        "AWS",
        "Azure",
        "Machine Learning",
        "Artificial Intelligence",
        "Data Science",
        "Data Analysis",
        "Figma",
        "PHP",
        "Django",
        "Flask",
        "Next.js"
    ];


    const result = [];


    commonSkills.forEach(skill => {

        if (
            text.toLowerCase()
                .includes(skill.toLowerCase())
        ) {

            result.push(skill);
        }
    });


    additional
        .split(",")
        .map(skill => skill.trim())
        .filter(Boolean)
        .forEach(skill => {

            if (
                !result
                    .map(x => x.toLowerCase())
                    .includes(skill.toLowerCase())
            ) {
                result.push(skill);
            }
        });


    return result;
}


/* =========================================================
   FIND SECTION
========================================================= */

function findSection(
    lines,
    keywords
) {

    const found =
        lines.filter(line => {

            const lower =
                line.toLowerCase();

            return keywords.some(
                keyword =>
                    lower.includes(keyword)
            );
        });


    return found
        .slice(0, 8)
        .map(line =>
            `<div class="resume-entry">
                ${escapeHTML(line)}
            </div>`
        )
        .join("");
}


/* =========================================================
   SUMMARY
========================================================= */

function createSummary(
    name,
    skills
) {

    const skillText =
        skills.length
            ? skills.slice(0, 6).join(", ")
            : "technology and professional development";


    return `${name} is a motivated and career-focused professional with experience and interest in ${skillText}. Demonstrates a strong willingness to learn, solve practical problems and contribute to real-world projects.`;
}


/* =========================================================
   GENERATED SKILLS
========================================================= */

function renderGeneratedSkills(
    skills
) {

    const container =
        document.getElementById(
            "generatedSkills"
        );

    container.innerHTML = "";


    if (!skills.length) {

        container.innerHTML =
            `<span class="resume-skill">
                Add relevant skills
            </span>`;

        return;
    }


    skills.forEach(skill => {

        const span =
            document.createElement("span");

        span.className =
            "resume-skill";

        span.textContent =
            skill;

        container.appendChild(span);
    });
}


/* =========================================================
   DOWNLOAD PDF
========================================================= */

downloadResumeBtn.addEventListener(
    "click",
    async () => {

        const {
            jsPDF
        } = window.jspdf;


        const resume =
            document.getElementById(
                "resumePaper"
            );


        const canvas =
            await html2canvas(
                resume,
                {
                    scale: 2,
                    backgroundColor: "#ffffff"
                }
            );


        const imageData =
            canvas.toDataURL(
                "image/png"
            );


        const pdf =
            new jsPDF(
                "p",
                "mm",
                "a4"
            );


        const pageWidth =
            pdf.internal.pageSize.getWidth();


        const pageHeight =
            pdf.internal.pageSize.getHeight();


        const imgWidth =
            pageWidth;


        const imgHeight =
            canvas.height *
            imgWidth /
            canvas.width;


        let heightLeft =
            imgHeight;


        let position = 0;


        pdf.addImage(
            imageData,
            "PNG",
            0,
            position,
            imgWidth,
            imgHeight
        );


        heightLeft -= pageHeight;


        while (heightLeft > 0) {

            position =
                heightLeft - imgHeight;

            pdf.addPage();

            pdf.addImage(
                imageData,
                "PNG",
                0,
                position,
                imgWidth,
                imgHeight
            );

            heightLeft -= pageHeight;
        }


        pdf.save(
            "YUGMA-Improved-Resume.pdf"
        );
    }
);


/* =========================================================
   EDIT
========================================================= */

editResumeBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
);


/* =========================================================
   SECURITY
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}