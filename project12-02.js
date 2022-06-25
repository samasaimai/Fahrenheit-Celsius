"use strict";
/*    JavaScript 7th Edition
      Project 12-02

      Project to convert between celsius and fahrenheit
      Author: Saimai Doiron
      Date: 03/13/2022  

      Filename: project12-02.js
*/
//step3
$("input#cValue").change((e) => {
  let celsius = $(e.target).val();
  let fahrenheit = celsius * 1.8 + 32;
  $("input#fValue").val(fahrenheit.toFixed(0));
});

//step4
$("input#fValue").change((e) => {
  let fahrenheit = $(e.target).val();
  let celsius = (fahrenheit - 32) / 1.8;
  $("input#cValue").val(celsius.toFixed(0));
});
