const express = require('express');
const authRoutes = require('./Routes/authRoutes');
const profileRoute = require('./Routes/profileRoute');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const genAI = new GoogleGenerativeAI("AIzaSyCZGQ8r24jm8HjBOLXJgqfK3M7PAftoaHM");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
//middleware 
app.use(bodyParser.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/getname',profileRoute);
app.use('/api/updateuser',profileRoute);
app.use("/uploads", express.static("uploads"));
mongoose.connect("mongodb+srv://piyushvyas275:Realestatedev1@real-estate.f77l7.mongodb.net/?retryWrites=true&w=majority&appName=Real-Estate",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => {
  console.log("MongoDB connected");
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
})
const generate = async(prompt) =>{
  try {
    const result  = await model.generateContent(prompt);
    return result.response.text();
    } catch (error) {
      console.error("Error generating content:", error);
      return "An error occurred while generating content.";
  
  }
}

app.post('/api/generate-description', async (req, res) => {
  try {
    const prompt = req.body.prompt;  // Access the prompt from the request body
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }
    const result = await generate(prompt);  // Use the `generate` function to generate the AI content
    res.json({ description: result });      // Send the AI-generated description back to the client
  } catch (err) {
    console.error("Error generating AI description:", err);
    res.status(500).json({ error: "Failed to generate AI description" });
  }
});



const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
