/* =========================================================
   YUGMA SIGN UP / LOGIN
   ========================================================= */


/* =========================================================
   EMAILJS CONFIGURATION
   =========================================================

   Replace these three values with your EmailJS details.
*/

const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";

const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";


/* Initialize EmailJS */

emailjs.init({

    publicKey: EMAILJS_PUBLIC_KEY

});



/* =========================================================
   ELEMENTS
========================================================= */

const signupTab =
    document.getElementById("signupTab");

const loginTab =
    document.getElementById("loginTab");

const signupSection =
    document.getElementById("signupSection");

const loginSection =
    document.getElementById("loginSection");

const slider =
    document.getElementById("switch-slider");

const goLogin =
    document.getElementById("goLogin");

const goSignup =
    document.getElementById("goSignup");



/* =========================================================
   SWITCH TO LOGIN
========================================================= */

function showLogin() {

    signupSection.classList.remove("active-section");

    loginSection.classList.add("active-section");

    signupTab.classList.remove("active");

    loginTab.classList.add("active");

    slider.classList.add("login");

}



/* =========================================================
   SWITCH TO SIGNUP
========================================================= */

function showSignup() {

    loginSection.classList.remove("active-section");

    signupSection.classList.add("active-section");

    loginTab.classList.remove("active");

    signupTab.classList.add("active");

    slider.classList.remove("login");

}


signupTab.addEventListener(
    "click",
    showSignup
);


loginTab.addEventListener(
    "click",
    showLogin
);


goLogin.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        showLogin();

    }
);


goSignup.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        showSignup();

    }
);



/* =========================================================
   PASSWORD SHOW / HIDE
========================================================= */

function setupPasswordToggle(
    inputId,
    iconId
) {

    const input =
        document.getElementById(inputId);

    const icon =
        document.getElementById(iconId);


    icon.addEventListener(
        "click",
        function() {

            if (
                input.type === "password"
            ) {

                input.type = "text";

                icon.classList.remove(
                    "fa-eye"
                );

                icon.classList.add(
                    "fa-eye-slash"
                );

            }

            else {

                input.type = "password";

                icon.classList.remove(
                    "fa-eye-slash"
                );

                icon.classList.add(
                    "fa-eye"
                );

            }

        }
    );

}


setupPasswordToggle(
    "signupPassword",
    "toggleSignupPassword"
);


setupPasswordToggle(
    "loginPassword",
    "toggleLoginPassword"
);



/* =========================================================
   OTP VARIABLES
========================================================= */

let generatedOTP = null;

let otpVerified = false;



/* =========================================================
   OTP STATUS
========================================================= */

const otpStatus =
    document.getElementById("otpStatus");


function setOTPStatus(
    message,
    type = ""
) {

    otpStatus.textContent = message;

    otpStatus.className = type;

}



/* =========================================================
   GENERATE OTP
========================================================= */

function generateOTP() {

    return Math.floor(
        100000 +
        Math.random() * 900000
    ).toString();

}



/* =========================================================
   SEND OTP
========================================================= */

document
    .getElementById("sendOtpBtn")
    .addEventListener(
        "click",
        async function() {

            const email =
                document
                .getElementById("signupEmail")
                .value
                .trim();


            if (!email) {

                setOTPStatus(
                    "Please enter your email first.",
                    "error"
                );

                return;

            }


            /* Basic email validation */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(email)
            ) {

                setOTPStatus(
                    "Please enter a valid email address.",
                    "error"
                );

                return;

            }


            generatedOTP =
                generateOTP();


            otpVerified = false;


            const button =
                document.getElementById(
                    "sendOtpBtn"
                );


            button.disabled = true;

            button.textContent =
                "SENDING...";


            try {


                /*
                    IMPORTANT:

                    Your EmailJS template should contain
                    variables:

                    {{to_email}}
                    {{otp}}
                */


                const templateParams = {

                    to_email: email,

                    otp: generatedOTP

                };


                await emailjs.send(

                    EMAILJS_SERVICE_ID,

                    EMAILJS_TEMPLATE_ID,

                    templateParams

                );


                setOTPStatus(
                    "OTP sent successfully to your email.",
                    "success"
                );


                button.textContent =
                    "SENT";


                /* Allow resend after 30 seconds */

                let seconds = 30;


                const timer =
                    setInterval(() => {

                        button.textContent =
                            seconds + "s";

                        seconds--;


                        if (seconds < 0) {

                            clearInterval(timer);

                            button.disabled =
                                false;

                            button.textContent =
                                "GET OTP";

                        }

                    }, 1000);


            }

            catch (error) {

                console.error(
                    "EmailJS Error:",
                    error
                );


                setOTPStatus(
                    "Unable to send OTP. Check EmailJS settings.",
                    "error"
                );


                button.disabled =
                    false;

                button.textContent =
                    "GET OTP";

            }

        }
    );



