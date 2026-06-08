# CONTEXT.md

## Visão Geral do Projeto

**Nome:** Forza Tuning Assistant

**Tipo:** Projeto de Portfólio / Ferramenta Educacional

**Status:** Em desenvolvimento

O objetivo deste projeto é criar uma plataforma educacional focada em conceitos de tuning automotivo dentro da franquia Forza Horizon, inicialmente voltada para o Forza Horizon 6.

Ao invés de ser um gerenciador de garagem ou banco de builds, o projeto busca ensinar de forma simples e prática como upgrades e configurações de tuning afetam o comportamento dos veículos.

O projeto possui dois objetivos principais:

1. Ajudar jogadores a entender os sistemas de tuning do Forza.
2. Demonstrar conhecimentos de desenvolvimento frontend, arquitetura de projetos, TypeScript, componentes reutilizáveis e roteamento utilizando Next.js.

---

# Stack Tecnológica

## Frontend

* Next.js 16 (App Router)
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* Lucide Icons

## Possíveis Integrações Futuras

* Deploy na Vercel
* Analytics
* Banco de Dados
* CMS ou conteúdo em Markdown

---

# Funcionalidades Atuais

## Assistente de Build

O usuário seleciona:

* Classe Atual
* Classe Desejada
* Tipo de Tração
* Categoria

Exemplos:

* B
* A
* AWD
* Road

O sistema retorna:

* Nome da Build
* Descrição
* Prioridades de Upgrade
* Dicas de Tuning

### Fluxo Atual

Entrada do Usuário
↓
getRecommendation()
↓
Recommendation Service
↓
Recommendation Card

---

## Sistema de Guias de Tuning

Implementado como uma feature separada.

### Página Principal

Rota:

/tuning-guide

Exibe cards de tópicos como:

* Tire Pressure
* Anti-Roll Bars
* Differential

### Páginas Dinâmicas

Padrão:

/tuning-guide/[slug]

Exemplos:

/tuning-guide/tire-pressure
/tuning-guide/anti-roll-bars
/tuning-guide/differential

Fluxo:

1. Captura o slug da URL
2. Procura o guia correspondente no dataset
3. Renderiza o conteúdo
4. Exibe mensagem de erro caso o guia não exista

---

# Estrutura do Projeto

src/

app/
├─ page.tsx
├─ tuning-guide/
│ ├─ page.tsx
│ └─ [slug]/
│ | └─ page.tsx

features/
├─ home/
| ├─ components/
| ├─ data/
| ├─ constants.ts
| └─ types.ts
├─ recommendations/
| ├─ recommendationCard.tsx
| └─ recommendationService.ts
├─ tuning-guide/
| ├─ components/
| ├─ data/
| ├─ TuningGuidePage.tsx
| └─ GuideDetailPage.tsx

components/
└─ ui/

types/
├─ recommendation.ts
└─ tuningGuide.ts

---

# Modelos de Dados

## Recommendation

```ts
interface Recommendation {
  title: string;
  description: string;
  priorities: string[];
  tuningTips: string[];
  classUpgrade?: string;
  drivetrain?: string;
  category?: string;
  currentClass?: string;
  targetClass?: string;
  // upgradeNotes?: string[];
}
```

## TuningGuide

```ts
interface TuningGuide {
  id: string;
  title: string;
  description: string;
  overview?: string;
  effects: string[];
  tips?: string[];
  mistakes?: string[];
}
```

---

# Princípios do Projeto

## Educação em Primeiro Lugar

O objetivo principal é explicar conceitos, não apenas entregar respostas.

## Fácil de Entender

O conteúdo deve ser acessível para jogadores iniciantes.

## Evolução Incremental

Evitar complexidade desnecessária e desenvolver o projeto em pequenas etapas.

## Organização por Features

Agrupar arquivos relacionados à mesma funcionalidade.

## Componentes Reutilizáveis

Priorizar componentes reutilizáveis e padronizados.

---

# Histórico de Desenvolvimento

## Sprint 1 — MVP do Assistente de Build

Status: Concluída

Implementado:

* Estrutura inicial do projeto
* Next.js + TypeScript
* Tailwind CSS
* shadcn/ui
* Formulário de seleção
* Recommendation Service
* Recommendation Card
* Seleção de upgrade de classe

---

## Sprint 2 — Camada Educacional

Status: Concluída

Implementado:

* Tuning Tips
* Explicações complementares
* Recomendações mais informativas

---

## Sprint 3 — Sistema de Guias

Status: Concluída

Implementado:

* Página de Guias
* Cards de Guia
* Navegação
* Rotas dinâmicas com slug
* Página de detalhes
* Conteúdo baseado em dados

---

# Próximos Passos

## Sprint 4 — Expansão de Conteúdo

Adicionar conteúdo detalhado para:

* Tire Pressure
* Anti-Roll Bars
* Differential
* Alignment
* Springs
* Damping
* Aero
* Gearing

Cada guia deve possuir:

* Visão Geral
* Efeitos
* Dicas
* Erros Comuns

---

## Sprint 5 — Recomendações Mais Inteligentes

Levar em consideração:

* Classe Atual
* Classe Desejada
* Tipo de Tração
* Categoria

Exemplo:

Road + AWD + B→A

deve gerar recomendações diferentes de:

Road + AWD + A→S1

Criar mais builds para alimentar a base de dados ou estruturar um processo para gerar builds a partir dos inputs do usuario

---

## Sprint 6 — Guia de Upgrades

Criar uma seção educacional sobre upgrades:

* Pneus
* Weight Reduction
* Differential
* Anti-Roll Bars
* Upgrades de Motor
* Troca de Tração

Explicando:

* Consumo de PI
* Benefícios
* Quando priorizar

---

## Sprint 7 — Melhorias de UX

Possíveis melhorias:

* Busca
* Filtros
* Breadcrumbs
* Navegação aprimorada
* Melhorias Mobile

---

# Visão de Longo Prazo

Transformar o projeto em uma plataforma educacional simples para conceitos de tuning no Forza.

O foco não é encontrar a build perfeita, mas ajudar o jogador a entender:

* Por que uma alteração funciona
* Quando utilizá-la
* Quais são seus pontos positivos e negativos

O projeto deve demonstrar tanto habilidades técnicas de desenvolvimento frontend quanto conhecimento sobre sistemas de tuning do Forza Horizon.
