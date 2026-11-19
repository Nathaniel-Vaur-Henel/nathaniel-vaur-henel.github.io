---
title: GlanceRuns
description: A mosaic run manager for IntelliJ Platform IDEs — visually monitor your long-running commands without keeping a full-size console permanently on screen.
---

import MarketplaceWidgetComponent from "@site/src/components/MarketplaceWidgetComponent";

🇫🇷 [Lire en français](/glance-runs/index.fr)

# GlanceRuns

### A mosaic run manager for IntelliJ Platform IDEs

[![Version](https://img.shields.io/jetbrains/plugin/v/36221.svg)](https://plugins.jetbrains.com/plugin/36221-glanceruns/) [![Downloads](https://img.shields.io/jetbrains/plugin/d/36221.svg)](https://plugins.jetbrains.com/plugin/36221-glanceruns/)

GlanceRuns turns your long-running Run/Debug Configurations into a mosaic of
status cards, so you can watch several of them at a glance instead of
keeping a full-size console open for each one.

:::note What GlanceRuns is not
GlanceRuns is not a replacement for the native Run Manager, and it never
copies a Run Configuration. Every card is a **reference** to an existing
Run Configuration, resolved live when you run it. Editing or renaming the
original configuration in the native Run/Debug Configurations dialog is
always reflected on its card.
:::

## Why GlanceRuns

A `Run`/`Debug` that takes more than a few seconds always ends up out of
sight: a full-size console hogging your editing space "just in case",
several long-running tasks (tests, a build, a local deployment...) you
can no longer tell apart, or a trip back to the Run Manager just to find
out whether something is still running.

GlanceRuns adds a permanent, at-a-glance view on top of your existing
Run/Debug Configurations — nothing more, nothing less.

## Key features

- **Promote** an existing Run/Debug Configuration, or create a new one on
  the fly — already promoted.
- **Reuse the same configuration** several times side by side, each
  instance keeping its own name and its own remembered parameter values.
- **Parametrize** the `Program arguments` field with `{{PLACEHOLDER}}`
  placeholders: GlanceRuns prompts you for their values before each
  launch and runs an in-memory clone — the original configuration is
  never modified.
- A **live log preview** on every card (real ANSI colors), one click away
  from the full native console, exit code, duration, and finish time.
- A **status always derived from the real exit code**, never guessed from
  the text printed in the logs.
- **Drag and drop** to reorder cards, or keyboard-friendly buttons.
- **List, 2-column, or 3-column** layouts, remembered per project.
- **Run everything at once** — with or without restarting what's already
  running.
- Safe handling of a **missing or renamed** Run Configuration, with
  guardrails before closing the IDE while runs are still active.

The full [User Guide](/glance-runs/user-guide) covers every feature in detail.

## Compatibility

GlanceRuns works with IntelliJ Platform 2025.3.5 and compatible versions —
IntelliJ IDEA, and any other IDE built on the same platform.

## Pricing & privacy

GlanceRuns is currently **free**. It collects no personal data, sends no
telemetry, and makes no network call of its own — it only reads and
references data already present in your project. Full terms, including
the possibility of future paid features (with advance notice to users
already active at that time), are in the
[End User License Agreement](/glance-runs/EULA).

## Get it

<MarketplaceWidgetComponent pluginId={36221} />

Install it straight from your IDE — **Settings \| Plugins \| Marketplace**,
search for "GlanceRuns" — or visit its listing on the
[JetBrains Marketplace](https://plugins.jetbrains.com/plugin/36221-glanceruns/).

Curious about the story behind it? Read the
[launch announcement in French](/blog/glanceruns) on the blog, or jump straight into
the [User Guide](/glance-runs/user-guide).
