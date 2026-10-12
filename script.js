// Quiz Questions Data
const questions = [
  // --- PART 1: POA DISCOVERY ---
  {
    part: 1,
    question: "Q1\nPOA stands for Principles of Accounts. Which of the following best describes what you will learn in POA?",
    options: [
      "A. Recording and analysing the financial transactions of a business",
      "B. Planning how a business should advertise its products",
      "C. Learning how businesses hire and manage employees",
      "D. Studying how businesses design and develop new products"
    ],
    answer: 0,
    explanation: "Correct! POA focuses on recording, analyzing, and summarizing financial transactions to help businesses make decisions."
  },
  {
    part: 1,
    question: "Q2\nA student starts a small business selling handmade keychains. During the month, she sells 20 keychains at $5 each. Which statement best describes the $100 earned?",
    options: [
      "A. It is an asset of the business earned from selling goods.",
      "B. It is profit earned from the main business activity.",
      "C. It is revenue earned from the main business activity.",
      "D. It is an expense incurred from the main business activity."
    ],
    answer: 2,
    explanation: "Correct! Revenue is the total amounts earned from the main business activities before deducting costs."
  },
  {
    part: 1,
    question: "Q3\nA business sells customised phone cases. During the month, the business pays $200 for packaging materials used for its orders. How should the $200 be classified?",
    options: [
      "A. Revenue",
      "B. Expense",
      "C. Profit",
      "D. Capital"
    ],
    answer: 1,
    explanation: "Correct! Expenses are costs incurred in operating the business to generate revenue."
  },
  {
    part: 1,
    question: "Q4\nA business owns a laptop costing $1,500, which is used by its staff to carry out business activities. Which statement about the laptop is correct?",
    options: [
      "A. It is an asset because it is a resource owned by the business that has economic value.",
      "B. It is an expense because the business paid money to purchase it.",
      "C. It is revenue because the laptop contributes to the business earning income.",
      "D. It is profit because the laptop provides benefits to the business."
    ],
    answer: 0,
    explanation: "Correct! An asset is a resource owned or controlled by a business that holds future economic value."
  },
  {
    part: 1,
    question: "Q5\nProfit is calculated as revenue – cost for the period. A business earns $800 revenue from selling its products. Its expenses for the period are $500. What is the profit?",
    options: [
      "A. $100",
      "B. $300",
      "C. $800",
      "D. $1,300"
    ],
    answer: 1,
    explanation: "Correct! $800 (Revenue) - $500 (Expenses) = $300 Profit."
  },
  {
    part: 1,
    question: "Q6\nProfit is calculated as revenue – cost for the period. A small business earns $2,500 in revenue from selling its products. Its expenses are $1,600. What is the profit for the month?",
    options: [
      "A. $4,100",
      "B. $1,600",
      "C. $2,500",
      "D. $900"
    ],
    answer: 3,
    explanation: "Correct! $2,500 (Revenue) - $1,600 (Expenses) = $900 Profit."
  },
  {
    part: 1,
    question: "Q7\nAn accountant notices that a transaction was recorded as $580, but the receipt shows $850. What should the accountant do?",
    options: [
      "A. Leave it as $580 because the transaction has already been recorded",
      "B. Change the amount to $850 after checking the receipt",
      "C. Ask someone else to decide which amount should be recorded",
      "D. Ignore the difference because it is only one transaction"
    ],
    answer: 1,
    explanation: "Correct! Accounting records must accurately reflect source documents (like receipts) to maintain financial integrity."
  },
  {
    part: 1,
    question: "Q8\nAsset = something valuable that the business owns or controls and can use in the business.
Examples: cash, laptop, vehicle
Liability = an amount that the business owes to others.
Examples: bank loan, amount owed to a supplier

Question:
A business buys a laptop using a bank loan. Which statement is correct?",
    options: [
      "A. The laptop is a liability because the business has to pay for it.",
      "B. The bank loan is an asset because the business received money.",
      "C. The laptop is an asset and the bank loan is a liability.",
      "D. Both the laptop and bank loan are assets."
    ],
    answer: 2,
    explanation: "Correct! The laptop is a valuable resource owned/controlled by the business (Asset), while the bank loan is an amount owed to the bank (Liability)."
  },
  {
    part: 1,
    question: "Q9\nAssets refer to resources a business owns, while liabilities refer to what the business owes to others. Which of the following is a liability?",
    options: [
      "A. Cash at bank",
      "B. Machinery",
      "C. Loan from bank",
      "D. Rent expense"
    ],
    answer: 2,
    explanation: "Correct! A bank loan is an obligation owed to an external party, making it a liability."
  },
  {
    part: 1,
    question: "Q10\nStakeholders are groups of people who use business information to make decisions. Which group is an example of a stakeholder for business in Singapore?",
    options: [
      "A. Managers",
      "B. Employees",
      "C. Foreign government agencies",
      "D. Customers"
    ],
    answer: 2,
    explanation: "Correct! External regulators and agencies rely on accounting reports to verify compliance."
  },
  {
    part: 1,
    question: "Q11\nBusinesses should always assume the best-case scenario when recording down accounting information.",
    options: [
      "A. True",
      "B. False"
    ],
    answer: 1,
    explanation: "Correct! Accounting requires prudence and objectivity rather than overly optimistic assumptions."
  },
  {
    part: 1,
    question: "Q12\nBusinesses should only care about profit and loss when making decisions.",
    options: [
      "A. True",
      "B. False"
    ],
    answer: 1,
    explanation: "Correct! Businesses must also consider liquidity, ethics, and long-term sustainability."
  },
  {
    part: 1,
    question: "Q13\nWhat is inventory?",
    options: [
      "A. The physical goods a business buys to sell to its customers",
      "B. The money a business owes to its suppliers",
      "C. The cash collected from daily sales",
      "D. The monthly bills paid to keep the shop running"
    ],
    answer: 0,
    explanation: "Correct! Inventory consists of goods held by a business intended for resale."
  },
  {
    part: 1,
    question: "Q14\nWhat should a business do when they realise their goods are damaged?",
    options: [
      "A. Pretend the goods are not damaged and continue selling them",
      "B. Increase the selling price to cover the cost of damaged goods",
      "C. Record the damaged goods as a loss to the business",
      "D. Throw the goods away without any recording"
    ],
    answer: 2,
    explanation: "Correct! Loss of damaged inventory must be accurately recorded in financial statements."
  },
  {
    part: 1,
    question: "Q15\nWhich of the following is classified as an Expense?",
    options: [
      "A. Purchase of a delivery truck for business use",
      "B. Cash received from a customer settling a debt",
      "C. Monthly rent paid for the retail shop premises",
      "D. Bank loan borrowed to start the business"
    ],
    answer: 2,
    explanation: "Correct! Rent is an operational expense incurred during business operations."
  },

  // --- PART 2: GET TO KNOW YOU ---
  {
    part: 2,
    question: "Q16 — Group Project\nYour group project is due tomorrow and your group has barely started. What do you do?",
    options: [
      "A. Make a plan and divide the work.",
      "B. Start doing whatever needs to be done immediately.",
      "C. Ask everyone what they think before deciding what to do.",
      "D. Don't worry guys, we still have time. 😎"
    ]
  },
  {
    part: 2,
    question: "Q17 — The $5 Mystery\nYou find $5 on the classroom floor. What's your first thought?",
    options: [
      "A. Whose is this?",
      "B. Hmm... what should I do with this? 👀",
      "C. I should probably hand it to the teacher.",
      "D. FREE MONEY! 😭"
    ]
  },
  {
    part: 2,
    question: "Q18 — Choose Your Study Desk\nPick your ideal study desk:",
    options: [
      "A. Everything neatly arranged and easy to find.",
      "B. Laptop, calculator, stationery and snacks ready to go.",
      "C. Colourful stationery, notes and random interesting things everywhere.",
      "D. One small clear space amongst complete chaos. 😂"
    ]
  },
  {
    part: 2,
    question: "Q19 — Test Tomorrow\nYou have a test tomorrow. What best describes you?",
    options: [
      "A. I like to start early so I don't have to rush.",
      "B. I make a plan, but I don't always stick to it.",
      "C. I usually study when I feel I'm ready to focus.",
      "D. Somehow, my brain becomes extremely productive the night before."
    ]
  },
  {
    part: 2,
    question: "Q20 — Ethics\nYou are hiring a chief accountant for your bubble tea shop. What is the single most non-negotiable trait you look for?",
    options: [
      "A. They strictly tell the truth on financial records, even if the business had a bad month.",
      "B. They make decisions based on clear evidence and facts, not personal feelings or favoritism.",
      "C. They focus 100% on making as much profit as possible, no matter what rules they cut.",
      "D. They finish balance sheets at lightning speed, even if they skip double-checking."
    ]
  },
  {
    part: 2,
    question: "Q21 — Ethics\nYour business partner wants to hide $5,000 of profit from tax auditors to pay less tax and split extra cash. What's your move?",
    options: [
      "A. Immediately kick him out of the business.",
      "B. Report him to the relevant authorities.",
      "C. Talk him out of it.",
      "D. Consider it if no one finds out! 🤫"
    ]
  },
  {
    part: 2,
    question: "Q22 — Evaluate\nWhich of these sounds most like your reaction when deciding whether to take POA?",
    options: [
      "A. Sign me up right now!",
      "B. I'm curious, tell me more...",
      "C. I'll take it if my friends take it!",
      "D. Numbers give me a headache... but I like money!"
    ]
  }
];

