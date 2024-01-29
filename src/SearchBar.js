import {useState} from "react";
import persons from "./Persons.json"
const personsList = persons.persons
function SearchBar() {
    const [searchInput, setSearchInput] = useState('')
    const [personView, setPersonView] = useState('')
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
            Найденная персона:
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
       </div>

    );
}
export default SearchBar;