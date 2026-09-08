// Exemplo Codex opcional. Não grava arquivos nem altera permissões.
import { readFileSync } from "node:fs";

let event;
try {
  event = JSON.parse(readFileSync(0, "utf8"));
} catch {
  process.exit(0);
}
if (
  event === null ||
  typeof event !== "object" ||
  Array.isArray(event) ||
  event.hook_event_name !== "SessionStart"
) {
  process.exit(0);
}

console.log(JSON.stringify({
  hookSpecificOutput: {
    hookEventName: "SessionStart",
    additionalContext:
      "Responda em português do Brasil. Consulte as instruções aplicáveis do projeto e informe as verificações realmente executadas.",
  },
}));
