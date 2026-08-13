const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// JSON data receive karne ke liye
app.use(express.json());

// Website ki files serve karna
app.use(express.static(path.join(__dirname)));

// Test API
app.post("/api/generate-video", async (req, res) => {
  try {
    const { prompt, ratio, duration } = req.body;

    if (!prompt) {
      return res.status(400).json({
        error: "Video prompt is required"
      });
    }

    console.log("Video request received:");
    console.log("Prompt:", prompt);
    console.log("Ratio:", ratio);
    console.log("Duration:", duration);

    // Real AI video API yahan connect karenge.
    // API key ko yahan directly mat likhna.

    res.json({
      success: true,
      message: "Video request received",
      prompt,
      ratio,
      duration
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Server error"
    });
  }
});

// Website start
app.listen(PORT, () => {
  console.log(`Website running on port ${PORT}`);
});
