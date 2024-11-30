document.getElementById("enroll-btn").addEventListener("click", function () {
    // Show the form
    const form = document.getElementById("membership-form");
    form.classList.remove("hidden");
  });


  document.addEventListener('DOMContentLoaded', () => {
  // Select the elements
  const viewHistoryBtn = document.getElementById('view-history-btn');
  const membershipHistory = document.getElementById('membership-history');
  const closeHistoryBtn = document.getElementById('close-history-btn');

  // Show the membership history when the button is clicked
  viewHistoryBtn.addEventListener('click', () => {
    membershipHistory.classList.remove('hidden'); // Remove the hidden class to display the table
  });

  // Hide the membership history when the close button is clicked
  closeHistoryBtn.addEventListener('click', () => {
    membershipHistory.classList.add('hidden'); // Add the hidden class to hide the table
  });
});

  