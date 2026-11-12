# iCYOU 🕵️

**Making social media a little more transparent, one problem at a time.**

[![Live app](https://img.shields.io/badge/Live_app-icyou.netlify.app-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://icyou.netlify.app)
![Status](https://img.shields.io/badge/status-in_development-F59E0B?style=for-the-badge)
![PRs welcome](https://img.shields.io/badge/PRs-welcome-22C55E?style=for-the-badge)

iCYOU is an open-source tool that shows you which Instagram accounts you follow that don't follow you back. It works from the JSON data Instagram lets you export, and everything runs **locally in your browser**: no login, no backend, no uploads.

It's also a collaborative project for student developers who want to work on real software, learn from each other, and build experience they can show in a portfolio.

<!-- Add a screenshot or short GIF of the results page here:
![iCYOU results page](docs/screenshot.png) -->

## Features

- **Unfollower detection:** see who you follow that doesn't follow you back
- **Works with Instagram's official export:** uses the data from *Download Your Information*
- **100% client-side:** your data never leaves your browser
- **Responsive on large accounts:** heavy processing runs in Web Workers, so the interface stays smooth
- **No credentials:** your Instagram password is never needed

### Development status

| Page / feature | Status |
|---|---|
| Home page | Working |
| Results page | Working |
| Core unfollower detection | Working |
| Other pages and features | In development |

## How to use it

1. In Instagram, go to **Accounts Center → Your information and permissions → Download your information**.
2. Request your data, making sure **followers and following** are included.
3. Choose **JSON** as the format and download the export once Instagram has prepared it.
4. Open [icyou.netlify.app](https://icyou.netlify.app) and upload your followers and following files (typically `followers_1.json` and `following.json`, found in the export's followers-and-following folder).
5. View the accounts that don't follow you back.

Instagram's menus change from time to time. If a step looks different, search for "download your information" in Instagram's settings.

## Privacy

**Your data stays yours.**

- Your files are read and processed directly in your browser.
- There is no backend server, so your follower and following lists aren't sent to the project.
- iCYOU never asks for your Instagram login.
- You get your data straight from Instagram and decide what to give the app.

## Technology

| | |
|---|---|
| **Today** | Vanilla JavaScript, Web Workers |
| **Migrating to** | React, TypeScript |

The migration is gradual, with a clear aim: keep the core logic independent of the UI framework. That means separating:

- **Data parsing:** reading Instagram's JSON exports
- **Comparison logic:** comparing followers and following
- **Background processing:** heavy work in Web Workers
- **User interface:** showing results and handling interaction

This separation makes the code easier to test and extend, and it means moving to React and TypeScript doesn't require rebuilding the core from scratch.

### Why Web Workers?

Large follower lists mean a lot of computation, and doing it on the main thread would freeze the page. Workers move that load to background threads so the UI stays responsive.

## Running locally

```bash
git clone <your-fork-url>
cd <repo-folder>

# Web Workers don't load from file://, so use a local server:
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Contributing

**You don't need to be an expert to contribute. You just need to be willing to build.**

Student developers and anyone interested in practical, user-focused software are welcome. Why get involved?

- Work on a real project instead of another tutorial clone
- Practise Git and GitHub collaboration (forks, branches, pull requests)
- Get hands-on with JavaScript, React, TypeScript and Web Workers
- Make contributions you can point to in your portfolio and CV

### Where help is welcome

- React and TypeScript migration
- UI/UX improvements
- Performance optimisation
- Testing and quality assurance
- Code organisation and maintainability
- JSON parsing and data handling
- Documentation
- Ideas for supporting other social platforms

### How to contribute

1. Fork the repository and clone your fork.
2. Look through the open issues for something that interests you (check for `good first issue`).
3. Create a feature branch.
4. Make your changes and test them.
5. Open a pull request describing what you changed and why.

For larger changes, please open an issue first so we can agree on the approach.

## Roadmap

This is a direction, not a delivery schedule.

- Complete the React + TypeScript migration
- Extract a modular, framework-independent core
- Add automated tests for parsing and comparison logic
- Improve the user experience
- Add more social media utilities
- Explore support for other platforms

## ⚠️ Disclaimer

iCYOU is an independent project and is not affiliated with, endorsed by, or sponsored by Instagram or Meta Platforms, Inc. Instagram is a trademark of Meta Platforms, Inc.

## 📄 License

See [LICENSE](LICENSE).

---

Built by [Muzi](https://muziportfolio.netlify.app) and contributors. If you're a student developer looking for something meaningful to build, we'd love to have you. ❤️
