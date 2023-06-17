import { useState } from 'react';
import Link from 'next/link';

export default function UserInfo() {
  const [weight, setWeight] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [goals, setGoals] = useState('');

  const handleSetSex = (e) => {
    setSex(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(weight, feet, inches, age, sex);
    // create new user object in prisma and add a username and password to it
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Weight(lbs): 
            <input type="number" min="0" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </label>
        </p>

        <p>
          <label>
            Height:
            <input type="number" min="0" value={feet} onChange={(e) => setFeet(e.target.value)} />
            ft.
            <input type="number" min="0" value={inches} onChange={(e) => setInches(e.target.value)} />
            in.
          </label>
        </p>

        <p>
          <label>
            Age:
            <input type="number" min="0" max="125" value={age} onChange={(e) => setAge(e.target.value)} />
          </label>
        </p>

        <p>
          Sex:
          <select value={sex} onChange={handleSetSex}>
            <option value="">Select an option</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="n/a">Prefer not to say</option>
          </select>
        </p>

        <p>
          <label>
            What are your fitness goals?
            <textarea value = {goals} onChange={(e) => setGoals(e.target.value)}/>
          </label>
        </p>

        <input type="submit" value="Submit" />

        <p>
          <Link href="/">Click to go back</Link>
        </p>
      </form>



      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 50vh;
        }

        form {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f8f8f8;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        label {
          margin-bottom: 10px;
        }

        input[type='number'] {
          width: 100px;
          padding: 5px;
          border-radius: 3px;
          border: 1px solid #fc3903;
        }
        
        input[type='number']:focus {
          border-color: #fc3903; /* Red border color when clicked */
        }

        select {
          width: 150px;
          padding: 5px;
          border-radius: 3px;
          border: 1px solid #fc3903;
        }

        input[type='submit'] {
          margin-top: 15px;
          padding: 10px 20px;
          background-color: #fc3903;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        p {
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
}

/*
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
*/