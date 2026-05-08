# The Brogram

A 30-day gym workout tracker built with React and TypeScript. Follow a structured Bro Split program, log your max weights, and track your progress day by day.

## Features

- **30-day Bro Split program** — Push, Pull, and Legs days cycling over 30 sessions
- **Day progression** — Days unlock sequentially as you complete them
- **Weight tracking** — Log your max weight per exercise; inputs are saved to `localStorage`
- **Exercise descriptions** — Hover any exercise and click `?` to view a description and proper form cues
- **Dark theme** — Full dark mode throughout
- **Responsive** — Works on desktop, tablet, and mobile

## The Program

The workout plan uses a **Bro Split** rotation:

> Push → Pull → Legs → Repeat

Each day includes a warmup and a main workout. Warmup exercises are bodyweight only (N/A weight). Workout exercises have editable weight fields so you can track your working weights over time.

### The Rules

1. **Rest** — Take rest days where necessary
2. **Reps** — Every rep follows a **2-2-2 tempo** (2 seconds down, 2 second pause, 2 seconds up)
3. **Weight** — Use the maximum weight you can lift with good form. Sets 1 and 2 should be at 75% and 85% of your working weight.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173).

### Other commands

```bash
pnpm build    # type-check and build for production
pnpm preview  # preview the production build
pnpm lint     # run ESLint
```

## Tech Stack

- [React 19](https://react.dev)
- [TypeScript 6](https://www.typescriptlang.org)
- [Vite 8](https://vite.dev)
- [NES.css](https://nostalgic-css.github.io/NES.css/) — pixel-art CSS framework for the info sections

## Project Structure

```
src/
├── components/
│   ├── Layout.tsx        # Header + Footer wrapper
│   ├── Header.tsx        # Site title
│   ├── Footer.tsx        # Attribution
│   ├── Hero.tsx          # Program intro sections
│   ├── Grid.tsx          # Day card grid + state management
│   ├── WorkoutCard.tsx   # Compact day button (locked / active / completed)
│   ├── WorkoutDetail.tsx # Inline workout panel with weight inputs
│   └── Modal.tsx         # Exercise description overlay
├── types/
│   └── types.ts          # Exercise, WorkoutProgram, WorkoutDescription types
└── utils/
    ├── workoutProgram.ts     # 30-day workout data
    └── workoutDescription.ts # Exercise form cues
```

## Built by

Rohan Chaudhary — styled with [NES.css](https://nostalgic-css.github.io/NES.css/)
