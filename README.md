# Forza Tuning Assistant

Uma aplicação web criada para tentar ajudar jogadores de Forza a aprenderem mais sobre:

- Tuning
- Upgrades
- Trações
- Categorias de corrida

O objetivo é tornar o processo de criação de builds mais simplificada para novos jogadores.

---

## Stack

- Next.js
- TypeScript
- TailwindCSS
- Shadcn UI

---

## Executando

Clone o projeto:

```git clone ...```

Entre na pasta:

```cd forza-tunning-assistant```

Instale dependências:

```npm install```

Execute:

```npm run dev```

# Project running on node 22.11.0

---

## Roadmap

# ~~Sprint 1~~ 06/2026✅
~~Home~~
- ~~Forms~~
- ~~Service~~
- ~~RecommendationCard~~
- ~~Basic Logic~~

# ~~Sprint 2~~ 06/2026✅
~~Educational Layer~~
- ~~Add tuningTips on interface~~
- ~~Add tuningTips content as Data~~
- ~~Add tips section on RecommendationCard~~

# ~~Sprint 3~~ 06/2026✅
~~Tuning Guide Page~~
- ~~Create page /tuning-guide~~
- ~~Create cards for the guides~~
- ~~Add navigation~~
- ~~Add button "View More"~~
- ~~Create first detailed page (tire-pressure)~~

# ~~Sprint 4~~ 06/2026✅
- ~~Create detailed pages for:~~
  - ~~Tire Pressure~~
  - ~~Anti-Roll Bars~~
  - ~~Differential~~
  - ~~Alignment~~
  - ~~Springs~~
  - ~~Damping~~
  - ~~Aero~~
  - ~~Gearing~~
  - ~~Breaks~~
- ~~Add simple ilustrations (SVGs or maybe diagrams)~~

# ~~Sprint 5 — Better recommendations~~ 06/2026✅
~~Add more builds for recommendations data file or create new logic to generate builds~~

Considering:
- Current Class
- Target Class
- Drive Train
- Category

Example:
- Road + AWD + B class → A class
  ├─ should generate a diferent recommendation than:
- Road + AWD + A class → S1 class

What was made:
- ~~Build recommendations by drivetrain~~
- ~~Build recommendations by category~~
- ~~Upgrade suggestions by class progression~~
- ~~Dynamic priority adjustment~~
- ~~Recommendation service refactor~~
- ~~Separation of recommendation logic into dedicated services~~
- ~~Explanitions for priority upgrades~~
- ~~Dynamic tips service~~

# ~~Sprint 6 — Upgrades Guides~~ 06/2026✅
~~Create new guide page for upgrades:~~
- ~~Bodykits and Convertions~~
- ~~Aerodinamics and Apearance~~
- ~~Tires and Rims~~
- ~~Transmission~~
- ~~Platform and Handling~~
- ~~Engine~~

Explaning:
- PI Usage ✅
- Pros and Cons ✅
- When should be upgraded ✅

## Sprint 7 — Melhorias de UX

Possible updates:

* Version in PT-BR
* Upgrade Navigation
* Mobile Updates ?

---

## Live Demo

https://forza-tuning-assistant.vercel.app