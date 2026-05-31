document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submit-quiz");
  const resultEl = document.getElementById("quiz-result");

  submitBtn.addEventListener("click", () => {
    const questions = document.querySelectorAll(".quiz-question");
    let correct = 0;

    questions.forEach((q, index) => {
      const correctIndex = parseInt(q.dataset.correct);
      const selected = q.querySelector(`input[name="q${index + 1}"]:checked`);

      if (selected && parseInt(selected.value) === correctIndex) {
        correct++;
        q.classList.add("correct-glow");
      } else {
        q.classList.add("incorrect-glow");
      }
    });

    resultEl.textContent = `You scored ${correct} / ${questions.length}`;
  });
});
