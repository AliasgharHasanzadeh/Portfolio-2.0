const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');
const container = document.querySelector('.container')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
}); 
// console.log(container)
async function updateMyWork() {
    try {
      const res = await fetch('https://myproject.majid-samurai2006.workers.dev/');
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      data.forEach(item => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
          <img src="${item.img}">
          <h1>${item.title}</h1>
          <p>${item.description}</p>
          <p>${item.tech}</p>
          <a href="${item.link}" target="_blank">
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        `;
        container.appendChild(newDiv);
      });
      
    } catch (error) {
      console.error('Error fetching or processing data:', error);
    }
  }
  
updateMyWork()