# Redução progressiva de avisos de lint

Use depois de configurar o linter. Para instalação, consulte o [prompt 08](08-eslint-quality-gates-install.md); para tamanho de arquivos, o [prompt 09](09-file-size-refactor.md).

## Preparação

Preencha `[RULE_NAME]` com uma regra ou “todas as regras”. Use os comandos existentes de lint, tipos, testes e compilação. Considere Sol quando as correções atravessarem módulos.

## Prompt

```text
Planeje e execute a redução de avisos de [RULE_NAME] em [STACK/FRAMEWORK].
Preserve comportamento e mantenha o escopo autorizado.

1. Rode [LINT_COMMAND] e registre a contagem atual por regra e arquivo.
   Se a saída estiver truncada, obtenha o relatório completo. Não reutilize
   contagens de memória, mensagens anteriores ou commits.

2. Identifique a parte de maior risco ou custo com números reais. Diferencie:
   corrigir violações; manter exceções rastreadas; mudar o escopo da regra.
   Afrouxar configuração não equivale a corrigir código. Não reduza severidade,
   aumente limites ou adicione supressões silenciosamente.
   Siga decisões já autorizadas. Se surgir uma escolha necessária ainda ausente,
   pergunte sobre essa área e continue as correções independentes. Não trate
   ausência de resposta como aprovação.

3. Defina sucesso por comandos e resultados esperados:
   [LINT_COMMAND], [TYPECHECK_COMMAND], [TEST_COMMAND], [BUILD_COMMAND].
   Registre o que não se aplica e as falhas preexistentes.
   Separe mudanças de comportamento do trabalho mecânico de lint.

4. Agrupe o trabalho por escopo e dependências. Use execução sequencial por
   padrão. Se houver delegação solicitada ou prevista nas instruções aplicáveis,
   siga o protocolo de ondas em 05-parallel-wave-dispatch.md.
   Inclua em cada tarefa as armadilhas concretas: arquivos próximos do limite,
   cache de regras locais, inferência de tipos e fixtures compartilhadas.

5. Revise o diff de cada grupo por risco, linguagem e framework relevantes.
   Para áreas sensíveis, confira cenários de autorização e integridade de dados.
   Não apresente revisão sequencial própria como pareceres independentes.

6. Rode novamente as verificações finais pertinentes e reporte:
   contagem inicial/final por regra; arquivos alterados; supressões e motivos;
   mudanças não mecânicas separadas; resultados e limitações da revisão.
   Marque como concluído somente o que foi comprovado.
```

## Exemplo

Se uma regra gerar 240 avisos e 180 estiverem em seis arquivos legados, exponha essa concentração. Corrigir os outros 60 pode avançar enquanto uma decisão real sobre os seis arquivos permanece pendente.

Os números do exemplo são ilustrativos; as contagens da entrega devem vir do linter.
