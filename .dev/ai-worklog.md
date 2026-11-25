# ai worklog — nitrogeo.github.io

Session log for work done on this repo with AI. Newest entries first, below the separator.
Details live here; the learning notes live in `.dev/human-learning.md`.

---

## 11.25.2026 03:16–03:57pm CST — Sync site repo, install human-learning, fix skill paths

### Overview

The site repo was 18 commits behind GitHub with one local edit. The session reset it to `origin/main`,
installed the `human-learning` skill from the fleet repo into OpenCode, wrote a learning note about
`git pull` vs. `reset --hard`, and then corrected both learning/worklog skills so they no longer assume
a fixed `~/Documents/(01)-dev-git/@projects` tree exists on every device.

### What changed

- **`/home/nitro/dev/nitrogeo.github.io`** (synced): `git reset --hard origin/main` to `274ec35`.
  Discarded the only local change, `.idea/workspace.xml` (IDE window layout). Was 18 commits behind.
- **`~/.config/opencode/skills/human-learning/SKILL.md`** (new): copied from
  `~/dev/fleet/@opencode combine later/skills/human-learning/SKILL.md`.
- **`~/dev/fleet/@opencode combine later/skills/human-learning/SKILL.md`** (edited, committed):
  target changed from `~/Documents/(01)-dev-git/@projects/human-learning.md` to `./human-learning.md`
  in the current working directory; added an explicit "never hardcode" rule.
- **`~/Documents/(01)-dev-git/@projects/human-learning.md`** (moved): now
  `/home/nitro/dev/nitrogeo.github.io/.dev/human-learning.md`. The old `@projects` tree was left as it
  was; only the file moved.
- **`~/dev/fleet/@opencode combine later/skills/worklog/SKILL.md`** (edited, committed): target now
  resolves in order — `@projects/projects-worklog.md` in an AI-work directory, `ai-worklog/worklog.md`
  if an `ai-worklog/` folder exists, otherwise `.dev/ai-worklog.md` in the current repo.
- **`~/.config/opencode/skills/worklog/SKILL.md`** (new): copied after the edit above.
- **`.dev/ai-worklog.md`** (new): this file.

### Decisions

- `human-learning` now writes to `./human-learning.md` in the cwd instead of a machine-specific
  Documents path, so the skill works on any device and for lessons that are not clearly "dev".
- Git mechanics are arguably `dev-human-learning` territory. The note was moved into this repo's
  `.dev/human-learning.md` rather than kept in the global notes tree.
- Worklog resolution prefers an existing `ai-worklog/` folder, then falls back to `.dev/ai-worklog.md`,
  so a normal repo does not write into the global `@projects` timeline.

### Human actually learned

- `git pull` is fetch + merge and refuses to overwrite overlapping uncommitted changes;
  `git reset --hard origin/main` replaces without asking; only `git clean -fd` deletes untracked files.
- Two learning skills exist: `human-learning` (everyday systems) and `dev-human-learning`
  (repo mechanics). They should not share a file.

### Validation

- `git status -sb` in the site repo: `## main...origin/main`, no modified tracked files.
- `git diff origin/main --stat`: empty. `git log --oneline -1`: `274ec35`.
- Skill files exist at the expected paths; `grep` confirms the only remaining `Documents` mention in
  `human-learning` is the line telling agents not to hardcode it.
- Could not check: OpenCode picking up the new `worklog` skill without a reload.

### Subtasks

- [x] Reset the site repo to `origin/main`, discarding local changes
- [x] Install `human-learning` into `~/.config/opencode/skills/`
- [x] Write the git learning note and move it to `.dev/human-learning.md`
- [x] Edit `human-learning` to use the current directory
- [x] Edit `worklog` to support `ai-worklog/` and `.dev/ai-worklog.md`
- [x] Copy the updated `worklog` skill into `~/.config/opencode/skills/`
- [x] Read this worklog and approve the push
- [x] Commit and push the fleet skill edits (`7decfb5`)
- [x] Commit and push the site `.dev` notes
- [ ] Fix the fleet repo setup (deferred by the user)

### Follow-up

- Fleet skill updates are pushed to `nitrogeo/fleet` as `7decfb5`.
- The `.dev/` notes are committed and pushed with this repo.
- Fleet repo setup (render/install scripts) is still deferred.
