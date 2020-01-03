function sendMail(contactForm) {
    emailjs.send("gmail", "resume_site", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", reponse);
        },
        function(error) {
            console.log("FAILED", error);
        });
}