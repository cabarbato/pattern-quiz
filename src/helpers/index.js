
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// GSAP for animate classes
function showElement(elem) {
  if (elem.style.opacity === "1") return;

  const direction = 1,
    classes = {
      "slide-right": [-100, 0],
      "slide-left":  [100, 0],
      "slide-up":    [0, direction * 100],
      "slide-down":  [0, -direction * 100],
    };
    
    let x = 0,
      y = 0,
      delay = 0;

  elem.classList.forEach((d) => {
    if (d.includes('delay-')) delay = d.replace('delay-', '');
  });
  
  Object.entries(classes).forEach(([key, val]) => {
    if (elem.classList.contains(key)) {
      x = val[0];
      y = val[1];
    }
  })

  gsap.fromTo(
    elem,
    { x, y, autoAlpha: 0 },
    {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: 'expo',
        overwrite: 'auto',
        delay,
    }
);
}



function hideElement(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

function animateClasses() {
  gsap.utils.toArray('.animate').forEach(function (elem) {
    hideElement(elem);

    ScrollTrigger.create({
      trigger: elem,
      start: "bottom bottom",
      onEnter: () => showElement(elem)
      
    });
  });
}

// batch import helper
const importAll = (r) => {
  const files = {};
  r.keys().map((file) => (files[file.replace("./", "")] = r(file)));
  return files;
};

export { importAll, animateClasses };
