import http from "node:http";
import {
  title,
  tituloPagina,
  subtituloPagina,
  description,
  copyright,
} from "./data.mjs";
import open from "open";

const server = http.createServer((req, res) => {
  console.log("Request received");

  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <h1>${tituloPagina}</h1>
      <h2>${subtituloPagina}</h2>
      <p>${description}</p>
      <footer>
        <p>${copyright}</p>
      </footer>
    </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log(`Server listening on http://localhost:3000`);
  open(`http://localhost:3000`);
});
