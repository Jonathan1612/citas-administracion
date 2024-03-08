import { useState } from 'react';
import InputPrimary from "../../atoms/InputPrimary/InputPrimary"
import ButtonPrimary from '../../atoms/ButtonPrimary/ButtonPrimary'
import Calendar from '../../atoms/Calendar/Calendar';

const Form = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [secondSurname, setSecondSurname] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [date, setDate] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleSurname = (e) => {
    setSurname(e.target.value)
  }

  const handleSecondSurname = (e) => {
    setSecondSurname(e.target.value)
  }

  const handleSymptoms = (e) => {
    setSymptoms(e.target.value)
  }

  const handleDate = (e) => {
    setDate(e.target.value)
  }



  return (
    <form>
      <div className="form">
        <h1 className="title_secondary">Formulario</h1>
        <InputPrimary label="Nombre(s)" placeholder="Nombre(s)" value={name} onChange={handleNameChange} />
        <InputPrimary label="Apellido Parterno" placeholder="Apellido Parterno" value={surname} onChange={handleSurname} />
        <InputPrimary label="Apellido Materno" placeholder="Apellido Materno" value={secondSurname} onChange={handleSecondSurname} />
        <InputPrimary label="Sintomas" placeholder="Sintomas" value={symptoms} onChange={handleSymptoms} />
        <Calendar label="Fecha" placeholder="Fecha" value={date} onChange={handleDate} />
        <ButtonPrimary />
      </div>
    </form>
  );
}

export default Form;
