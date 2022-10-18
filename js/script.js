// Copyright (c) 2020 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate() {
  // input
  const length = parseInt(document.getElementById("length-of-triangle").value)
  const width = parseInt(document.getElementById("width-of-triangle").value)

  // process
  const area = length * width
  const perimeter = 2 * (length + width)

  // output
  document.getElementById("area").innerHTML = "Area is: " + area + " cm²"
  document.getElementById("perimeter").innerHTML =
    "Perimeter is: " + perimeter + " cm"
}
