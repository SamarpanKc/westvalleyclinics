export const scrollToContact = () => {
  const element = document.getElementById("contact");

  if (!element) {
    if (typeof window !== "undefined") {
      window.location.href = "/#contact";
    }
    return;
  }

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
