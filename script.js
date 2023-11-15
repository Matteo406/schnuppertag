function showSolution(exerciseId, solutionId) {
  console.log("showSolution(" + exerciseId + ", " + solutionId + ")");
  const solutionDiv = document.getElementById(exerciseId);
  solutionDiv.style.display =
    solutionDiv.style.display === "none" ? "block" : "none";
}
