// @packages
import fs from "fs";
import path from "path";
import { createBot } from "@builderbot/bot";

// @provider
import { adapterProvider } from "./provider/index.js";

// @flow
import { flow } from "./flow/index.js";

// @databse
import { adapterDB } from "./database/index.js";

const PORT = process.env.PORT ?? 3008;
const __dirname = path.resolve(path.dirname(""));

const main = async () => {
  const { handleCtx, httpServer } = await createBot({
    flow,
    provider: adapterProvider,
    database: adapterDB,
  });

  adapterProvider.server.post(
    "/v1/messages",
    handleCtx(async (bot, req, res) => {
      const { number, message, urlMedia } = req.body;
      await bot.sendMessage(number, message, { media: urlMedia ?? null });
      return res.end("sended");
    })
  );

  adapterProvider.server.post(
    "/v1/register",
    handleCtx(async (bot, req, res) => {
      const { number, name } = req.body;
      await bot.dispatch("REGISTER_FLOW", { from: number, name });
      return res.end("trigger");
    })
  );

  adapterProvider.server.post(
    "/v1/samples",
    handleCtx(async (bot, req, res) => {
      const { number, name } = req.body;
      await bot.dispatch("SAMPLES", { from: number, name });
      return res.end("trigger");
    })
  );

  adapterProvider.server.post(
    "/v1/blacklist",
    handleCtx(async (bot, req, res) => {
      const { number, intent } = req.body;
      if (intent === "remove") bot.blacklist.remove(number);
      if (intent === "add") bot.blacklist.add(number);

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ status: "ok", number, intent }));
    })
  );

  // Serve static files
  adapterProvider.server.get("/path", (req, res) => {
    const filePath = path.resolve(__dirname, "views", "index.html");
    console.log(filePath);
    fs.readFile(filePath, "utf8", (err, html) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        return res.end("Error reading file");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(html);
    });
  });

  httpServer(+PORT);
};

main();
