# OpenSpec vs SpecKit Learning Course

A hands-on course for evaluating **OpenSpec** and **SpecKit** as spec-driven development (SDD) tools — their philosophies, workflows, trade-offs, and where each falls short.

Built for teams using AI coding assistants (Cursor, Claude Code) on both greenfield and brownfield codebases.

## Start here

**[Lesson 1: What is Spec-Driven Development?](lessons/0001-what-is-sdd.html)**

Open the lesson in your browser to read the content and try the interactive quizzes.

## Lessons

| # | Lesson | Topic |
|---|--------|-------|
| 1 | [What is Spec-Driven Development?](lessons/0001-what-is-sdd.html) | The methodology both tools implement |
| 2 | [OpenSpec Philosophy & Workflow](lessons/0002-openspec-philosophy.html) | Fluid, iterative, brownfield-first |
| 3 | [SpecKit Philosophy & Workflow](lessons/0003-speckit-philosophy.html) | Structured phases and GitHub-native workflow |
| 4 | [Head-to-Head Comparison](lessons/0004-head-to-head.html) | Side-by-side evaluation |
| 5 | [Gaps & Improvement Opportunities](lessons/0005-gaps-and-improvements.html) | Limitations and concrete improvements |

Each lesson includes quizzes to check your understanding. Use the navigation links at the bottom of each page to move through the course in order.

## Reference

- [Glossary](reference/glossary.html) — SDD terminology for OpenSpec and SpecKit
- [Mission](MISSION.md) — learning goals and success criteria
- [Resources](RESOURCES.md) — official docs, community links, and further reading

## How to use this repo

1. Clone the repository.
2. Open [Lesson 1](lessons/0001-what-is-sdd.html) in a browser (double-click the file, or run `open lessons/0001-what-is-sdd.html` on macOS).
3. Work through the lessons sequentially — later lessons assume familiarity with earlier ones.

No build step or server required. Lessons are self-contained HTML with shared styles in `assets/`.

## What you'll be able to do

By the end of the course you should be able to:

- Explain how spec-driven development differs from ad-hoc AI prompting
- Compare OpenSpec and SpecKit workflows, artifacts, and agent integration
- Identify gaps and limitations in each tool
- Recommend which tool (or hybrid approach) fits a given use case

## Related projects

- [OpenSpec](https://github.com/Fission-AI/OpenSpec) — fluid, brownfield-first SDD
- [SpecKit](https://github.com/github/spec-kit) — GitHub's structured SDD toolkit
