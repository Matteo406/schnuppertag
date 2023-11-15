function showSolution(exerciseId) {
  console.log("exerciseId", exerciseId);
  const solutionDiv = document.getElementById(`solution${exerciseId}`);
    
    // console.log("solutionDiv", solutionDiv);
  solutionDiv?.style.display =
    solutionDiv.style.display === "none" ? "block" : "none";
}
