import "./styles.css";

const primaryColor = "#173b69";
const secondaryColor = "#491456";
const body = document.getElementsByTagName("body")[0];
const openAnimationTime = 1000;

let start;
const step = (stamp) => {
  if (start === undefined) start = stamp;
  const elapsed = stamp - start;
  const fraction = elapsed / openAnimationTime;
  const angle = 360 * Math.pow(fraction, 3);
  body.style.background = `linear-gradient(${angle}deg, ${secondaryColor}, ${primaryColor})`;
  if (elapsed < openAnimationTime) {
    window.requestAnimationFrame(step);
  }
};
window.requestAnimationFrame(step);
