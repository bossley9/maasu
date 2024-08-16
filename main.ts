import fs from "node:fs";
import path from "node:path";

async function* walk(dir: string): AsyncGenerator<string> {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile() && d.name.endsWith(".tsx")) yield entry;
  }
}

async function main() {
  fs.rmSync("./dist", { recursive: true, force: true });

  for await (const page of walk("./src/pages")) {
    const output = "./dist" + page.substring(9, page.length - 3) + "html";
    fs.mkdirSync(output.substring(0, output.lastIndexOf("/")), {
      recursive: true,
    });
    fs.writeFileSync(output, (await import("./" + page)).default());
  }

  fs.cpSync("./src/static", "./dist", { recursive: true });
}

main();
