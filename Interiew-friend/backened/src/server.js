const dotenv = require("dotenv");
dotenv.config();
console.log("Step 1: env loaded");

const app = require("./app");
console.log("Step 2: app loaded");

const prisma = require("./config/db");
console.log("Step 3: prisma loaded");

const PORT = process.env.PORT || 5000;

async function startServer() {
  console.log("Step 4: startServer called");
  try {
    await prisma.$connect();
    console.log("Step 5: Database connected");

    app.listen(PORT, () => {
      console.log(`Step 6: Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Step 5 FAILED - Database connection failed:", error);
    process.exit(1);
  }
}

startServer();