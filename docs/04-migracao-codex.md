# Análise e registro da adaptação para Codex

Data: **5 de setembro de 2026**. Base analisada: commit `13add21194467dfd2fc5b408ddb3398d306a4c78` do toolkit original. O diretório de trabalho estava sem alterações no início.

## 1. O que já existia para OpenAI

O README mencionava Codex, mas a instalação principal usava Claude Code e seu marketplace. O template CLAUDE.md sugeria AGENTS.md como fonte compartilhada opcional. Graphify e os prompts de ESLint também reconheciam uso com outros agentes.

Isso constituía compatibilidade conceitual parcial. Não havia guia próprio de configuração Codex, template TOML, roteiro para Terra/Sol/Astra ou instruções completas para o VS Code. A seleção de modelos era exemplificada por Haiku, Sonnet e Opus.

A maior parte das explicações já estava em português. Os blocos de prompt e as instruções dos templates estavam em inglês. O README afirmava superioridade universal do inglês para prompts, sem evidência apresentada.

## 2. Viabilidade e decisão

A adaptação é viável porque o núcleo é documentação e scripts independentes de provedor. Não há uma aplicação com chamadas à API Anthropic para substituir.

O caminho principal passou a usar Codex, AGENTS.md, configuração TOML, prompts locais em português e recursos opcionais. Configurações de terceiros não foram tratadas como equivalentes apenas por semelhança de nomes.

