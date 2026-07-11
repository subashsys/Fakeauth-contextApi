# Auth Context API Project

This is a small project I made to learn how React Context API works in Next.js with TypeScript.

## What it does

- Login page (fake login, no real backend)
- Register page (just a form, doesn't actually save anything)
- Dashboard page that you can only see if you're logged in
- Navbar changes depending on if you're logged in or not
- Login state stays saved even if you refresh the page (using localStorage)

## How to run it

1. Clone this repo
2. Install packages

```
npm install
```

3. Run the dev server

```
npm run dev
```

4. Open http://localhost:3000

## Test login

Since there's no real backend, use these fake credentials to log in:

- Email: test@test.com
- Password: 123456

## What I learned

This project was mainly to understand:
- How Context API works (createContext, useContext)
- How to avoid prop drilling
- Protecting routes based on login state
- Basic Tailwind styling

## Notes

This is a beginner project, so the code is kept simple on purpose. No real backend or database is used, everything is just simulated with localStorage..