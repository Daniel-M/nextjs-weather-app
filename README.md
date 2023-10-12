This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Get PNPM
To install PNPM, run the following command in your terminal:
    
```bash
npm install -g pnpm
```

### AccuWeather API Key
You need to create an account to use this app. You can sign up at [http://accuweather.com](http://accuweather.com). and get an API key.
set the API key as environment variable API_KEY or in layout.tsx file under app.

### Component Storybook
This project uses [Storybook](https://storybook.js.org/) to develop UI components in isolation for React. It also helps to document components and showcase components interactively in an isolated development environment.
To use Storybook, run the following command in your terminal:
    
```bash
pnpm run storybook
```

### Runing the app

First, run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
