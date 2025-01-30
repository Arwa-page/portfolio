(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "bzGogF86MhB8lfd7i",
    });
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // البيانات المرسلة
    var data = {
        from_name: document.getElementById("contact-name").value,
        reply_to: document.getElementById("contact-email").value,
        subject: document.getElementById("contact-subject").value,
        message: document.getElementById("contact-message").value,
    };

    // إرسال البريد عبر EmailJS
    emailjs.send("service_ygnh0nc", "template_niivjtv", data, "bzGogF86MhB8lfd7i")
        .then(function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Your message has been sent successfully!");
        }, function (error) {
            console.log("FAILED...", error);
            alert("There was an error sending your message. Please try again.");
        });
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    var data = {
        from_name: document.getElementById("contact-name").value,
        reply_to: document.getElementById("contact-email").value,
        subject: document.getElementById("contact-subject").value,
        message: document.getElementById("contact-message").value,
    };

    emailjs.send("service_ygnh0nc", "template_niivjtv", data, "bzGogF86MhB8lfd7i")
        .then(function (response) {
            document.querySelector(".email-success").style.display = "block";
            document.querySelector(".email-loading").style.display = "none";
            document.querySelector(".email-failed").style.display = "none";
        }, function (error) {
            document.querySelector(".email-failed").style.display = "block";
            document.querySelector(".email-loading").style.display = "none";
            document.querySelector(".email-success").style.display = "none";
        });

    document.querySelector(".email-loading").style.display = "block";
});
