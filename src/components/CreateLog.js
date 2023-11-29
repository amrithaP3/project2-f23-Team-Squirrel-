// pages/createlog.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import moment from "moment";

const CreateLog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState('');
  const [animalId, setAnimalId] = useState('');
  const [error, setError] = useState(null);
  let myMoment = 0;
        try {
            myMoment = moment({year, month, day});
        }catch(e) {
            setErrorMessage(e.message);
            return;
        }


  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch("/api/training", {
            method: "POST",
            body: JSON.stringify({ user, animal, title, date, description, hours }),
            headers: {
              "Content-Type": "application/json",
            }
          });


          if (res.ok) {
            const data = await res.json();
            console.log(data)
            if (data) {
              createlog(data);
              router.push("./traininglogs");
            } else {
              alert("Information invalid");
            }
          } else {
            alert("Info invalid");
          }
        
      

      // Redirect to the training logs page on successful submission
    } catch (error) {
      console.error('Error creating training log:', error);
      setError('An error occurred while creating the training log');
    }
  };

 
  
  return (
    <div>
      <h1>Create Training Log</h1>

      <form onSubmit={handleFormSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label>
          Title:
          <input 
          type="text" 
          name = "title"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} 
          name = "description"
          onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Hours:
          <input 
          type="number" 
          name = "hours"
          value={hours} onChange={(e) => setHours(e.target.value)} />
        </label>
        <br />
        <label>
          Animal ID:
          <input 
          type="text" 
          name = "animalId"
          value={animalId} onChange={(e) => setAnimalId(e.target.value)} />
        </label>
        <br />
        <button type="submit">Create Log</button>
      </form>
    </div>
  );
};

export default CreateLog;
