//Create a section to show which song is going on
 // Get references to the image and the hidden section
 var Show_TS_1 = document.getElementById('Show_TS_1');
            var Hidden_TS_1 = document.getElementById('Hidden_TS_1');
          
            // Add a click event listener to the button
            Show_TS_1.addEventListener('click', function() {
              // Check the current display style of the hidden section
              var currentDisplayStyle = window.getComputedStyle(Hidden_TS_1).display;
          
              // Toggle the visibility based on the current state
              if (currentDisplayStyle === 'none') {
                Hidden_TS_1.style.display = 'block'; // Show the section
              } 
            });