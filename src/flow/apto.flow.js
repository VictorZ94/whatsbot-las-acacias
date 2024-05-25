// @packages
import { addKeyword } from "@builderbot/bot";
import { flowReservar } from "./reservar.flow.js";

export const flowApartamento = addKeyword(
  "1",
  "apartamento",
  "apto",
  "acacia 1",
  "la acacia 1"
).addAnswer(
  [
    "*Apartamento para 7 personas*",
    "\nTarifa mínima $160.000 por pareja la noche. Persona adicional $70.000. Tarifa total $490.000.",
    "*photos:* https://whatsbot-photos.vercel.app/",
    "\nSi deseas reservar favor selecciona el siguiente *[link]* para mirar disponibilidad",
  ],
  { media: "https://i.imgur.com/HNNAslL.jpg" },
  null,
  [flowReservar]
);
