import React from 'react';

// Компонент Card принимает title и дочерние элементы (children)
const Card = ({title, Children, className }) => {
    return (
        <div className={'card-container $ {className || ""}'}>
            <h3>{title}</h3>
            <div className="card-content"> 
               {children}
               </div>
        </div>    
     );
};

export default Card;

