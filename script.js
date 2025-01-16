document.addEventListener("DOMContentLoaded", () => {
  // Fade-in effect for the page
  document.body.classList.add("fade-in-page");
  document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector(".introph");
  setTimeout(() => {
    intro.classList.add("visible"); // Add 'visible' class to trigger the fade-in
  }, 500); // Delay for a smooth transition
});


  // Typing animation
  const textElement = document.getElementById("typing-text");
  const text = textElement.innerHTML; // Get the original text
  textElement.innerHTML = ""; // Set initial state to empty
  textElement.style.visibility = "visible"; // Make visible

  let index = 0;
  const typingSpeed = 50; // Typing speed in milliseconds

  const type = () => {
      if (index < text.length) {
          const char = text[index];
          if (char === "\n") {
              textElement.innerHTML += "<br>"; // Convert newline to <br>
          } else {
              textElement.innerHTML += char; // Add the character
          }
          index++;
          setTimeout(type, typingSpeed);
      }
  };

  type();

  // Fade-in effect for vertical text element
  const tateElement = document.querySelector(".tate");
  setTimeout(() => {
      tateElement.classList.add("fade-in");
  }, 500); // 0.5 seconds delay

  // Fade-in effect for specific part of the text
  const itibuElement = document.querySelector(".itibu");
  setTimeout(() => {
      itibuElement.classList.add("fade-in");
  }, 10000); // 7 seconds delay
});

// Scroll event for displaying ambulance boxes
window.addEventListener("scroll", () => {
  const stopPoint = 600;
  const boxes = document.querySelectorAll('.ambulance');

  boxes.forEach((ambulance) => {
      const top = ambulance.getBoundingClientRect().top;
      if (window.scrollY > stopPoint) {
          ambulance.classList.add('show');
      } else {
          ambulance.classList.remove('show');
      }
  });

  // Scroll event for displaying graphs
  const boxes1 = document.querySelectorAll('.graph');

  boxes1.forEach((graph) => {
      const top = graph.getBoundingClientRect().top;
      if (window.scrollY > stopPoint) {
          graph.classList.add('show');
      } else {
          graph.classList.remove('show');
      }
  });
});

// IntersectionObserver for counterplan headings
document.addEventListener("DOMContentLoaded", () => {
  const headings = [
      document.querySelector(".counterplan1-heading"),
      document.querySelector(".counterplan2-heading"),
      document.querySelector(".counterplan3-heading")
  ];

  headings.forEach((heading) => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  heading.classList.add("visible");
              } else {
                  heading.classList.remove("visible");
              }
          });
      });
      observer.observe(heading);
  });
});

// Scroll event for activating summary animation
window.addEventListener("scroll", () => {
  const summary = document.querySelector(".summary");
  const summaryPosition = summary.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  // When the summary element comes into view
  if (summaryPosition < screenHeight) {
      const spans = summary.querySelectorAll("span");
      spans.forEach((span, index) => {
          span.style.setProperty('--index', index); // Set index for animation
          span.classList.add("active"); // Add active class to trigger animation
      });
  }
});
