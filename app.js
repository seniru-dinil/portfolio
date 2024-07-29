// Get the element with the .visually-hidden class
const element = document.querySelector(".visually-hidden");

const handle = () => {
  element.classList.remove("visually-hidden");
  element.classList.add("visually-visible");
};

const canselHandle = () => {
  element.classList.add("visually-hidden");
  element.classList.remove("visually-visible");
};
