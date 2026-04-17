import { memo } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
}

// React.memo кэширует компонент и сверяет пропсы 
export const UserCard = memo(function UserCard({ user }: UserCardProps) {
  console.log("UserCard render"); // Лог для отслеживания рендеров 

  return (
    <div className="card" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
});