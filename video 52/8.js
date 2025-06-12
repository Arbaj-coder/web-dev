function setAuthToken(token, expiresInSeconds) {
    const expiryTime = Date.now() + expiresInSeconds * 1000;

    const authData = {
        token: token,
        expiresAt: expiryTime
    };

    localStorage.setItem("authToken", JSON.stringify(authData));
}

function getAuthToken() {
    const authData = JSON.parse(localStorage.getItem("authToken"));
    if (!authData) return alert("Token is missing");

    if (Date.now() > authData.expiresAt) {
        localStorage.removeItem("authToken");
        return alert("Token has expired");
    }

    const tokenInput = document.getElementsByClassName("otp-varify")[0];
    if (tokenInput && tokenInput.value === authData.token) {
        alert("✅ Token is valid");
    } else {
        alert("❌ Token is invalid");
    }
}

function run() {
    const otpInput = document.getElementsByClassName("otp-varify")[0];
    otpInput.style.display = "flex";

    const gen_tok = "abcd1234efgh5678";
    alert(`Your token is ${gen_tok}, it will expire in 2 minutes`);
    setAuthToken(gen_tok, 120);
}

// Attach click event properly
const button = document.getElementsByClassName("btn-var")[0];
if (button) {
    button.addEventListener('click', getAuthToken);
}
