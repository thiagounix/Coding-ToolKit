# Guia prático de adoção

Este percurso usa um projeto existente e a extensão Codex no VS Code. Comece com uma tarefa pequena e acrescente automações depois de verificar a base.

## 1. Conhecer o projeto

Abra a pasta correta e peça:

```text
Analise este projeto sem alterar arquivos. Identifique tecnologias, pontos de
entrada, instruções existentes e comandos reais de lint, testes e compilação.
Informe de qual diretório cada comando deve ser executado e o que não conseguiu
confirmar. Responda em português do Brasil.
```

Verifique as referências apresentadas. Em um monorepositório, identifique o pacote; em .NET, a solução ou projeto; em Flutter, a pasta com pubspec.yaml.

## 2. Preparar as instruções

Siga a [instalação](01-installation.md). Adapte o [template de AGENTS.md](../templates/AGENTS.md.template) ao que acabou de descobrir. Se já existir um arquivo de instruções, incorpore os trechos úteis sem substituí-lo integralmente.

Exemplo para um projeto que realmente possua estes scripts:

```markdown
## Comandos

Execute na raiz do pacote web.

- Lint: npm run lint
- Tipos: npm run typecheck
- Testes: npm test
- Compilação: npm run build
```

Abra uma nova conversa e peça ao agente para identificar essas instruções. Se não aparecerem, confira pasta de trabalho, nome do arquivo e possíveis overrides.

## 3. Escolher um modelo

Consulte [Terra, Sol e Astra](03-modelos-codex.md). Para esta primeira tarefa, Terra pode bastar quando o escopo for pequeno. Sol é o padrão sugerido no exemplo de configuração; Astra fica disponível como escolha para problemas mais difíceis.

A seleção é feita no cliente. O Markdown documenta critérios de escolha e não instala nem ativa modelos.

## 4. Executar uma funcionalidade completa

Exemplo: adicionar exportação CSV a uma tela de relatórios.

Primeiro use o [prompt de planejamento](prompts/04-brainstorm-to-plan.md). Defina colunas, permissões, codificação e volume esperado. O agente deve ler o serviço existente antes de propor uma segunda implementação.

Um plano possível:

| Etapa | Resultado | Verificação |
| --- | --- | --- |
| Entender o contrato | Colunas e permissões identificadas | Referências no código e requisitos |
| Implementar exportação | Serviço reutilizado e resposta CSV | Testes de aspas, separadores e autorização |
| Integrar a interface | Botão e estados de carregamento/erro | Fluxo no navegador |
| Revisar | Diff coerente e sem regressões conhecidas | Lint, tipos e testes relevantes |

Se você pediu somente o plano, a entrega termina nele. Se já autorizou a implementação, o agente continua dentro desse escopo e pergunta apenas sobre decisões necessárias ainda ausentes.

## 5. Delegar quando fizer sentido

Se quiser trabalho paralelo, peça explicitamente:

```text
Use subagentes para analisar, em paralelo e sem editar, o contrato da API
e o comportamento da tela. Aguarde os dois resultados e proponha a integração.
Se a ferramenta não estiver disponível, faça as duas análises sequencialmente
e informe essa limitação.
```

Para edição paralela, use o [prompt de ondas](prompts/05-parallel-wave-dispatch.md). Arquivos diferentes não bastam: migrações, dados de teste, portas e outros recursos compartilhados também podem criar dependências.

## 6. Verificar e revisar

Execute os comandos identificados no início, na pasta correta. Separe falhas preexistentes das introduzidas. Faça a [revisão especializada](prompts/03-multi-agent-code-review.md) e confirme os achados contra o código real.

A entrega deve mostrar arquivos alterados, comportamento resultante, comandos executados e limitações. Um teste não executado deve ser descrito como pendente.

## 7. Adotar regras de qualidade

Em JavaScript/TypeScript, comece pelo [prompt 08](prompts/08-eslint-quality-gates-install.md): ele copia as regras prontas e mede violações. Depois use o [prompt 09](prompts/09-file-size-refactor.md) para arquivos grandes e o [prompt 02](prompts/02-eslint-warning-burndown.md) para outros avisos.

O limite sugerido de 350 linhas não justifica cortes arbitrários. Preserve comportamento e extraia responsabilidades coesas.

## 8. Documentar conhecimento duradouro

Quando quiser registrar decisões, use o [prompt 06](prompts/06-memory-bootstrap.md). Ele cria documentação local, com leitura explicitamente indicada em AGENTS.md. Obsidian é uma alternativa de longo prazo, não um pré-requisito.

## Critérios de adoção

- [ ] A extensão abre uma conversa no projeto correto.
- [ ] AGENTS.md contém comandos reais, sem campos pendentes.
- [ ] O modelo selecionado está disponível no cliente.
- [ ] Uma tarefa pequena foi implementada e verificada.
- [ ] O diff foi revisado.
- [ ] Integrações opcionais foram testadas individualmente, se adotadas.

## Problemas comuns

| Sintoma | O que conferir |
| --- | --- |
| Modelo indisponível | Seletor, conta, versão e restrições da organização |
| Instruções ausentes | Pasta de trabalho, AGENTS.override.md e nova conversa |
| MCP cadastrado sem ferramentas | Processo, autenticação e reinício do cliente |
| Hook não executa | Suporte da versão, caminho absoluto e revisão de confiança |
| Lint falha ao carregar configuração | Versões, imports e adaptação ao projeto |
| Prompt abre a edição antiga | Use esta cópia local, não a URL do repositório original |
