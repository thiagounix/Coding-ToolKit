# Configuração completa de ESLint

Use para criar ou revisar uma configuração de lint em JavaScript/TypeScript. Para copiar somente as regras prontas, use o [prompt 08](08-eslint-quality-gates-install.md). Para corrigir avisos existentes, use o [prompt 02](02-eslint-warning-burndown.md).

O objetivo é uma configuração ajustada ao projeto, não instalar todos os plugins disponíveis. Sol é uma opção para essa análise; selecione o modelo no Codex.

## Campos

Preencha `[ROOT_PATH]` com o pacote de destino, `[MAX_LINES]` com o limite desejado, normalmente 350, e `[FORMATTER]` com o formatador existente ou “nenhum”. Os demais caminhos devem ser descobertos no projeto.

## Prompt

```text
Configure ESLint no pacote [ROOT_PATH], preservando as convenções e alterações
existentes. Responda em português do Brasil.

1. Detectar antes de instalar
   Leia package.json, lockfile, configurações de lint e tsconfig.
   Identifique JavaScript ou TypeScript, runtime, versão do Node, framework,
   testes, raízes de código, aliases, camadas, logger e código gerado.
   Não aplique estas regras a .NET, Python ou Flutter.
   Vue, Svelte e outros formatos exigem parsers próprios; não trate suas
   árvores de sintaxe como se fossem JS/TS puro.

2. Definir compatibilidade
   Use flat config em eslint.config.mjs. Confira a versão de ESLint instalada,
   seus exports e as peerDependencies dos plugins.
   Os exemplos usam defineConfig e globalIgnores de eslint/config.
   Mantenha eslint e @eslint/js na mesma versão principal compatível.
   Não atualize nem rebaixe uma versão principal silenciosamente.
   Detecte configurações legadas e descreva a migração necessária.

3. Instalar somente o que se aplica
   Base: eslint e @eslint/js.
   TypeScript: typescript-eslint.
   Fronteiras/importações: eslint-plugin-import-x e um resolver adequado.
   React/Next.js: apenas os plugins correspondentes à versão real.
   Segurança e ORM: somente regras compatíveis com o domínio e o pacote.
   Respeite o gerenciador de pacotes e atualize seu lockfile.

4. Compor a configuração
   Declare globs e globals do runtime real. Use os presets compatíveis,
   com ajustes explícitos; não invente chaves de versões não instaladas.
   Em TypeScript, evite duplicar regras de variáveis não usadas com a versão
   do ESLint básico. Em JavaScript puro, remova parser, presets e regras TS.
   Blocos posteriores prevalecem: exceções devem vir depois da ativação.

5. Definir severidade e formatação
   Use error para invariantes acordadas e verificações confiáveis.
   Use warn para pressão de refatoração e heurísticas com falsos positivos.
   Registre violações existentes antes de promover regras para error.
   Não desative regras estritas globalmente sem justificativa específica.
   [FORMATTER] cuida de formatação, se existir. Não reformate todo o legado.
   eqeqeq verifica coerção na comparação e é uma regra de lógica, não
   formatação. Avalie-a como tal; Prettier não substitui essa verificação.

6. Orçamento inicial de manutenção
   Considere em produção:
   complexity 12; max-depth 4; max-statements 20; max-params 4;
   max-lines-per-function com max 150, skipBlankLines e skipComments;
   max-nested-callbacks 3. Comece em warn e adapte com evidência.
   Para limite por arquivo, use quality/max-lines com max [MAX_LINES].
   Meça antes de tornar esse limite bloqueante. Não aumente-o para esconder dívida.
   Nos testes, alivie regras que gerem ruído de estrutura quando justificável,
   preserve verificações úteis e use includeTests: true se quiser medir tamanho.

7. Fronteiras de arquitetura
   Impeça importações que violem camadas realmente existentes.
   Separe fronteiras consolidadas em error e dívida conhecida em warn.
   Se usar import-x com dois níveis, registre aliases distintos.
   Em no-restricted-paths, except é relativo a from; não isenta o importador.
   Para isentar importadores, ajuste target. Inclua barrels irmãos quando
   o glob de diretório não os cobrir. Não bloqueie tipos compartilhados legítimos.

8. Regras locais
   Prefira as três regras fornecidas em templates/eslint/eslint-rules:
   quality/max-lines, quality/no-direct-console e quality/no-direct-data-access.
   Adapte modules, bindings, layers, extensions e o caminho do logger.
   Remova a regra de acesso a dados se não houver essa fronteira no projeto.
   Registre CommonJS e globals Node para os arquivos .cjs.

   Regras adicionais só quando o domínio exigir e não houver solução adequada:
   - Dinheiro: centralizar operações em helpers que preservem precisão.
     Heurísticas por nome não provam que um valor é monetário; teste falsos positivos.
   - Componentes de entrada: respeitar primitivas do design system e limites
     de texto. Não proibir controles nativos que o projeto usa legitimamente.
   - Autorização: conferir handlers e helpers reais; encontrar uma chamada
     de autenticação não prova que o retorno foi validado nem que autoriza o recurso.
   Essas regras extras são propostas; o toolkit não entrega suas implementações.
   Se implementar uma regra, valide casos válidos e inválidos com RuleTester.

9. Separar lint consciente de tipos
   Para TypeScript, crie eslint.typed.config.mjs com projectService e regras
   apropriadas, usando o template fornecido. Inicie avisos sem baseline em warn.
   Use lint:types separado. Meça o custo antes de incluí-lo em hooks ou CI
   bloqueante; ele monta um programa TypeScript e pode consumir muita memória.
   Não crie esse comando para JavaScript puro.

10. Scripts, exclusões e integração
    Preserve scripts existentes. Sugestões:
    lint: eslint .
    lint:fix: eslint . --fix
    lint:types: eslint --config eslint.typed.config.mjs . (somente TypeScript)
    Use o comando real do formatador; Prettier, Biome e dprint têm sintaxes distintas.
    Ignore saídas geradas e dependências com justificativa. Não exclua scripts
    próprios de .codex ou .agents apenas pela pasta; dê a eles configuração adequada.
    Se usar cache, invalide-o ao alterar regras locais; faça a medição final sem cache.
    Integre o lint rápido aos hooks Git/CI existentes quando fizer parte do pedido.

11. Verificar e entregar
    Carregue a configuração, rode lint real e teste regras locais.
    Confira um arquivo de produção, um teste, um .cjs e aliases relevantes.
    Execute as verificações afetadas pelo ajuste.
    Entregue configuração utilizável, comandos, versões, contagens por regra,
    exceções justificadas e limitações. Não confunda instalar lint com corrigir
    toda a dívida que ele revelou.
```

## Notas de compatibilidade

Os modelos de configuração usam recursos documentados na [evolução do flat config do ESLint](https://eslint.org/blog/2025/03/flat-config-extends-define-config-global-ignores/). A linha 9 é a base histórica do toolkit; escolha uma versão mantida e compatível no destino, sem presumir que a versão mais recente de cada plugin funcione em conjunto.

A [referência de qualidade](../tools/06-eslint-biome-quality-gates.md) explica as principais decisões.
