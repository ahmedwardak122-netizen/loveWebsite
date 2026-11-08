/* =================================
   PASSWORD SYSTEM
================================= */

const lockScreen = document.getElementById("lockScreen");

const passwordInput = document.getElementById("passwordInput");

const unlockBtn = document.getElementById("unlockBtn");

const passwordMessage = document.getElementById("passwordMessage");

/* CHANGE PASSWORD ELEMENTS */

const passwordModal = document.getElementById("passwordModal");

const changePasswordBtn = document.getElementById("changePasswordBtn");

const closePasswordModal = document.getElementById("closePasswordModal");

const currentPassword = document.getElementById("currentPassword");

const newPassword = document.getElementById("newPassword");

const confirmPassword = document.getElementById("confirmPassword");

const savePasswordBtn = document.getElementById("savePasswordBtn");

const changePasswordMessage = document.getElementById("changePasswordMessage");

/* =================================
   CREATE FIRST PASSWORD
================================= */

let savedPassword = localStorage.getItem("loveWebsitePassword");

if (!savedPassword) {
  savedPassword = "28-06-2002";

  localStorage.setItem("loveWebsitePassword", savedPassword);
}

/* =================================
   UNLOCK WEBSITE
================================= */

function unlockWebsite() {
  const enteredPassword = passwordInput.value;

  const currentSavedPassword = localStorage.getItem("loveWebsitePassword");

  if (enteredPassword === currentSavedPassword) {
    lockScreen.style.display = "none";

    passwordInput.value = "";

    passwordMessage.textContent = "";
  } else {
    passwordMessage.textContent = "Wrong Password ❤️ Try Again.";

    passwordInput.value = "";
  }
}
unlockBtn.addEventListener("click", unlockWebsite);

/* ENTER KEY */

passwordInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    unlockWebsite();
  }
});

/* =================================
   OPEN CHANGE PASSWORD MODAL
================================= */

changePasswordBtn.addEventListener("click", function () {
  passwordModal.classList.add("show");

  currentPassword.value = "";
  newPassword.value = "";
  confirmPassword.value = "";

  changePasswordMessage.textContent = "";
});

/* =================================
   CLOSE MODAL
================================= */

closePasswordModal.addEventListener("click", function () {
  passwordModal.classList.remove("show");
});

/* CLOSE WHEN CLICKING OUTSIDE */

passwordModal.addEventListener("click", function (event) {
  if (event.target === passwordModal) {
    passwordModal.classList.remove("show");
  }
});

/* =================================
   CHANGE PASSWORD
================================= */

savePasswordBtn.addEventListener("click", function () {
  const oldPassword = currentPassword.value;

  const newPass = newPassword.value;

  const confirmPass = confirmPassword.value;

  const saved = localStorage.getItem("loveWebsitePassword");

  /* CHECK CURRENT PASSWORD */

  if (oldPassword !== saved) {
    changePasswordMessage.textContent = "Current password is incorrect.";

    changePasswordMessage.style.color = "#e91425";

    return;
  }

  /* CHECK EMPTY PASSWORD */

  if (newPass.trim() === "") {
    changePasswordMessage.textContent = "New password cannot be empty.";

    changePasswordMessage.style.color = "#e91425";

    return;
  }

  /*CHECK PASSWORD LENGTH */

  if (newPass.length < 4) {
    changePasswordMessage.textContent =
      "Password must be at least 4 characters.";

    changePasswordMessage.style.color = "#e91425";

    return;
  }

  /* CHECK CONFIRM PASSWORD */

  if (newPass !== confirmPass) {
    changePasswordMessage.textContent = "Passwords do not match.";

    changePasswordMessage.style.color = "#e91425";

    return;
  }

  /* SAVE NEW PASSWORD */

  localStorage.setItem("loveWebsitePassword", newPass);

  changePasswordMessage.textContent = "Password changed successfully ❤️";

  changePasswordMessage.style.color = "#18a558";

  currentPassword.value = "";
  newPassword.value = "";
  confirmPassword.value = "";

  /* CLOSE AFTER A SHORT DELAY */

  setTimeout(function () {
    passwordModal.classList.remove("show");
  }, 1200);
});

// starting JS for website here

const pages = document.querySelectorAll(".page");

