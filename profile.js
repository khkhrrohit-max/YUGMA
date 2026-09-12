/* =====================================================
   YUGMA PROFILE JAVASCRIPT
===================================================== */


/* =====================================================
   GET USER DATA
===================================================== */

function getUserData() {

    let data = localStorage.getItem("yugmaUser");

    if (data) {

        try {

            return JSON.parse(data);

        } catch (error) {

            console.log("Invalid user data");

        }

    }


    /*
       Compatibility with older signup code
       if individual values were saved.
    */

    return {

        name: localStorage.getItem("yugmaName") || "",

        mobile:
            localStorage.getItem("yugmaMobile") || "",

        dob:
            localStorage.getItem("yugmaDOB") || "",

        education:
            localStorage.getItem("yugmaEducation") || "",

        email:
            localStorage.getItem("yugmaEmail") || ""

    };

}


/* =====================================================
   SAVE USER DATA
===================================================== */

function saveUserData(data) {

    localStorage.setItem(
        "yugmaUser",
        JSON.stringify(data)
    );


    /*
       Also save individual values.

       This keeps this profile connected
       with your existing signup/login code.
    */

    localStorage.setItem(
        "yugmaName",
        data.name
    );

    localStorage.setItem(
        "yugmaMobile",
        data.mobile
    );

    localStorage.setItem(
        "yugmaDOB",
        data.dob
    );

    localStorage.setItem(
        "yugmaEducation",
        data.education
    );

    localStorage.setItem(
        "yugmaEmail",
        data.email
    );

}


/* =====================================================
   LOAD PROFILE
===================================================== */

function loadProfile() {

    const user = getUserData();


    /* Header */

    document.getElementById("displayName").textContent =
        user.name || "Student Name";


    document.getElementById("displayEducation").textContent =
        user.education || "Higher Education";


    document.getElementById("displayEmail").textContent =
        user.email || "Email not available";


    /* Details */

    document.getElementById("nameValue").textContent =
        user.name || "Not provided";


    document.getElementById("mobileValue").textContent =
        user.mobile || "Not provided";


    document.getElementById("dobValue").textContent =
        user.dob || "Not provided";


    document.getElementById("educationValue").textContent =
        user.education || "Not provided";


    document.getElementById("emailValue").textContent =
        user.email || "Not provided";


    /* Fill edit form */

    document.getElementById("nameInput").value =
        user.name || "";


    document.getElementById("mobileInput").value =
        user.mobile || "";


    document.getElementById("dobInput").value =
        user.dob || "";


    document.getElementById("educationInput").value =
        user.education || "";


    document.getElementById("emailInput").value =
        user.email || "";


    /* Load profile picture */

    loadProfilePicture();

}


/* =====================================================
   PROFILE PICTURE
===================================================== */

const profilePicture =
    document.getElementById("profilePicture");

const profileImage =
    document.getElementById("profileImage");

const defaultAvatar =
    document.getElementById("defaultAvatar");


profilePicture.addEventListener(
    "change",
    function () {

        const file = this.files[0];

        if (!file) {
            return;
        }


        /* Only image files */

        if (!file.type.startsWith("image/")) {

            alert("Please select an image file.");

            return;

        }


        /*
           FileReader converts image into data URL
           so it can be saved in localStorage.
        */

        const reader = new FileReader();


        reader.onload = function (event) {

            const imageData =
                event.target.result;


            localStorage.setItem(
                "yugmaProfilePicture",
                imageData
            );


            displayProfilePicture(imageData);

        };


        reader.readAsDataURL(file);

    }
);


/* =====================================================
   DISPLAY PROFILE PICTURE
===================================================== */

function displayProfilePicture(imageData) {

    if (!imageData) {

        profileImage.style.display = "none";

        defaultAvatar.style.display = "flex";

        return;

    }


    profileImage.src = imageData;

    profileImage.style.display = "block";

    defaultAvatar.style.display = "none";

}


/* =====================================================
   LOAD SAVED PICTURE
===================================================== */

function loadProfilePicture() {

    const savedImage =
        localStorage.getItem(
            "yugmaProfilePicture"
        );


    if (savedImage) {

        displayProfilePicture(savedImage);

    } else {

        displayProfilePicture(null);

    }

}


/* =====================================================
   EDIT PROFILE
===================================================== */

const editBtn =
    document.getElementById("editBtn");

const editSection =
    document.getElementById("editSection");


editBtn.addEventListener(
    "click",
    function () {

        editSection.classList.add("show");

        editSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
);


/* =====================================================
   CANCEL EDIT
===================================================== */

document.getElementById("cancelBtn")
    .addEventListener(
        "click",
        function () {

            editSection.classList.remove("show");

            loadProfile();

        }
    );


/* =====================================================
   SAVE EDITED PROFILE
===================================================== */

document.getElementById("profileForm")
    .addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const user = getUserData();


            user.name =
                document.getElementById(
                    "nameInput"
                ).value.trim();


            user.mobile =
                document.getElementById(
                    "mobileInput"
                ).value.trim();


            user.dob =
                document.getElementById(
                    "dobInput"
                ).value;


            user.education =
                document.getElementById(
                    "educationInput"
                ).value.trim();


            user.email =
                document.getElementById(
                    "emailInput"
                ).value.trim();


            /* Save */

            saveUserData(user);


            /* Reload */

            loadProfile();


            /* Close edit */

            editSection.classList.remove("show");


            alert(
                "Your YUGMA profile has been saved successfully!"
            );

        }
    );


/* =====================================================
   LOGOUT
===================================================== */

document.getElementById("logoutBtn")
    .addEventListener(
        "click",
        function () {

            const confirmLogout =
                confirm(
                    "Are you sure you want to logout?"
                );


            if (confirmLogout) {

                /*
                   We do NOT delete profile data.

                   This means user can login again
                   without losing their profile.
                */

                localStorage.setItem(
                    "yugmaLoggedIn",
                    "false"
                );


                window.location.href =
                    "signuplogin.html";

            }

        }
    );


/* =====================================================
   INITIAL LOAD
===================================================== */

loadProfile();