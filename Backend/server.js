const express = require('express');
const authRoutes = require('./Routes/authRoutes');
const profileRoute = require('./Routes/profileRoute');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
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


const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
