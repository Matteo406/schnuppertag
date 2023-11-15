function showSolution(exerciseId) {
  const solutionDiv = document.getElementById(`solution${exerciseId}`);
  solutionDiv.style.display =
    solutionDiv.style.display === "none" ? "block" : "none";
}
