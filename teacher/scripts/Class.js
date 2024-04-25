import { Class } from "../../models/Class.js";

const userCards = document.querySelector("[data-user-card-container]");

// fetch("http://127.0.0.1:5500/res/JSON_test/Classes.json")
//   .then((res) => res.json())
//   .then((data) => {
//     for (const Class of data) {
//       const card = classTemplate.content.cloneNode(true).children[0];
//       const header = card.querySelector("[data-header]");
//       const body = card.querySelector("[data-body]");
//       header.textContent = Class.className;
//       body.textContent = Class.creater;
//       userCards.append(card);
//     }
//   });

//constant data
if (!localStorage.getItem("classesData")) {
  let classes = [
    new Class("math", "ahmed", 1),
    new Class("english", "omar", 2),
    new Class("history", "mazen", 3),
  ];
  localStorage.setItem("classesData", JSON.stringify(classes));
}

const storedData = JSON.parse(localStorage.getItem("classesData"));

for (const Class of storedData) {
  userCards.innerHTML += `
  <div class="class" data-set-id=${Class.id}>
  <img
    class="classimg"
    src="/assets/images/—Pngtree—school logo_6846798.png"
    alt=""
  />
  <div class="words">
    <p class="line" data-header>class name: ${Class.name}</p>
    <p class="line" data-body>Creater: ${Class.creater}</p>
  </div>
</div>`;

  //used to make cards navigatble
  let classCards = document.querySelectorAll(".class");

  for (let classobj of classCards) {
    let classes = JSON.parse(localStorage.getItem("classesData"));
    classobj.addEventListener("click", () => {
      let id = classobj.getAttribute("data-set-id");
      localStorage.setItem(
        "selectedClass",
        JSON.stringify(classes.find((classobj) => classobj.id == id))
      );
      window.location.href = "Teacher-Announcements.html";
    });
  }
}
