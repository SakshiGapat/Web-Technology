document.addEventListener("DOMContentLoaded", () => {
    const shopBtn = document.querySelector(".shop-btn");
    const flowerCards = document.querySelectorAll(".flower-card");
  
    // Show greeting alert on Shop Now button click
    shopBtn.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent redirect
      alert("Welcome to our online flower shop! Explore our best blooms.");
    });
  
    // Add hover effect to flower cards using JS (optional)
    flowerCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
      });
  
      card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
      });
  
      // On click, show simple popup with flower name
      card.addEventListener("click", () => {
        const flowerName = card.querySelector("h4").innerText;
        alert(`You clicked on "${flowerName}". Add to cart coming soon!`);
      });
    });
  });