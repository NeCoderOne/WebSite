gsap.registerPlugin(ScrollTrigger);

const body = document.querySelector("body");

window.addEventListener("load", () => {
  document.querySelector(".loader__round").style.animation = "none";
  gsap.to(".loader__round", {
    scale: 0,
    duration: 0.5,
  });
  gsap.to(".pillar", {
    scaleY: 0,
    duration: 0.5,
    stagger: 0.15,
    onComplete() {
      document.querySelector(".loader").style.display = "none";
    },
  });
});

window.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(
    ".benefits-card",
    {
      y: 100,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: ".header__benefits-cards",
        start: "top center",
        end: "top center",
        scrub: 3,
        // markers: true,
      },
      y: 0,
      opacity: 1,
      stagger: 0.3,
      duration: 1,
    }
  );

  [".poster__sub-title", ".poster__title", ".poster__text"].forEach((e) => {
    gsap.from(e, {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: e,
        start: "top center",
        // markers: true,
      },
    });
  });
  gsap.from(".poster__img-wrapper>div", {
    opacity: 0,
    y: 400,
    scrollTrigger: {
      trigger: ".poster__img-wrapper",
      start: "top center",
      end: "bottom center",
      //   markers: true,
    },
  });
  gsap.from(
    [".info-cards__title", ".info-cards__text", ".info-cards__btn-wrapper"],
    {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".info-cards__inner>.scroll-trigger",
        start: "top center",
        end: "bottom center",
        //   markers: true,
      },
    }
  );
  gsap.from(".cards__info-card", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".cards__info-card",
      // markers: true,
      start: "top center",
    },
  });
  gsap.from(".we-can__grid > *", {
    scale: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".we-can__grid",
      // markers: true,
      start: "top center",
    },
  });
  gsap.from(".half-section__content", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".half-section__inner",
      //   markers: true,
      start: "top center",
      //   end: "+=100 center"
    },
  });
  gsap.from(".half-section__img", {
    scale: 0,
    scrollTrigger: {
      trigger: ".half-section__inner",
      //   markers: true,
      start: "top center",
      end: "bottom center",
    },
  });
  //   ScrollTrigger.create({
  //     trigger: ".half-section__content",
  //     start: "top center",
  //     markers: true,
  //     onToggle: (self) => {
  //       console.log(self);
  //       //   gsap.from(".half-section__content", {
  //       //     y: 100,
  //       //     duration: 1,
  //       //     scrollTrigger: {
  //       //       trigger: ".half-section__content",
  //       //       markers: true,
  //       //       start: "top center",
  //       //     },
  //       //   }),
  //     },
  //   });
});
