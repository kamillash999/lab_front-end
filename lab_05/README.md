# Lab 05: TypeScript & Props Validation

В данной работе были использованы  TypeScript для обеспечения безопасности типов:

1. User (Interface): Описывает структуру объекта пользователя с полями `name` (string), `email` (string) и `age` (number) 
2. Skill (Interface): Содержит `id`, название навыка и его уровень 
3. SkillLevel (Type Alias): Union-тип, ограничивающий уровни навыков до 'Beginner', 'Intermediate' или 'Expert' 
4. UserCardProps: Интерфейс для пропсов компонента, включающий обязательный объект `user`, необязательный флаг `isActive` и `children` типа `React.ReactNode`
