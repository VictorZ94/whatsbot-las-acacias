// @packages
import { createFlow } from "@builderbot/bot";

// @flows
import { welcomeFlow } from "./welcome.flow.js";
import { flowCasa } from "./casa.flow.js";
import { flowApartamento } from "./apto.flow.js";

export const flow = createFlow([welcomeFlow, flowCasa, flowApartamento]);