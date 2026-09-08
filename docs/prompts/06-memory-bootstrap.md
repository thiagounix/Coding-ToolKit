# Criação inicial de memória de projeto

Use quando quiser criar documentação duradoura local. Este prompt autoriza essa criação no projeto, não alterações em uma memória pessoal global.

## Campos

- `[MEMORY_DIR]`: por exemplo, `docs/memory`.
- `[CONFIG_FILE]`: normalmente `AGENTS.md`.
- `[LINE_CAP]`: limite editorial do índice; sugestão: `130`.
- `[PROJECT NAME/STACK]`: nome e tecnologias.
- `[DESTINO]`: destino de longo prazo já definido, ou `nenhum`.

## Prompt

```text
Crie uma estrutura de memória local para [PROJECT NAME/STACK] em [MEMORY_DIR],
respeitando instruções e arquivos existentes.

1. Examine se já há memória ou documentação equivalente. Reutilize a estrutura
   existente quando adequado. Não substitua políticas de memória do ambiente
   nem escreva em pastas pessoais globais.

2. Crie ou incorpore:
   - INSTRUCTIONS.md: critérios de leitura, salvamento e crescimento.
   - MEMORY.md: índice curto, com um link por fato duradouro.
   - Notas por tópico somente quando houver fatos confirmados para registrar.
   Cada nota deve ter título, tipo, data, contexto, decisão e evidência.
   Não invente lições para preencher a estrutura.

3. Em [CONFIG_FILE], acrescente uma instrução explícita para ler o índice
   antes de trabalho relacionado e consultar as notas pertinentes.
   Um link isolado não carrega o conteúdo; MEMORY.md não tem carregamento
   automático garantido por seu nome.

4. Documente o critério: guardar decisões ou aprendizados que não sejam
   recuperáveis facilmente do código. Evitar duplicatas, prazos, receitas
   temporárias de depuração, segredos e dados pessoais.
   Atualizações futuras dependem de solicitação do usuário.

5. Limite o índice a [LINE_CAP] linhas não vazias como convenção editorial.
   Ao exceder, busque duplicatas e migre detalhes para [DESTINO], se definido
   e autorizado: adaptar ao modelo, gravar, ler de volta e só então atualizar
   a origem. Se não houver destino confirmado, preserve as informações e
   reporte a pendência; não apague conteúdo para caber no limite.

6. Confira os links e releia os arquivos criados. Informe caminhos, política
   adotada e um pedido de verificação para usar em uma nova sessão.
```

## Verificação sugerida

Peça em uma nova conversa: “Leia o índice de memória indicado nas instruções e diga quais notas são relevantes para esta tarefa.” Isso verifica a leitura explícita; não comprova memória automática entre todas as sessões.

Veja [memória no Codex](../tools/09-codex-memory-system.md) e [Obsidian](../tools/08-obsidian-memory.md).
