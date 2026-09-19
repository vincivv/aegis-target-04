// Tiny Express demo service used as AEGIS's monitored target. Intentionally minimal.
const express = require("express");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

const PORT = Number(process.env.PORT || 3000);
app.listen(PORT, "127.0.0.1", () => console.log(`listening on ${PORT}`));
