import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Route imports
import authRoutes from './routes/authRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';
import departmentRoutes from './routes/departmentRoutes.js';
import leaveRoutes from './routes/leaveRoutes.js';
import mongoose from 'mongoose';

// Load env vars
dotenv.config();

// Connect database
connectDB();

const app = express();

// Standard Middlewares
//new
app.use((req,res,next)=>{
  if(!isConnected){
    connectToMongoDB();
  }
  next();
})



//new
app.use(cors());
app.use(express.json());

// API Routes
//new
let isconnected=false;
async function connectToMongoDB(){
  try{
     await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser:true,
      useUnifiedTechnology:true
    });
    isConnected=true;
    console.log('Connected to MongoDB');
  } catch(error){
    console.log('Error connecting to MongoDB:',error);
  }
}
//new
  
  
    
   
app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/leaves', leaveRoutes);

// Health Check Root Route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Employee Management API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
// });

//new
module.exports=app





//new