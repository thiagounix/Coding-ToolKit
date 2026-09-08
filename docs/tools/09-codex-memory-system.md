# Memória de projeto no Codex

Este guia propõe documentação local e explícita. Ele não descreve o funcionamento de toda memória interna disponível em diferentes ambientes Codex.

## Estrutura sugerida

```text
AGENTS.md
docs/
  memory/
    INSTRUCTIONS.md
    MEMORY.md
    decisao-exemplo.md
```

`AGENTS.md` contém uma instrução para ler o índice quando houver trabalho relacionado. `INSTRUCTIONS.md` define critérios de atualização. `MEMORY.md` contém links curtos para notas.

Um arquivo chamado `MEMORY.md` não é carregado automaticamente por esse nome. Links não incluem o conteúdo do destino. A descoberta de instruções segue [AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md); a leitura das notas precisa ser explicitamente solicitada nas instruções ou na conversa.

## O que registrar

Registre decisões que uma sessão futura não conseguiria recuperar facilmente do código: uma regra de negócio confirmada, um motivo arquitetural ou uma limitação de ambiente que já provocou erro.

Evite duplicar código, histórico Git, prazos e detalhes temporários de depuração. Inclua data e evidência; fatos que mudam precisam de nova verificação.

## Atualização

Crie ou atualize notas quando o usuário solicitar. Respeite políticas de memória já fornecidas pelo ambiente, inclusive destinos específicos de escrita. O toolkit não autoriza alterações na memória pessoal global.

Mantenha um limite editorial, por exemplo 130 linhas não vazias no índice. Isso é uma convenção local, não um limite técnico do Codex.

Antes de remover conteúdo: buscar duplicatas → gravar no destino → ler de volta → atualizar o índice. Sem destino confirmado, preserve a informação e reporte o limite excedido.

## Exemplos

Boa entrada: “A integração externa exige idempotência por pedido; decisão e evidência em integracao-idempotente.md.”

Entrada pouco útil: “O projeto usa TypeScript”, quando package.json já informa isso.

Use o [prompt de criação inicial](../prompts/06-memory-bootstrap.md). Para notas extensas, veja [Obsidian](08-obsidian-memory.md).