const characters = {
  A: {
    title: "The Strategic Owl 🦉",
    emoji: "🦉",
    desc: "Methodical, organized, and super trustworthy! You like order, clear rules, and preparing early. You'll likely excel at keeping POA ledgers perfectly balanced!"
  },
  B: {
    title: "The Energetic Cheetah 🐆",
    emoji: "🐆",
    desc: "Action-oriented and fast! You jump right into tasks and adapt on the go. In POA, your speedy calculations and quick decision-making will be your superpower!"
  },
  C: {
    title: "The Friendly Dolphin 🐬",
    emoji: "🐬",
    desc: "Collaborative, empathetic, and communicative! You value teamwork and social connection. You'll be the group partner everyone wants in business class!"
  },
  D: {
    title: "The Chill Capybara 🦫",
    emoji: "🦫",
    desc: "Cool, calm, and collected under pressure! Even when deadlines loom, you keep your composure. Your relaxed mindset keeps stress low when crunching big numbers!"
  }
};

let currentQuestionIndex = 0;
let score = 0;
let personalityScores = { A: 0, B: 0, C: 0, D: 0 };

window.addEventListener("DOMContentLoaded", () => {
  const startCard = document.getElementById("start-card");
  const quizCard = document.getElementById("quiz-card");
  const resultCard = document.getElementById("result-card");

  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");

  const progressBar = document.getElementById("progress-bar");
  const partTag = document.getElementById("part-tag");
  const questionCount = document.getElementById("question-count");
  const scoreTracker = document.getElementById("score-tracker");

  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const feedbackBox = document.getElementById("feedback-box");
  const feedbackMessage = document.getElementById("feedback-message");

  if (startBtn) startBtn.addEventListener("click", startQuiz);
  if (nextBtn) nextBtn.addEventListener("click", handleNextQuestion);
  if (restartBtn) restartBtn.addEventListener("click", resetQuiz);

  function startQuiz() {
    startCard.classList.add("hidden");
    quizCard.classList.remove("hidden");
    loadQuestion();
  }

  function loadQuestion() {
    const currentQ = questions[currentQuestionIndex];
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    questionCount.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    
    if (currentQ.part === 1) {
      partTag.textContent = "PART 1: POA DISCOVERY";
      scoreTracker.style.display = "inline";
    } else {
      partTag.textContent = "PART 2: GET TO KNOW YOU 🎀";
      scoreTracker.style.display = "none";
    }

    questionText.innerText = currentQ.question;
    optionsContainer.innerHTML = "";
    feedbackBox.classList.add("hidden");

    currentQ.options.forEach((optText, index) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerText = optText;
      btn.addEventListener("click", () => selectOption(index));
      optionsContainer.appendChild(btn);
    });
  }

  function selectOption(selectedIndex) {
    const currentQ = questions[currentQuestionIndex];
    const optionButtons = optionsContainer.querySelectorAll(".option-btn");

    optionButtons.forEach(btn => btn.disabled = true);

    if (currentQ.part === 1) {
      if (selectedIndex === currentQ.answer) {
        score++;
        scoreTracker.textContent = `Score: ${score}`;
        optionButtons[selectedIndex].classList.add("selected-correct");
        feedbackBox.className = "feedback-box correct";
        feedbackMessage.innerHTML = `✨ <strong>Correct!</strong> ${currentQ.explanation}`;
      } else {
        optionButtons[selectedIndex].classList.add("selected-wrong");
        optionButtons[currentQ.answer].classList.add("selected-correct");
        feedbackBox.className = "feedback-box wrong";
        feedbackMessage.innerHTML = `❌ <strong>Not quite!</strong> ${currentQ.explanation}`;
      }
    } else {
      const choiceKey = ["A", "B", "C", "D"][selectedIndex];
      if (choiceKey) personalityScores[choiceKey]++;

      optionButtons[selectedIndex].classList.add("selected-correct");
      feedbackBox.className = "feedback-box neutral";
      feedbackMessage.innerHTML = `💡 Great choice! Let's see what this says about you...`;
    }

    feedbackBox.classList.remove("hidden");
  }

  function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
    quizCard.classList.add("hidden");
    resultCard.classList.remove("hidden");

    document.getElementById("final-score").textContent = score;

    let maxCount = -1;
    let dominantChar = "A";

    for (const [key, count] of Object.entries(personalityScores)) {
      if (count > maxCount) {
        maxCount = count;
        dominantChar = key;
      }
    }

    const resultData = characters[dominantChar] || characters["A"];
    document.getElementById("character-emoji").textContent = resultData.emoji;
    document.getElementById("character-title").textContent = resultData.title;
    document.getElementById("character-desc").textContent = resultData.desc;
  }

  function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    personalityScores = { A: 0, B: 0, C: 0, D: 0 };
    scoreTracker.textContent = `Score: 0`;
    resultCard.classList.add("hidden");
    startCard.classList.remove("hidden");
  }
});
