export default () => {
  const accordions = document.querySelectorAll(".js-accordion-container");

  // if (!accordions) return;

  Array.prototype.forEach.call(accordions, accordion => {
    const accordionItems = accordion.querySelectorAll(".js-accordion");

    // if (!accordionItems) return;

    Array.prototype.forEach.call(accordionItems, item => {
      const icon = item.querySelector(".js-toggle-icon");

      const heading = item.querySelector(".js-accordion-btn");

      const content = item.querySelector(".js-accordion-content");

      // if (!heading || !content) return;

      heading.addEventListener("click", e => {
        e.preventDefault();
        content.classList.toggle("open");

        if (icon) {
          icon.classList.toggle("icon-open");
        }
      });
    });
  });
};