Terra, Sol e Astra foram confirmados nas páginas oficiais de [Terra](https://developers.openai.com/api/docs/models/gpt-5.6-terra), [Sol](https://developers.openai.com/api/docs/models/gpt-5.6-sol) e [Astra](https://developers.openai.com/api/docs/models/gpt-6-astra). A orientação de tarefas é uma recomendação desta edição; não foi feito um teste comparativo de modelos.

## 3. Documentação principal

| Arquivo | Alteração e motivo |
| --- | --- |
| README.md | Entrada voltada ao Codex, índice revisado, modelos e créditos explícitos |
| AGENTS.md | Instruções reais para manter este repositório documental |
| docs/00-overview.md | Princípios adaptados; agente principal pode implementar |
| docs/01-installation.md | Extensão, PowerShell, CLI opcional e incorporação de TOML |
| docs/02-playbook-onboarding.md | Percurso completo no VS Code com exemplo e verificações |
| docs/03-modelos-codex.md | IDs, seleção, esforço de raciocínio e disponibilidade |
| docs/04-migracao-codex.md | Diagnóstico, rastreabilidade das decisões e limites da validação |

Os documentos foram reestruturados e condensados: preservamos os procedimentos úteis, traduzimos instruções e substituímos exemplos dependentes de Claude. Não é uma tradução literal linha a linha. Tutoriais repetitivos, comandos específicos do antigo cliente e afirmações promocionais deram lugar ao fluxo Codex verificável. O conteúdo original permanece no commit de referência do Git.

## 4. Ferramentas e práticas

Os caminhos da tabela são relativos a docs/tools.

| Arquivo | Adaptação |
| --- | --- |
| 01-superpowers.md | Processo portátil; plugin opcional, sem ritual obrigatório para toda edição |
| 02-subagent-orchestration.md | Delegação condicionada ao pedido/instruções e capacidade real; alternativa sequencial |
| 03-rtk-token-proxy.md | Busca focada e preservação de erros; nenhum binário RTK fictício |
| 04-ponytail.md | Simplicidade expressa em instruções de projeto |
| 05-caveman.md | Comunicação objetiva em português natural |
| 06-eslint-biome-quality-gates.md | Regras mantidas, limites documentados e exemplos técnicos corrigidos |
| 07-graphify.md | Integração opcional; removida instalação específica de Claude do fluxo principal |
| 08-obsidian-memory.md | Convenção de notas e validação dependente do servidor escolhido |
| 09-codex-memory-system.md | Memória documental local, com leitura explícita e atualização solicitada |
| 09-claude-memory-system.md | Referência curta para preservar o caminho antigo |
| 10-hooks-best-practices.md | Contrato Codex, script utilizável e teste isolado |
| 11-agent-browser.md | Validação com navegador disponível e CLI opcional |
| 12-context7.md | Registro MCP com Codex e consulta por versão de biblioteca |
| 13-codex-skills.md | Descoberta de skills, origem e critérios de compatibilidade |
| 13-anthropics-skills.md | Referência curta para preservar o caminho antigo |
| 14-chrome-devtools-mcp.md | Registro no Codex e diagnóstico orientado por evidências |

Papéis de especialista em uma tabela não criam agentes instalados. As ondas consideram recursos compartilhados além dos arquivos. Commits não são mais um efeito obrigatório de todo prompt.

## 5. Nove prompts traduzidos e adaptados

Os caminhos são relativos a docs/prompts. Campos técnicos estáveis, como MAX_LINES e RULE_ID, foram preservados.

| Arquivo | Resultado |
| --- | --- |
| 01-project-sanitation.md | Inventário e limpeza com evidência; ausência de referências não prova inutilidade |
| 02-eslint-warning-burndown.md | Contagem real, correções graduais e decisões sem aprovação presumida por silêncio |
| 03-multi-agent-code-review.md | Revisão independente quando disponível, síntese e alternativa explícita |
| 04-brainstorm-to-plan.md | Escolha entre somente planejar e implementar; respeita autorização existente |
| 05-parallel-wave-dispatch.md | Contratos, dependências, isolamento e coordenação de commits |
| 06-memory-bootstrap.md | Criação local autorizada, política de leitura e migração sem perda de informação |
| 07-eslint-complete-setup.md | Detecção da tecnologia, plugins aplicáveis e separação da análise de tipos |
| 08-eslint-quality-gates-install.md | Cópia local das regras, adaptação completa para JS/TS e medição |
| 09-file-size-refactor.md | Extração por responsabilidade, interfaces preservadas e lote delimitado |

Os atalhos não apontam mais para prompts remotos da edição original, que poderiam ignorar esta adaptação.

## 6. Templates e código

| Arquivo | Alteração |
| --- | --- |
| templates/AGENTS.md.template | Novo modelo em português para projetos de destino |
| templates/codex/config.toml.example | Sol como padrão sugerido; Terra e Astra como alternativas comentadas |
| templates/codex/hooks.json.example | Novo exemplo SessionStart, com caminho de destino a preencher |
| templates/hooks/session-start.mjs | Novo script opcional que retorna orientação em português |
| templates/hooks/hook-io.mjs.example | Validação de objeto: rejeita null, primitivas, arrays e JSON inválido |
| templates/rules/parallel-subagent-driven-development.md | Protocolo em português com revisão de diff estável |
| templates/README.md | Destinos, ativação explícita e identificação dos exemplos antigos |
| templates/CLAUDE.md.template | Compatibilidade opcional que referencia AGENTS.md |
| templates/eslint/eslint.config.mjs.example | Removida exclusão específica de .claude; scripts próprios exigem configuração adequada |
| templates/eslint/verify.mjs | Comentário de execução atualizado para o caminho portátil |

Os três arquivos de implementação em templates/eslint/eslint-rules foram preservados. Nomes de APIs, regras, pacotes, mensagens contratuais e código reutilizável mantêm seus identificadores originais. A licença e o copyright original não foram traduzidos nem alterados.

O antigo templates/settings.json.example permanece identificado como legado, com scripts ilustrativos ausentes. Não deve ser usado para configurar Codex. O novo exemplo tem seu próprio script fornecido.

## 7. Correções conceituais adicionais

- Um nome de modelo no prompt não altera o modelo ativo.
- Um MEMORY.md arbitrário e os destinos de links Markdown não são carregados automaticamente.
- MCP não garante por si só validação de notas ou controle de acesso ao cofre.
- O inglês deixou de ser apresentado como requisito para bons prompts.
- eqeqeq verifica comparação/coerção; não pertence à responsabilidade de um formatador.
- O exemplo com split agora rejeita segmentos extras e preserva o formato validado.
- A explicação de inferência de tipos não atribui perda de precisão automaticamente à troca de arrow function por função nomeada.
- Regras de lint têm limites de cobertura; não substituem testes nem comprovam segurança.

## 8. Validação e limites

Verificações executadas com Node.js 24.17.0, dependências isoladas em `.tmp/codex-validation` e ajuda da CLI instalada, codex-cli 0.145.0:

| Verificação | Resultado |
| --- | --- |
| Markdownlint CLI2 0.23.2 | 36 documentos/templates; nenhum problema |
| Links e estrutura | 118 links locais válidos; UTF-8 e blocos de código conferidos |
| TOML e JSON Codex | Sintaxe e campos dos exemplos conferidos |
| Scripts de hooks | Entrada válida, inválida, null, primitivas, arrays e evento diferente conferidos |
| Verificador original de regras | Três regras com resultado ok, usando ESLint 10.10.0 |
| Configurações ESLint | Carregamento de produção, logger, testes, CommonJS e camada de tipos conferido |
| Execução de lint | Exemplo TypeScript mínimo sem erros |
| Integridade | git diff --check passou; LICENSE e as três implementações de regras iguais à base |

A verificação Markdown não impôs largura máxima de linha e permitiu títulos repetidos em seções diferentes. A verificação de links locais não foi uma auditoria de disponibilidade de todos os sites externos. A camada de tipos foi conferida na configuração; não foi executada sobre uma aplicação real.

As dependências de validação ficaram na pasta temporária ignorada pelo Git, sem introduzir package.json na raiz nem dependências de aplicação. A documentação foi confrontada com as fontes oficiais listadas abaixo.

Não foram alteradas configurações pessoais do Codex, contas, permissões ou conexões MCP. Os exemplos não foram ativados na extensão. Portanto, a validação local de scripts e formatos não comprova instalação de plugins, execução real de hooks no editor ou acesso aos três modelos pela conta do usuário.

## Fontes de configuração

- [Extensão Codex no VS Code](https://learn.chatgpt.com/docs/codex/ide).
- [Configuração Codex](https://learn.chatgpt.com/docs/config-file/config-basic).
- [AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md).
- [Subagentes](https://learn.chatgpt.com/docs/agent-configuration/subagents).
- [Skills](https://learn.chatgpt.com/docs/build-skills).
- [MCP](https://learn.chatgpt.com/docs/extend/mcp).
- [Hooks](https://learn.chatgpt.com/docs/hooks).

Para usar a edição, comece pela [instalação](01-installation.md) e pelo [guia prático](02-playbook-onboarding.md).
