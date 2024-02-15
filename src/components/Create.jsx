import { useState } from 'react'


const Create = ({ create })=> {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');

    const submit = ev => {
        ev.preventDefault();
        create({name, breed })
    };
    return(
        <form onSubmit={ submit }>
            <input value={ name } onChange={ev => setName(ev.target.value)}/>
            <input value={ breed } onChange={ev => setBreed(ev.target.value)}/>
            <button>Create New Puppy!!!</button>
        </form>
    );
}

export default Create;