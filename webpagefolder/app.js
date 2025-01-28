document.addEventListener("DOMContentLoaded", () => {
    // Registration form handling
    const registrationForm = document.getElementById("registration-form");
    const emailVerificationDiv = document.getElementById("email-verification");
    const emailInput = registrationForm.querySelector("input[type=email]");
  
    registrationForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Show email verification
      emailVerificationDiv.classList.remove("hidden");
    });
  
    // Organization setup form handling
    const orgForm = document.getElementById("org-form");
    const companyWebsiteInput = document.getElementById("website-url");
    const fetchDescriptionButton = document.getElementById("fetch-description");
  
    fetchDescriptionButton.addEventListener("click", () => {
      const websiteURL = companyWebsiteInput.value;
      // Simulate fetching meta-description from the website
      const metaDescription = "This is a dummy meta-description fetched from the website.";
      const companyDescriptionTextarea = document.getElementById("company-description");
      companyDescriptionTextarea.value = metaDescription;
    });
  
    // Dummy scraped webpages data
    const scrapedData = [
      { name: "Homepage", status: "scraped" },
      { name: "About Us", status: "pending" },
      { name: "Contact", status: "scraped" },
    ];
  
    const webpagesList = document.getElementById("webpages-list");
    scrapedData.forEach((page) => {
      const li = document.createElement("li");
      li.classList.add(page.status);
      li.textContent = page.name;
      li.addEventListener("click", () => alert(`Viewing scraped data for: ${page.name}`));
      webpagesList.appendChild(li);
    });
  
    // Chatbot integration and testing buttons
    const testChatbotButton = document.getElementById("test-chatbot");
    const integrateChatbotButton = document.getElementById("integrate-chatbot");
    const testIntegrationButton = document.getElementById("test-integration");
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");
  
    testChatbotButton.addEventListener("click", () => {
      alert("Opening client’s website with a dummy chatbot...");
    });
  
    integrateChatbotButton.addEventListener("click", () => {
      alert("Showing integration instructions...");
    });
  
    testIntegrationButton.addEventListener("click", () => {
      const isSuccess = Math.random() > 0.5; // Simulate success/failure
      if (isSuccess) {
        successMessage.classList.remove("hidden");
        errorMessage.classList.add("hidden");
      } else {
        errorMessage.classList.remove("hidden");
        successMessage.classList.add("hidden");
      }
    });
  });
  