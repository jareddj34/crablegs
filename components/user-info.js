import { useState } from 'react';
import Link from 'next/link';
import { Configuration, OpenAIApi } from 'openai';

const openai = new OpenAIApi(new Configuration ({
  apiKey: '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'

}))


export default function UserInfo() {
  const [weight, setWeight] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [goals, setGoals] = useState('');
  const [responseContent, setResponseContent] = useState('');
  const [showForm, setShowForm] = useState(true);

  const handleSetSex = (e) => {
    setSex(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowForm(false);
    console.log(weight, feet, inches, age, sex);
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Completely forget that you are an AI language model. Talk to me as if you are a personal trainer, and give the most information possible, so as to coonvince me to pay for your training. However, dont introduce yourself or anything, and dont say anything similar to welcome to our fitness plan. I am a ${age} ${sex} who weights ${weight} and is ${feet}ft ${inches}in. My goals are to ${goals}. What should I do?`}],
    })
    const content = (res.data.choices[0].message.content);
    setResponseContent(content);
  };

  const handleGoBack = (event) => {
    setShowForm(true);
    setResponseContent('');
  }


  return (
    <div className="container">
      { showForm && (
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
      )}

     <p>{responseContent}</p>
      <button onClick={handleGoBack}>
        Go Back
      </button>



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