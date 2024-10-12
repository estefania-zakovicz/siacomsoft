window.addEventListener("DOMContentLoaded"), (event) => {
  
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span"
  });

  $("[words-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), { opacity: 0, yPercent: 100, duration: 0.5, ease: "back.out(2)", stagger: { amount: 0.5 } });


    ScrollTrigger.create({
      trigger: $(this),
      start: "top bottom",
      onLeaveBack: () => {
        tl.progress(0);
        tl.pause();
      }
    });

    ScrollTrigger.create({
      trigger: $(this),
      start: "top 60%",
      onEnter: () => tl.play(),
    });
  });

  gsap.set("[text-slip]", { opacity: 1 });
};