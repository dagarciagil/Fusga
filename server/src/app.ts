import express from "express";
import cors from "cors";
import pool from "./db/db";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola, servidor funcionando");
});

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ time: result.rows[0].now });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error conectando a la base de datos" });
  }
});


export default app;
