document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submit-quiz");
  const resultEl = document.getElementById("quiz-result");

  if (!submitBtn) return;

  submitBtn.addEventListener("click", () => {
    const questions = document.querySelectorAll(".quiz-question");
    let correct = 0;
    let total = questions.length;

    questions.forEach((q, index) => {
      const correctIndex = parseInt(q.getAttribute("data-correct"), 10);
      const name = "q" + (index + 1);
      const selected = q.querySelector(`input[name="${name}"]:checked`);

      if (!selected) return;

      const chosen = parseInt(selected.value, 10);
      if (chosen === correctIndex) {
        correct++;
      }
    });

    resultEl.textContent = `You answered ${correct} out of ${total} correctly.`;
  });
});
