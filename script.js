document.addEventListener("DOMContentLoaded", function () {
  function showSolution(exerciseId) {
    const solutionDiv = document.getElementById(`solution${exerciseId}`);
    solutionDiv.style.display =
      solutionDiv.style.display === "none" ? "block" : "none";
  }

  // Attach click event handlers
  document
    .getElementById("exercise1-btn")
    .addEventListener("click", function () {
      showSolution("exercise1");
    });

  document
    .getElementById("exercise2-btn")
    .addEventListener("click", function () {
      showSolution("exercise2");
    });

  document
    .getElementById("exercise3-btn")
    .addEventListener("click", function () {
      showSolution("exercise3");
    });
});
