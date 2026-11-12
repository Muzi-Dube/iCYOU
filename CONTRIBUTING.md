# Contributing to iCYOU

Thanks for wanting to help! iCYOU is a small, open-source project, and it's built to be a place where student developers can work on real software and learn from each other. **You don't need to be an expert. You just need to be willing to build.**

This guide explains how to get set up, how we work, and what makes a contribution easy to review and merge.

## Ways to contribute

Code isn't the only way to help. All of these are valuable:

- **Code:** bug fixes, features, the React and TypeScript migration, performance work
- **Testing:** trying the app with different Instagram exports and reporting what breaks
- **Design:** UI/UX improvements and accessibility
- **Documentation:** clearer instructions, better comments, fixing typos
- **Ideas:** suggestions for new tools or other platforms (open an issue to start the conversation)

## Before you start

- **Check the open issues** for something that interests you. Issues labelled `good first issue` are a friendly place to begin.
- **Comment on the issue** to say you're working on it, so two people don't do the same thing.
- **For anything big**, such as a new feature or a large refactor, open an issue first so we can agree on the approach before you spend time on it.
- **Small fixes** (typos, small bugs, docs) can go straight to a pull request.

## Setting up locally

1. **Fork** the repository, then **clone** your fork:

   ```bash
   git clone <your-fork-url>
   cd <repo-folder>
   ```

2. **Start a local server.** Web Workers don't load from `file://`, so open the app through a server:

   ```bash
   python3 -m http.server 8000
   ```

   Then visit `http://localhost:8000`.

3. **Try it with real data.** Request your own export from Instagram (see the README) and upload your followers and following files to check that everything works.

## Making a change

1. **Create a branch** from `main`. Use a short, descriptive name:

   ```bash
   git checkout -b fix/results-page-sorting
   ```

   Common prefixes: `feature/`, `fix/`, `docs/`, `refactor/`.

2. **Make your change.** Keep it focused: one pull request should do one thing.

3. **Test it.** Run the app and check that your change works and that the existing pages (home, results, unfollower detection) still behave. If you changed anything that handles data, test with a large export too.

4. **Commit** with a clear message that says what and why:

   ```
   Fix sorting on the results page

   Usernames with uppercase letters were sorted before lowercase ones.
   ```

5. **Push** your branch and **open a pull request** against `main`.

## Pull request checklist

A good pull request:

- [ ] Does one thing and explains what it changes and why
- [ ] Links the related issue (for example, "Closes #12")
- [ ] Includes a screenshot or short GIF if it changes the UI
- [ ] Has been tested by running the app
- [ ] Doesn't include unrelated formatting changes or leftover debugging code

## Code guidelines

iCYOU is moving gradually from vanilla JavaScript to React and TypeScript. Please keep these in mind:

- **Keep the core separate from the UI.** Data parsing, comparison logic, background processing and the user interface should stay in separate pieces. Core logic shouldn't depend on any UI framework. This is what makes the migration possible without rebuilding everything.
- **Keep heavy work in Web Workers.** Anything that processes large lists shouldn't run on the main thread.
- **Prefer small, readable functions** with clear names over clever shortcuts.
- **Match the existing style** of the file you're editing.
- **Add comments** when the reason for something isn't obvious.

## Privacy rules

Privacy is a core promise of this project: user data stays in the browser.

- **Never commit real Instagram data**, including your own export. Use made-up sample data for tests and screenshots.
- **Blur or replace usernames** in screenshots.
- **Don't add anything that sends user data to a server**, such as analytics, trackers or third-party scripts, without discussing it in an issue first.

## Using AI tools

AI tools are fine to use. We ask one thing: **you should understand and be able to explain every line you submit.** Please review and test anything an AI tool produces before opening a pull request. If we ask why something works the way it does, we'd like you to be able to answer.

## Reporting bugs

Open an issue and include:

- What you expected to happen and what actually happened
- Steps to reproduce the problem
- Your browser and operating system
- A screenshot, if it helps (with usernames hidden)

## Suggesting features

Open an issue that describes the problem you want to solve, not just the solution. Explaining who it helps and why makes it easier to discuss.

## Being a good teammate

Be kind and patient, especially with people who are new to open source. Give feedback on the work, not the person, and assume good intentions. Everyone here is learning.

## Questions?

If you're stuck, open an issue or ask in the comments of the pull request. Asking questions is welcome.

Thanks for helping make iCYOU better. ❤️
