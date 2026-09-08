# Context7 no Codex

Context7 fornece documentação de bibliotecas por MCP. Pode ajudar quando a implementação depende de uma API cuja versão precisa ser conferida.

## Configuração opcional

A documentação OpenAI apresenta este comando:

```powershell
codex mcp add context7 -- npx -y @upstash/context7-mcp
codex mcp list
```

Antes de adicionar, confira se já existe uma conexão equivalente. O comando registra o servidor; a disponibilidade real precisa ser confirmada com uma consulta. Consulte [MCP no Codex](https://learn.chatgpt.com/docs/extend/mcp) para configuração no VS Code e autenticação quando exigida.

Também é possível incorporar ao config.toml:

```toml
[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp"]
```

Use uma única forma de registro. Em ambientes Windows com falha ao iniciar npx, confira o executável resolvido e a mensagem do cliente antes de alterar a configuração. Não substitua políticas de execução globalmente para contornar um erro de caminho.

## Como consultar

```text
Confira a versão de [BIBLIOTECA] instalada neste projeto. Consulte a documentação
correspondente via Context7, se disponível, antes de implementar [RECURSO].
Informe a versão e a fonte usadas. Se não houver correspondência, diga isso
e consulte a documentação oficial da biblioteca.
```

Resolva primeiro a biblioteca correta e depois a documentação do recurso. Confirme os exemplos contra a versão instalada. Um resultado recuperado não garante que a API esteja disponível em uma versão mais antiga.

Context7 não é obrigatório para usar o toolkit; documentação oficial e ferramentas locais podem cumprir a mesma necessidade.
