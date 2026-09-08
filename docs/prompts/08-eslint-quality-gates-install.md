# Instalar regras de qualidade e medir violações

Este prompt copia três regras existentes. Ele não refatora os arquivos que violarem as regras.

## Atalho local

Com este toolkit acessível no ambiente, informe seu caminho:

```text
Leia o arquivo docs/prompts/08-eslint-quality-gates-install.md da minha cópia
local do toolkit e aplique o prompt no projeto de destino [ROOT_PATH].
Use MAX_LINES=350 e SOURCE_PATH apontando para templates/eslint do toolkit.
```

Não use a URL original para obter as instruções desta adaptação.

## Campos

- `[ROOT_PATH]`: pacote de destino.
- `[SOURCE_PATH]`: caminho absoluto para `templates/eslint` desta cópia.
- `[MAX_LINES]`: limite, por exemplo `350`.
- `[PACKAGE_MANAGER]`: gerenciador confirmado pelo lockfile.

## Prompt

```text
Instale os critérios de qualidade ESLint em [ROOT_PATH] copiando as regras
prontas de [SOURCE_PATH]. Não reescreva as regras e não corrija suas violações.

1. Leia o projeto antes de editar.
   Confirme gerenciador, lint existente, Node, ESLint, TypeScript, aliases,
   raiz de fontes, camada de apresentação, cliente de dados e logger.
   Se não for JavaScript/TypeScript, explique a incompatibilidade e pare.
   Preserve configurações e arquivos preexistentes; não os sobrescreva cegamente.

2. Confira compatibilidade.
   Os templates usam flat config, defineConfig e globalIgnores de eslint/config.
   Verifique esses exports na versão escolhida, além das peerDependencies.
   Mantenha eslint e @eslint/js na mesma versão principal compatível.
   Se a configuração for legada, reporte a migração antes de aplicá-la.
   Não rebaixe nem atualize uma versão principal sem considerar o escopo.

3. Copie estes arquivos:
   eslint-rules/utils.cjs       -> ./eslint-rules/utils.cjs
   eslint-rules/core-rules.cjs  -> ./eslint-rules/core-rules.cjs
   eslint-rules/index.cjs       -> ./eslint-rules/index.cjs
   eslint.config.mjs.example    -> base para ./eslint.config.mjs
   eslint.typed.config.mjs.example -> base para ./eslint.typed.config.mjs (só TS)
   verify.mjs                  -> ./verify-quality-gates.mjs

   Os três .cjs devem permanecer byte a byte iguais à origem.
   As configurações são modelos para incorporar ao que já existe.
   Se o destino de verify-quality-gates.mjs existir, use outro nome livre e
   informe o comando correspondente; não substitua um script do projeto.

4. Instale dependências compatíveis com [PACKAGE_MANAGER].
   Base: eslint e @eslint/js.
   TypeScript: typescript-eslint.
   Importações/fronteiras: eslint-plugin-import-x e resolver adequado.
   Instale somente o necessário e preserve o gerenciador e lockfile.
   Em JavaScript puro, remova import tseslint, seus presets, todas as regras
   @typescript-eslint e o comando lint:types; use as regras básicas equivalentes.
   Se retirar import-x, remova imports, aliases, settings e TODAS suas regras,
   inclusive as desativações em blocos de testes.

5. Adapte a configuração aos dados do passo 1.
   - Globs da raiz e extensões realmente usadas.
   - quality/max-lines: max [MAX_LINES].
   - quality/no-direct-data-access: modules, bindings e layers reais.
     extensions amplia a cobertura além dos diretórios; ajuste deliberadamente.
     Se não houver fronteira de dados, remova a regra.
   - Fronteiras import-x: target, from e except coerentes.
   - Exceção de console: apontar para o logger/entrada real e vir depois da ativação.
   - Globals do runtime e exclusões de dependências/saídas geradas.
   - Testes: globs reais e opção includeTests quando desejada.
   - Scripts próprios de automação: configurar o ambiente Node quando necessário,
     em vez de ignorar toda a pasta .codex ou .agents.

6. Incorpore scripts sem apagar os existentes.
   lint: eslint .
   lint:fix: eslint . --fix
   lint:types: eslint --config eslint.typed.config.mjs . (só TypeScript)
   Mantenha a análise consciente de tipos fora do caminho rápido inicialmente.

7. Execute node verify-quality-gates.mjs.
   Esperado: três linhas terminadas em ": ok" e código de saída 0.
   Se falhar, corrija instalação/cópia antes de confiar nas medições.
   Registre a finalidade do verificador ou remova somente a cópia criada nesta tarefa.

8. Rode o lint real, sem correções automáticas, e conte violações por regra.
   Regra sem violações pode ficar em error. Para dívida existente, use warn
   com contagem inicial documentada, ou uma exceção explícita curta e justificada.
   Não esconda violações em exclusões amplas. Não aumente [MAX_LINES].
   A opção ignore de quality/max-lines serve para exceções conhecidas, não
   para declarar como refatorados arquivos que continuam grandes.

9. Entregue arquivos copiados/adaptados, versões, comandos, contagens por regra,
   exceções e lista de arquivos acima do limite em ordem de tamanho.
   Não corrija essas violações: a instalação e a medição encerram esta tarefa.
```

## Exemplo

Para um projeto com banco em `src/db/index.ts` exportando `db`, confira o alias antes de preencher `modules`. Não copie `@/db` se o projeto não usa esse alias.

Depois da medição, use o [prompt 09](09-file-size-refactor.md). O [prompt 07](07-eslint-complete-setup.md) cobre a configuração mais ampla.