function showPage(id) {
  pages.forEach((page) => page.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
    target.querySelector(".card")?.scrollTo({ top: 0, behavior: "instant" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// ----------------Proposal----------------

const calendarPage = document.getElementById("calendarPage");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const proposalMessage = document.getElementById("proposalMessage");
const calendarBackBtn = document.getElementById("calendarBackBtn");
const lovePageBackBtn = document.getElementById("lovePageBackBtn");
const SpecialBackBtn = document.getElementById("SpecialBackBtn");
const surpriseBtn = document.getElementById("surpriseBtn");

/* ----------- calendar page ------------ */

calendarPage.addEventListener("click", () => {
  showPage("calendar");
});

calendarBackBtn.addEventListener("click", () => {
  showPage("proposalPage");
});

yesBtn.addEventListener("click", () => {
  showPage("lovePage");
});
lovePageBackBtn.addEventListener("click", () => {
  showPage("calendar");
});

// ---------------Love Page -------------------

document.getElementById("seeGiftsBtn").addEventListener("click", () => {
  showPage("giftsPage");
});

/*----------------- Gifts -------------------*/

document.getElementById("quizCard").addEventListener("click", () => {
  showPage("quizPage");
  startQuiz();
});

document.getElementById("letterCard").addEventListener("click", () => {
  showPage("letterPage");
});

document.getElementById("specialCard").addEventListener("click", () => {
  showPage("specialPage");
});

document.getElementById("finallyBtn").addEventListener("click", () => {
  showPage("videoPage");
});

document.getElementById("SpecialBackBtn").addEventListener("click", () => {
  showPage("lovePage");
});

document.getElementById("surpriseBtn").addEventListener("click", () => {
  showPage("galleryPage");
});

document.getElementById("surpriseBackBtn").addEventListener("click", () => {
  showPage("specialPage");
});

// --------------- QUIZ ------------------

const quizQuestion = [
  {
    question: "What is the most beautiful thing a couple can give each other?",
    answers: [
      "Expensive gifts",
      "Love, trust, and respect",
      "A perfect life",
      "Lots of selfies",
    ],
    correct: 1,
  },

  {
    question: "What would be our dream date?",
    answers: [
      "A romantic dinner",
      "Watching movies together",
      "A sunset walk holding hands",
      "All of these",
    ],
    correct: 3,
  },

  {
    question: "What should we do after a little misunderstanding?",
    answers: [
      "Ignore each other",
      "Wait for the other person to apologize",
      "Talk honestly and understand each other",
      "Pretend nothing happened",
    ],
    correct: 2,
  },

  {
    question: "What's a perfect lazy day together?",
    answers: [
      "Watching movies and cuddling",
      "Cooking something together",
      "Talking for hours",
      "All of these",
    ],
    correct: 3,
  },

  {
    question: "What's the most important goal for our future?",
    answers: [
      "Being rich",
      "Traveling everywhere",
      "Building a happy life together with trust and respect",
      "Taking cute pictures",
    ],
    correct: 2,
  },

  {
    question: "What makes a relationship stronger?",
    answers: [
      "Trust and communication",
      "Making each other jealous",
      "Always winning arguments",
      "Never discussing problems",
    ],
    correct: 0,
  },

  {
    question: "What's our ideal future memory?",
    answers: [
      "Laughing about old memories",
      "Celebrating little achievements",
      "Supporting each other's dreams",
      "All of these",
    ],
    correct: 3,
  },

  {
    question: "What's the sweetest way to show love?",
    answers: [
      "Remembering little details",
      "Giving thoughtful surprise",
      "Being there during difficult times",
      "All of these",
    ],
    correct: 3,
  },

  {
    question: "What's the best promise we can make to each other?",
    answers: [
      "We'll never make mistakes",
      "We'll always agree",
      "We'll be honest, respect each other, and keep trying",
      "We'll never need personal space",
    ],
    correct: 2,
  },
];

const questionText = document.getElementById("questionText");
const answersBox = document.getElementById("answers");
const feedback = document.getElementById("quizFeedback");
const progress = document.getElementById("quizProgress");

const quizBox = document.getElementById("quizBox");
const quizResult = document.getElementById("quizResult");
const scoreText = document.getElementById("scoreText");

let currentQuestion = 0;
let score = 0;

// START QUIZ

function startQuiz() {
  currentQuestion = 0;
  score = 0;

  quizBox.classList.remove("hidden");
  quizResult.classList.add("hidden");

  renderQuestion();
}

/* SHOW QUESTION */

function renderQuestion() {
  const q = quizQuestion[currentQuestion];

  progress.textContent = `Question ${currentQuestion + 1} of ${quizQuestion.length}`;

  questionText.innerHTML = q.question;

  answersBox.innerHTML = "";

  feedback.textContent = "";

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.className = "answer-btn";

    button.textContent = answer;

    button.addEventListener("click", () => {
      checkAnswer(button, index);
    });

    answersBox.appendChild(button);
  });
}

/* CHECK ANSWERS */

function checkAnswer(selectedButton, selectedIndex) {
  const q = quizQuestion[currentQuestion];

  // WRONG ANSWER

  if (selectedIndex !== q.correct) {
    selectedButton.classList.add("wrong");

    feedback.textContent = "Wrong answer 😭 Try again";

    return;
  }

  // CORRECT ANSWER

  score++;

  selectedButton.classList.add("correct");

  feedback.textContent = "Correct! You're so smart 🥰";

  /* 
  Wait a tiny moment so the user
  can see the correct-answer effect.
  */

  setTimeout(() => {
    currentQuestion++;

    /* MORE QUESTION */

    if (currentQuestion < quizQuestion.length) {
      renderQuestion();
    } else {
      /* QUIZ FINISHED */
      showQuizResult();
    }
  }, 1200);
}

/* SHOW RESULT */

function showQuizResult() {
  quizBox.classList.add("hidden");

  quizResult.classList.remove("hidden");

  scoreText.textContent = `You got ${score} out of ${quizQuestion.length} ❤️`;
}

/* BACK BUTTON */

document.getElementById("quizBackBtn").addEventListener("click", () => {
  showPage("giftsPage");
});

/* --------------- LETTER -------------- */

document.getElementById("letterBackBtn").addEventListener("click", () => {
  showPage("giftsPage");
});

/* --------------- GALLERY -------------- */

document.getElementById("galleryBackBtn").addEventListener("click", () => {
  showPage("giftsPage");
});

/* --------------- VIDEO -------------- */

document.getElementById("videoBackBtn").addEventListener("click", () => {
  showPage("giftsPage");
});

const loveVideo = document.getElementById("loveVideo");
const videoPlaceholder = document.getElementById("videoPlaceholder");

loveVideo.addEventListener("loadeddata", () => {
  videoPlaceholder.style.display = "none";
});

loveVideo.addEventListener("error", () => {
  videoPlaceholder.style.display = "grid";
});

/* -----------------IMAGE FALLBACK --------------- */

function showPlaceholder(img, emoji) {
  const box = img.parentElement;
  img.style.display = "none";
  box.style.display = "block";
  box.innerHTML = `
  <div style="
  height: 145px;
  display: grid;
  place-items: center;
  background: #ffe5eb;
  font-size: 45px;
  "${emoji}</div>
  <figcaption>${box.querySelector("figcaption")?.textContent || "A special memory"}</figcaption>
  `;
}

/* ----------- JS for calendar ----------- */
const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");

const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date(2026, 6, 1);

const specialDates = {
  "2026-07-31": "❤️ Our Nikkah Day",
  "2026-08-01": "❤️ The day we had our very first Salaam",
  "2026-08-15": "❤️ We had our first voice call",
  "2026-08-20": "❤️ We had our first video call",
};

function displayCalendar() {
  const year = currentDate.getFullYear();

  const month = currentDate.getMonth();

  // First day of the month

  const firstDay = new Date(year, month, 1);

  const firstDayIndex = firstDay.getDay();

  // Last day of the month

  const lastDay = new Date(year, month + 1, 0);

  const numberOfDays = lastDay.getDate();

  // Month name

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  });

  monthYear.textContent = `${monthName} ${year}`;

  calendarDays.innerHTML = "";

  // Empty boxes before day 1

  for (let i = 0; i < firstDayIndex; i++) {
    const emptyDay = document.createElement("div");

    emptyDay.classList.add("empty");

    calendarDays.appendChild(emptyDay);
  }

  // Create days

  for (let day = 1; day <= numberOfDays; day++) {
    const dayElement = document.createElement("div");

    dayElement.classList.add("day");
    dayElement.textContent = day;

    const monthNumber = String(month + 1).padStart(2, "0");
    const dayNumber = String(day).padStart(2, "0");

    const dateKey = `${year}-${monthNumber}-${dayNumber}`;

    // highlighted special dates

    if (specialDates[dateKey]) {
      dayElement.classList.add("special-date");
      dayElement.title = "A little surprise awaits";
    }

    // Add click event

    dayElement.addEventListener("click", function () {
      const monthNumber = String(month + 1).padStart(2, "0");
      const dayNumber = String(day).padStart(2, "0");

      const dateKey = `${year}-${monthNumber}-${dayNumber}`;
      const message = specialDates[dateKey];

      // only open a note for special dates
      if (!message) return;

      const overlay = document.getElementById("noteOverlay");
      const noteMessage = document.getElementById("noteMessage");

      noteMessage.textContent = message;
      overlay.classList.add("show");
    });

    calendarDays.appendChild(dayElement);
  }
}

