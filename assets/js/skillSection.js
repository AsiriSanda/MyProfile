const cardContainer = $("#cardContainer");


function skillViewComponent(skill) {
  console.log("Skill called");

  var ratingCreated = "";

  console.log(typeof skill.rating);

  for (var i = 0; i < skill.rating; i++) {
    console.log("i" + i);
    ratingCreated = ratingCreated + `<div class="ratingCircles rated"></div>`;
  }

  for (var j = skill.rating; 5 > j; j++) {
    console.log("j" + j);
    ratingCreated = ratingCreated + `<div class="ratingCircles"></div>`;
  }

  return `<div class="cardParent">
                   <div style="display: flex; flex-direction: row;  align-items: center;">
                    <div style="width: 100px;">
                        <img class="cardImage" src="${skill.imageUrl}" alt="">
                    </div>
                    <div>
                        <span class="cardMainTitle">${skill.title}</span>
                        
                        <div class="ratingParent">
                            ${ratingCreated}
                        </div>
                    </div>
                   </div>
                     
                </div>`;
}

function createCom() {
  const ab = [{
    heading: 'HEAding'
  }];

  cardContainer.append(abd(ab[0]));

}


function abd(object) {
  return (
    `<div>
                <h1>${object.heading}</h1>
            </div>`
  )
}

const skills = [
  {
    title: "JAVA",
    projects: 6,
    rating: 4,
    imageUrl: "./assets/images/images/Java.png"
  },
  {
    title: "JavaScript",
    projects: 6,
    rating: 5,
    imageUrl: "./assets/images/images/js.png",
    description:
      "I’ve done more than 5 projects using HTML language. This experience in HTML leads me to the easy tool for programming and web developing.   ",
  },
  {
    title: "HTML5",
    projects: 6,
    rating: 5,
    imageUrl: "./assets/images/images/Html.png",
    description:
      "I’ve done more than 5 projects using HTML language. This experience in HTML leads me to the easy tool for programming and web developing.   ",
  },
  {
    title: "CSS3",
    projects: 6,
    rating: 5,
    imageUrl: "./assets/images/css.png",
    description:
      "I’ve done more than 5 projects using HTML language. This experience in HTML leads me to the easy tool for programming and web developing.   ",
  },
  {
    title: "JavaFX",
    projects: 6,
    rating: 5,
    imageUrl: "./assets/images/images/jfx.png",
    description:
      "I’ve done more than 5 projects using HTML language. This experience in HTML leads me to the easy tool for programming and web developing.   ",
  },



  {
    title: "Spring-Boot",
    projects: 6,
    rating: 5,
    imageUrl: "./assets/images/images/sb.png",
    description:
      "I’ve done more than 5 projects using HTML language. This experience in HTML leads me to the easy tool for programming and web developing.   ",
  },
  {
    title: "Hibernate",
    projects: 6,
    rating: 5,
    imageUrl: "./assets/images/images/Hibernate.png",
    description:
      "I’ve done more than 5 projects using HTML language. This experience in HTML leads me to the easy tool for programming and web developing.   ",
  }
];

skills.forEach((skill) => {
  cardContainer.append(skillViewComponent(skill));
});




