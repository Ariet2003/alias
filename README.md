# Alias Game

<img width="1132" alt="Alias game screenshot" src="./assets/alias.png">

A web-based implementation of the popular word-guessing game "Alias", optimized for both mobile and desktop. Add it to your home screen for a native-like app experience.

**Play the game: https://kubk.github.io/alias**

## How to Play

Alias is a team game that helps develop language skills. The goal is for you to explain a word to your teammates using hints and associations, without saying the actual word. For each word your team guesses correctly, you score a point.

## Features

- **2000 most common English words**: A curated list of popular words
- **Mobile-first design**: Fully responsive and works great on any screen size
- **PWA support**: Can be "installed" on a mobile device and used like a native app
- **Smooth animations**: Interactive elements are animated using Framer Motion for a fluid user experience

## Technologies Used

- **Framework**: [React](https://reactjs.org/)
- **State Management**: [MobX](https://mobx.js.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Как запустить проект (How to Run)

### Требования (Requirements)

- Node.js версии 16 или выше
- npm (устанавливается вместе с Node.js)

### Установка и запуск (Installation and Run)

1. **Установите зависимости** (если еще не установлены):
   ```bash
   npm install
   ```

2. **Запустите проект в режиме разработки**:
   ```bash
   npm run dev
   ```

3. **Откройте браузер** и перейдите по адресу, который покажет Vite (обычно `http://localhost:5173`)

### Другие команды (Other Commands)

- **Сборка для продакшена**:
  ```bash
  npm run build
  ```

- **Проверка типов TypeScript**:
  ```bash
  npm run typecheck
  ```

- **Предпросмотр продакшен сборки**:
  ```bash
  npm run preview
  ```

- **Форматирование кода**:
  ```bash
  npm run prettier:fix
  ```