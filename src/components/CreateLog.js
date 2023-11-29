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
  const [success, setSuccess] = useState('');
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
  
    try {
      const res = await fetch("/api/training", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        }
      });
  
      if (!res.ok) { // Check if the HTTP response status code is not successful
        const errorData = await res.text();
        console.error('Response error:', errorData);
        setError('Information invalid, please try again.');
        return;
      }
  
      setSuccess('Form submission success! Redirecting...');
      setTimeout(() => {
        router.push("/traininglogs");
      }, 2000); // Redirect after 2 seconds
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
        {success && <p style={{ color: 'green' }}>{success}</p>} {/* Success message */}

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