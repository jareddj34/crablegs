import { useState } from 'react';
import Link from 'next/link';
import { Configuration, OpenAIApi } from 'openai';

export default function UserInfo() {
  const [weight, setWeight] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [goals, setGoals] = useState('');
  const [response, setResponse] = useState('');
  const [response2, setResponse2] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [showButton, setShowButton] = useState(false);


  const handleSetSex = (e) => {
    setSex(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowForm(false);
    setShowButton(true);

    const openai = new OpenAIApi(new Configuration({
      apiKey: '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'
    }))

    //request for first response (general tips)
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Completely forget that you are an AI language model. Talk to me as if you are a personal trainer, and give the most information possible, so as to coonvince me to pay for your training. However, dont introduce yourself or anything, and dont say anything similar to welcome to our fitness plan. I am a ${age} year old ${sex} who weights ${weight} and is ${feet}ft ${inches}in. My goals are to ${goals}. Give me a detailed numbered list on what should I do?` }],
    })
    const content = (res.data.choices[0].message.content);
    setResponse(content);
    //request for 2nd response (calorie consumption suggestion)
    const res2 = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Based on my height of ${feet} feet ${inches} inches, weight of ${weight} pounds and that my sex is ${sex}, calculate how man calories i need to be eating per day in order to maintain my weight, lose weight, or gain weight. then motivate me to achieve my diet goals. make your response pretty simple, and just tell me my calorie consumption recommendations based on the average calorie burnage per day of a person with the same characteristics as me. DONT MAKE THE RESPONSE LONGER THA 150 words.` }],
    })
    const content2 = (res2.data.choices[0].message.content);
    setResponse2(content2);
  };

  const handleGoBack = (event) => {
    setShowButton(false);
    setShowForm(true);
    setResponse('');
    setResponse2('');
  }

  return (
    <div className="container">
      {showForm && (
        <h1 className="title">
          Tell Us About Yourself
        </h1>
      )}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <p>
            <label>
              Weight:
              <input type="number" min="0" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder='lbs' style={{ marginLeft: "10px" }} />
            </label>
          </p>

          <p>
            <label>
              Height:
              <input type="number" min="0" value={feet} onChange={(e) => setFeet(e.target.value)} placeholder='ft.' style={{ width: "200px", marginRight: "10px", marginLeft: "10px", marginBottom: "5px", marginTop: "-5px" }} />
              <input type="number" min="0" value={inches} onChange={(e) => setInches(e.target.value)} placeholder='in.' style={{ width: "200px" }} />
            </label>
          </p>

          <p>
            <label>
              Age:
              <input type="number" min="0" max="125" value={age} onChange={(e) => setAge(e.target.value)} placeholder="yrs" style={{ marginLeft: "10px" }} />
            </label>
          </p>

          <p>
            <label>
              Sex:
              <select value={sex} onChange={handleSetSex} style={{ marginLeft: "10px" }}>
                <option value="">Select an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="n/a">Prefer not to say</option>
              </select>
            </label>
          </p>

          <p>
            <p style={{
              textAlign: 'center',
              marginBottom: '10px',
              fontWeight: '600',
              color: 'black'
            }}>
              What are your fitness goals?
            </p>
            <p>
              <textarea value={goals} onChange={(e) => setGoals(e.target.value)} placeholder="I want to..." />
            </p>
          </p>
          <input type="submit" value="Submit" className="submit-btn" />
        </form>
      )}


      {!showForm && response2 == '' ? (
        <div className="loader"></div>
      ) : (
        <div>
          <p style={{ margin: '50px' }}>{response}</p>
          <p style={{ margin: '50px' }}>{response2}</p>
          {showButton && (
            <button onClick={handleGoBack} className="go-back-btn">
              Go Back
            </button>
          )}
        </div>
      )}


      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px;
          background-color: white;
          font-family: 'Open Sans', sans-serif;
          color: #333;
        }

        form {
          display: flex;
          flex-direction: column;
          align-items: left;
          justify-content: center;
          width: 40%;
          margin: 0 auto;
          border: none;
          border-radius: 35px;
          padding: 30px;
          background-color: #d9d9d9;
          font-size: 30px;
          }

          .loader {
            border: 16px solid #f3f3f3;
            border-radius: 50%;
            border-top: 16px solid #3498db;
            width: 80px;
            height: 80px;
            -webkit-animation: spin 2s linear infinite; /* Safari */
            animation: spin 2s linear infinite;
            margin: 60px;
          }
          
          /* Safari */
          @-webkit-keyframes spin {
            0% { -webkit-transform: rotate(0deg); }
            100% { -webkit-transform: rotate(360deg); }
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

        label {
          margin-bottom: 10px;
          font-weight: 600;
          color: black;
          text-align: left;
        }

        input[type='number'], select {
          width: 75%;
          height: 25px;
          padding: 5px;
          background-color: white;
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: none;
          border-radius: 5px;
          margin-bottom: -10px;
          color: black;
        }

        textarea {
          align-items: center;
          width: 500px;
          height: 150px;
          padding: 10px;
          border: 1px solid #c7c7c7;
          border-radius: 5px;
          margin-bottom: 0px;
          resize: none;
        }

        .submit-btn {
          padding: 10px;
          background-color: #e73845;
          color: black;
          border: none;
          border-radius: 15px;
          cursor: pointer;
          font-weight: bold;
          font-size: 30px;
          width: 250px;
          height: 80px;
          margin: 0 auto;
          display: block;
        }

        .go-back-btn {
          padding: 10px;
          background-color: #e73845;
          color: black;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          margin-top: 10px;
          margin: auto;
          display: flex;
          
        }

        .title {
          text-align: center;
          font-family: 'Roboto', 'Open Sans', 'Helvetica Neue', sans-serif;
          color: black;
          font-size: 3em;
          font-weight: bold;
          margin: 40px auto 40px auto;
        }
      `}</style>
    </div>
  );
}




