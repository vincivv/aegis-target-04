// Tiny Express demo service used as AEGIS's monitored target. Intentionally minimal.
const express = require("express");

const app = express();
app.use(express.json());

const notes = [
  { id: 1, title: "welcome", body: "AEGIS is watching this repo." },
  { id: 2, title: "todo", body: "ship the demo" },
];

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.get("/notes/:id", (req, res) => {
  const note = notes.find((n) => n.id === Number(req.params.id));
  if (!note) return res.status(404).json({ error: "not found" });
  res.json(note);
});

const PORT = Number(process.env.PORT || 3000);
app.listen(PORT, "127.0.0.1", () => console.log(`listening on ${PORT}`));
