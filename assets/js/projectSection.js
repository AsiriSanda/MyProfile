const projectItemsContainer = $("#projectItemsContainer");
const typeAll = $("#typeAll");
const typeWeb = $("#typeWeb");
const typeMobileApps = $("#typeMobileApps");
const typeStandalone = $("#typeStandalone");


var selectedType = "all";
const projects = [
  {
    title: "Sahan Bookshop",
    github: "https://github.com/AsiriSanda/sahan_bookshop",
    icon: "./assets/images/images/Proj1.png",

  },
  {
    title: "Student Management System",
    github: "https://github.com/AsiriSanda/sipsewana_orm",
    type: "standalone",
    icon: "./assets/images/images/ss.JPG",
  },

  {
    title: "POS-Layered Architecture",
    github: "https://github.com/AsiriSanda/Supermarket_layerd",
    type: "standalone",
    icon: "./assets/images/images/sm.jpg",
  },

  {
    title: "Car Rental Spring",
    github: "https://github.com/AsiriSanda/Car-Rental-System",
    icon: "./assets/images/images/cs.JPG",

  },

  // Add more projects here as the object with above attributes.

];

const typeAllClicked = () => {
  typeAll.removeClass("active");
  typeWeb.removeClass("active");
  typeMobileApps.removeClass("active");
  typeStandalone.removeClass("active");
  typeAll.addClass("active");
  changeProjects("all");
};

function typeWebClicked() {
  console.log("web clicked");
  typeAll.removeClass("active");
  typeWeb.removeClass("active");
  typeMobileApps.removeClass("active");
  typeStandalone.removeClass("active");
  typeWeb.addClass("active");
  changeProjects("web");
}

const typeMobileAppsClicked = () => {
  typeAll.removeClass("active");
  typeWeb.removeClass("active");
  typeMobileApps.removeClass("active");
  typeStandalone.removeClass("active");
  typeMobileApps.addClass("active");
  changeProjects("mobileApps");
};


changeProjects('all');

function changeProjects(type) {
  projectItemsContainer.html("");

  if (type === "all") {
    projects.forEach((item) => {
      projectItemsContainer.append(createItem(item));
    });
  } else {
    projects.forEach((item) => {
      if (item.type === type) {
        projectItemsContainer.append(createItem(item));
      }
    });
  }
}

let scroll = 0;

function rightScrollButtonClicked() {

  if (!(projectItemsContainer.width() < scroll)) {
    scroll += 500;
    projectItemsContainer.scrollLeft(scroll);
  }

}

function leftScrollButtonClicked() {

  if (!(scroll < 1)) {
    scroll -= 500;
    projectItemsContainer.scrollLeft(scroll);
  }

}

function createItem(itemDetails) {
  return `<div class="projectItem">
            <div class="iconsParent">
                <img src="${itemDetails.icon}" alt="">
            </div>
            <div class="description">
                <span>${itemDetails.title}</span>
                <hr>
                
                <a href="${itemDetails.github}" ><img src="./assets/images/github.png" alt=""></a>
            </div>
            </div>`;
}