const overlay = document.getElementById("noteOverlay");
const note = document.getElementById("specialNote");

// clicking the blurred background closes the note
overlay.addEventListener("click", function () {
  overlay.classList.remove("show");
});

// clicking the note itself keeps it open

note.addEventListener("click", function (event) {
  event.stopPropagation();
});

// Previous month

prevMonth.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);

  displayCalendar();
});

// Next month

nextMonth.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);

  displayCalendar();
});

// Display calendar when page loads

displayCalendar();

// JS for IMAGES Gallery
const gallery = document.querySelector(".imgs-gallery");

const galleryImages = Array.from(gallery.querySelectorAll(".gallery-item img"));

// Create the full-screen viewer
const lightbox = document.createElement("div");
lightbox.className = "gallery-lightbox";

lightbox.innerHTML = `
  <button class="gallery-close" aria-label="Close image viewer"
    title="Close">&times;</button>

  <button class="gallery-prev" aria-label="Previous image"
    title="Previous">&#10094;</button>

  <img class="lightbox-image" src="" alt="Gallery image">

  <button class="gallery-next" aria-label="Next image"
    title="Next">&#10095;</button>

  <div class="gallery-counter" aria-live="polite"></div>
`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector(".lightbox-image");
const closeButton = lightbox.querySelector(".gallery-close");
const prevButton = lightbox.querySelector(".gallery-prev");
const nextButton = lightbox.querySelector(".gallery-next");
const counter = lightbox.querySelector(".gallery-counter");

