// local reviews data
const reviews = [
  {
    name: "Adham Tarek",
    job: "Back-end Developer",
    img: "GOAT.jpg",
    text: 'Wegz is an Egyptian rapper who gained attention for his bold lyrics and gritty style. His music often touches on street life, struggles, and personal experiences. Tracks like "Zay El Fesoul El Arbaa" and "Bas Kollo Yehoon" showcase his raw approach to rap.',
  },
  {
    name: "Moaaz Mohamed",
    job: "Electric Engineer",
    img: "moaaz.jpg",
    text: 'Lil Baba is a young Egyptian rapper who has been making waves with his energetic style and catchy hooks. He often raps about everyday life, relationships, and youth culture. His tracks like "Nefsi Aheb" and "Halawet El Donya" have garnered attention.',
  },
  {
    name: "Ahmed Torky",
    job: "Banker",
    img: "ahmed.jpg",
    text: 'Oka Wi Ortega is a duo consisting of Ahmed Oka and Ortega Beek. They are known for their humorous and upbeat tracks that often include danceable beats. Their songs like "3alahwa" and "El Alb Ya\'ish" have become party anthems.',
  },
  {
    name: "Belal Abdelaziz",
    job: "Graphic Designer",
    img: "belal.jpg",
    text: 'Marwan Moussa, also known by his stage name Shobek Lobek, is an Egyptian rapper who gained popularity with his witty and humorous lyrics. He often addresses everyday life situations and societal observations in his music. Tracks like "Ana Basha3\'ak" and "Sofra Gedida" exemplify his comedic rap style.',
  },
];

//selecting elements
const nameOfPerson = document.getElementById("author");
const job = document.getElementById("job");
const image = document.getElementById("person-img");
const bio = document.getElementById("info");
const arrowRight = document.querySelector(".fa-chevron-right");
const arrowLeft = document.querySelector(".fa-chevron-left");
const surpriseMe = document.querySelector(".random-btn");
let personIndex = 0;

//handling arrow right element
arrowRight.addEventListener("click", function () {
  personIndex++;
  if (personIndex === reviews.length) {
    personIndex = 0;
  }
  modifyData();
});

//handling arrow left element
arrowLeft.addEventListener("click", function () {
  personIndex--;
  if (personIndex === -1) {
    personIndex = reviews.length - 1;
  }
  modifyData();
});

//handling surprise me button
surpriseMe.addEventListener("click", function () {
  personIndex = Math.floor(Math.random() * 4);
  modifyData();
});

//function to modify data
function modifyData() {
  nameOfPerson.textContent = reviews[personIndex].name;
  job.textContent = reviews[personIndex].job;
  image.src = reviews[personIndex].img;
  bio.textContent = reviews[personIndex].text;
}
