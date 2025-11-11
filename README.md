# Credit Rewards Maximizer

A static React + TypeScript app to help you maximize your credit card rewards at any business.

## Features

- Add credit cards (with issuer and reward categories).
- (Demo) Hardcoded businesses and promos.
- Search businesses; see max rewards for each card (including promos).
- No login/account; all data stored in your browser (localStorage).

## Quick Start (in your browser with GitHub Codespaces)

1. **Open with Codespaces (Recommended)**
   - Click the green "Code" button in your repo, then "Codespaces" > "Create codespace on main".
   - When your environment loads, run:
   ```
   npm install
   npm start
   ```
   - Visit the local address shown in the Codespaces preview to view your app.

2. **Optional: Local (Requires Node.js & npm)**
   ```
   git clone https://github.com/gkasoff/credit-rewards-maximizer.git
   cd credit-rewards-maximizer
   npm install
   npm start
   ```
   App runs on http://localhost:3000

## Deploy to GitHub Pages (Free Hosting!)

1. Make sure your package.json includes:
   ```
   "homepage": "https://gkasoff.github.io/credit-rewards-maximizer",
   "scripts": {
     ...
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
2. Deploy:
   ```
   npm run deploy
   ```
   Your app will be live at:  
   https://gkasoff.github.io/credit-rewards-maximizer

## File Structure

```
credit-rewards-maximizer/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AddCardForm.tsx
│   │   ├── CardList.tsx
│   │   ├── SearchBusiness.tsx
│   │   ├── RewardsResult.tsx
│   ├── data/
│   │   ├── businesses.ts
│   │   ├── promos.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── styles.css
├── package.json
├── tsconfig.json
├── README.md
```

## Customization

- Edit data in `src/data/` for new businesses, promos, or default cards.
- All profile data is stored locally for each user.

## License

MIT# credit-rewards-maximizer
