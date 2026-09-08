# Modelos de arquivo

| Arquivo | Destino ou finalidade |
| --- | --- |
| [AGENTS.md.template](AGENTS.md.template) | Adaptar ao `AGENTS.md` do projeto |
| [config.toml.example](codex/config.toml.example) | Incorporar à configuração Codex |
| [hooks.json.example](codex/hooks.json.example) | Exemplo para `.codex/hooks.json` |
| [session-start.mjs](hooks/session-start.mjs) | Copiar para `.codex/hooks/session-start.mjs` |
| [hook-io.mjs.example](hooks/hook-io.mjs.example) | Leitura defensiva de JSON |
| [Protocolo de ondas](rules/parallel-subagent-driven-development.md) | Leitura explícita quando houver delegação |
| [ESLint](eslint/) | Regras, configurações e verificador |
| [CLAUDE.md.template](CLAUDE.md.template) | Compatibilidade opcional com Claude Code |
| [settings.json.example](settings.json.example) | Exemplo antigo de Claude Code; não usar no Codex |

Arquivos `.example` e `.template` não são ativados automaticamente. Copie somente o necessário e adapte caminhos. O antigo `settings.json.example` referencia scripts ilustrativos ausentes; não é um pacote executável.

Identificadores de configuração e APIs permanecem no idioma exigido pelas ferramentas.
