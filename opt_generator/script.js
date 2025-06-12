function otpshow(){
    let email = document.getElementById("email-in")
    let otp_in = document.getElementsByClassName("otp-var")[0]

    let otp = Math.floor(Math.random() * 100000)
    Email.send({
    SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}