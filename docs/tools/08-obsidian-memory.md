# Obsidian como memória de longo prazo

Um cofre do Obsidian pode organizar notas duradouras em Markdown. A [memória curta de projeto](09-codex-memory-system.md) aponta para o que importa; o cofre guarda detalhes consultados sob demanda.

## Estrutura sugerida

| Pasta | Conteúdo |
| --- | --- |
| projetos | Decisões ligadas a trabalhos em andamento |
| areas | Responsabilidades contínuas |
| conhecimento | Lições reutilizáveis |
| referencias | Documentação e fontes externas |
| arquivo | Material que deixou de estar ativo |
| modelos | Estruturas de nota |

Essa é uma convenção proposta, não uma estrutura exigida pelo Obsidian.

## Acesso no Codex

Se usar um servidor MCP, configure a distribuição escolhida conforme seu contrato e a [referência MCP do Codex](https://learn.chatgpt.com/docs/extend/mcp). Confirme ferramentas de busca, leitura e escrita. O toolkit não fornece um servidor Obsidian.

MCP é um protocolo; ele não garante validação de metadados, modelos ou links. Verifique quais dessas regras o servidor realmente implementa. Uma política de acesso somente por MCP precisa de mecanismos efetivos do ambiente; escrever a regra em Markdown não cria isolamento.

## Nota sugerida

```markdown
---
titulo: Decisão de arredondamento
tipo: regra-de-negocio
data: 2026-09-05
---

# Decisão de arredondamento

## Contexto

[Onde a decisão se aplica.]

## Decisão e motivo

[Regra confirmada e razão para mantê-la.]

## Evidência

[Referência verificável, sem segredos.]

## Relações

[Links para outras notas existentes.]
```

## Migrar uma entrada

Quando a atualização de memória for solicitada, procure duplicatas, adapte ao modelo do destino, grave a nota e leia-a de volta. Só depois remova a entrada antiga ou substitua-a por um link. Se a leitura falhar, preserve a origem.

Não configure captura automática de conversas nem envio de conteúdo a um cofre externo apenas para adotar o toolkit.
