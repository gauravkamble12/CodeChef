document.getElementById("sendBtn").addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || phone === "" || subject === "" || message === "") {
        alert("Please fill all fields!");
        return;
    }

    const phoneNumber = "918600619076";
    const textMessage = `Hello, I am ${name}%0AEmail: ${email}%0AMobile: ${phone}%0ASubject: ${subject}%0AMessage: ${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${textMessage}`;
    window.open(whatsappURL, "_blank");
});