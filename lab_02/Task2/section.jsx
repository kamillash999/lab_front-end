import react from 'react';

// компонент- ообертка на основе фрагмента 
const Section = ({ title, children}) => {
    return (
        <>
        <section className="page-section">
            <h2>{title}</h2>
            {children}
        </section>
    </>
    );
};

export default Section;