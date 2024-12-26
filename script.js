document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter_btn"); 
  const projects = document.querySelectorAll(".portfolio_body .project_coded, .portfolio_body .project_designed"); 

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter; 

      projects.forEach((project) => {
        if (filter === "all") {
          project.style.display = "block"; 
        } else if (filter === "coded" && project.classList.contains("project_coded")) {
          project.style.display = "block"; 
        } else if (filter === "designed" && project.classList.contains("project_designed")) {
          project.style.display = "block"; 
        } else {
          project.style.display = "none"; 
        }
      });
    });
  });
});


