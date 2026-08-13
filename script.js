const promptInput = document.getElementById("prompt");
const ratioInput = document.getElementById("ratio");
const durationInput = document.getElementById("duration");
const generateBtn = document.getElementById("generateBtn");
const statusBox = document.getElementById("status");
const resultBox = document.getElementById("result");

generateBtn.addEventListener("click", async () => {
  const prompt = promptInput.value.trim();
  const ratio = ratioInput.value;
  const duration = durationInput.value;

  if (!prompt) {
    statusBox.textContent = "⚠️ Please enter a video idea first.";
    promptInput.focus();
    return;
  }

  generateBtn.disabled = true;
  generateBtn.textContent = "⏳ Generating...";
  statusBox.textContent = "Creating your video...";
  
  resultBox.innerHTML = `
    <div>
      <p>🎬 Your video is being prepared...</p>
      <p>Format: ${ratio}</p>
      <p>Duration: ${duration} seconds</p>
    </div>
  `;

  try {
    /*
      REAL API CONNECTION LATER:

      const response = await fetch("/api/generate-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt,
          ratio,
          duration
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Video generation failed");
      }

      resultBox.innerHTML = `
        <video controls width="100%">
          <source src="${data.videoUrl}" type="video/mp4">
        </video>
      `;
    */

    await new Promise(resolve => setTimeout(resolve, 2000));

    statusBox.textContent =
      "✅ Request received. Real AI video API will be connected next.";

    resultBox.innerHTML = `
      <div>
        <h3>🎥 Video Request Ready</h3>
        <p><strong>Prompt:</strong> ${escapeHTML(prompt)}</p>
        <p><strong>Format:</strong> ${ratio}</p>
        <p><strong>Duration:</strong> ${duration} seconds</p>
      </div>
    `;

  } catch (error) {
    console.error(error);

    statusBox.textContent = "❌ Something went wrong.";

    resultBox.innerHTML = `
      <p>Please try again.</p>
    `;
  }

  generateBtn.disabled = false;
  generateBtn.textContent = "🎥 Generate Video";
});


function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
