# Graphify como integração opcional

O toolkit original apresenta Graphify como uma CLI separada para construir um grafo de relações entre arquivos e conceitos. A parte reutilizável no Codex é consultar um mapa persistente antes de alterar áreas desconhecidas.

Esta edição não instala nem valida uma versão do Graphify. O pacote e os comandos devem ser conferidos na documentação da distribuição escolhida antes da adoção.

## Fluxo de adoção

1. Confira a origem do pacote e a compatibilidade da versão com seu sistema.
2. Leia a ajuda da CLI instalada.
3. Indexe uma pasta pequena e confira as relações contra o código.
4. Defina onde ficarão os artefatos e quando serão atualizados.
5. Peça ao Codex para consultar o grafo e verificar as conclusões nos arquivos.

A referência original usa o pacote Python `graphifyy` e o executável `graphify`. Não use uma integração específica de Claude como se fosse a integração Codex.

## Consulta útil

```text
Consulte o mapa de dependências disponível para a função [FUNÇÃO].
Diferencie relações extraídas e inferidas. Confirme os consumidores no código
atual antes de propor mudanças. Se o índice estiver desatualizado ou ausente,
use buscas no repositório e informe essa limitação.
```

## Critérios de qualidade

Registre a revisão do código indexada. Atualize o mapa depois de alterações relevantes. Relações inferidas são pistas, não provas de ausência de impacto.

Geração automática em cada commit pode ser cara ou alterar arquivos inesperadamente; adote-a somente depois de medir o custo. O fluxo básico do toolkit continua funcionando com `rg` e leitura direta.

Referência de origem: Graphify Labs, citada na edição original.
