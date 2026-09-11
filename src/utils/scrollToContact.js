export const scrollToContact = () => {
  const element = document.getElementById("contact");

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
