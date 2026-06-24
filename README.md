# Areia do Tempo

Caderno de opinião sobre temas sociais. Site estático construído com [Astro](https://astro.build), alojado no Azure Static Web Apps.

## Como escrever um novo artigo

Cada artigo é um ficheiro Markdown em `src/pages/blog/`. Para criar um novo,
copie um dos existentes e altere o cabeçalho (entre as linhas `---`) e o texto:

```markdown
---
layout: ../../layouts/PostLayout.astro
title: "Título do artigo"
description: "Uma ou duas frases que aparecem na lista da homepage."
pubDate: "2026-07-01"
number: "04"
---

O texto do artigo, em Markdown. Parágrafos separados por uma linha em branco.

## Subtítulo

> Citação em destaque.
```

- `pubDate` ordena os artigos (o mais recente aparece primeiro). Formato `AAAA-MM-DD`.
- `number` é o número do ensaio mostrado na etiqueta (`Nº 04`).
- O nome do ficheiro (ex. `o-meu-artigo.md`) define o endereço (`/blog/o-meu-artigo`).

Os três artigos incluídos são exemplos — pode editá-los ou apagá-los à vontade.

## Trabalhar localmente (opcional)

Requer Node 22 ou superior.

```
npm install      # instala as dependências (só na 1.ª vez)
npm run dev      # pré-visualizar em http://localhost:4321
npm run build    # gerar o site final na pasta dist/
```

## Publicação

O site é publicado automaticamente no Azure Static Web Apps a cada alteração
enviada para o ramo `main` do repositório no GitHub. Não é preciso fazer nada
manualmente: basta guardar/enviar as alterações.

Configuração do build no Azure:
- **Build Preset:** Custom
- **App location:** `/`
- **Api location:** (vazio)
- **Output location:** `dist`
