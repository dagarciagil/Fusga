import app from "./app";
import { config } from "./config/config";

const PORT = Number(config.port) || 4000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
