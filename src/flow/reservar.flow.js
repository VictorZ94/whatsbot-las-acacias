import { addKeyword } from "@builderbot/bot";

export const flowReservar = addKeyword("reservar", "asesor", "book")
  .addAnswer([
    "En un momento un agente se comunicará contigo para confirmar tu reserva",
  ])
  .addAction(async (ctx, { provider }) => {
    const message = `Hola, Quiero hacer una reserva \nMi contacto es: \n${ctx.from} \n${ctx.name}`;

    //numero de telefono con el prefijo de tu pais
    const number = "573218590287";

    await provider.sendText(`${number}@s.whatsapp.net`, message);
    console.log(ctx);
  });
