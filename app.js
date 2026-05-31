// Topic data
const topics = [
  // UNIT 1 – SCOPE OF CARE
  {
    id: "1.0",
    unit: "Unit 1 – Scope of Care",
    title: "Course Introduction",
    type: "intro",
    description: `
This topic orients you to the Sick Call Screener Course (SCSC). You’ll see how the course is organized, what is expected of you as a screener, and how the different systems-based topics in Unit 2 connect back to your scope of care and documentation responsibilities.
    `,
    keyPoints: [
      "Purpose of the Sick Call Screener Course and how it supports operational medicine.",
      "Roles and responsibilities of a sick call screener within the defined scope of care.",
      "How Units 1 and 2 fit together: foundations, systems assessment, and decision-making.",
      "Expectations for professionalism, documentation, and use of red-flag criteria."
    ],
    quiz: [
      {
        question: "What is the primary purpose of the Sick Call Screener Course?",
        options: [
          "To train providers to perform independent advanced procedures",
          "To prepare personnel to safely evaluate common complaints within a defined scope of care",
          "To replace higher-level medical providers in all settings",
          "To focus solely on pharmacology and medication administration"
        ],
        correctIndex: 1,
        explanation:
          "The course prepares you to evaluate common complaints safely within a clearly defined scope—not to replace higher-level providers."
      },
      {
        question: "Which best describes how Unit 1 and Unit 2 relate?",
        options: [
          "Unit 1 is optional; Unit 2 is the only graded portion",
          "Unit 1 covers systems exams; Unit 2 covers ethics and documentation",
          "Unit 1 builds foundations (scope, ethics, SOAP, presentation); Unit 2 applies them to body systems",
          "They are unrelated and can be taken in any order"
        ],
        correctIndex: 2,
        explanation:
          "Unit 1 gives you the framework; Unit 2 applies that framework to specific systems and complaints."
      }
    ],
    scenario: {
      prompt: `
You are beginning the SCSC. A new student asks, “Why do we spend time on scope of care and ethics before learning HEENT and respiratory?”`,
      choices: [
        {
          label: "Explain that understanding limits and responsibilities guides every clinical decision they will make.",
          outcome:
            "Correct emphasis. Clinical skills without a clear scope and ethical framework can lead to unsafe decisions.",
          isOptimal: true
        },
        {
          label: "Tell them it’s just administrative material and the real course starts in Unit 2.",
          outcome:
            "This minimizes critical foundations. It can lead to misunderstanding of authority and risk.",
          isOptimal: false
        },
        {
          label: "Suggest they skip Unit 1 content and focus on memorizing red-flag lists.",
          outcome:
            "Memorizing red flags without context undermines judgment and appropriate escalation.",
          isOptimal: false
        }
      ]
    }
  },
  {
    id: "1.1",
    unit: "Unit 1 – Scope of Care",
    title: "Scope of Care",
    type: "foundational",
    description: `
Scope of care defines what you are trained, authorized, and expected to do as a sick call screener. It sets the boundaries for your assessments, interventions, and decisions about when to manage a complaint at your level and when to escalate or refer.
    `,
    keyPoints: [
      "Scope of care is determined by training, local policy, supervision, and applicable regulations.",
      "You must recognize when a complaint exceeds your scope and requires immediate referral or higher-level care.",
      "Red-flag findings are designed to trigger escalation, not independent management.",
      "Practicing outside your scope can endanger patients and carry legal and professional consequences."
    ],
    quiz: [
      {
        question: "Which factor does NOT typically define your scope of care?",
        options: [
          "Your formal training and competencies",
          "Local command or clinic policies",
          "Supervising provider’s standing orders and guidance",
          "Your personal comfort level with a procedure, regardless of policy"
        ],
        correctIndex: 3,
        explanation:
          "Personal comfort alone does not define scope; it must align with training, policy, and supervision."
      },
      {
        question: "A patient presents with chest pain and shortness of breath. What is your first priority regarding scope of care?",
        options: [
          "Attempt to fully manage the case independently to avoid burdening higher-level care",
          "Recognize this may exceed your scope and activate emergency or higher-level evaluation pathways",
          "Delay escalation until you complete a full written SOAP note",
          "Provide over-the-counter medication and schedule a routine follow-up"
        ],
        correctIndex: 1,
        explanation:
          "Potentially life-threatening complaints must be escalated promptly when they exceed your scope."
      }
    ],
    scenario: {
      prompt: `
You are working sick call when a service member presents with severe abdominal pain, guarding, and fever. You suspect this may be outside your scope of care.`,
      choices: [
        {
          label: "Initiate appropriate immediate measures and notify the supervising provider or higher level of care.",
          outcome:
            "This aligns with scope of care: recognize limits, stabilize as trained, and escalate promptly.",
          isOptimal: true
        },
        {
          label: "Discharge the patient with advice to return if symptoms worsen.",
          outcome:
            "This risks deterioration of a potentially serious condition and ignores red-flag features.",
          isOptimal: false
        },
        {
          label: "Attempt to diagnose and treat definitively based on online resources.",
          outcome:
            "Practicing beyond your scope and training is unsafe and professionally inappropriate.",
          isOptimal: false
        }
      ]
    }
  },

  // UNIT 1 – Ethics, SOAP, Patient Presentation (stubs to be expanded)
  {
    id: "1.2",
    unit: "Unit 1 – Scope of Care",
    title: "Ethics",
    type: "foundational",
    description: `
This topic addresses ethical principles relevant to sick call screening, including respect for persons, confidentiality, informed participation, and integrity in documentation and decision-making.
    `,
    keyPoints: [
      "Maintain patient confidentiality within operational and legal limits.",
      "Avoid conflicts of interest and dual loyalties that compromise patient care.",
      "Document honestly; never alter or falsify findings.",
      "Respect patient dignity, even in sensitive or stigmatized complaints."
    ],
    quiz: [],
    scenario: null
  },
  {
    id: "1.3",
    unit: "Unit 1 – Scope of Care",
    title: "SOAP Note",
    type: "skill",
    description: `
SOAP notes provide a structured way to document patient encounters: Subjective, Objective, Assessment, and Plan. Consistent SOAP documentation supports continuity of care, communication, and medico-legal requirements.
    `,
    keyPoints: [
      "Subjective: chief complaint, history of present illness, relevant review of systems.",
      "Objective: vital signs, focused physical exam, and any point-of-care tests.",
      "Assessment: working diagnosis or differential based on findings.",
      "Plan: treatment, patient education, follow-up, and escalation when indicated."
    ],
    quiz: [],
    scenario: null
  },
  {
    id: "1.4",
    unit: "Unit 1 – Scope of Care",
    title: "Patient Presentation",
    type: "skill",
    description: `
Patient presentation focuses on how you verbally communicate your findings to a supervising provider or higher level of care. It emphasizes concise, organized, and clinically relevant summaries.
    `,
    keyPoints: [
      "Lead with the chief complaint and key red-flag findings.",
      "Organize information logically: brief history, focused exam, and your assessment.",
      "State clearly what you are asking for: advice, orders, or transfer.",
      "Use standardized formats when available to reduce omissions."
    ],
    quiz: [],
    scenario: null
  },

  // UNIT 2 – SICK CALL SCREENER (all topics listed, one fully wired example)
  {
    id: "2.1",
    unit: "Unit 2 – Sick Call Screener",
    title: "Head, Eyes, Ears, Nose & Throat (HEENT)",
    type: "clinical",
    description: `
This topic covers focused HEENT assessment for common sick call complaints such as sore throat, ear pain, sinus symptoms, eye irritation, and headache. You will learn key history questions, exam techniques, and red-flag findings that require escalation.
    `,
    keyPoints: [
      "Clarify onset, duration, severity, associated symptoms (fever, vision changes, neck stiffness, systemic signs).",
      "Perform a systematic HEENT exam: inspection, palpation, otoscopic and oropharyngeal assessment as trained.",
      "Recognize red flags such as airway compromise, visual loss, severe unilateral eye pain, or systemic toxicity.",
      "Differentiate likely benign conditions from those needing urgent referral."
    ],
    quiz: [
      {
        question: "Which HEENT complaint is most concerning and requires urgent escalation?",
        options: [
          "Mild bilateral ear fullness after a flight, no pain or fever",
          "Sore throat for one day, able to swallow fluids, no respiratory distress",
          "Sudden vision loss in one eye with eye pain",
          "Nasal congestion and clear rhinorrhea during allergy season"
        ],
        correctIndex: 2,
        explanation:
          "Acute vision loss with pain is a red flag and should be escalated urgently."
      },
      {
        question: "During HEENT history, which question best screens for airway compromise?",
        options: [
          "“Have you had these symptoms before?”",
          "“Are you having any trouble breathing or swallowing?”",
          "“Do you have any seasonal allergies?”",
          "“Have you taken any over-the-counter medications?”"
        ],
        correctIndex: 1,
        explanation:
          "Breathing and swallowing difficulty are key red-flag symptoms that may indicate airway compromise."
      }
    ],
    scenario: {
      prompt: `
A service member presents with a sore throat and fever. On exam, they are speaking in full sentences, handling secretions, and have erythematous tonsils without stridor or drooling.`,
      choices: [
        {
          label: "Perform a focused HEENT exam, obtain history, and manage within standing orders if no red flags appear.",
          outcome:
            "Appropriate: no immediate airway red flags; proceed with focused assessment and management within scope.",
          isOptimal: true
        },
        {
          label: "Immediately activate emergency response for airway compromise.",
          outcome:
            "This would be premature without signs of airway compromise such as stridor, drooling, or inability to handle secretions.",
          isOptimal: false
        },
        {
          label: "Discharge without exam because sore throats are always benign.",
          outcome:
            "Inadequate; you must still assess for red flags and document appropriately.",
          isOptimal: false
        }
      ]
    }
  },

  // Remaining Unit 2 topics as stubs (ready to be filled out)
  { id: "2.2", unit: "Unit 2 – Sick Call Screener", title: "Respiratory System", type: "clinical", description: "Focused assessment of respiratory complaints, including cough, shortness of breath, and chest symptoms, with emphasis on red-flag findings and escalation criteria.", keyPoints: [], quiz: [], scenario: null },
  { id: "2.3", unit: "Unit 2 – Sick Call Screener", title: "Cardiovascular System", type: "clinical", description: "Evaluation of cardiovascular complaints such as chest pain, palpitations, and syncope, with attention to life-threatening conditions.", keyPoints: [], quiz: [], scenario: null },
  { id: "2.4", unit: "Unit 2 – Sick Call Screener", title: "Gastrointestinal System", type: "clinical", description: "Assessment of abdominal pain, nausea, vomiting, diarrhea, and other GI complaints, including red-flag features.", keyPoints: [], quiz: [], scenario: null },
  { id: "2.5", unit: "Unit 2 – Sick Call Screener", title: "Genitourinary System", type: "clinical", description: "Focused GU history and exam for urinary, genital, and related complaints, with sensitivity and attention to serious pathology.", keyPoints: [], quiz: [], scenario: null },
  { id: "2.6", unit: "Unit 2 – Sick Call Screener", title: "Neurological System", type: "clinical", description: "Evaluation of headaches, dizziness, weakness, and other neurologic symptoms, emphasizing red-flag signs.", keyPoints: [], quiz: [], scenario: null },
  { id: "2.7", unit: "Unit 2 – Sick Call Screener", title: "Musculoskeletal System – Upper Extremities", type: "clinical", description: "Assessment of upper extremity pain and injury, including mechanism, function, and red-flag findings.", keyPoints: [], quiz: [], scenario: null },
  { id: "2.8", unit: "Unit 2 – Sick Call Screener", title: "Musculoskeletal System – Neck and Spine", type: "clinical", description: "Focused evaluation of neck and spine complaints, including trauma, neurologic involvement, and escalation criteria.", keyPoints: [], quiz: [], scenario: null },
  { id: "2.9", unit: "Unit 2 – Sick Call Screener", title: "Musculoskeletal System – Lower Extremities", type: "clinical", description: "Assessment of lower extremity pain and injury, gait, and functional limitations, with attention to serious pathology.", keyPoints: [], quiz: [], scenario: null },
  { id: "2.10", unit: "Unit 2 – Sick Call Screener", title: "Integumentary System", type: "clinical", description: "Evaluation of rashes, wounds, and skin lesions, including infection signs and systemic involvement.", keyPoints: [], quiz: [], scenario: null },
  { id: "2.11", unit: "Unit 2 – Sick Call Screener", title: "Endocrine System", type: "clinical", description: "Recognition of common endocrine-related presentations such as diabetes-related complaints and red-flag metabolic issues.", keyPoints: [], quiz: [], scenario: null },
  { id: "2.12", unit: "Unit 2 – Sick Call Screener", title: "Environmental Illness and Injuries", type: "clinical", description: "Assessment of heat and cold injuries, bites, stings, and other environmental exposures, with emphasis on prevention and escalation.", keyPoints: [], quiz: [], scenario: null },
  { id: "2.13", unit: "Unit 2 – Sick Call Screener", title: "Pharmacology / Medical Therapeutics", type: "foundational", description: "Safe use of medications within standing orders, including indications, contraindications, and patient education.", keyPoints: [], quiz: [], scenario: null }
];

