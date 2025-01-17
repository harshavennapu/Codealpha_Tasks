document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const dobInput = document.getElementById('dob').value;
    if (!dobInput) {
      document.getElementById('result').textContent = "Please enter your date of birth.";
      return;
    }
  
    const dob = new Date(dobInput);
    const today = new Date();
  
    // Calculate age
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();
  
    // Adjust for month and day differences
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    document.getElementById('result').textContent = `Your age is ${age} years.`;
  });
  