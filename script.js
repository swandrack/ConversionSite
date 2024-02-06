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
            var total = measuredInput * 8;
            return(total)
        } else {
            return(":(")
        }
      }