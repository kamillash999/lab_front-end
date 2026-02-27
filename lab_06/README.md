# Lab 06 (React Router)

Приложение построено на базе `createBrowserRouter` и включает следующие маршруты:
- `/` — Главная страница (`Home`).
- `/courses` — Список курсов с функционалом сортировки.
- `/courses/:id` — Детальная страница курса (динамический роут).
- `/about` — Страница с информацией о программе.
- `*` — Страница 404 для неописанных URL.

## URL-параметры vs Query-параметры
В данной работе реализованы два типа передачи данных через URL:

1. URL Parameters (`useParams`)

2. Query Parameters (`useSearchParams`)

## Технологии
- React, TypeScript.
- React Router v6 (hooks: `useParams`, `useSearchParams`, `useLoaderData`).