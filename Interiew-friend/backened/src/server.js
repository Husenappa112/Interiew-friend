const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
// const prisma = require("./config/db");

const PORT = process.env.PORT || 5000;

// app.listen after database connection
// async function startServer() {
//   try {
//     await prisma.$connect();
//     console.log("Database connected");
//
//     app.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error("Database connection failed:", error);
//   }
// }

// Temporary: run without database
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});