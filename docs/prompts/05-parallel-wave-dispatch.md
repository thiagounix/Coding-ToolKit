# Distribuição de tarefas em ondas paralelas

Use quando quiser delegar uma lista de tarefas. Este prompt solicita explicitamente subagentes. Sem suporte, a alternativa é execução sequencial.

## Prompt

```text
Organize e execute [FEATURE/PLAN/TASK LIST] em ondas de subagentes.
Leia o protocolo de desenvolvimento em ondas fornecido com o toolkit.

1. Para cada tarefa, descreva ID, objetivo, arquivos de escrita, dependências,
   interfaces, recursos compartilhados, papel responsável e verificações.
   Use nomes de papéis do projeto, não tipos de agente inventados.

2. Agrupe na mesma onda somente tarefas sem dependência direta ou transitiva
   e sem sobreposição de arquivos. Confira banco, portas, fixtures, manifestos,
   lockfiles e arquivos gerados. Se houver incerteza, execute em sequência.
   Apresente uma tabela com onda, tarefas, responsáveis e dependências.

3. Entregue a cada subagente um contrato completo com restrições e armadilhas.
   Dispare tarefas independentes até o limite real do ambiente. Não simule
   paralelismo nem escolha parâmetros de modelo não suportados.
   Cada implementador verifica o trabalho e relata arquivos e resultados;
   não faz commits no diretório compartilhado.

4. Aguarde todas as escritas da onda. Confira os arquivos efetivos, integre
   as alterações e execute verificações sobre o conjunto. Revise um diff estável.

5. Se commits fizerem parte do pedido, o coordenador cria um por tarefa,
   conferindo o HEAD e os arquivos preparados antes de cada commit.
   Caso contrário, entregue os diffs locais revisados. Faça uma única escrita
   coordenada no registro da onda.

6. Avance após integração e verificação. Se surgir sobreposição, reagrupe
   as tarefas; use worktrees apenas quando o isolamento for necessário.
   Branches diferentes no mesmo diretório não isolam arquivos.

7. Reporte tarefas concluídas, evidências, pendências e limitações.
   Se não houver subagentes disponíveis, execute em sequência e informe isso.
```

## Exemplo de dependências

| Onda | Tarefa | Dependência |
| --- | --- | --- |
| 1 | T01 — criar esquema de relatório | Nenhuma |
| 1 | T04 — corrigir texto em arquivo independente | Nenhuma |
| 2 | T02 — endpoint que usa o esquema | T01 |
| 3 | T03 — interface que usa o endpoint | T02 |

Essa divisão pressupõe que os recursos usados por T01 e T04 também sejam independentes. Veja o [protocolo completo](../../templates/rules/parallel-subagent-driven-development.md).
