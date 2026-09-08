# Instalação para Codex no VS Code

## 1. Preparar o editor

Instale ou habilite a extensão **Codex**, publicada pela **OpenAI**, no VS Code, abra seu painel e autentique-se pelo fluxo oferecido. Se já usa a extensão, aproveite a instalação existente.

A [documentação oficial da extensão](https://learn.chatgpt.com/docs/codex/ide) descreve instalação e autenticação. A lista de modelos depende da conta e do ambiente.

Abra a pasta do projeto de destino. O toolkit fornece modelos de arquivo; copiar seus exemplos não instala dependências da aplicação.

## 2. Preparar as instruções

No PowerShell, a partir do projeto de destino, ajuste o caminho desta cópia:

```powershell
$toolkitPath = 'C:\Users\thiago.barros\source\Vibe-Coding-Toolkit\vibe-coding-toolkit'
if (Test-Path -LiteralPath './AGENTS.md') {
    Write-Output 'AGENTS.md já existe. Incorpore as orientações relevantes manualmente.'
} else {
    Copy-Item -LiteralPath (Join-Path $toolkitPath 'templates/AGENTS.md.template') -Destination './AGENTS.md'
}
```

Preencha tecnologia, diretório de execução e comandos de instalação, lint, testes e compilação. Remova itens não aplicáveis. Examine eventuais `AGENTS.override.md` e instruções ancestrais.

O nome descoberto pelo Codex é `AGENTS.md`; `AGENTS.md.template` é apenas o modelo fornecido aqui. Consulte a [hierarquia de instruções](https://learn.chatgpt.com/docs/agent-configuration/agents-md).

## 3. Escolher o modelo

Use o seletor da extensão. Para um padrão persistente, abra a engrenagem do Codex e a opção para editar `config.toml`. Incorpore os campos de [config.toml.example](../templates/codex/config.toml.example), preservando as demais opções.

```toml
model = "gpt-5.6-sol"
model_reasoning_effort = "medium"
```

Alternativas: `gpt-5.6-terra` e `gpt-6-astra`. Use um único valor para `model`. Veja o [guia de modelos](03-modelos-codex.md).

A configuração pessoal fica em `~/.codex/config.toml`; no Windows, normalmente em `C:\Users\SEU_USUARIO\.codex\config.toml`. Projetos confiáveis podem usar `.codex/config.toml`. CLI e extensão compartilham camadas, mas substituições da sessão podem afetar o valor aplicado. Veja a [configuração oficial](https://learn.chatgpt.com/docs/config-file/config-basic).

## 4. CLI opcional

A CLI serve para trabalhar no terminal; não é pré-requisito para o painel já instalado.

```powershell
npm install -g @openai/codex
codex --version
codex --help
```

Para iniciar uma sessão, execute apenas a linha desejada:

```powershell
codex --model gpt-5.6-terra
codex --model gpt-5.6-sol
codex --model gpt-6-astra
```

Isso não altera uma conversa já aberta no VS Code. Consulte a [CLI oficial](https://learn.chatgpt.com/docs/codex/cli).

## 5. Recursos opcionais

| Recurso | Como adotar |
| --- | --- |
| Skills | Consulte [skills no Codex](tools/13-codex-skills.md) |
| Subagentes | Solicite delegação e use o [protocolo](tools/02-subagent-orchestration.md) |
| MCP | Siga a [documentação MCP](https://learn.chatgpt.com/docs/extend/mcp), sem duplicar conexões |
| Hooks | Revise scripts e siga o [guia](tools/10-hooks-best-practices.md) |
| Memória | Use o [prompt 06](prompts/06-memory-bootstrap.md) quando quiser criar documentação local |
| ESLint | Para JavaScript/TypeScript, use o [prompt 08](prompts/08-eslint-quality-gates-install.md) |

## 6. Conferir

Abra uma nova conversa no projeto e peça:

```text
Liste as instruções de projeto que você recebeu e os comandos de verificação
definidos nelas. Responda em português do Brasil. Não altere arquivos.
Se não conseguir confirmar o modelo ativo, diga isso; não deduza pelo prompt.
```

Confira o modelo na interface. Execute uma tarefa pequena e revise o diff. O [guia prático](02-playbook-onboarding.md) mostra esse percurso.
