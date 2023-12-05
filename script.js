window.addEventListener("load", function () {
    let body = document.querySelector("body"),
      universe = document.getElementById("universe"),
      solarys = document.getElementById("solar-system");
  
    const init = function () {
      body.classList.remove("view-2D", "opening");
      body.classList.add("view-3D");
  
      setTimeout(() => {
        body.classList.remove("hide-UI");
        body.classList.add("set-speed");
      }, 2000);
    };
  
    const setView = function (view) {
      universe.className = view;
    };
  
    document.getElementById("toggle-data").addEventListener("click", (e) => {
      e.preventDefault();
      body.classList.toggle("data-open");
      body.classList.toggle("data-close");
    });
  
    document.getElementById("toggle-controls").addEventListener("click", (e) => {
      e.preventDefault();
      body.classList.toggle("controls-open");
      body.classList.toggle("controls-close");
    });
  
    const dataLinks = document.querySelectorAll("#data a");
    dataLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        const ref = this.getAttribute("class");
        solarys.className = ref;
        const siblings = this.parentNode.querySelectorAll("a");
        siblings.forEach((sibling) => {
          sibling.classList.remove("active");
        });
        this.classList.add("active");
        e.preventDefault();
      });
    });
  
    document.querySelector(".set-view").addEventListener("click", () => {
      body.classList.toggle("view-3D");
      body.classList.toggle("view-2D");
    });
  
    document.querySelector(".set-zoom").addEventListener("click", () => {
      body.classList.toggle("zoom-large");
      body.classList.toggle("zoom-close");
    });
  
    document.querySelector(".set-speed").addEventListener("click", () => {
      setView("scale-stretched set-speed");
    });
  
    document.querySelector(".set-size").addEventListener("click",() => {
      setView("scale-s set-size");
    })
  
    document.querySelector(".set-distance").addEventListener("click",()=>{
      setView("scale-d set-distance");
    })
  
    init();
  
  });