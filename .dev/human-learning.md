# human learning — how everyday systems actually work

> **Status:** living notes, started 11.25.2026. Written for the owner, not for an audience.
> If a note disagrees with reality, reality is right — fix the note.

## Contents
1. [Git pull vs. the folder on my disk](#1-git-pull-vs-the-folder-on-my-disk)

## 1. Git pull vs. the folder on my disk — 25.11.2026

**What happened.** The site repo (`~/dev/nitrogeo.github.io`) was 18 commits behind GitHub and had
one uncommitted edit: `.idea/workspace.xml`, the IDE's saved window layout. The ask was "pull and
throw my local changes away". It worked, and the local edit was the only casualty.

**ELI5.** GitHub is the master copy in a locker; the folder on your disk is a photocopy you scribble
on. `git pull` asks the locker for the new pages and staples them into your copy. If you scribbled on
a page that the new pages replace, the stapler refuses — not because it can't, but because it won't
silently shred your scribble. `git reset --hard` is the other move: throw your copy in the bin and
photocopy the locker's copy fresh.

Where the analogy breaks: git keeps history, so *committed* work is not really destroyed. `reset
--hard` only loses uncommitted edits and local commits that were never pushed (and those sit in the
reflog for a while).

**What actually happens.** `git pull` is two steps: `git fetch` then `git merge` (or `git rebase`).

| Step | What it touches | What it does |
| --- | --- | --- |
| `git fetch` | `origin/main` only | downloads new commits; your files are untouched |
| `git merge` | working files | fast-forwards or merges them in; refuses if your uncommitted edits overlap the incoming files |
| `git reset --hard origin/main` | branch pointer + working files | points the branch at GitHub's commit and overwrites tracked files |
| `git clean -fd` | untracked files | deletes files git never tracked — the part that actually eats "new files I made" |

The refusal message is the important one: `error: Your local changes to the following files would be
overwritten by merge`. That is git protecting work it cannot merge safely, not a broken repo.

**What to do about it.** Decide first whether the local edit matters.

```bash
cd ~/dev/nitrogeo.github.io

# look before you leap
git status
git log --oneline HEAD..origin/main   # what is coming in

# keep my local edits
git stash push -u
git pull
git stash pop

# throw my local edits away (what we did today)
git fetch origin
git reset --hard origin/main

# same thing, shorter: reset to the branch's upstream
git reset --hard @{u}
```

Only add `git clean -fd` when untracked files are genuinely disposable. It does not ask.

**How to check it yourself.** After the reset:

```bash
git status -sb          # ## main...origin/main   ← no ahead/behind, no modified files
git log --oneline -1    # same commit as the top of GitHub
git diff origin/main --stat   # empty output
```

Empty output from the last command is the proof: the folder and GitHub now hold identical content.

**If you remember one thing.** `git pull` merges and will refuse to clobber uncommitted work;
`git reset --hard origin/main` replaces and will not ask.

**Terms worth knowing.** working tree · commit · remote-tracking branch (`origin/main`) ·
fast-forward · stash · reflog · untracked file.
