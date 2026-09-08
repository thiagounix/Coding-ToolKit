# Chrome DevTools MCP no Codex

O [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) expõe recursos do Chrome para diagnóstico de páginas. Use-o quando precisar investigar desempenho, requisições e console.

## Configuração opcional

Confira os requisitos atuais no projeto de origem e registre o servidor, se ainda não existir:

```powershell
codex mcp add chrome-devtools -- npx -y chrome-devtools-mcp@latest
codex mcp list
```

O comando usa a distribuição atual; para reproduzir um ambiente de equipe, fixe uma versão depois de testá-la. O mecanismo de registro segue a [documentação MCP do Codex](https://learn.chatgpt.com/docs/extend/mcp).

Reinicie o cliente quando necessário e confirme que as ferramentas aparecem. Uma entrada na lista não comprova que o navegador abriu corretamente.

## Diagnóstico

```text
Investigue por que [URL LOCAL] demora para ficar utilizável.
Use Chrome DevTools MCP, se disponível, e obtenha evidências de rede,
console e desempenho. Identifique o maior gargalo observado.
Não aplique otimizações antes de relacionar a proposta com a medição.
```

Mantenha condições comparáveis antes e depois: mesma rota, dados, cache e ambiente. Não apresente uma medição local isolada como desempenho garantido em produção.

## Relação com a automação de navegador

O [guia de navegador](11-agent-browser.md) trata do fluxo do usuário. DevTools ajuda a explicar problemas internos observados nesse fluxo. Use a ferramenta já disponível quando ela cobrir a necessidade.

Esta adaptação documenta a conexão; não instala o servidor nem conecta automaticamente uma sessão pessoal do Chrome.
