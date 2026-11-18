# Roteiro da apresentação — Cosmo-Burguer

Slides: https://claude.ai/artifact/H8dSRcT4YydueAyosXvwEJ (cada slide tem as notas do apresentador)
Duração estimada: ~18 min. Divisão sugerida conforme o quadro de contribuição (4.8.3) — ajuste como o grupo preferir.

| # | Bloco | Slide | Tempo | Quem (sugestão) | Pontos-chave para falar |
|---|-------|-------|-------|-----------------|-------------------------|
| 1 | Capa | Cosmo-Burguer | 0:30 | Mike | Grupo, nome do projeto, ordem da apresentação |
| 2 | Introdução | A ideia | 1:00 | Mike | Lanchonetes/restaurantes; 3 pilares: fila Kanban, cardápio vivo, gargalos. Fora do escopo: financeiro |
| 3 | Introdução | Situações-problema | 1:00 | Mike | Comanda de papel → pedidos perdidos, venda sem estoque, cancelamento não chega, sem visão do fluxo |
| 4 | Introdução | Stakeholders | 1:00 | Mike | ST-01 Gerente, ST-02 Atendente, ST-03 Cozinheiro (alta); ST-04 Cliente (média, feedback depois) |
| 5 | Introdução | Levantamento | 1:00 | Felipe | Entrevistas, observação, prototipação. Achado: “não pode parar sem internet” → RNF-03 |
| 6 | Requisitos | Visão geral | 1:00 | Felipe | 10 RF, 6 RNF, 5 RN; critérios de aceitação verificáveis |
| 7 | Requisitos | RNF | 1:00 | Felipe | ≤2 s, 2 terminais, offline, ≤4 cliques, só gerente altera cardápio |
| 8 | Requisitos | Regras e conflitos | 1:00 | Raul | RN-01 a RN-05; CA-01 → status “Em fila”; CA-02 → cadastro rápido só com nome |
| 9 | Modelagem | Casos de uso | 1:00 | Raul | 4 atores, 9 UCs; UC-01, UC-04 e UC-06 detalhados; includes de estoque e histórico |
| 10 | Modelagem | Classes | 0:45 | João Paulo | Cliente, Pedido, Produto, Categoria; multiplicidades vêm das RNs |
| 11 | Arquitetura | 3 camadas | 1:30 | Felipe | Apresentação / Aplicação (5 módulos) / Persistência (LAN + nuvem); fluxo do pedido em <2 s |
| 12 | Arquitetura | Decisões | 1:00 | João Paulo | Abstração, modularidade, separação, encapsulamento; stack; alternativas descartadas |
| 13 | Design inicial | Tela do caixa | 1:00 | Mike | Cadastro rápido, sem estoque desabilitado, confirmar só com cliente + item |
| 14 | Design inicial | Esteira da cozinha | 1:00 | Mike | 4 colunas, um toque avança, tempo decorrido, status no caixa em ≤2 s |
| 15 | Design inicial | Cardápio (gerente) | 0:45 | Mike | CRUD de produtos, RN-02, RNF-05; já em implementação no React |
| 16 | Processo | Ágil/Scrum | 1:00 | Raul | 3 iterações (concluída / em andamento / pendente); Git com IDs e PRs revisados |
| 17 | Qualidade | Atributos e testes | 1:30 | João Paulo | Q-01 a Q-04 com metas; 8 testes; matriz; verificação × validação |
| 18 | Evolução | Mudanças e riscos | 1:00 | João Paulo | M-01 a M-04 (um de cada tipo); análise de impacto da M-03; riscos R-01 a R-03 |
| 19 | Conclusão | O que entregamos | 1:00 | Mike | Especificação, projeto, qualidade; aprendizados; próximos passos |
| 20 | Encerramento | Obrigado / Perguntas | — | Todos | Ver perguntas prováveis abaixo |

## Transições (frases-ponte)

- 4 → 5: “Para entender o que cada um precisava, usamos três técnicas…”
- 7 → 8: “Ao cruzar os requisitos, encontramos dois problemas…”
- 10 → 11: “Com o domínio modelado, definimos como o sistema é organizado…”
- 12 → 13: “Antes de implementar, validamos tudo isso com protótipos de tela.”
- 15 → 16: “Para construir isso, organizamos o trabalho assim…”
- 18 → 19: “Resumindo o que o trabalho entrega…”

## Perguntas prováveis

- **Por que não só nuvem?** Não atende o RNF-03 (atendimento sem internet); banco local + backup em nuvem.
- **Como evita vender sem estoque?** RN-01: Pedidos consulta Estoque via `verificarDisponibilidade()` antes de gravar; pedido e baixa de estoque na mesma transação.
- **O que já está implementado?** Tela de cardápio no React (listar, cadastrar, editar, excluir) e entidades/serviço de produtos no Spring Boot (T-03, em andamento).
- **Como validaram os requisitos?** Entrevistas, observação no horário de pico e protótipos mostrados ao atendente e ao cozinheiro.

## Se precisar encurtar (~12 min)

Pular os slides 10 (classes) e 12 (decisões) e falar os slides 16 e 18 em 30 s cada.
