# Validação no navegador e agent-browser

Use automação de navegador para verificar o comportamento visível de uma interface: navegação, preenchimento, estados de erro e resultado de ações.

O Codex pode usar uma ferramenta de navegador disponível no ambiente. Uma CLI externa é alternativa, não pré-requisito.

## CLI opcional

O projeto [agent-browser, da Vercel Labs](https://github.com/vercel-labs/agent-browser), fornece automação por comandos. Se decidir adotá-lo, confira os requisitos e a versão antes da instalação:

```powershell
npm install -g agent-browser
agent-browser install
agent-browser --help
```

O download do navegador e o acesso à aplicação precisam funcionar no ambiente onde a CLI roda.

## Fluxo básico

```powershell
agent-browser open http://localhost:3000
agent-browser snapshot -i
```

Leia o snapshot antes de interagir. As referências retornadas descrevem elementos da página naquele estado; obtenha um novo snapshot após navegação ou mudanças importantes.

## Pedido de validação

```text
Valide o fluxo [FLUXO] em [URL] com a ferramenta de navegador disponível.
Confira o caminho principal, um erro esperado e o comportamento após recarregar.
Use dados de teste. Registre o resultado observado e falhas no console.
Se não houver navegador disponível, informe quais verificações ficaram pendentes.
```

A interface funcionar visualmente não prova autorização no servidor. Combine testes do navegador com verificações de API e testes automatizados relevantes.

## Evidências

Reporte URL, passos, resultado esperado e observado. Diferencie falha da aplicação, indisponibilidade de serviços e limitação da ferramenta. Para investigar rede e desempenho, veja [Chrome DevTools MCP](14-chrome-devtools-mcp.md).
