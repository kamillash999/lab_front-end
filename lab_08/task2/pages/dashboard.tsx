
import { GetServerSideProps } from "next";
import { User, Notification, getCurrentUser, getUserNotifications, getUserAnalytics } from "../lib/api";

interface DashboardProps {
  user: User;
  notifications: Notification[];
  analytics: {
    pageViews: number;
    sessions: number;
    bounceRate: number;
  };
  currentTime: string;
}

export default function Dashboard({ user, notifications, analytics, currentTime }: DashboardProps) {
  const unreadCount = notifications.filter(n => !n.read).length; 
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <header>
        <h1>Панель управления: {user.name}</h1>
        <p>Роль: <strong>{user.role}</strong></p>
      </header>

      <section style={{ margin: '20px 0', padding: '15px', border: '1px solid #ccc' }}>
        <h2>Аналитика (SSR)</h2>
        <div>Просмотры: {analytics.pageViews.toLocaleString()}</div>
        <div>Сессии: {analytics.sessions.toLocaleString()}</div>
        <div>Показатель отказов: {analytics.bounceRate.toFixed(1)}%</div>
      </section>

      <section>
        <h2>Уведомления ({unreadCount} непрочитанных)</h2>
        <ul>
          {notifications.map(notif => (
            <li key={notif.id} style={{ color: notif.read ? 'gray' : 'black' }}>
              [{notif.type.toUpperCase()}] {notif.message}
            </li>
          ))}
        </ul>
      </section>

      <footer style={{ marginTop: '30px', fontSize: '0.8em' }}>
        <p>Данные обновлены: {new Date(currentTime).toLocaleTimeString()}</p>
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const user = getCurrentUser();
  const notifications = await getUserNotifications(user.id);
  const analytics = await getUserAnalytics(user.id);

  return {
    props: {
      user,
      notifications,
      analytics,
      currentTime: new Date().toISOString(), // Передаем время запроса 
    },
  };
};