// Function to load content dynamically
function loadPage(pageName) {
    fetch(`${pageName}.html`)
      .then(response => response.text())
      .then(html => {
        document.getElementById('content').innerHTML = html;
        if (pageName === 'goals') {
          initGoalsPage();
        } else if (pageName === 'workoutTracker') {
          initWorkoutTrackerPage();
        }
      });
  }
  
  // Initialize goals page
  function initGoalsPage() {
    // Logic to handle goals page
    const confirmButton = document.getElementById('confirmButton');
    const checkboxes = document.querySelectorAll('.goal-checkbox');
  
    confirmButton.addEventListener('click', () => {
      let allChecked = true;
      checkboxes.forEach(checkbox => {
        if (!checkbox.checked) {
          allChecked = false;
        }
      });
      if (allChecked) {
        loadPage('workoutTracker');
      } else {
        alert('Please check all the checkboxes to continue.');
      }
    });
  }
  
  // Initialize workout tracker page
  function initWorkoutTrackerPage() {
    // Logic to handle workout tracker page
  }
  
  // Load initial page
  loadPage('skip1');
  