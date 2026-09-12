const API_URL =
    "http://localhost:5000/api/opportunities";

let opportunities = [];


// =====================================
// LOAD REAL DATA
// =====================================

async function loadOpportunities() {

    const container =
        document.getElementById(
            "opportunityContainer"
        );


    if (!container) {
        return;
    }


    try {

        container.innerHTML = `
            <div class="loading-box">
                <i class="fa-solid fa-spinner fa-spin"></i>
                Loading latest opportunities...
            </div>
        `;


        const response =
            await fetch(API_URL);


        if (!response.ok) {

            throw new Error(
                "Backend API is not responding"
            );

        }


        opportunities =
            await response.json();


        renderOpportunities(
            opportunities
        );


        updateStats();


    } catch (error) {

        console.error(error);


        container.innerHTML = `

            <div class="error-box">

                <i class="fa-solid fa-triangle-exclamation"></i>

                <h3>
                    Unable to load opportunities
                </h3>

                <p>
                    Please make sure the
                    YUGMA backend is running.
                </p>

                <button
                    onclick="loadOpportunities()"
                >
                    Try Again
                </button>

            </div>

        `;

    }

}


// =====================================
// RENDER
// =====================================

function renderOpportunities(data) {

    const container =
        document.getElementById(
            "opportunityContainer"
        );


    if (!data.length) {

        container.innerHTML = `

            <div class="no-results">

                <i class="fa-solid fa-briefcase"></i>

                <h3>
                    No opportunities found
                </h3>

                <p>
                    New opportunities will
                    appear automatically.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        data.map(job => {

            const skills =
                (job.skills || [])
                    .map(skill => `
                        <span class="skill-tag">
                            ${escapeHTML(skill)}
                        </span>
                    `)
                    .join("");


            const salary =
                getSalary(job);


            const posted =
                job.postedDate
                    ? formatDate(
                        job.postedDate
                    )
                    : "Not specified";


            return `

                <article
                    class="opportunity-card"
                >

                    <div
                        class="opportunity-header"
                    >

                        <div>

                            ${
                                job.isNew
                                ? `
                                    <span
                                        class="new-badge"
                                    >
                                        NEW
                                    </span>
                                  `
                                : ""
                            }

                            <h2>
                                ${escapeHTML(
                                    job.title
                                )}
                            </h2>

                            <h3>
                                <i
                                    class="fa-solid
                                    fa-building"
                                ></i>

                                ${escapeHTML(
                                    job.company ||
                                    "Company not specified"
                                )}
                            </h3>

                        </div>

                    </div>


                    <div
                        class="job-meta"
                    >

                        <span>
                            <i
                                class="fa-solid
                                fa-location-dot"
                            ></i>

                            ${escapeHTML(
                                job.location ||
                                "Location not specified"
                            )}
                        </span>


                        <span>
                            <i
                                class="fa-solid
                                fa-briefcase"
                            ></i>

                            ${escapeHTML(
                                job.type ||
                                "Job"
                            )}
                        </span>


                        <span>
                            <i
                                class="fa-solid
                                fa-money-bill"
                            ></i>

                            ${escapeHTML(
                                salary
                            )}
                        </span>

                    </div>


                    <p class="job-description">

                        ${escapeHTML(
                            job.description ||
                            "Description not available."
                        )}

                    </p>


                    <div class="job-details">

                        <div>
                            <strong>
                                Posted
                            </strong>

                            <span>
                                ${posted}
                            </span>
                        </div>


                        <div>
                            <strong>
                                Source
                            </strong>

                            <span>
                                ${escapeHTML(
                                    job.source
                                )}
                            </span>
                        </div>

                    </div>


                    <div class="skills">

                        ${skills}

                    </div>


                    <div class="card-actions">

                        <button
                            class="details-btn"
                            onclick="showDetails('${job.id}')"
                        >
                            View Details
                        </button>


                        <a
                            class="apply-btn"
                            href="${safeURL(
                                job.applicationUrl
                            )}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Apply Now
                            <i
                                class="fa-solid
                                fa-arrow-up-right-from-square"
                            ></i>
                        </a>

                    </div>

                </article>

            `;

        }).join("");

}


// =====================================
// DETAILS
// =====================================

async function showDetails(id) {

    try {

        const response =
            await fetch(
                `${API_URL}/${id}`
            );


        const job =
            await response.json();


        const modal =
            document.getElementById(
                "detailsModal"
            );


        const content =
            document.getElementById(
                "modalContent"
            );


        content.innerHTML = `

            <div class="modal-job">

                <span class="source-badge">
                    ${escapeHTML(
                        job.source
                    )}
                </span>


                <h2>
                    ${escapeHTML(
                        job.title
                    )}
                </h2>


                <h3>
                    ${escapeHTML(
                        job.company ||
                        "Company not specified"
                    )}
                </h3>


                <hr>


                <div class="detail-grid">

                    <div>
                        <strong>Type</strong>
                        <span>
                            ${escapeHTML(
                                job.type ||
                                "Not specified"
                            )}
                        </span>
                    </div>


                    <div>
                        <strong>Location</strong>
                        <span>
                            ${escapeHTML(
                                job.location ||
                                "Not specified"
                            )}
                        </span>
                    </div>


                    <div>
                        <strong>Work Mode</strong>
                        <span>
                            ${escapeHTML(
                                job.workMode ||
                                "Not specified"
                            )}
                        </span>
                    </div>


                    <div>
                        <strong>Salary</strong>
                        <span>
                            ${escapeHTML(
                                getSalary(job)
                            )}
                        </span>
                    </div>


                    <div>
                        <strong>Duration</strong>
                        <span>
                            ${escapeHTML(
                                job.duration ||
                                "Not provided by source"
                            )}
                        </span>
                    </div>


                    <div>
                        <strong>Deadline</strong>
                        <span>
                            ${
                                job.deadline
                                ? formatDate(
                                    job.deadline
                                )
                                : "Not provided by source"
                            }
                        </span>
                    </div>

                </div>


                <h4>
                    Description
                </h4>

                <p>
                    ${escapeHTML(
                        job.description ||
                        "Not provided by source."
                    )}
                </p>


                <h4>
                    Eligibility
                </h4>

                <p>
                    ${escapeHTML(
                        job.eligibility ||
                        "Not provided by source."
                    )}
                </p>


                <h4>
                    Assessment / Exam
                </h4>

                <p>
                    ${escapeHTML(
                        job.assessment ||
                        "Not provided by source."
                    )}
                </p>


                <h4>
                    Interview Rounds
                </h4>

                <p>
                    ${escapeHTML(
                        job.interviewRounds ||
                        "Not provided by source."
                    )}
                </p>


                <h4>
                    Selection Process
                </h4>

                <p>
                    ${escapeHTML(
                        job.selectionProcess ||
                        "Not provided by source."
                    )}
                </p>


                <a
                    href="${safeURL(
                        job.applicationUrl
                    )}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="modal-apply"
                >
                    Apply on Original Source
                </a>

            </div>

        `;


        modal.classList.add("active");


    } catch (error) {

        console.error(error);

    }

}


// =====================================
// STATISTICS
// =====================================

function updateStats() {

    const total =
        document.getElementById(
            "totalOpportunities"
        );


    const internships =
        document.getElementById(
            "internshipCount"
        );


    const jobs =
        document.getElementById(
            "jobCount"
        );


    if (total) {

        total.textContent =
            opportunities.length;

    }


    if (internships) {

        internships.textContent =
            opportunities.filter(
                job =>
                    job.type === "Internship"
            ).length;

    }


    if (jobs) {

        jobs.textContent =
            opportunities.filter(
                job =>
                    job.type === "Job"
            ).length;

    }

}


// =====================================
// HELPERS
// =====================================

function getSalary(job) {

    if (
        job.salaryMin == null &&
        job.salaryMax == null
    ) {
        return "Not specified";
    }


    const currency =
        job.salaryCurrency === "INR"
            ? "₹"
            : "";


    if (
        job.salaryMin != null &&
        job.salaryMax != null
    ) {

        return `${currency}${job.salaryMin}
                - ${currency}${job.salaryMax}`;

    }


    if (job.salaryMin != null) {

        return `${currency}${job.salaryMin}+`;

    }


    return `${currency}${job.salaryMax}`;

}


function formatDate(date) {

    return new Date(date)
        .toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );

}


function escapeHTML(value) {

    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


function safeURL(value) {

    try {

        const url =
            new URL(value);

        if (
            url.protocol !== "http:" &&
            url.protocol !== "https:"
        ) {

            return "#";

        }

        return url.href;

    } catch {

        return "#";

    }

}


// =====================================
// CLOSE MODAL
// =====================================

const closeModal =
    document.getElementById(
        "closeModal"
    );


if (closeModal) {

    closeModal.addEventListener(
        "click",
        () => {

            document
                .getElementById(
                    "detailsModal"
                )
                .classList.remove(
                    "active"
                );

        }
    );

}


// =====================================
// AUTO REFRESH WEBSITE
// =====================================

loadOpportunities();


setInterval(
    loadOpportunities,
    5 * 60 * 1000
);