let currentIndex = 0;
let lastFocusedElement = null;

// Open an image
function openLightbox(index) {
  currentIndex = index;
  lastFocusedElement = document.activeElement;

  updateLightbox();

  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";

  closeButton.focus();
}

// Update image and counter
function updateLightbox() {
  const image = galleryImages[currentIndex];

  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt || `Gallery image ${currentIndex + 1}`;

  counter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;

  prevButton.disabled = galleryImages.length <= 1;
  nextButton.disabled = galleryImages.length <= 1;
}

// Navigate to previous image
function showPreviousImage() {
  currentIndex =
    (currentIndex - 1 + galleryImages.length) % galleryImages.length;

  updateLightbox();
}

// Navigate to next image
function showNextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;

  updateLightbox();
}

// Close the viewer
function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";

  if (lastFocusedElement?.isConnected) {
    lastFocusedElement.focus();
  }
}

// Open the clicked image
galleryImages.forEach((image, index) => {
  image.parentElement.addEventListener("click", () => {
    openLightbox(index);
  });
});

// Button events
prevButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);
closeButton.addEventListener("click", closeLightbox);

// Close when clicking the dark background
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

// Keyboard navigation
document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("active")) return;

  if (event.key === "Escape") {
    closeLightbox();
  } else if (event.key === "ArrowLeft") {
    showPreviousImage();
  } else if (event.key === "ArrowRight") {
    showNextImage();
  }
});

// Touch swipe navigation
let touchStartX = 0;
let touchStartY = 0;

lightbox.addEventListener(
  "touchstart",
  (event) => {
    touchStartX = event.changedTouches[0].clientX;
    touchStartY = event.changedTouches[0].clientY;
  },
  { passive: true },
);

lightbox.addEventListener(
  "touchend",
  (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;

    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    // Only treat a clear horizontal swipe as navigation
    if (
      !lightbox.classList.contains("active") ||
      Math.abs(deltaX) < 50 ||
      Math.abs(deltaX) < Math.abs(deltaY) * 1.3
    ) {
      return;
    }

    if (deltaX < 0) {
      showNextImage();
    } else {
      showPreviousImage();
    }
  },
  { passive: true },
);
