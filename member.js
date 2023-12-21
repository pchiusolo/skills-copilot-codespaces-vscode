function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var contact = document.getElementById("contact");
    var memberButton = document.getElementById("memberButton");
    var skillsButton = document.getElementById("skillsButton");
    var contactButton = document.getElementById("contactButton");

    member.style.display = "block";
    skills.style.display = "none";
    contact.style.display = "none";
    memberButton.style.backgroundColor = "#4CAF50";
    skillsButton.style.backgroundColor = "#333";
    contactButton.style.backgroundColor = "#333";
}