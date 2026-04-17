import React, {useState} from 'React'

/**
 * Комапонент RegistrationFrom упровлет регистрацией пользователя
 * с мгновенной валидацией и предотвращением стандартной отправки.
 */

const RegistrationFrom = () => {
    // Состояния для ввода 
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[age, setAge] = useState('');
    
    // Состояние для ошибок 
    const[NameError, setNameError] = useState('');
    const[emailError, setEmailError] = useState('');
    const[ageError, setAgeError] = useState('');

    // Сщъосстояние успешной валидации 
const validateName = (val) => {
    if (!val) return "Name is required";
    if (val.length < 2 ) return "Minimum 2 characters required";
    return "";
};
const validateEmail = (val) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$; // простой /regex 
    if(!val) return "Email is required";
    if(!emailRegex.test(val)) return "Invalid Email Format";
    return "";
};
const validateEge = (val) => {
    if(!val) return "Age is required";
    if (isNaN(val)|| Number(val) < 18) return "Must a namber and 18+"; 
    return "";
};

//Обработчик отправки формы
const handleSubmit = (e) => {
    e.preventDefault(); // Остановка перезагрузки старницы 

    // Финальная проверка перед "отправкой" 
    const nErr = valdateName (name);
    const eErr = validateEmail (email);
    const AErr = validateAge (age);

    if (nErr || eErr|| Aerr) {
        setNameError(nErr);
        setNameEmail(eErr);
        setNameAge(aErr);
        setSuccess (false);
        return;
    }
    
    setSuccess(true);
    // Очистка полей
    setName('');
    setEmail('');
    setAge(''); 
};

return (
    <div className="form-container">
        <h2>User Registration</h2>
        {success && <p style={{ collor: 'green'}}>Registration Successful!</p>}

        <form onSubmit={handleSubmit}>
                <div>
                    <input 
                       type= "text"
                       placeholder="Name"
                       value={name}
                       onChange={(e) => {
                        const val = e.target.value;
                        setName(val);
                        setNameError(validateName(val)); // Валидация при вводе
                       }}
                     />           
                     {NameError && <p style={{ color: 'red'}}>{NameError}</p>}
                </div>

                    <div>
                        <input
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={(e)=>{
                            const val = e.target.value;
                            setAge(val);
                            setAgeError(validateEge(val));
                        }}
                    />    
                    {ageError && <p style={{ color: 'red'}}>{ageError}</p>}
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    };
export default RegistrationFrom;

