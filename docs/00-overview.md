# Visão geral

Este toolkit organiza o desenvolvimento assistido por OpenAI Codex no VS Code. Ele fornece documentação, prompts e modelos de configuração; não é uma aplicação nem um instalador automático.

## Instruções de projeto

O `AGENTS.md` descreve comandos reais, convenções e critérios de entrega. Mantenha-o curto e verificável. Codex descobre instruções conforme a hierarquia do projeto; links Markdown não são importações automáticas. Veja a [referência oficial](https://learn.chatgpt.com/docs/agent-configuration/agents-md).

Coloque detalhes extensos em documentos separados e instrua o agente a lê-los quando forem relevantes. Um template não preenchido não é uma configuração concluída.

## Entender, planejar, implementar e verificar

Descubra o fluxo atual e o resultado esperado antes da edição. Uma correção pequena precisa de pouca cerimônia; uma alteração arquitetural precisa de dependências, alternativas e verificações.

O agente principal pode implementar. Subagentes entram quando solicitados ou previstos nas instruções aplicáveis, com escopo independente e capacidade disponível. Planejar não implica pedir aprovação novamente para trabalho já autorizado.

## Escolha de modelo

Use [Terra, Sol ou Astra](03-modelos-codex.md) conforme a dificuldade e o resultado observado. A troca acontece no cliente ou na configuração, não por uma declaração no prompt. Modelo mais capaz não elimina a necessidade de ler código, testar e revisar.

## Simplicidade e comunicação

Reutilize código e dependências antes de criar abstrações. Preserve padrões e evite refatorações adjacentes ao pedido. Segurança, acessibilidade e requisitos explícitos fazem parte da solução.

Responda em português do Brasil, com resultado, evidências e limitações. Preserve nomes de APIs, identificadores e mensagens de erro literais.

## Qualidade progressiva

Meça antes de corrigir. Regras novas podem começar em aviso, com contagem inicial documentada, e passar a erro quando a dívida for eliminada. Não aumente limites para simular progresso.

As regras prontas de [ESLint](tools/06-eslint-biome-quality-gates.md) atendem JavaScript/TypeScript. Projetos .NET, Python ou Flutter precisam de ferramentas próprias; identifique a solução ou pacote antes de executar comandos.

## Contexto e memória

Buscas direcionadas economizam contexto. Preserve a saída integral quando necessária para medir falhas e mantenha o código de saída das verificações.

A [memória local](tools/09-codex-memory-system.md) é documentação mantida deliberadamente. Um `MEMORY.md` arbitrário não é carregado automaticamente. Recursos de memória do ambiente têm políticas próprias e não devem ser substituídos por este toolkit.

## Integrações opcionais

MCP conecta ferramentas; skills fornecem procedimentos; hooks executam automações em eventos. São recursos distintos, com configuração e verificação próprias.

Comece pela [instalação](01-installation.md) e acrescente integrações quando houver um uso concreto.
