# Terra, Sol e Astra no Codex

Referência conferida em **5 de setembro de 2026**. Verifique a disponibilidade no seletor do cliente.

## Modelos contemplados

| Nome | Identificador exato | Papel sugerido |
| --- | --- | --- |
| GPT-5.6 Terra | `gpt-5.6-terra` | Manutenção delimitada, equilibrando capacidade e custo |
| GPT-5.6 Sol | `gpt-5.6-sol` | Implementação com várias etapas e integração entre módulos |
| GPT-6 Astra | `gpt-6-astra` | Problemas difíceis com muitas dependências |

Fontes oficiais: [Terra](https://developers.openai.com/api/docs/models/gpt-5.6-terra), [Sol](https://developers.openai.com/api/docs/models/gpt-5.6-sol) e [Astra](https://developers.openai.com/api/docs/models/gpt-6-astra). Astra é o mais recente entre os três nesta revisão. Os papéis sugeridos são recomendações desta adaptação, não resultados de um teste comparativo neste repositório.

## Escolha por tarefa

Comece com Terra quando arquivos e critérios forem claros. Use Sol para uma funcionalidade que combine interface, serviço e testes. Considere Astra para diagnóstico difícil, arquitetura ou revisão de mudanças com grande impacto.

Se o resultado for insuficiente, confira primeiro contexto, requisitos e testes. Aumentar a capacidade sem corrigir informação ausente pode repetir o erro.

Não há equivalência exata com Haiku, Sonnet ou Opus. A adaptação preserva o propósito das tarefas, sem presumir os mesmos custos ou limites.

## Onde selecionar

No VS Code, use o seletor de modelos do Codex. Para um padrão persistente, adapte [config.toml.example](../templates/codex/config.toml.example). Na CLI, use `codex --model IDENTIFICADOR`.

“Atue como Astra” não troca o modelo. A seleção do agente principal também não garante uma troca para cada subagente: isso depende das ferramentas e instruções do ambiente. Preserve a herança padrão quando não houver seleção explícita suportada.

## Esforço de raciocínio

É uma opção separada do modelo. O exemplo usa `model_reasoning_effort = "medium"`; considere `"high"` quando a tarefa justificar e o cliente aceitar. Maior esforço pode aumentar o tempo de resposta.

Use os níveis expostos pelo ambiente. Não transporte automaticamente rótulos de outro produto nem todos os valores da API para a extensão. Veja a [configuração oficial](https://learn.chatgpt.com/docs/config-file/config-basic).

## Disponibilidade

Um modelo no catálogo da API não garante acesso por toda conta, plano ou versão da extensão. Se não aparecer ou for rejeitado, confira autenticação, versão e restrições da organização; escolha uma alternativa disponível explicitamente.

Este toolkit não altera credenciais, cobrança, limites ou permissões do ambiente.
