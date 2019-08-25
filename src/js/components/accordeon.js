export default function Accordeon() {
  const accordElement = document.querySelector(".accordeon");

  createAccord(accordElement);

  function createAccord(element) {
    const boxes = element.querySelectorAll(".box");

    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i];
      box.addEventListener("click", function() {
        const accordeonHeader = this.parentNode;
        const currentActiveElem = document.querySelector(
          ".accordeon__elem--active"
        );

        if (currentActiveElem) {
          currentActiveElem.classList.remove("accordeon__elem--active");
        }
        accordeonHeader.classList.add("accordeon__elem--active");
      });
    }
  }
}
