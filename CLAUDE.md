# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn install       # install dependencies
yarn start         # dev server at http://localhost:3000
yarn build         # production build
yarn test          # run tests in watch mode
yarn test --watchAll=false  # run tests once (CI mode)
```

## Architecture

React 16 SPA bootstrapped with Create React App. Uses yarn as the package manager.

**Module resolution:** `src/` is the base URL (configured in `jsconfig.json` and `babel-plugin-module-resolver`). All imports use absolute paths from `src/` — e.g. `import { Color } from "theme/Setting"` rather than relative paths.

**Routing:** `src/router.js` defines the route config array. `App.js` splits at the top level — `/login` renders `<Login>` directly, everything else goes through `<DefaultLayout>` which maps the route config to `<Route>` components wrapped in a `<CommonLayout>`. Route protection uses the `requireAuth` HOC from `src/authRoute.js`.

**State management:** Redux + redux-thunk. Store shape:
- `popupFeedback` — general notification state (show/hide)
- `purchaseHistory` — purchase cart state

Actions and their types live in `src/store/actions/` and `src/store/actionType.js`. Redux DevTools extension is enabled in development.

**API layer:** All HTTP calls go through `src/helpers/fetch.js`, a thin axios wrapper that handles `FormData` content-type and redirects to `/` on 401. API functions in `src/api/` use this wrapper. The mock backend is an Apiary mock at `private-4639ce-ecommerce56.apiary-mock.com`.

**Authentication:** Cookie-based using `universal-cookie`. On Google/Facebook OAuth success, an `access_token` cookie is set with a 25-minute expiry. The app reads this cookie to determine if a user is logged in.

**Styling:** styled-components for component styles. Global design tokens (colors, utility functions like `PxToVp`, `HexToRgbA`) are in `src/theme/Setting.js`. Global CSS reset/base is in `src/theme/GlobalStyle.js`.

**Components structure:**
- `src/components/pages/` — full-page views (Login, HomePage, SearchPage, DetailProductPage, PurchasePage)
- `src/components/commons/` — reusable UI primitives (Button, Input, Panel, Dropdown, Text, etc.)
- `src/components/containers/` — layout wrappers (CommonLayout, DefaultLayout)
