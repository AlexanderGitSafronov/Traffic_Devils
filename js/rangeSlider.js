$(document).ready(function () {
  const slider1 = $("#rangeSlider")
    .ionRangeSlider({
      skin: "round",
      type: "single",
      min: 1,
      max: 12,
      from: 0,
      step: 0.3,
      grid: true,
      grid_num: 4,
      values: [1, 3, 6, 9, 12],
      prettify: function (value) {
        return value + " month";
      },
      onChange: updateResult,
    })
    .data("ionRangeSlider");

  const slider2 = $("#rangeSliderSecond")
    .ionRangeSlider({
      skin: "round",
      type: "single",
      min: 300,
      max: 15000,
      from: 1,
      step: 0.3,
      grid: true,
      grid_num: 4,
      postfix: " €",
      values: [300, 3975, 7650, 11325, 15000],
      onChange: updateResult,
    })
    .data("ionRangeSlider");

  function updateResult(data) {
    const monthValue = slider1.options.values[slider1.result.from];
    const amountValue = slider2.options.values[slider2.result.from];
    console.log(monthValue);
    console.log(amountValue);

    const profitPercentage = 0.5;
    const profit = amountValue + amountValue * profitPercentage * monthValue;
    let result = `<span>MOGUĆA DOBIT:</span><span>€ ${profit.toFixed(
      2
    )}</span>`;

    $("#resultButton").html(result);
  }

  updateResult();
});
