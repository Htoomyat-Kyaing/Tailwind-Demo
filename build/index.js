let toggleDark = document.querySelector("#toggleDark");
toggleDark.checked = true;
document.documentElement.classList.add("dark");

toggleDark.addEventListener("change", () => {
  console.log(toggleDark.checked);
  if (toggleDark.checked) document.documentElement.classList.add("dark");
  else document.documentElement.classList.remove("dark");
});

// toggleDark.addEventListener("click", () => {
//   console.log("clicked");
// });
