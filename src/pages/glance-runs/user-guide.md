---
title: GlanceRuns User Guide
description: How to install, promote Run Configurations, and use GlanceRuns in your IDE.
---

🇫🇷 [Lire en français](/glance-runs/user-guide.fr)

# GlanceRuns User Guide

GlanceRuns turns your long-running Run/Debug Configurations into a
mosaic of status cards, so you can watch several of them at a glance
instead of keeping a full-size console open for each one.

:::note What GlanceRuns is not
GlanceRuns is not a replacement for the native Run Manager, and it never
copies a Run Configuration. Every card is a **reference** to an existing
Run Configuration, resolved live when you run it. Editing or renaming the
original configuration in the native Run/Debug Configurations dialog is
always reflected on its card.
:::

## Opening the tool window

GlanceRuns adds a tool window, docked at the bottom of the IDE by
default. Open it from the stripe button, or via **View \| Tool Windows \|
GlanceRuns** if it's hidden.

## Adding a GlanceRun

A promoted card is called a **GlanceRun**. There are three ways to create
one:

1. Click **+** in the tool window's toolbar and pick an existing
   Run/Debug Configuration from the list.
2. In that same list, choose **New Run Configuration...** to open the
   native "Edit Configurations..." dialog, create any type of
   configuration you need, and have it promoted automatically as soon as
   you confirm.
3. From anywhere in the IDE, use **Tools \| Promote to GlanceRun...** on
   an existing configuration — a second entry point to the same list.

:::tip Reuse the same configuration multiple times
The same Run Configuration can be promoted more than once — handy for
running it with different parameter values side by side (see
[Launching with parameters](#launching-with-parameters) below). Each copy
gets its own card, its own name, and its own remembered values.
:::

## Running, stopping, and viewing logs

Each card shows a **Run** button when idle, which turns into **Stop**
once a process is active — never both at once, and a second click while
launch is already in progress is safely ignored.

- **Run** starts the process (after any "before launch" tasks configured
  on the Run Configuration, such as a Build step — if one of them fails,
  the GlanceRun is marked `Failed` and nothing is launched).
- **Stop** asks for confirmation, then terminates the process.
- **Logs**, or a click anywhere on the card body, opens the **expanded
  view**: the full console output (with real ANSI colors), a **soft
  wrap** toggle, and — once the run has finished — its exit code,
  duration, and finish time.
- The card itself only shows a **7-line live preview** of the output, so
  several cards stay readable side by side.

## Launching with parameters

If a Run Configuration's **Program arguments** contain one or more
placeholders, GlanceRuns prompts you for their values before every
launch instead of running the command as-is:

```text
deploy --version {{VERSION}} --env {{env-name}}
```

- A placeholder is `{{` + a name (letters, digits, underscores, and
  hyphens — but never a leading hyphen) + `}}`. Anything that doesn't
  match this shape (template syntax from other tools, spaces in the
  name...) is left untouched.
- Clicking **Run** on a card with placeholders opens a small form — one
  field per placeholder, pre-filled with the **last value you used on
  that card** — with **Launch** / **Cancel** buttons.
- Values are remembered **per card**, not shared across cards or across
  configurations, even when several cards promote the same underlying
  configuration.
- The original Run Configuration is never modified: GlanceRuns clones it
  in memory, substitutes the values into the clone, and runs that clone.
  In the native Run Manager, the configuration keeps its literal
  placeholders.

:::info Current scope
Only the **Program arguments** field supports placeholders, and only as
plain text — no dropdowns, checkboxes, or file pickers yet. Working
directory, environment variables, and VM options are not parameterized
in this version.
:::

## Card statuses

| Status | Meaning |
|---|---|
| **Idle** | Never launched yet, or finished and reset. |
| **Running** | The process is currently active. |
| **Success** | Finished with exit code `0`. |
| **Failed** | Finished with a non-zero exit code, or failed to even start. |
| **Stopped** | Terminated on purpose, via the **Stop** button. |
| **Missing** | The Run Configuration this card points to can no longer be found. |

A status is **always** derived from the process's real exit code — never
guessed from the text printed in the logs. A test that intentionally
prints "ERROR" while still passing will correctly show as `Success`.

`Missing` is layered on top of the status above, not a replacement for
it: a card whose configuration went missing while it was still `Running`
keeps showing `Running` (and you can still stop it, and still read its
logs) until the process itself finishes. Only an otherwise-neutral card
(`Idle` or `Stopped`) displays `Missing` directly.

## Keeping a card linked to its Run Configuration

Open **⋮ \| GlanceRun settings** on any card to:

- See which Run Configuration it's linked to (with its type icon and
  current name), and jump straight to its native settings via **Edit
  configuration...**.
- Toggle **"Synchronize the GlanceRun name with the Run name"** (on by
  default): while enabled, renaming the Run Configuration renames the
  card to match. Turn it off to give the card its own independent name.

## Reordering and organizing cards

- **Drag and drop** any card to a new position, in any layout.
- Or use **⋮ \| Move up** / **Move down** for keyboard-friendly
  reordering.
- Cycle the layout — **List**, **2 columns**, **3 columns** — with the
  layout button in the toolbar; your choice is remembered per project.

## Running everything at once

- **Run All**, in the toolbar, launches every GlanceRun that isn't
  already running.
- Its dropdown, **Run All options**, adds **"Run all, including running
  ones (restart)"** — stops and restarts every card after you confirm.

## When a Run Configuration goes missing

If you delete a Run Configuration that one or more cards reference,
GlanceRuns asks what to do with the now-orphaned cards: **keep them**
(they turn `Missing`, and can be deleted manually later) or **delete
them along with the configuration**.

If a configuration with a matching identity reappears later (for example
you recreate it with the same name), GlanceRuns asks before reattaching
any `Missing` card to it — it never reattaches silently, since there's
no guarantee it's really "the same" configuration as before.

:::caution Closing the IDE with active runs
If any GlanceRun is still running when you close the IDE, you'll be
warned that it will be stopped. After restarting, a card that was
running shows as `Idle`, with a note that it was interrupted by the IDE
closing — GlanceRuns cannot resume a process that no longer exists.
:::

## Privacy

GlanceRuns does not collect any data, send any telemetry, or make any
network call of its own — see the [End User License Agreement](/glance-runs/EULA) for the
full statement. It only reads and references data already in your
project (your Run/Debug Configurations) and writes its own operating
logs to the IDE's local `idea.log`.
