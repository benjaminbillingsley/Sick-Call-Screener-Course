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
// Back to Top Button Logic
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
