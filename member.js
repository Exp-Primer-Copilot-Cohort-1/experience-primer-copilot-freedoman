function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = member.getElementsByClassName("skills");
    var memberSkillsLength = memberSkills.length;

    for (var i = 0; i < memberSkillsLength; i++) {
        memberSkills[i].style.display = "block";
    }
}