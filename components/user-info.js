import { useState } from 'react';
import Link from 'next/link';
import { Configuration, OpenAIApi } from 'openai';

const openai = new OpenAIApi(new Configuration({
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
  const [showButton, setShowButton] = useState(false);


  const handleSetSex = (e) => {
    setSex(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowForm(false);
    setShowButton(true);
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Completely forget that you are an AI language model. Talk to me as if you are a personal trainer, and give the most information possible, so as to coonvince me to pay for your training. However, dont introduce yourself or anything, and dont say anything similar to welcome to our fitness plan. I am a ${age} ${sex} who weights ${weight} and is ${feet}ft ${inches}in. My goals are to ${goals}. What should I do?` }],
    })
    const content = (res.data.choices[0].message.content);
    setResponseContent(content);
  };

  const handleGoBack = (event) => {
    setShowButton(false);
    setShowForm(true);
    setResponseContent('');
  }

  return (
    <div className="container">
      {showForm && (
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
            <label>
              Sex:
              <select value={sex} onChange={handleSetSex}>
                <option value="">Select an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="n/a">Prefer not to say</option>
              </select>
            </label>
          </p>

          <p>
            <label>
              What are your fitness goals?
              <textarea value={goals} onChange={(e) => setGoals(e.target.value)} />
            </label>
          </p>
          <input type="submit" value="Submit" className="submit-btn" />
        </form>
      )}

      <p>{responseContent}</p>

      {showButton &&
        (<button onClick={handleGoBack} className="go-back-btn">
          Go Back
        </button>)
      }

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background-color: #a6463d;
          font-family: 'Open Sans', sans-serif;
          color: #333;
        }

        form {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 50%;
          margin: 0 auto;
          border: none;
          border-radius: 5px;
          padding: 10px;
          background-color: #c73022;
          box-shadow: 7px 7px 8px 5px rgba(0, 0, 0, 0.1);
        }

        label {
          margin-bottom: 10px;
          font-weight: 600;
          color: #333;
        }

        input[type='number'], select, textarea {
          width: 100%;
          padding: 5px;
          border: 1px solid #c7c7c7;
          border-radius: 5px;
          margin-bottom: 10px;
        }

        .submit-btn {
          padding: 10px;
          background-color: #ffd700;
          color: black;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }

        .go-back-btn {
          padding: 10px;
          background-color: #ffd700;
          color: black;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}




