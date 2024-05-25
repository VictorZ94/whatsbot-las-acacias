// @packages
import { addKeyword } from "@builderbot/bot";

// @flows
import { flowReservar } from "./reservar.flow.js";
import { flowCasa } from "./casa.flow.js";

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
    "\n*reservar* Si desea reservar favor tener clara la fecha de llegada y salida y número de personas.",
  ],
  { media: "https://i.imgur.com/HNNAslL.jpg" },
  null,
  [flowCasa, flowReservar]
);
