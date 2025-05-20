gsap.from("#header", {
  opacity: 0,
  y: -80,
  delay: 0.2,
  duration: 0.3,
});

// Animate main big text
gsap.from("#t2", {
  opacity: 0,
  y: 100,
  delay: 0.4,
  duration: 0.5,
});

// Animate images
gsap.from("#center img", {
  opacity: 0,
  y: 200,
  delay: 0.6,
  duration: 0.5,
});

gsap.from("#bottomr img", {
  opacity: 0,
  y: 100,
  delay: 0.7,
  duration: 0.5,
});

gsap.from("#topl img", {
  opacity: 0,
  y: 100,
  delay: 0.7,
  duration: 0.5,
});

// Animate small text blocks
gsap.from("#t1", {
  opacity: 0,
  y: 100,
  delay: 0.9,
  duration: 0.5,
});

gsap.from("#t3", {
  opacity: 0,
  y: 100,
  delay: 0.9,
  duration: 0.5,
});

gsap.from("#t4", {
  opacity: 0,
  y: 100,
  delay: 0.9,
  duration: 0.5,
});

// Fix selector here to target #menu correctly
gsap.from("#menu", {
  opacity: 0,
  x: 100,
  duration: 1,
});

// Animate inside menu headers or sections (assuming #bc h2 exists)
gsap.from("#bc h2", {
  y: 250,
  duration: 0.4,
  stagger: 0.3,
});

// Create timeline for menu slide-in and fade-in of links/icons
const tl = gsap.timeline({ paused: true });

tl.to("#menu", {
  duration: 1,
  left: "0%",
  ease: "power2.out",
});

tl.from("#menu a", {
  x: -10,
  duration: 0.3,
  stagger: 0.1,
  opacity: 0,
}, "-=0.7"); // overlap slightly for smoothness

tl.from("#menu i", {
  opacity: 0,
  duration: 0.1,
}, "-=0.4");

// Get elements safely
const icon = document.getElementById("icon");
const menuCloseIcon = document.querySelector("#menu i");

if (icon) {
  icon.addEventListener("click", () => {
    tl.play();
  });
}

if (menuCloseIcon) {
  menuCloseIcon.addEventListener("click", () => {
    tl.reverse();
  });
}

