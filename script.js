function showSolution(exerciseId) {
  console.log("exerciseId", exerciseId);
  const solutionDiv = document.getElementById(`solution${exerciseId}`);
  solutionDiv.style.display =
    solutionDiv.style.display === "none" ? "block" : "none";
}
