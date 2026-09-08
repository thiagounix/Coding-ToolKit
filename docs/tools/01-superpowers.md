# Superpowers e processo de desenvolvimento

A edição original colocava Superpowers no centro do fluxo de Claude Code. Nesta adaptação, preservamos o processo: entender o pedido, planejar, implementar, verificar e revisar.

## Uso no Codex

Comece com o [AGENTS.md](../../templates/AGENTS.md.template) e os [prompts locais](../prompts/). Eles expressam o processo sem depender de um plugin instalado.

Superpowers pode ser avaliado como integração opcional. Antes de instalar uma distribuição, confira sua origem, licença, instruções atuais para Codex e ferramentas exigidas. O toolkit não fornece esse plugin nem valida uma distribuição específica dele.

## Aplicar o processo

| Situação | Conduta |
| --- | --- |
| Pedido ambíguo | Esclarecer o resultado necessário e as restrições |
| Mudança pequena | Ler o trecho relevante, editar e verificar |
| Funcionalidade ampla | Planejar etapas e interfaces com verificações |
| Bug | Reproduzir, investigar a causa, corrigir e verificar regressão |
| Trabalho paralelo solicitado | Delimitar tarefas e recursos compartilhados |
| Entrega | Revisar diff, evidências e pendências |

A regra antiga de invocar uma skill por mera possibilidade de relevância foi substituída por seleção contextual. Não transforme uma correção simples em uma sequência de aprovações. Preserve decisões já tomadas pelo usuário.

## Prompts relacionados

- [Da ideia ao plano](../prompts/04-brainstorm-to-plan.md).
- [Ondas paralelas](../prompts/05-parallel-wave-dispatch.md).
- [Revisão especializada](../prompts/03-multi-agent-code-review.md).
- [Skills no Codex](13-codex-skills.md).

O processo ajuda a tornar resultados verificáveis; nenhum plugin garante correção por si só.
