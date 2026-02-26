import task1 from './Lab_02/task1/Task1';
import Section from './Lab_02/task2/Section';
import ProductList from './Lab_02/task2/ProductList';

function App() {
    return (
        <div className="App">
            {/*Отображаем первую задачу */}
            <Task1 />

            <hr />

            {/* отображаем вторую задачу */}
            <Section title="Premium Products">
                <ProductList />
            </Section>
        </div>
    );
}

export default App;
