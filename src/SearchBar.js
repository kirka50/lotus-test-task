import {useState} from "react";
import persons from "./Persons.json"
const personsList = persons.persons
function SearchBar() {
    const [searchInput, setSearchInput] = useState('')
    const [personView, setPersonView] = useState('')
    const [personsView, setPersonsView] = useState([])
    const matchPerson = (input, person) => {
        const inputSplit = input.split(' ')
        if (inputSplit[0] == person.name && inputSplit[1] == person.surName) {
            return true
        }
    }
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
        personsList.map((person) =>{
            if (matchPerson(e.target.value, person)) {
                setPersonView(person)
            }
            if (e.target.value == person.name) {
                setPersonsView(persons => [...persons,person])
            }

        })
    };
    return(
       <div>
           <div style={{marginBottom: '10px'}}>
               <input
                   type="search"
                   placeholder='Поиск'
                   onChange={handleChange}
                   value={searchInput}
               />
               <br/>
               Список персон:
               <br/>
               {personsList.map((person)=> <div key={person.id}>{person.name} {person.surName}</div>)}
           </div>
            Найденная персона (Строгий поиск):
           <ul>
               <li>
                   Имя: {personView.name}
               </li>
               <li>
                   Фамилия: {personView.surName}
               </li>
               <li>
                   Возраст: {personView.age}
               </li>
               <li>
                   Высота: {personView.height}
               </li>
               <li>
                   Вес: {personView.weight}
               </li>
           </ul>

           Найденные персоны:
           {personsView.map((person) =>
               <ul>
               <li>
                   Имя: {person.name}
               </li>
               <li>
                   Фамилия: {person.surName}
               </li>
               <li>
                   Возраст: {person.age}
               </li>
               <li>
                   Высота: {person.height}
               </li>
               <li>
                   Вес: {person.weight}
               </li>
           </ul>)}
       </div>

    );
}
export default SearchBar;