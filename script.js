//Navigation Bar
let prevScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");

  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      navbar.style.top = "20px"; // Show navbar
    } else {
      navbar.style.top = "-100px"; // Hide navbar
    }
    prevScrollPos = currentScrollPos;
};

//Rotating text
  const textArray = ["Hi there!", "I’m Tamara Kuku.", "I’m a Software Engineer.", "Below is my Portfolio!"];
  let textIndex = 0;
  let charIndex = 0;
  const speed = 100; // typing speed
  const delay = 1500; // delay between texts
  const target = document.getElementById("rotating-text");

  function type() {
    if (charIndex < textArray[textIndex].length) {
      target.textContent += textArray[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, speed);
    } else {
      setTimeout(erase, delay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      target.textContent = textArray[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, speed / 2);
    } else {
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(type, speed);
    }
  }

  const stackRow1 = [
    {
      image: 'html',
      name: 'HTML'
    },
    {
      image: 'css',
      name: 'CSS'
    },
    {
      image: 'javascript',
      name: 'JavaScript'
    },
    {
      image: 'python',
      name: 'Python'
    },
    {
      image: 'react',
      name: 'ReactJS'
    },
    {
      image: 'Flutter',
      name: 'Flutter'
    },
    
  ];

  const stackRow2 = [
    {
      image: 'c',
      name: 'C'
    },
    {
      image: 'sql',
      name: 'SQL',

    },
    {
      image: 'java',
      name: 'Java'
    },
    {
      image: 'nodejs',
      name: 'NodeJS'
    }
  ]

  let stackList = '';

  stackRow1.forEach((value, index) => {
    
      stackList += `
      <div class="stack">
          <img src="${value.image}.png" alt="${value.name}" class="icon">
          <p>${value.name}</p>
      </div>
    `

  });

  document.querySelector('.js-row1').innerHTML = stackList;

  let stackList2 = '';

  stackRow2.forEach((value, index) => {
    
      stackList2 += `
      <div class="stack">
          <img src="${value.image}.png" alt="${value.name}" class="icon">
          <p>${value.name}</p>
      </div>
    `

  });

  document.querySelector('.js-row2').innerHTML = stackList2;


  document.addEventListener("DOMContentLoaded", type);


