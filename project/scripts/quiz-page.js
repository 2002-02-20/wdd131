function checkAnswers() {
  const correctAnswers = {
    q1: "b",
    q2: "b",
    q3: "a",
    q4: "b",
    q5: "b",
    q6: "a",
    q7: "b",
    q8: "b",
    q9: "b",
    q10: "c",
  };

  let score = 0;
  const total = Object.keys(correctAnswers).length;


  for (let key in correctAnswers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === correctAnswers[key]) {
      score++;
    }
  }


  const scoreSpan = document.getElementById("score-quiz");
  scoreSpan.textContent = `Score: ${score}/${total}`;


  localStorage.setItem("quizScore", JSON.stringify({ score, total }));


  window.scrollTo({ top: 0, behavior: "smooth" });
}