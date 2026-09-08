# Ponytail e simplicidade de engenharia

Ponytail aparece no toolkit original como inspiração para resolver problemas com o mínimo de complexidade necessário. Aqui esse comportamento é expresso em instruções de projeto, sem exigir instalação do plugin.

## Ordem de decisão

1. Confirme o problema e o comportamento necessário.
2. Procure uma solução já existente no projeto.
3. Considere biblioteca padrão e recursos nativos.
4. Reutilize uma dependência instalada quando adequado.
5. Implemente a menor mudança que atende aos critérios.
6. Verifique o resultado e seus efeitos colaterais.

Não crie abstrações para necessidades imaginadas, nem adicione configuração que ninguém pediu. Um diff pequeno no lugar errado continua sendo um erro: entender o fluxo faz parte do trabalho.

## Instrução para copiar

```text
Priorize soluções simples e os padrões existentes. Antes de criar uma abstração
ou dependência, procure uma solução no projeto e explique por que ela não basta.
Preserve segurança, acessibilidade, tratamento de erros e requisitos explícitos.
Verifique o resultado com os comandos adequados à mudança.
```

Adapte ao [AGENTS.md](../../templates/AGENTS.md.template). Essa instrução funciona com Terra, Sol e Astra; não troca o modelo nem ativa um modo oculto.

Referência de origem: projeto Ponytail, de Dietrich Gebert, citado na edição original.
