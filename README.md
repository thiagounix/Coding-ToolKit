# Vibe Coding Toolkit — Codex em português do Brasil

Edição adaptada para **OpenAI Codex no VS Code**, com orientações para **GPT-5.6 Terra, GPT-5.6 Sol e GPT-6 Astra**. O toolkit reúne instruções de projeto, prompts reutilizáveis, critérios de qualidade, revisão e memória documentada.

Baseado no [trabalho original de Matheus Gomes](https://github.com/soumatheusgomes/vibe-coding-toolkit). Esta edição modifica o fluxo e a documentação; as experiências em produção relatadas pelo autor original não constituem validação desta adaptação.

## Comece por aqui

1. Abra o projeto de destino no VS Code e use a extensão oficial Codex, da OpenAI.
2. Siga a [instalação](docs/01-installation.md) para preparar `AGENTS.md` sem sobrescrever instruções existentes.
3. Escolha um modelo disponível com o [guia Terra, Sol e Astra](docs/03-modelos-codex.md).
4. Execute o [guia prático de adoção](docs/02-playbook-onboarding.md).
5. Consulte a [análise e o registro da adaptação](docs/04-migracao-codex.md).

O fluxo básico funciona com instruções e prompts locais. Plugins, MCP, hooks e subagentes são opcionais, usados conforme a tarefa e o ambiente.

## Modelos e fluxo de trabalho

| Modelo | Identificador | Uso sugerido |
| --- | --- | --- |
| Terra | `gpt-5.6-terra` | Correções delimitadas e manutenção |
| Sol | `gpt-5.6-sol` | Funcionalidades com várias etapas e análise entre módulos |
| Astra | `gpt-6-astra` | Problemas difíceis de arquitetura, diagnóstico e revisão |

A distribuição de tarefas é uma recomendação desta edição. Os identificadores constam no [catálogo oficial](https://developers.openai.com/api/docs/models). Confira a disponibilidade no seletor da extensão; escrever um nome no prompt não troca o modelo.

**Fluxo:** entender o pedido → planejar → implementar → verificar → revisar → entregar. Registre decisões duradouras quando solicitado. Use delegação quando solicitada ou prevista nas instruções aplicáveis e houver tarefas independentes.

## Documentação

| Fundamento | Conteúdo |
| --- | --- |
| [Visão geral](docs/00-overview.md) | Princípios e limites |
| [Instalação](docs/01-installation.md) | VS Code, PowerShell e CLI opcional |
| [Guia prático](docs/02-playbook-onboarding.md) | Exemplo completo de adoção |
| [Modelos Codex](docs/03-modelos-codex.md) | Terra, Sol, Astra e raciocínio |
| [Registro da migração](docs/04-migracao-codex.md) | Diagnóstico, alterações e validação |

| Ferramenta ou prática | Conteúdo |
| --- | --- |
| [Superpowers e processo](docs/tools/01-superpowers.md) | Processo portátil e integração opcional |
| [Subagentes](docs/tools/02-subagent-orchestration.md) | Responsabilidades e dependências |
| [Economia de contexto](docs/tools/03-rtk-token-proxy.md) | Saídas pequenas com evidências |
| [Ponytail e simplicidade](docs/tools/04-ponytail.md) | Reutilização e mudanças focadas |
| [Caveman e comunicação](docs/tools/05-caveman.md) | Clareza em português |
| [ESLint e Biome](docs/tools/06-eslint-biome-quality-gates.md) | Critérios de qualidade |
| [Graphify](docs/tools/07-graphify.md) | Mapas de dependências |
| [Obsidian](docs/tools/08-obsidian-memory.md) | Notas de longo prazo |
| [Memória de projeto](docs/tools/09-codex-memory-system.md) | Índice e leitura explícita |
| [Hooks](docs/tools/10-hooks-best-practices.md) | Automação no Codex |
| [Navegador](docs/tools/11-agent-browser.md) | Validação de interfaces |
| [Context7](docs/tools/12-context7.md) | Documentação via MCP |
| [Skills no Codex](docs/tools/13-codex-skills.md) | Compatibilidade e uso |
| [Chrome DevTools MCP](docs/tools/14-chrome-devtools-mcp.md) | Desempenho, rede e console |

## Prompts em português

Substitua os campos entre colchetes e cole o bloco de texto no Codex. Nomes de arquivos e identificadores técnicos permanecem estáveis.

| Prompt | Finalidade |
| --- | --- |
| [01 — Limpeza de projeto](docs/prompts/01-project-sanitation.md) | Medir e remover resíduos |
| [02 — Redução de avisos](docs/prompts/02-eslint-warning-burndown.md) | Corrigir avisos com evidência |
| [03 — Revisão especializada](docs/prompts/03-multi-agent-code-review.md) | Revisar por diferentes perspectivas |
| [04 — Da ideia ao plano](docs/prompts/04-brainstorm-to-plan.md) | Esclarecer e planejar |
| [05 — Ondas paralelas](docs/prompts/05-parallel-wave-dispatch.md) | Delegar tarefas independentes |
| [06 — Memória inicial](docs/prompts/06-memory-bootstrap.md) | Criar memória no projeto |
| [07 — ESLint completo](docs/prompts/07-eslint-complete-setup.md) | Configurar lint conforme a tecnologia |
| [08 — Regras prontas](docs/prompts/08-eslint-quality-gates-install.md) | Copiar, adaptar e medir |
| [09 — Arquivos grandes](docs/prompts/09-file-size-refactor.md) | Refatorar por responsabilidade |

Use os arquivos desta cópia local. As URLs do projeto original não contêm necessariamente as adaptações desta edição.

## Modelos de arquivo

- [Instruções de projeto](templates/AGENTS.md.template), para adaptar ao `AGENTS.md`.
- [Configuração Codex](templates/codex/config.toml.example), com Sol e alternativas comentadas.
- [Protocolo de ondas](templates/rules/parallel-subagent-driven-development.md), para leitura explícita.
- [Hooks opcionais](templates/codex/hooks.json.example) e [script de início](templates/hooks/session-start.mjs).
- [Regras ESLint](templates/eslint/), independentes de provedor.
- [Compatibilidade com arquivos antigos](templates/README.md).

## Créditos e licença

Autoria original: **Matheus Gomes**. Referências de ferramentas mantidas nos respectivos guias. A [licença MIT original](LICENSE) e seu aviso de copyright foram preservados. Esta edição é uma adaptação comunitária; não é um produto oficial da OpenAI.
