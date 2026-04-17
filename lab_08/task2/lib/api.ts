export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: "admin" | "user";
}

export interface Notification {
  id: string;
  type: "info" | "warning" | "success";
  message: string;
  read: boolean;
  createdAt: string;
}

// Имитация текущей сессии пользователя
export function getCurrentUser(): User {
  return {
    id: "user-123",
    name: "Kamilla", 
    email: "demo@example.com",
    avatar: "/avatars/demo.jpg",
    role: "user",
  };
}

// Получение уведомлений с искусственной задержкой
export async function getUserNotifications(userId: string): Promise<Notification[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return [
    { id: "1", type: "info", message: "Добро пожаловать в дашборд!", read: false, createdAt: "2026-03-01" },
    { id: "2", type: "success", message: "Профиль успешно обновлен", read: true, createdAt: "2026-02-28" },
  ];
}

// Получение аналитики (генерируется случайно на сервере)
export async function getUserAnalytics(userId: string) {
  await new Promise(resolve => setTimeout(resolve, 100));
  return {
    pageViews: Math.floor(Math.random() * 10000),
    sessions: Math.floor(Math.random() * 1000),
    bounceRate: Math.random() * 100,
  };
}