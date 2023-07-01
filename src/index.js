import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

// Parse JSON in request bodies
app.use(express.json());

app.listen(port, () => {
  console.log(`Auth server running on port ${port}.`);
});
