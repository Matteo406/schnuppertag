function showSolution(exerciseId, solutionId) {
  console.log("showSolution(" + exerciseId + ", " + solutionId + ")");
  const solutionDiv = document.getElementById(solutionId);
  solutionDiv.style.display =
    solutionDiv.style.display === "none" ? "block" : "none";
}
