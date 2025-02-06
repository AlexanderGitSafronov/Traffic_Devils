const rangeValue = document.querySelectorAll(".rangeValue");
const rangeInputMounth = document.getElementById("range__month");
const rangeValueLineMonth = document.querySelector(".rangeValueLineMonth");
const rangeInputPrice = document.getElementById("price_range");
const rangeValueLinePrice = document.querySelector(".rangeValueLinePrice");

function range(rangeNumber, rangeSymbol, rangeInput, rangeValueLine) {
  let adjustedValue = rangeInput.value;
  let formattedValue = new Intl.NumberFormat().format(adjustedValue);
  if (formattedValue === "0") {
    rangeValue[rangeNumber].textContent = `${1} ${rangeSymbol}`;
  } else {
    rangeValue[rangeNumber].textContent = `${formattedValue} ${rangeSymbol}`;
  }
  const rangeWidth = rangeInput.offsetWidth;
  const thumbWidth = 24;
  const offset = rangeInputPrice.offsetLeft;
  const value = rangeInput.value;
  const percentage =
    (value - rangeInput.min) / (rangeInput.max - rangeInput.min);
  const position = percentage * (rangeWidth - thumbWidth);
  rangeValue[rangeNumber].style.left = `calc(${offset + position}px + ${
    thumbWidth / 2
  }px)`;
  rangeValueLine.style.left = `calc(${offset + position}px + ${
    thumbWidth / 2
  }px)`;
  rangeInput.style.background = `linear-gradient(to right, rgba(216, 30, 5, 1) ${
    percentage * 100
  }%, rgba(222, 228, 236, 1) ${percentage * 100}%)`;
}

rangeInputMounth.addEventListener("input", function () {
  range(0, "month", rangeInputMounth, rangeValueLineMonth);
});

rangeInputPrice.addEventListener("input", function () {
  range(1, "€", rangeInputPrice, rangeValueLinePrice);
});

range(0, "month", rangeInputMounth, rangeValueLineMonth);
range(1, "€", rangeInputPrice, rangeValueLinePrice);
