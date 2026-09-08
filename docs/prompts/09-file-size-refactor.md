# Dividir arquivos grandes por responsabilidade

Use depois da medição do [prompt 08](08-eslint-quality-gates-install.md). O objetivo é preservar comportamento e interfaces, extraindo módulos coesos.

## Campos

| Campo | Exemplo |
| --- | --- |
| [LINT_COMMAND] | npm run lint |
| [TEST_COMMAND] | npm test |
| [TYPECHECK_COMMAND] | npm run typecheck, ou nenhum |
| [MAX_LINES] | 350 |
| [BATCH_SIZE] | 3 |
| [RULE_ID] | quality/max-lines |
| [STACK/FRAMEWORK] | Tecnologias reais do projeto |

Os comandos da tabela são exemplos. Confirme os scripts do destino.

## Prompt

```text
Refatore os arquivos acima de [MAX_LINES] linhas em [STACK/FRAMEWORK],
preservando comportamento e exportações públicas.

1. Rode [LINT_COMMAND] e obtenha a lista completa de arquivos apontados por
   [RULE_ID], com contagem atual, do maior para o menor. Mostre a lista antes
   de editar. Não use números de memória ou relatórios truncados.

2. Selecione os [BATCH_SIZE] maiores como lote fechado.
   Para cada arquivo, identifique responsabilidade atual, pontos naturais
   de separação, exportações e consumidores.

3. Extraia por responsabilidade:
   - Lógica de negócio para serviço de domínio ou caso de uso.
   - Blocos de interface reutilizáveis para componentes.
   - Acesso a dados para repositório ou adaptador.
   - Funções de um mesmo conceito para módulo específico desse domínio.
   Não corte por número arbitrário de linhas e não crie um utils genérico
   apenas para acomodar sobras.
   Se não houver separação natural, preserve o arquivo, reporte o motivo
   e examine o próximo arquivo do lote, sem ampliar o lote por conta própria.

4. Preserve nomes e assinaturas das exportações públicas. Quando adequado,
   mantenha o arquivo original como fachada que reexporta os novos módulos.
   Só remova o arquivo e ajuste consumidores quando isso fizer parte do
   escopo definido. Confira inferência de tipos nos pontos de chamada.

5. Trabalhe em um arquivo por vez:
   faça a extração; rode [TYPECHECK_COMMAND], se aplicável; rode [TEST_COMMAND];
   rode [LINT_COMMAND] e confira a ausência de novas violações.
   O arquivo de destino não pode simplesmente herdar o mesmo problema de tamanho.
   Corrija regressões antes de avançar.
   Se commits forem solicitados, crie um por extração verificada; caso contrário,
   mantenha o diff revisável e relate as alterações.

6. Encerre após o lote. Rode a medição final e reporte arquivos divididos,
   responsabilidades extraídas, arquivos preservados e motivos, lista atual
   dos que ainda ultrapassam o limite e efeitos colaterais encontrados.
   Não aumente o limite nem compacte a formatação para esconder o problema.
   Responda em português do Brasil.
```

## Exemplo

Um componente de 780 linhas mistura cálculo de totais e renderização. Extraia o cálculo e teste sua equivalência; depois avalie componentes visuais coesos. Um parser longo, mas coeso, pode permanecer com justificativa.

Se o lote tiver três arquivos e somente dois forem divididos, não subtraia automaticamente três da contagem inicial: rode o linter novamente.

Finalize com a [revisão especializada](03-multi-agent-code-review.md).
