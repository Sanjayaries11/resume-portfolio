

//SCROLLING TO CONTENT
function scrollToAbout(){
  var aboutSection = document.getElementById("about");
  aboutSection.scrollIntoView({ behavior: 'smooth' });
}


function scrollToContact() {
  var contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSkills(){
  var skillsSection = document.getElementById("skills");
  skillsSection.scrollIntoView({ behavior: 'smooth' });
}
//SCROLLING CONTENT END


function openTab(tabName) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName("tab-contents");
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
    }
    // Deactivate all tab links
    var tabLinks = document.getElementsByClassName("tab-links");
    for (var i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active-link");
    }
    // Show the selected tab content
    document.getElementById(tabName).style.display = "block";
    // Activate the selected tab link
    event.currentTarget.classList.add("active-link");
  }

  
