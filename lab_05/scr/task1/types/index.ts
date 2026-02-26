// опред интерфейс польз. 

export interface User {
    name: string;
    email: string;
    age: number;
}

// тип для уровней владения навыком

export type skillLevel = 'Beginner' | 'Intermediate' | 'Expert';

// интерфейс для наы=авыыка
export interface Skill {
    id: number;
    name: string;
    level: skillLevel;
    
}