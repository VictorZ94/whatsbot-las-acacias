// @packages
import { addKeyword } from "@builderbot/bot";

// @flows
import { flowReservar } from "./reservar.flow.js";

export const flowCasa = addKeyword(
  "2",
  "casa",
  "acacia 2",
  "la acacia 2"
).addAnswer(
  [
    "Casa para 10 personas",
    "\nTarifa mínima $350.000 para 4 personas la noche. Persona adicional $70.000. Tarifa total $700.000",
    "*photos:* https://whatsbot-photos.vercel.app/",
    "\n*reservar* Si desea reservar favor tener clara la fecha de llegada y salida y número de personas.",
  ],
  { media: "https://i.imgur.com/AcN1rRy.jpg" },
  null,
  [flowReservar]
);