/* =========================================================
   VERIFY OTP
========================================================= */

document
    .getElementById("verifyOtpBtn")
    .addEventListener(
        "click",
        function() {

            const enteredOTP =
                document
                .getElementById("otp")
                .value
                .trim();


            if (!generatedOTP) {

                setOTPStatus(
                    "Please request an OTP first.",
                    "error"
                );

                return;

            }


            if (
                enteredOTP === generatedOTP
            ) {

                otpVerified = true;


                setOTPStatus(
                    "✓ Email verified successfully.",
                    "success"
                );


            }

            else {

                otpVerified = false;


                setOTPStatus(
                    "Incorrect OTP. Please try again.",
                    "error"
                );

            }

        }
    );



/* =========================================================
   SIGN UP
========================================================= */

document
    .getElementById("signupForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            /* Get values */

            const name =
                document
                .getElementById("name")
                .value
                .trim();


            const mobile =
                document
                .getElementById("mobile")
                .value
                .trim();


            const dob =
                document
                .getElementById("dob")
                .value;


            const education =
                document
                .getElementById("education")
                .value
                .trim();


            const email =
                document
                .getElementById("signupEmail")
                .value
                .trim()
                .toLowerCase();


            const password =
                document
                .getElementById("signupPassword")
                .value;


            /* Validate mobile */

            if (
                !/^[0-9]{10}$/.test(mobile)
            ) {

                alert(
                    "Please enter a valid 10-digit mobile number."
                );

                return;

            }


            /* OTP validation */

            if (!otpVerified) {

                alert(
                    "Please verify your email using OTP first."
                );

                return;

            }


            /* Password validation */

            if (password.length < 6) {

                alert(
                    "Password must contain at least 6 characters."
                );

                return;

            }


            /* Check existing account */

            const existingUser =
                localStorage.getItem(
                    "yugmaUser"
                );


            if (existingUser) {

                const user =
                    JSON.parse(existingUser);


                if (
                    user.email === email
                ) {

                    alert(
                        "An account with this email already exists. Please login."
                    );

                    showLogin();

                    return;

                }

            }


            /* Create user profile */

            const userData = {

                name: name,

                mobile: mobile,

                dob: dob,

                education: education,

                email: email,

                password: password,

                createdAt:
                    new Date().toISOString()

            };


            /* Save profile */

            localStorage.setItem(
                "yugmaUser",
                JSON.stringify(userData)
            );


            /* Save login state */

            localStorage.setItem(
                "yugmaLoggedIn",
                "true"
            );


            alert(
                "🎉 YUGMA account created successfully!"
            );


            /* Redirect */

            window.location.href =
                "profile.html";

        }
    );



/* =========================================================
   LOGIN
========================================================= */

document
    .getElementById("loginForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document
                .getElementById("loginEmail")
                .value
                .trim()
                .toLowerCase();


            const password =
                document
                .getElementById("loginPassword")
                .value;


            /* Get saved account */

            const savedUser =
                localStorage.getItem(
                    "yugmaUser"
                );


            if (!savedUser) {

                alert(
                    "Account not found. Please create a YUGMA account first."
                );

                showSignup();

                return;

            }


            const user =
                JSON.parse(savedUser);


            /* Check credentials */

            if (
                user.email === email &&
                user.password === password
            ) {


                localStorage.setItem(
                    "yugmaLoggedIn",
                    "true"
                );


                alert(
                    "✓ Login successful. Welcome to YUGMA!"
                );


                window.location.href =
                    "profile.html";


            }

            else {

                alert(
                    "Incorrect email or password."
                );

            }

        }
    );
    document.getElementById("forgotPassword").addEventListener("click", function (e) {
    e.preventDefault();

    const email = prompt("Enter your registered email:");

    if (!email) {
        return;
    }

    const savedEmail = localStorage.getItem("yugmaEmail");

    if (email === savedEmail) {
        const newPassword = prompt("Enter your new password:");

        if (!newPassword) {
            alert("Password cannot be empty.");
            return;
        }

        localStorage.setItem("yugmaPassword", newPassword);

        alert("Password changed successfully! You can now login with your new password.");
    } else {
        alert("Email not found. Please enter your registered email.");
    }
});