# Da ideia ao plano verificável

Use quando o pedido precisar de definição de escopo ou tiver várias etapas. Sol pode atender o planejamento; considere Astra para decisões arquiteturais difíceis.

## Prompt

```text
Analise este pedido: [PEDIDO].
Modo de entrega: [SOMENTE PLANO ou PLANEJAR E IMPLEMENTAR].

1. Leia o contexto disponível e as instruções do projeto. Identifique
   resultado esperado, limites de escopo, padrões existentes e restrições.

2. Se houver ambiguidade que impeça escolher corretamente, faça perguntas
   curtas e necessárias. Apresente interpretações e consequências.
   Para detalhes reversíveis, declare premissas razoáveis e avance.
   Não repita perguntas já respondidas nem peça confirmação por rotina.

3. Escreva um plano proporcional ao problema. Cada etapa deve indicar
   arquivos ou componentes, dependências, resultado e verificação concreta.
   Uma etapa sem forma de verificação precisa ser esclarecida.

4. Se o modo for SOMENTE PLANO, entregue o plano e as decisões pendentes.
   Se for PLANEJAR E IMPLEMENTAR e o escopo estiver autorizado e claro,
   execute-o. Aguarde apenas decisões necessárias ainda ausentes.

5. Ao implementar, rode as verificações de cada etapa. Corrija regressões
   antes de avançar. Na entrega, informe resultados observados, arquivos
   alterados e limitações. Responda em português do Brasil.
```

## Exemplo

Pedido: “Adicione cupom ao checkout”. É necessário saber como o desconto funciona, se acumula e quando expira. Depois de definidos esses pontos, o plano pode cobrir validação, cálculo e testes de cupom válido, expirado e inexistente.

O [processo inspirado em Superpowers](../tools/01-superpowers.md) oferece contexto. Esta versão não exige um plugin nem uma aprovação repetida para trabalho já solicitado.