// --- Rendering logic ---

let currentIndex = 0;

const outlineEl = document.getElementById("outline");
const topicMetaEl = document.getElementById("topic-meta");
const topicBodyEl = document.getElementById("topic-body");
const quizContainerEl = document.getElementById("quiz-container");
const scenarioContainerEl = document.getElementById("scenario-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function groupByUnit(data) {
  const map = {};
  data.forEach((t) => {
    if (!map[t.unit]) map[t.unit] = [];
    map[t.unit].push(t);
  });
  return map;
}

function renderOutline() {
  const grouped = groupByUnit(topics);
  outlineEl.innerHTML = "";

  Object.keys(grouped).forEach((unitName) => {
    const unitDiv = document.createElement("div");
    unitDiv.className = "outline-unit";

    const title = document.createElement("div");
    title.className = "outline-unit-title";
    title.textContent = unitName;
    unitDiv.appendChild(title);

    grouped[unitName].forEach((topic) => {
      const topicDiv = document.createElement("div");
      topicDiv.className = "outline-topic";
      topicDiv.dataset.id = topic.id;

      const span = document.createElement("span");
      span.textContent = topic.id;
      topicDiv.appendChild(span);

      const text = document.createTextNode(" " + topic.title);
      topicDiv.appendChild(text);

      topicDiv.addEventListener("click", () => {
        const index = topics.findIndex((t) => t.id === topic.id);
        if (index !== -1) {
          currentIndex = index;
          renderTopic();
        }
      });

      unitDiv.appendChild(topicDiv);
    });

    outlineEl.appendChild(unitDiv);
  });
}

