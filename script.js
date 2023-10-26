document.addEventListener("DOMContentLoaded", function() {
    const showFormButton = document.getElementById("showFormButton");
    const showSecondFormButton = document.getElementById("showSecondFormButton");
    const detailsForm = document.getElementById("detailsForm");
    const secondForm = document.getElementById("secondForm");
    const submittedDetails = document.getElementById("submittedDetails");
    const submittedText = document.getElementById("submittedText");
    const secondFormContainer = document.getElementById("secondFormContainer");
  
    showFormButton.addEventListener("click", function() {
      detailsForm.classList.remove("hidden");
      showFormButton.classList.add("hidden");
    });
  
    showSecondFormButton.addEventListener("click", function() {
      secondFormContainer.classList.remove("hidden");
      showSecondFormButton.classList.add("hidden");
    });
  
    // Event listener for the second form
    secondForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      const field5Input = document.getElementById("field5").value;
      const field6Input = document.getElementById("field6").value;
  
      // Process and display the second form data
      const submittedTextContent = `
        Field 5: ${field5Input}<br>
        Field 6: ${field6Input}
      `;
  
      submittedText.innerHTML = "Details submitted:<br>" + submittedTextContent;
  
      submittedDetails.classList.remove("hidden");
      secondFormContainer.classList.add("hidden");
    });
  });
  