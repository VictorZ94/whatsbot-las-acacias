// @packages
import { addKeyword } from "@builderbot/bot";

// @flows
import { flowCasa } from "./casa.flow.js";
import { flowApartamento } from "./apto.flow.js";

export const welcomeFlow = addKeyword([
  "hola",
  "más información",
  "info",
  "quiero más información",
]).addAnswer(
  [
    "¡Bienvenido a nuestro aparta hotel en Jardín, Antioquia! Las Acacias,🌿🏨 Estamos emocionados de tenerte aquí.",
    "\n¿Estás buscando el lugar perfecto para tu estadía?",
    "\n¡Te presento nuestras opciones!",
    "\n1️⃣ *Apartamento La Acacia 1:* Ideal para grupos de hasta 7 personas, este apartamento es espacioso y acogedor, perfecto para una estancia llena de comodidad y tranquilidad.",
    "\n2️⃣ *Casa La Acacia 2*: Con capacidad para hasta 10 personas, esta casa te brinda un ambiente acogedor y elegante, ideal para disfrutar en grupo con un toque de estilo hogareño.",
    "\n*¿Cuál opción te llama más la atención? ¡Estoy aquí para ayudarte a tomar la mejor decisión y hacer que tu estadía sea increíble!* 😊",
    "\nseleciona 1 o 2 para tener mayor información, fotos y precio de estadía en la acacia 1 o 2",
  ],
  { capture: true },
  async (ctx, { fallBack }) => {
    if (
      !ctx.body.toLocaleLowerCase().includes("1") &&
      !ctx.body.toLocaleLowerCase().includes("2")
    ) {
      return fallBack(
        "Debes seleccionar entre 1 o 2 para obtener más información"
      );
    }
  },
  [flowCasa, flowApartamento]
);
