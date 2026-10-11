// Server statis untuk beranda NxCode IDE.
// Node murni (node:http), tanpa dependency. Default port 8085.
//
//   node website/serve.mjs            -> http://localhost:8085/
//   node website/serve.mjs 3000       -> port lain
//
// Kalau port terpakai, otomatis pindah ke port bebas berikutnya.

import { createServer } from "node:http";
import { createReadStream, statSync } from "node:fs";
import { extname, join, normalize, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(fileURLToPath(new URL(".", import.meta.url)));
const START = Number(process.argv[2] || process.env.PORT || 8085);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".map": "application/json; charset=utf-8",
};

function send(res, status, body) {
  res.writeHead(status, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(body);
}

const server = createServer((req, res) => {
  try {
    if (req.method !== "GET" && req.method !== "HEAD") {
      return send(res, 405, "Method Not Allowed");
    }

    const url = new URL(req.url, "http://localhost");
    let pathname = decodeURIComponent(url.pathname);
    if (pathname.endsWith("/")) pathname += "index.html";

    // Cegah path keluar dari ROOT.
    const target = normalize(join(ROOT, pathname));
    if (target !== ROOT && !target.startsWith(ROOT + sep)) {
      return send(res, 403, "Forbidden");
    }

    let stat;
    try {
      stat = statSync(target);
    } catch {
      return send(res, 404, "404 Not Found");
    }

    if (stat.isDirectory()) {
      return send(res, 404, "404 Not Found");
    }

    const type = MIME[extname(target).toLowerCase()] || "application/octet-stream";
    res.writeHead(200, {
      "Content-Type": type,
      "Content-Length": stat.size,
      "Cache-Control": "no-cache",
    });

    if (req.method === "HEAD") return res.end();
    createReadStream(target).pipe(res);
  } catch (err) {
    send(res, 500, "500 Internal Server Error");
  }
});

let port = START;
server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log(`Port ${port} terpakai, mencoba ${port + 1} …`);
    port += 1;
    server.listen(port, "0.0.0.0");
  } else {
    console.error(err);
    process.exit(1);
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log("NxCode IDE — beranda");
  console.log(`  http://localhost:${port}/`);
  console.log(`  folder: ${ROOT}`);
  console.log("  (Ctrl+C untuk berhenti)");
});
