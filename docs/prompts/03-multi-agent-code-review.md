# Revisão especializada de código

Use para revisar um diff ou PR por perspectivas complementares. Sol é uma escolha possível para revisão geral; Astra pode ajudar em análise difícil. O cliente seleciona o modelo.

## Campos

- `[DIFF/PR/BRANCH]`: diff, PR acessível ou branch com base explícita.
- `[LANGUAGE]`: linguagem relevante.
- `[FRAMEWORK]`: framework, ou “não se aplica”.

## Prompt

```text
Revise [DIFF/PR/BRANCH], em [LANGUAGE] e [FRAMEWORK], sem alterar arquivos.
Confirme a base e o escopo real do diff, incluindo arquivos novos relevantes.

Use subagentes independentes para as perspectivas aplicáveis abaixo, se
a ferramenta estiver disponível e as instruções do ambiente permitirem.
Esta solicitação autoriza a delegação de revisão. Não faça uma revisão
prévia que induza os pareceres dos subagentes.

- Correção: comportamento, erros, regressões e lacunas de testes.
- Segurança: autorização, entradas não confiáveis, injeção e segredos.
- Linguagem: tipos, conversões, async e concorrência.
- Framework: ciclo de vida, componentes, acessibilidade e estados de interface.

Entregue o mesmo diff estável e os requisitos a cada revisor. Cada achado
deve conter arquivo:linha, gravidade, descrição curta e cenário concreto
de falha. Não invente CVEs; confirme alegações sobre dependências em fontes
atuais. Descarte suspeitas sem sustentação.

Aguarde os pareceres e sintetize:
1. Agrupe achados da mesma causa.
2. Confira contra o código e descarte problemas já tratados.
3. Ordene por gravidade: crítico, alto, médio e baixo.
4. Separe sugestões opcionais de falhas reais.

Reporte uma única lista com evidências e limitações. Diga claramente se
nenhum problema verificável foi encontrado; isso não prova ausência de bugs.

Se subagentes não estiverem disponíveis, faça passagens sequenciais pelas
mesmas perspectivas e declare que não houve revisão independente.
```

## Exemplo

Uma mudança que altera endpoint e formulário exige verificar validação no servidor, tratamento do erro na tela e testes do contrato. Dois revisores apontando a mesma validação ausente devem produzir um achado consolidado.

Veja [orquestração](../tools/02-subagent-orchestration.md).
