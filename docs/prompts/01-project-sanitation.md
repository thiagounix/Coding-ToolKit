# Limpeza de projeto

Use para remover resíduos de código sem alterar comportamento. O princípio é medir antes de agir e separar remoções comprovadas de casos ambíguos.

## Preparação

Substitua os campos pelos comandos reais do projeto. Use `não se aplica` onde não houver uma verificação. Terra atende limpezas delimitadas; considere Sol para investigação entre módulos. Selecione o modelo no cliente.

## Prompt

```text
Faça uma limpeza em [ROOT_PATH], no projeto [STACK/FRAMEWORK], preservando
comportamento e alterações preexistentes do usuário.

1. Leia as instruções aplicáveis e confirme os comandos:
   - Lint: [LINT_COMMAND]
   - Tipos: [TYPECHECK_COMMAND]
   - Testes: [TEST_COMMAND]
   - Compilação: [BUILD_COMMAND]
   - Auditoria de dependências: [DEPENDENCY_AUDIT_COMMAND]
   Execute as verificações aplicáveis e registre resultados, contagens e falhas
   preexistentes. Não estime resultados nem confunda auditoria de vulnerabilidades
   com detecção de dependências sem uso.

2. Faça um inventário antes de corrigir: exports sem consumidores aparentes,
   caminhos inalcançáveis, arquivos órfãos, TODO/FIXME/XXX e dependências em
   [PACKAGE_MANIFEST]. Indique arquivo, linha, evidência e incerteza.

3. Separe as mudanças:
   - Comprovadamente mecânicas e dentro do pedido: execute em passos pequenos.
   - Uso ambíguo por reflexão, importação dinâmica, API pública, requisito
     transitivo ou plugin: investigue; se faltar decisão, pergunte e preserve.
   - Dívida arquitetural e mudança de comportamento: reporte fora desta limpeza.
   Ausência de referências textuais, sozinha, não prova que um arquivo é inútil.
   Continue o trabalho independente enquanto uma decisão necessária estiver pendente.
   Silêncio não autoriza remoções ambíguas.

4. Verifique cada mudança com o comando pertinente. Corrija regressões antes
   de avançar. Não faça refatorações adjacentes nem agrupe itens sem relação.

5. Ao terminar, rode as verificações afetadas e apresente antes/depois,
   arquivos alterados, itens preservados e motivos. Não declare uma correção
   sem evidência. Responda em português do Brasil.
```

## Exemplo

Para uma API Node.js, use `package.json` e os scripts que ela realmente declara. Se a auditoria só detectar pacotes sem uso, não reporte “zero vulnerabilidades” a partir dela.

Para avisos de lint especificamente, use o [prompt 02](02-eslint-warning-burndown.md).
