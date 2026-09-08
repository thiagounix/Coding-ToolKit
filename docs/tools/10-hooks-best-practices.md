# Hooks no Codex: automação e boas práticas

Hooks executam comandos em eventos da sessão. O Codex atual documenta arquivos `.codex/hooks.json` ou tabelas de hooks em `config.toml`, além do escopo pessoal. A configuração antiga em `.claude/settings.json` não deve ser copiada como configuração Codex.

## Exemplo fornecido

O [hooks.json.example](../../templates/codex/hooks.json.example) usa SessionStart e o [script session-start.mjs](../../templates/hooks/session-start.mjs). Copie o script para `.codex/hooks/session-start.mjs` no projeto e substitua o caminho absoluto de exemplo no JSON. Ele deve apontar para o arquivo copiado, inclusive quando a sessão começar em uma subpasta.

Incorpore o evento à configuração existente, sem duplicá-lo. O Codex exige revisão e confiança para hooks não gerenciados; na CLI, consulte `/hooks`. Confira o suporte da versão instalada. Fonte: [hooks oficiais](https://learn.chatgpt.com/docs/hooks).

O exemplo apenas retorna uma orientação em português. Não grava memória, não lê conversas e não altera permissões.

## Verificação local

A partir da raiz do toolkit:

```powershell
'{"hook_event_name":"SessionStart","source":"startup"}' | node templates/hooks/session-start.mjs
'null' | node templates/hooks/session-start.mjs
```

O primeiro comando deve retornar JSON com `hookSpecificOutput.additionalContext`; o segundo não deve imprimir contexto nem falhar. Isso testa o script isoladamente. A execução real do evento precisa ser verificada no cliente após a configuração e a revisão de confiança.

## Entrada defensiva

JSON válido pode ser null, número, string ou lista. O [helper](../../templates/hooks/hook-io.mjs.example) aceita somente objetos não nulos e não listas. Valide depois os campos exigidos pelo evento.

Falhas de uma melhoria opcional podem encerrar sem aplicar o extra. Uma política de bloqueio precisa de tratamento próprio e cobertura de todas as ferramentas relevantes. O exemplo deste toolkit não é uma barreira de segurança.

## Cuidados de integração

Não presuma que o payload de edição possui `file_path`: ferramentas diferentes têm contratos diferentes. Preserve stdout para a resposta documentada e use stderr para diagnósticos. Não construa comandos de shell com entrada não confiável.

Teste entrada inválida, campos ausentes, evento diferente e falhas de dependências. Hooks de revisão complementam verificações de projeto e CI; não substituem os controles do ambiente.
