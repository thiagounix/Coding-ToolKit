# Critérios de qualidade: ESLint e Biome

As regras deste toolkit são independentes do modelo de IA. Codex executa as ferramentas do projeto; escolher Terra, Sol ou Astra não muda o significado do lint.

## Papel de cada ferramenta

Um linter analisa padrões que podem representar bugs, dívida ou violação de convenções. Um formatador organiza a apresentação do código. Biome pode cobrir ambos; ESLint se concentra aqui na análise de código.

Use uma única responsabilidade por regra. Se Biome detectar variáveis sem uso e ESLint fizer o mesmo, decida qual deve responder por essa verificação. Dois linters são opcionais: mantenha apenas os que trouxerem valor ao projeto.

## Severidade e dívida

| Nível | Uso |
| --- | --- |
| off | Regra não aplicável ou exceção justificada |
| warn | Dívida medida ou heurística que merece avaliação |
| error | Invariante acordada que deve impedir regressão |

Introduza novas exigências com uma medição. Quando a dívida chegar a zero, promova a regra quando isso fizer sentido para o projeto. Não transforme falsos positivos conhecidos em bloqueios apenas porque a contagem momentânea zerou.

O limite de 350 linhas é uma decisão editorial do toolkit, não uma norma universal. Não o aumente para esconder violações durante uma tarefa de correção.

## O que vem pronto

| Regra | Função | Opções principais |
| --- | --- | --- |
| quality/max-lines | Limitar linhas por arquivo | max, ignore, includeTests |
| quality/no-direct-console | Direcionar logging para um adaptador | allow, logger |
| quality/no-direct-data-access | Restringir importação do cliente de dados | modules, bindings, layers, extensions |

Os arquivos estão em [templates/eslint](../../templates/eslint/). A implementação usa CommonJS e permanece independente de Codex.

`quality/max-lines` tem exclusões próprias para arquivos de declaração, gerados e determinados arquivos agregadores; testes são opcionais. Não confunda a contagem de linhas físicas com o orçamento de uma função que ignora comentários e linhas em branco.

A regra de console não cobre necessariamente todas as formas de alias ou acesso computado. A regra de dados identifica importações configuradas, não todos os caminhos possíveis de acesso ao banco. Essas verificações ajudam a impor convenções, sem provar ausência de violações de arquitetura.

## Configuração

Use o [prompt 08](../prompts/08-eslint-quality-gates-install.md) para copiar, adaptar e medir. Para uma configuração ampla com plugins específicos, use o [prompt 07](../prompts/07-eslint-complete-setup.md).

Os exemplos dependem de `defineConfig` e `globalIgnores` de `eslint/config`. Confira suporte e compatibilidade com os plugins na versão instalada. A [documentação ESLint](https://eslint.org/blog/2025/03/flat-config-extends-define-config-global-ignores/) explica esses recursos. Não misture versões principais incompatíveis de eslint e @eslint/js.

## Ordem dos blocos

Em flat config, o bloco posterior prevalece sobre o anterior para o mesmo arquivo e regra. Uma exceção colocada antes da ativação pode ser sobrescrita.

```javascript
// Trecho ilustrativo: o plugin quality deve estar registrado.
export default [
  {
    files: ["src/**/*.ts"],
    rules: { "quality/no-direct-console": "error" },
  },
  {
    files: ["src/server/logger.ts"],
    rules: { "quality/no-direct-console": "off" },
  },
];
```

Adapte os caminhos, não copie o nome de um logger inexistente.

## Fronteiras de importação

Configure caminhos reais de origem e destino. Em `import-x/no-restricted-paths`, `except` é relativo a `from`; não serve para isentar o importador. Ajuste `target` para isso.

Separe fronteiras consolidadas de dívida existente por aliases do plugin quando precisar de severidades distintas. Globs de uma pasta não incluem automaticamente um arquivo agregador irmão; descreva ambos quando necessário.

## Lint rápido e análise de tipos

O template principal evita regras que precisam montar um programa TypeScript completo. O template `eslint.typed.config.mjs.example` adiciona essas regras em uma execução separada.

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "lint:types": "eslint --config eslint.typed.config.mjs ."
  }
}
```

Incorpore os scripts, preservando os existentes. Em JavaScript puro, remova a camada TypeScript. Meça o custo antes de tornar a análise de tipos obrigatória em cada commit.

## Formatação

Preserve o formatador existente. Uma adoção inicial em base grande deve ser uma mudança deliberada e revisável. Prettier, Biome e dprint têm comandos distintos.

`eqeqeq` trata coerção em comparações; não é uma regra de formatação e não é substituída por Prettier. Essa distinção corrige uma classificação equivocada do texto original.

## Armadilhas de refatoração

### Expressões regulares

Uma heurística de regex pode gerar falso positivo. Verifique o comportamento antes de reestruturar apenas para satisfazê-la.

A expressão `/^[A-Z]{2,4}-[0-9]{1,6}$/` exige exatamente duas partes. Se usar split, valide a quantidade de partes:

```javascript
function isValidCode(value) {
  const parts = value.split("-");
  if (parts.length !== 2) return false;
  return /^[A-Z]{2,4}$/.test(parts[0]) && /^[0-9]{1,6}$/.test(parts[1]);
}
```

Ignorar segmentos extras aceitaria indevidamente `AB-123-extra`. Teste tanto os casos válidos quanto os rejeitados.

### Complexidade e encadeamento opcional

Operadores como `?.` e `??` podem contribuir para a complexidade medida. Use o relatório da regra na versão instalada em vez de contar apenas os ifs.

### Transferência de violações

Extrair uma função pode deixar o arquivo de destino acima do limite. Verifique todos os arquivos afetados. Não compacte linhas para aparentar uma melhoria de estrutura.

### Inferência de tipos

Uma extração pode perder tipagem contextual, alterar genéricos ou ampliar literais. Trocar uma arrow function por uma função nomeada, por si só, não prova alteração de tipo. Confira o contrato e os consumidores com o compilador real.

### Propriedades abreviadas na AST

Uma regra própria precisa lidar com formas como `{ port }` e `{ port: port }` quando o comportamento esperado for equivalente. Testes que só cobrem a forma explícita podem deixar uma lacuna.

## Verificação das regras

Após copiar as regras e instalar ESLint compatível, na raiz do destino:

```powershell
node verify-quality-gates.mjs
```

Esse nome corresponde à cópia indicada no prompt 08. O verificador original está em [verify.mjs](../../templates/eslint/verify.mjs). Ele usa RuleTester e deve imprimir três resultados `: ok`.

Isso verifica casos das regras, não toda a configuração de uma aplicação. Rode também lint real sobre arquivos representativos. Se usar cache, invalide-o depois de modificar regras locais e faça a medição final sem cache.

## Sequência recomendada

1. [Instalar e medir](../prompts/08-eslint-quality-gates-install.md).
2. [Dividir arquivos grandes](../prompts/09-file-size-refactor.md).
3. [Reduzir outros avisos](../prompts/02-eslint-warning-burndown.md).
4. Revisar e executar as verificações afetadas.

Preserve mensagens de erro, identificadores e contratos técnicos em seu formato literal. Não declare uma migração concluída só porque a configuração carrega.
