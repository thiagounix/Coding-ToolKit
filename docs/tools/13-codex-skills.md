# Skills no Codex

Uma skill é um conjunto reutilizável de instruções, normalmente com um arquivo `SKILL.md` e recursos de apoio. Ela ensina um procedimento; não é um modelo e não fornece automaticamente uma conexão MCP.

## Descoberta e uso

Para skills locais de projeto, a documentação Codex descreve `.agents/skills/NOME/SKILL.md`. Há também escopos de usuário, administração e sistema. Uma pasta em `templates/` não é uma skill ativa. Veja a [documentação oficial](https://learn.chatgpt.com/docs/build-skills).

Use as skills realmente disponibilizadas no ambiente. Leia suas instruções antes de aplicar o procedimento e confira os recursos referenciados. Não copie o catálogo inteiro quando só uma capacidade for necessária.

## Avaliar uma skill de outro ecossistema

| Item | Verificação |
| --- | --- |
| Formato | Metadados e arquivo de entrada reconhecidos pelo Codex |
| Ferramentas | Nomes e contratos disponíveis no ambiente |
| Caminhos | Ausência de dependência obrigatória de pastas de outro cliente |
| Execução | Comandos compatíveis com o sistema e a versão instalada |
| Recursos | Scripts e modelos referenciados realmente presentes |
| Licença | Direito de uso e adaptação do conteúdo |

Um formato semelhante não garante portabilidade dos scripts ou permissões. Os materiais da Anthropic citados na edição original são referências de origem, não dependências obrigatórias desta edição.

## Processo do toolkit

Os nove prompts podem ser usados diretamente. Para transformar um procedimento em skill, delimite gatilhos, entradas, passos e critérios de conclusão. Evite regras que obriguem aprovação para toda edição ou que contrariem instruções aplicáveis do usuário e do ambiente.

Verifique a descoberta em uma nova sessão e execute um caso pequeno. Não declare uma skill instalada somente porque o arquivo foi copiado.
