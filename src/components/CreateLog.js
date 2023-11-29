// pages/createlog.js

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth'

const CreateLog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState(0);
  const [date, setDate] = useState('');
  const [animals, setAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [error, setError] = useState('');
  const {userId} = useAuth();
  const router = useRouter();

  useEffect(() => { // for dropdown selection
    async function fetchAnimals() {
      try {
        const res = await fetch("/api/admin/animals");
        const data = await res.json();
        setAnimals(data);
      } catch (error) {
        console.error('Error fetching animals:', error);
        setError('An error occurred while fetching the animals');
      }
    }
    fetchAnimals();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Ensure that we have a valid user ID before sending the request
    if (!userId) {
      setError('No user ID found. Please log in.');
      return;
    }
  
    const payload = {
      user: userId,
      animal: selectedAnimal,
      title,
      date,
      description,
      hours: Number(hours)
    };
  
    console.log('Payload before fetch:', payload); // This will show you the payload before it's sent
  
    try {
      const res = await fetch("/api/training", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        }
      });
  
      // rest of your fetch call
    } catch (error) {
      console.error('Error creating training log:', error);
      setError('An error occurred while creating the training log');
    }
  };

  // Render the form with animal dropdown and date input
  return (
    <div>
      <h1>Create Training Log</h1>
      <form onSubmit={handleFormSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <label>
          Title:
          <input 
            type="text"
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />

        <label>
          Animal:
          <select
            value={selectedAnimal}
            onChange={(e) => setSelectedAnimal(e.target.value)}
          >
            {animals.map((animal) => (
              <option key={animal._id} value={animal._id}>
                {animal.name} - {animal.breed}
              </option>
            ))}
          </select>
        </label>
        <br />

        <label>
          Description:
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />

        <label>
          Hours Trained:
          <input 
            type="number" 
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </label>
        <br />

        <label>
          Date:
          <input 
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <br />

        <button type="submit">Create Log</button>
      </form>
    </div>
  );
};

export default CreateLog;