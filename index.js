document.addEventListener("DOMContentLoaded", () => {
  const i = document.getElementById("i");
  const menu = document.querySelector(".menu");

  menu.addEventListener("mouseenter", () => {
    i.classList.add("rotated");
  });

  menu.addEventListener("mouseleave", () => {
    i.classList.remove("rotated");
  });

  // GSAP animations
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".nav", {
    y: "-100%",
    scrollTrigger: {
      trigger: ".nav",
      markers: false,
      start: "50% 0%",
      end: "bottom 10%",
      scrub: 1,
    },
  });

  gsap.to(".boxUl1", {
    x: "-50%",
    scrollTrigger: {
      trigger: ".boxUl1",
      start: "top 100%",
      end: "bottom -100%",
      scrub: true,
    },
  });

  gsap.to(".boxUl2", {
    x: "50%",
    scrollTrigger: {
      trigger: ".boxUl2",
      start: "top 100%",
      end: "bottom -100%",
      scrub: true,
    },
  });

  gsap.from(".contact-item", {
    opacity: 0,
    x: -50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".contact",
      start: "top 100%",
      end: "bottom 65%",
      toggleActions: "restart none none reset",
    },
  });

  const text = "Introduction to Cloud Computing";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      document.getElementById("h2").textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 90);
    }
  }

  typeWriter();
});

window.addEventListener("load", function () {
  const i1 = document.getElementById("iMain1");
  const i2 = document.getElementById("iMain2");
  const i3 = document.getElementById("iMain3");
  const content = document.getElementById("page1");

  function delayAnim() {
    setTimeout(() => {
      i1.classList.add("iMain1");
      i2.classList.add("iMain2");
      i3.classList.add("iMain3");
      content.classList.add("contentAnim");
    }, 2700);
  }

  delayAnim();

  // Navigation logic
  const next = document.querySelector(".next");
  const previous = document.querySelector(".previous");
  const buttons = document.querySelectorAll(".b");

  const pages = [
    "index.html",
    "index2.html",
    "index3.html",
    "index4.html",
    "index5.html",
  ];

  const currentPage = window.location.pathname.split("/").pop();
  const currentPageIndex = pages.indexOf(currentPage);

  next?.addEventListener("click", () => {
    if (currentPageIndex < pages.length - 1)
      window.location.href = pages[currentPageIndex + 1];
  });

  previous?.addEventListener("click", () => {
    if (currentPageIndex > 0)
      window.location.href = pages[currentPageIndex - 1];
  });

  buttons.forEach((button, index) => {
    if (index !== currentPageIndex) {
      button.addEventListener("click", () => {
        window.location.href = pages[index];
      });
    }
    if (index === currentPageIndex) {
      button.classList.add("present");
    }
  });
});
