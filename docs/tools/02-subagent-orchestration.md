# Orquestração de subagentes no Codex

Subagentes são execuções separadas que recebem uma tarefa e devolvem resultados ao agente principal. Use-os para trabalho independente, quando solicitados ou previstos nas instruções aplicáveis. O agente principal também pode implementar.

A [documentação oficial](https://learn.chatgpt.com/docs/agent-configuration/subagents) descreve disponibilidade, delegação e herança de modelo. A execução paralela consome recursos adicionais; não é obrigatória para toda tarefa.

## Responsabilidades

| Papel | Trabalho |
| --- | --- |
| Coordenação | Fixar escopo, identificar dependências, integrar e verificar |
| Backend | Serviços, contratos e persistência |
| Frontend | Interface, estados, acessibilidade e integração |
| Dados | Consultas, migrações e consistência |
| Testes | Cenários de regressão e casos extremos |
| Revisão | Conferir falhas concretas no diff |
| Segurança | Analisar autorização, entradas e tratamento de dados |

Esses nomes descrevem papéis. Uma tabela não registra automaticamente tipos de agente no Codex. Use as ferramentas e agentes realmente disponíveis.

## Contrato de tarefa

Cada tarefa recebe ID, descrição, arquivos permitidos, dependências, interfaces consumidas e produzidas, verificações e armadilhas conhecidas. Não presuma que o subagente verá toda a conversa.

O retorno contém estado, arquivos alterados, comandos executados, resultados e pendências. Estados sugeridos: concluído, concluído com ressalvas, precisa de contexto ou bloqueado.

## Ondas

Agrupe tarefas apenas quando não houver dependência direta ou transitiva e os arquivos de escrita forem disjuntos. Verifique também recursos compartilhados: banco de testes, portas, fixtures e arquivos gerados. Dependência desconhecida exige execução sequencial até ser esclarecida.

Os implementadores não fazem commits no diretório compartilhado. O coordenador integra, verifica e, se solicitado, cria commits por tarefa. Use uma única escrita coordenada no registro da onda. Revise um diff estável, após encerrar as escritas.

Para colisões inevitáveis, execute em sequência ou use cópias isoladas com worktrees. Uma branch diferente no mesmo diretório não isola arquivos. Worktrees ainda podem compartilhar serviços externos.

## Modelos

Consulte [Terra, Sol e Astra](../03-modelos-codex.md). A escolha depende da tarefa, do acesso e da configuração suportada; a herança padrão é válida. Não invente parâmetros de ferramentas para forçar um modelo.

Sem suporte a subagentes, aplique as mesmas perspectivas em sequência e declare que não houve revisão independente.

Use o [prompt 05](../prompts/05-parallel-wave-dispatch.md) e o [protocolo completo](../../templates/rules/parallel-subagent-driven-development.md).
