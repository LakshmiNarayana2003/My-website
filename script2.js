// Typewriter effect for terminal text
const text = `// ERROR

ONLY NANI CAN ESCAPE THE MATRIX

IF YOU WANT TO ESCAPE THE MATRIX TAKE THE ...

THIS IS YOUR LAST CHANCE. AFTER THIS, THERE IS NO TURNING BACK.


YOU TAKE THE BLUE PILL - >

          THE STORY ENDS, YOU WAKE UP IN YOUR BED AND BELIEVE WHATEVER YOU WANT TO BELIEVE...

          
YOU TAKE THE RED PILL - >

        YOU STAY IN WONDERLAND AND I SHOW YOU HOW DEEP THE RABBIT HOLE GOES...`;

let i = 0;
const speed = 40; // Adjust the speed of typing (in milliseconds)

function typeWriter() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Execute typewriter effect when window loads
document.addEventListener('DOMContentLoaded', function() {
    typeWriter();
    // Add class 'blink' to the cursor after typing starts
    document.getElementById("text").classList.add("blink");

    // Functionality for button clicks
    document.getElementById("button1").onclick = function() {
        window.location.href = "https://github.com/LakshmiNarayana2003";
    };

    document.getElementById("button2").onclick = function() {
        window.location.href = "https://www.linkedin.com/in/lakshmi-narayana-m-g-41072b240/";
    };

    document.getElementById("button3").onclick = function() {
        window.location.href = "https://x.com/nani560074?s=21";
    };
});
