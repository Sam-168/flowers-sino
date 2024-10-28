onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  document.addEventListener("DOMContentLoaded", () => {
    const message = document.getElementById("sino-message");
    const flowers = document.querySelector(".flowers");
  
   
    message.style.opacity = "1";
  
    
    setTimeout(() => {
      message.style.opacity = "0"; // Fade out message
    }, 1000); // 2 seconds
  
    
    setTimeout(() => {
      message.style.display = "none"; 
      flowers.classList.add("show"); 
    }, 1000); 
  });
  