function showSolution(exerciseId, solutionId) {
  console.log("showSolution(" + exerciseId + ", " + solutionId + ")");
  //get last character of exerciseId
  const exerciseNumber = exerciseId[exerciseId.length - 1];
  console.log("exerciseNumber: " + exerciseNumber);
  const solutionDiv = document.getElementById("solution" + exerciseNumber);
  solutionDiv.style.display =
    solutionDiv.style.display === "none" ? "block" : "none";
}
function goToSubpage(subpageUrl) {
  window.location.href = subpageUrl;
}
