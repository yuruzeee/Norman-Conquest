document.addEventListener("DOMContentLoaded", function () {
  const quizForm = document.getElementById("quiz-form");
  const result = document.getElementById("quiz-result");

  quizForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let score = 0;
    let explanations = "";

    const answers = {
      q1: "b",
      q2: "c",
      q3: "a",
      q4: "c",
      q5: "a"
    };

    const explanationsData = {
      q1: "William the Conqueror menjadi Raja Inggris setelah menang di Pertempuran Hastings.",
      q2: "Pertempuran Hastings terjadi pada tahun 1066, tahun yang sangat penting dalam sejarah Inggris.",
      q3: "Bahasa Prancis dari kaum Norman memperkaya kosa kata bahasa Inggris modern.",
      q4: "Harold Godwinson gugur dalam Pertempuran Hastings, memungkinkan William naik takhta.",
      q5: "William merasa berhak atas takhta karena dia adalah sepupu Raja Edward dan mengklaim janji takhta."
    };

    for (const q in answers) {
      const userAnswer = quizForm.elements[q].value;
      if (userAnswer === answers[q]) {
        score++;
        explanations += `✔️ Soal ${q.slice(1)} benar. ${explanationsData[q]}<br>`;
      } else {
        explanations += `❌ Soal ${q.slice(1)} salah. ${explanationsData[q]}<br>`;
      }
    }

    result.innerHTML = `<strong>Skor kamu: ${score}/5</strong><br><br>${explanations}`;
    result.style.color = "black";
  });
});
