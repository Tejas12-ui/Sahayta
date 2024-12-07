const modal = document.getElementById('service-modal');
const closeModal = document.querySelector('.close-btn');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

const serviceDetails = {
  "website-development": {
    title: "Website Development",
    description: "We create fast, responsive, and SEO-friendly websites designed for optimal user experience."
  },
  "social-media": {
    title: "Social Media Management",
    description: "Leverage AI-driven strategies to boost your engagement and manage social platforms effectively."
  },
  "seo": {
    title: "SEO Optimization",
    description: "Enhance your search engine rankings and drive organic traffic using AI-powered insights."
  },
  "advertising": {
    title: "Digital Advertising",
    description: "Maximize ROI with AI-enhanced ad targeting and analytics."
  }
};

document.querySelectorAll('.learn-more').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const service = e.target.dataset.service;
    modalTitle.textContent = serviceDetails[service].title;
    modalDescription.textContent = serviceDetails[service].description;
    modal.style.display = 'block';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
