document.addEventListener("DOMContentLoaded", function() {
  // Toggle visibility of collapsible elements
  document.querySelectorAll(".btn-toggle").forEach(function(button) {
    button.addEventListener("click", function() {
      const target = document.querySelector(button.getAttribute("data-target"));
      if (target) {
        target.classList.toggle("show");
      }
    });
  });

  // Toggle between Take-off and Landing sections
  const takeoffBtn = document.getElementById("takeoff-btn");
  const landingBtn = document.getElementById("landing-btn");
  const takeoffOptions = document.getElementById("takeoff-options");
  const landingOptions = document.getElementById("landing-options");

  takeoffBtn.addEventListener("click", function() {
    takeoffOptions.style.display = "block";
    landingOptions.style.display = "none";
    takeoffBtn.classList.add("active");
    landingBtn.classList.remove("active");
  });

  landingBtn.addEventListener("click", function() {
    landingOptions.style.display = "block";
    takeoffOptions.style.display = "none";
    landingBtn.classList.add("active");
    takeoffBtn.classList.remove("active");
  });

  // Select All / Clear All for Airlines
  const selectAllAirlinesBtn = document.getElementById("select-all-airlines");
  const clearAllAirlinesBtn = document.getElementById("clear-all-airlines");
  const airlineCheckboxes = document.querySelectorAll(".airline-checkbox");

  selectAllAirlinesBtn.addEventListener("click", function() {
    airlineCheckboxes.forEach(checkbox => {
      checkbox.checked = true;
    });
  });

  clearAllAirlinesBtn.addEventListener("click", function() {
    airlineCheckboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  });

  // Select All / Clear All for Cabins
  const selectAllCabinsBtn = document.getElementById("select-all-carbins");
  const clearAllCabinsBtn = document.getElementById("clear-all-carbins");
  const cabinCheckboxes = document.querySelectorAll(".cabin-checkbox");

  selectAllCabinsBtn.addEventListener("click", function() {
    cabinCheckboxes.forEach(checkbox => {
      checkbox.checked = true;
    });
  });

  clearAllCabinsBtn.addEventListener("click", function() {
    cabinCheckboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  });

  // Select All / Clear All for Aircraft
  const selectAllAircraftBtn = document.getElementById("select-all-aircrafts");
  const clearAllAircraftBtn = document.getElementById("clear-all-aircrafts");
  const aircraftCheckboxes = document.querySelectorAll(".aircraft-checkbox");

  selectAllAircraftBtn.addEventListener("click", function() {
    aircraftCheckboxes.forEach(checkbox => {
      checkbox.checked = true;
    });
  });

  clearAllAircraftBtn.addEventListener("click", function() {
    aircraftCheckboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const bestButton = document.querySelector(".sort-button:nth-child(2)"); // Assuming 'Best' is the second button
  const bestFlights = document.getElementById("best-flights");

  // Hide other categories and show only the "Best" flights on button click
  bestButton.addEventListener("click", function() {
    // Hide other flight categories (if you have multiple categories like Cheapest, Quickest)
    document.querySelectorAll(".flight-category").forEach(category => {
      category.style.display = "none";
    });

    // Show Best flights
    bestFlights.style.display = "block";

    // Set active state for the button
    document.querySelectorAll(".sort-button").forEach(button => button.classList.remove("active"));
    bestButton.classList.add("active");
  });
});
