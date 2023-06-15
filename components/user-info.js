import { useState } from 'react';
import Link from 'next/link';

export default function UserInfo(){

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    
    const [sex, setSex] = useState('');

    const handleSetSex = (e) => {
        setSex(e.target.value);
    };

    const handleSubmit = () => {
        event.preventDefault();
        console.log(weight, height, age);
        //create new user object in prisma and put add a username and password to it
    }


    return (

        <form onSubmit={handleSubmit}>
            <p>
            <label>
                Weight:
                <input type="number" min = "0" value={weight} onChange={e => setWeight(e.target.value)} />
            </label>
            </p>

            <p>
            <label>
                Height (in.):
                <input type="number" min = "0" value={height} onChange={e => setHeight(e.target.value)} />
            </label>
            </p>

            <p>
            <label>
                Age:
                <input type="number" min = "0" value={age} onChange={e => setAge(e.target.value)} />
            </label>
            </p>

            <p>
                Sex: 
                <select value={sex} onChange={handleSetSex}>
                    <option value="">Select an option</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="n/a">Prefer not to say</option>
                </select>
            </p>

            <input type="submit" value="Submit" />

            <p>
            <Link href = "/">Click to go back</Link>
            </p>
        </form>
    )
    
}