function renderTopic() {
  const topic = topics[currentIndex];

  // Highlight in outline
  document.querySelectorAll(".outline-topic").forEach((el) => {
    el.classList.toggle("active", el.dataset.id === topic.id);
  });

  // Meta
  topicMetaEl.innerHTML = `
    <h2>${topic.id} – ${topic.title}</h2>
    <div class="topic-tag">${topic.unit}</div>
  `;

  // Body
  const keyPointsHtml = topic.keyPoints && topic.keyPoints.length
    ? `
      <h3 class="section-title">Key learning points</h3>
      <ul class="bullet-list">
        ${topic.keyPoints.map((kp) => `<li>${kp}</li>`).join("")}
      </ul>
    `
    : "";

  topicBodyEl.innerHTML = `
    <p class="topic-description">${topic.description}</p>
    ${keyPointsHtml}
  `;

  renderQuiz(topic);
  renderScenario(topic);
  updateNavButtons();
}

function renderQuiz(topic) {
  quizContainerEl.innerHTML = "";
  if (!topic.quiz || !topic.quiz.length) return;

  const title = document.createElement("h3");
  title.className = "section-title";
  title.textContent = "Quick check quiz";
  quizContainerEl.appendChild(title);

  topic.quiz.forEach((q, qIndex) => {
    const qDiv = document.createElement("div");
    qDiv.className = "quiz-question";

    const p = document.createElement("p");
    p.textContent = q.question;
    qDiv.appendChild(p);

    const optionsDiv = document.createElement("div");
    optionsDiv.className = "quiz-options";

    q.options.forEach((opt, optIndex) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `quiz-${topic.id}-${qIndex}`;
      input.value = optIndex;
      label.appendChild(input);
      label.appendChild(document.createTextNode(opt));
      optionsDiv.appendChild(label);
    });

    qDiv.appendChild(optionsDiv);

    const actions = document.createElement("div");
    actions.className = "quiz-actions";

    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = "Check answer";

    const feedback = document.createElement("div");
    feedback.className = "quiz-feedback";

    btn.addEventListener("click", () => {
      const selected = qDiv.querySelector("input[type=radio]:checked");
      if (!selected) {
        feedback.textContent = "Select an answer first.";
        feedback.className = "quiz-feedback";
        return;
      }
      const chosen = parseInt(selected.value, 10);
      if (chosen === q.correctIndex) {
        feedback.textContent = "Correct: " + q.explanation;
        feedback.className = "quiz-feedback correct";
      } else {
        feedback.textContent = "Not quite: " + q.explanation;
        feedback.className = "quiz-feedback incorrect";
      }
    });

    actions.appendChild(btn);
    qDiv.appendChild(actions);
    qDiv.appendChild(feedback);

    quizContainerEl.appendChild(qDiv);
  });
}

