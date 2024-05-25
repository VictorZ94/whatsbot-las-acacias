// @packages
import { createFlow } from "@builderbot/bot";

// @flows
import { welcomeFlow } from "./welcome.flow.js";
import { flowReservar } from "./reservar.flow.js";

export const flow = createFlow([welcomeFlow, flowReservar]);
