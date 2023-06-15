import { useState } from 'react';
import Link from 'next/link';

export default function UserInfo(){

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    return (

        <form>
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
                age:
                <input type="number" min = "0" value={age} onChange={e => setAge(e.target.value)} />
            </label>
            </p>

            <input type="submit" value="Submit" />

            <p>
            <Link href = "/">Click to go back</Link>
            </p>
        </form>
    )
    
}