function renderScenario(topic) {
  scenarioContainerEl.innerHTML = "";
  if (!topic.scenario) return;

  const title = document.createElement("h3");
  title.className = "section-title";
  title.textContent = "Clinical scenario";
  scenarioContainerEl.appendChild(title);

  const block = document.createElement("div");
  block.className = "scenario-block";

  const prompt = document.createElement("p");
  prompt.textContent = topic.scenario.prompt.trim();
  block.appendChild(prompt);

  const choicesDiv = document.createElement("div");
  choicesDiv.className = "scenario-choices";

  const outcomeDiv = document.createElement("div");
  outcomeDiv.className = "scenario-outcome";

  topic.scenario.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.textContent = choice.label;
    btn.addEventListener("click", () => {
      outcomeDiv.textContent = choice.outcome;
      outcomeDiv.style.color = choice.isOptimal ? "var(--success)" : "var(--muted)";
    });
    choicesDiv.appendChild(btn);
  });

  block.appendChild(choicesDiv);
  block.appendChild(outcomeDiv);
  scenarioContainerEl.appendChild(block);
}

function updateNavButtons() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === topics.length - 1;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderTopic();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < topics.length - 1) {
    currentIndex++;
    renderTopic();
  }
});

// Init
renderOutline();
renderTopic();
