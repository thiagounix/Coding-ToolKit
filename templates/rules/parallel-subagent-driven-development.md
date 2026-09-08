# Desenvolvimento com subagentes em ondas

## Aplicabilidade

Leia este protocolo quando houver delegação solicitada ou prevista nas instruções aplicáveis. Ele não exige subagentes em toda tarefa e não registra tipos de agente no cliente.

## Preparação

Cada tarefa deve declarar:

- ID e objetivo.
- Arquivos que poderá criar ou modificar.
- Dependências diretas e interfaces envolvidas.
- Recursos compartilhados, como banco, portas e arquivos gerados.
- Papel responsável, restrições e verificações.
- Estado e evidências esperados na entrega.

Se o escopo ou as dependências forem incertos, esclareça-os ou execute em sequência. Não assuma um conjunto de arquivos menor do que o conhecido.

## Formação das ondas

Duas tarefas podem compartilhar a onda quando não dependem uma da outra, nem transitivamente, e seus conjuntos de escrita são disjuntos. Recursos compartilhados também precisam permitir concorrência.

O mesmo arquivo de log, manifesto ou lockfile não pode ter dois responsáveis simultâneos. Uma cadeia linear gera uma tarefa por onda.

## Execução

1. Entregue um contrato completo a cada implementador, incluindo armadilhas conhecidas.
2. Dispare somente o número de tarefas suportado pelo ambiente.
3. Cada implementador edita, verifica e relata; não faz commits no diretório compartilhado.
4. Aguarde todas as escritas da onda e confira os arquivos efetivamente tocados.
5. Integre e rode as verificações necessárias sobre o conjunto.
6. Revise um diff estável por tarefa e remova duplicatas entre achados.
7. Se commits estiverem autorizados, o coordenador os cria em ordem, conferindo o HEAD e os arquivos preparados antes de cada um.
8. Faça uma única atualização do registro da onda e avance.

Sem autorização para commits, a revisão usa os diffs locais. Não use git add . para capturar alterações de outras tarefas ou do usuário.

## Isolamento e alternativa sequencial

Worktrees podem isolar arquivos quando necessário; branches no mesmo diretório não bastam. Serviços externos ainda podem ser compartilhados. Integre e resolva conflitos antes de declarar conclusão.

Se não houver ferramenta de subagentes, execute sequencialmente e informe a limitação. Não apresente perspectivas do mesmo agente como revisões independentes.
