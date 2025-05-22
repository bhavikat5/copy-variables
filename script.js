const buttonMap = {
  en: [
    { label: "Interest Range", shortcode: "interest_range_en" },
    { label: "Tenure Range", shortcode: "tenure_range_en" },
    { label: "Processing Range", shortcode: "processing_range_en" },
    { label: "Minimum Amount", shortcode: "min_amount_en" },
    { label: "Maximum Amount", shortcode: "max_amount_en" },
    { label: "Maximum Amount (Lakh)", shortcode: "max_amt_lakh_en" },
    { label: "Tenure", shortcode: "tenure_en" },
    { label: "Time (Seconds)", shortcode: "time_seconds_en" },
    { label: "Time (Minutes)", shortcode: "time_minutes_en" },
    { label: "As Low As Interest", shortcode: "low_interest_en" },
  ],
  hi: [
    { label: "Interest Range", shortcode: "interest_range_hi" },
    { label: "Tenure Range", shortcode: "tenure_range_hi" },
    { label: "Processing Range", shortcode: "processing_range_hi" },
    { label: "Minimum Amount", shortcode: "min_amount_hi" },
    { label: "Maximum Amount", shortcode: "max_amount_hi" },
    { label: "Tenure", shortcode: "tenure_hi" },
    { label: "Time (Seconds)", shortcode: "time_seconds_en" },
    { label: "Time (Minutes)", shortcode: "time_minutes_en" },
    { label: "As Low As Interest", shortcode: "low_interest_en" },
  ],
  mr: [
    { label: "Interest Range", shortcode: "interest_range_mr" },
    { label: "Tenure Range", shortcode: "tenure_range_mr" },
    { label: "Processing Range", shortcode: "processing_range_mr" },
    { label: "Minimum Amount", shortcode: "min_amount_mr" },
    { label: "Maximum Amount", shortcode: "max_amount_mr" },
    { label: "Tenure", shortcode: "tenure_mr" },
    { label: "Time (Seconds)", shortcode: "time_seconds_en" },
    { label: "Time (Minutes)", shortcode: "time_minutes_en" },
    { label: "As Low As Interest", shortcode: "low_interest_en" },
  ],
  ta: [
    { label: "Interest Range", shortcode: "interest_range_ta" },
    { label: "Tenure Range", shortcode: "tenure_range_ta" },
    { label: "Processing Range", shortcode: "processing_range_ta" },
    { label: "Minimum Amount", shortcode: "min_amount_ta" },
    { label: "Maximum Amount", shortcode: "max_amount_ta" },
    { label: "Tenure", shortcode: "tenure_ta" },
    { label: "Time (Seconds)", shortcode: "time_seconds_en" },
    { label: "Time (Minutes)", shortcode: "time_minutes_en" },
    { label: "As Low As Interest", shortcode: "low_interest_en" },
  ],
};

const buttonGrid = document.getElementById("buttonGrid");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

function renderButtons(lang = "en") {
  buttonGrid.innerHTML = "";
  const buttons = buttonMap[lang] || [];

  buttons.forEach(({ label, shortcode }, index) => {
    const btn = document.createElement("button");
    btn.innerHTML = `<span>${label}</span>`;
    btn.classList.add("animate");

    setTimeout(() => btn.classList.remove("animate"), 300 + index * 20);

    btn.addEventListener("click", () => {
      navigator.clipboard
        .writeText(`[${shortcode}]`)
        .then(() => showToast(`Copied: [${shortcode}]`))
        .catch(() => alert("Failed to copy"));
    });

    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.appendChild(btn);
    buttonGrid.appendChild(gridItem);
  });
}

document.querySelectorAll(".language-buttons button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");

    document
      .querySelectorAll(".language-buttons button")
      .forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");

    renderButtons(lang);
  });
});

renderButtons("en");
