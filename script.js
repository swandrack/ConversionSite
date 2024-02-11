var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

      // Function to handle conversions based on selected options in Measure dropdowns
      function convert() {
        var measure1 = document.querySelector("#measure1 option:checked").textContent;
        var measure2 = document.querySelector("#measure2 option:checked").textContent;
        if (measure1 == "Gallon" && measure2 == "Pint") {
            var inputMeasure = document.querySelector("#measureInput");
            var measuredInput = inputMeasure.value;
            measuredInput = parseInt(measuredInput);
            let total = measuredInput * 8;
            return total
        } else if (measure1 === measure2) {
          var inputMeasure = document.querySelector("#measureInput");
          var measuredInput = inputMeasure.value;
          return measuredInput;
        } else if (measure1 == "Gallon" && measure2 == "Fluid Ounces") {
          var inputMeasure = document.querySelector("#measureInput");
          var measuredInput = inputMeasure.value;
          measuredInput = parseInt(measuredInput);
          let total = measuredInput * 128;
          return total
        } else if (measure1 == "Gallon" && measure2 === "Liter") {
          var inputMeasure = document.querySelector("#measureInput");
          var measuredInput = inputMeasure.value;
          measuredInput = parseInt(measuredInput);
          let total = measuredInput * 3.78541;
          return total.toPrecision(10);
        } else if (measure1 == "Gallon" && measure2 == "Milliliter") {
          var inputMeasure = document.querySelector("#measureInput");
          var measuredInput = inputMeasure.value;
          measuredInput = parseInt(measuredInput);
          let total = measuredInput * 3785.41;
          return total.toPrecision(10);
        } else if (measure1 == "Fluid Ounces" && measure2 == "Gallon") {
          var inputMeasure = document.querySelector("#measureInput");
          var measuredInput = inputMeasure.value;
          measuredInput = parseInt(measuredInput);
          let total = measuredInput / 128;
          return total
        } else if (measure1 == "Fluid Ounces" && measure2 == "Pint") {
          var inputMeasure = document.querySelector("#measureInput");
          var measuredInput = inputMeasure.value;
          measuredInput = parseInt(measuredInput);
          let total = measuredInput * 0.0625;
          return total.toPrecision(10);
        } else if (measure1 == "Fluid Ounces" && measure2 == "Liter") {
        var inputMeasure = document.querySelector("#measureInput");
        var measuredInput = inputMeasure.value;
        measuredInput = parseInt(measuredInput);
        let total = measuredInput * 0.0295735;
        return total.toPrecision(10);
        } else if (measure1 == "Fluid Ounces" && measure2 == "Milliliter") {
          var inputMeasure = document.querySelector("#measureInput");
          var measuredInput = inputMeasure.value;
          measuredInput = parseInt(measuredInput);
          let total = measuredInput * 29.5735;
          return total.toPrecision(10);
        } else if (measure1 == "Fluid Ounces" && measure2 == "Cubic Meters") {
          var inputMeasure = document.querySelector("#measureInput");
          var measuredInput = inputMeasure.value;
          measuredInput = parseInt(measuredInput);
          let total = measuredInput * .0000295735;
          return total.toPrecision(10);
        } else if (measure1 == "Fluid Ounces" && measure2 == "Cubic Feet") {
          var inputMeasure = document.querySelector("#measureInput");
          var measuredInput = inputMeasure.value;
          measuredInput = parseInt(measuredInput);
          let total = measuredInput * 0.00104438;
          return total.toPrecision(10);
        } else if (measure1 == "Gallon" && measure2 == "Cubic Feet") {
          var inputMeasure = document.querySelector("#measureInput");
          var measuredInput = inputMeasure.value;
          measuredInput = parseInt(measuredInput);
          let total = measuredInput * 0.133681;
          return total.toPrecision(10);
        } else if (measure1 == "Pint" && measure2 == "Gallon") {
          var inputMeasure = document.querySelector("#measureInput");
            var measuredInput = inputMeasure.value;
            measuredInput = parseInt(measuredInput);
            let total = measuredInput / 8;
            return total;
        } 

         if (measure1 == "Mass" || measure2 == "Mass") {
          let measureElement = document.querySelector("#measure2")
          let measureElement2 = document.querySelector("#measure3")
          measureElement.style.visibility = "hidden";
          measureElement2.style.visibility = "visible";
          measureElement.replaceWith(measureElement2);
          let total = "Please select a mass from the new drop-down";
          return total;
        } 
    }

    function handleConvert() {
        // Call the function and store the result in a variable
      var totalValue = convert();

      // Find the element where you want to display the total
      var totalDisplayElement = document.getElementById("result");

      // If statement to destroy created element if it already exists
      if (totalDisplayElement.firstChild) {
        totalDisplayElement.removeChild(totalDisplayElement.firstChild)
      }

      // Create a new element to display the total
      var totalElement = document.createElement("p");

      // Set the text content of the element to the value of the total variable
      if (Number.isInteger(totalValue)) {
      totalElement.textContent = "Total: " + totalValue;
      } else {
        totalElement.textContent = totalValue;
      }

      // Append the total element to the display element
      totalDisplayElement.appendChild(totalElement);
    }
