# Economia de contexto e padrão RTK

A edição original descrevia RTK como um padrão de proxy de comandos, sem entregar um binário público específico. Esta edição também não instala um produto chamado RTK.

## Caminho básico no Codex

Prefira comandos focados:

```powershell
git status --short
git diff --stat
rg -n 'NomeDaFuncao' src
rg --files -g '*.csproj' -g '*.sln' -g 'package.json'
```

Substitua os caminhos pelo projeto real. Leia trechos relevantes antes de carregar arquivos grandes. Conteúdo omitido não pode ser tratado como evidência de ausência.

## Se houver um proxy próprio

Um proxy pode reduzir saídas repetitivas, mas deve preservar o significado do comando, os erros e o código de saída. Mantenha uma forma de executar o comando original para diagnósticos e contagens.

Não reescreva comandos compostos, redirecionamentos, aspas ou operações mutáveis sem compreender a sintaxe do shell. PowerShell e Bash não têm regras de escape intercambiáveis.

Teste falhas do binário, saída vazia, truncamento e argumentos com espaços. Uma otimização opcional pode continuar sem filtragem quando falhar. Ela não deve transformar falha de teste em sucesso.

## Integração

O toolkit não fornece interceptação automática. Se necessária, avalie os [hooks do Codex](10-hooks-best-practices.md) e teste a integração real. Uma menção em AGENTS.md não instala um proxy nem reduz automaticamente tokens.
