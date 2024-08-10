const redslider = document.getElementById("redslider");
const greenslider = document.getElementById("greenslider");
const blueslider = document.getElementById("blueslider");
const redvaluespan = document.getElementById("redvalue");
const greenvaluespan = document.getElementById("greenvalue");
const bluevaluespan = document.getElementById("bluevalue");
const colorbox = document.getElementById("color-box");
const copyButton = document.getElementById("copyButton");
const inputTypeRGBValue = document.getElementById("inputType");

redslider.addEventListener('input', updatecolor);
greenslider.addEventListener('input', updatecolor);
blueslider.addEventListener('input', updatecolor);
copyButton.addEventListener('click', copyRGBValue);

function updatecolor() {
  const redvalue = redslider.value;
  const greenvalue = greenslider.value;
  const bluevalue = blueslider.value;
  const rgbcolor = `rgb(${redvalue},${greenvalue},${bluevalue})`;
  
  colorbox.style.backgroundColor = rgbcolor;
  redvaluespan.textContent = redvalue;
  greenvaluespan.textContent = greenvalue;
  bluevaluespan.textContent = bluevalue;
  inputTypeRGBValue.textContent = rgbcolor;
}

updatecolor();

function copyRGBValue() {
  const redvalue = redslider.value;
  const greenvalue = greenslider.value;
  const bluevalue = blueslider.value;
  const rgbcolor = `rgb(${redvalue},${greenvalue},${bluevalue})`;
  
  navigator.clipboard.writeText(rgbcolor)
    .then(() => {
      alert("rgb color copied: " + rgbcolor);
    })
    .catch(error => {
      console.error("failed to copy value:", error);
    });
}