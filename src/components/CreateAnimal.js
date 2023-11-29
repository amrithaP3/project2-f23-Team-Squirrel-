import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';

const CreateAnimal = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [hoursTrained, setHoursTrained] = useState(0);
  const [profilePicture, setProfilePicture] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { userId } = useAuth();
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    if (!userId) {
      setError('No user ID found. Please log in.');
      return;
    }
  
    console.log(name);
    console.log(breed);
    console.log(userId);
    console.log(hoursTrained);
    console.log(profilePicture);

    const payload = {
      name,
      breed,
      owner: userId,
      hoursTrained: hoursTrained,
      profilePicture
    };
  
    try {
      const res = await fetch("/api/animal", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        }
      });
  
      if (!res.ok) {
        const errorData = await res.text();
        console.error('Response error:', errorData);
        setError('Information invalid, please try again.');
        return;
      }
  
      setSuccess('Animal creation success! Redirecting...');
      setTimeout(() => {
        router.push("/animals");
      }, 2000);
    } catch (error) {
      console.error('Error creating animal:', error);
      setError('An error occurred while creating the animal.');
    }
  };

  return (
    <div>
      <h1>Create Animal</h1>
      <form onSubmit={handleFormSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}

        <label>
          Name:
          <input 
            type="text"
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />

        <label>
          Breed:
          <input 
            type="text" 
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <br />

        <label>
          Hours Trained:
          <input 
            type="number" 
            value={hoursTrained}
            onChange={(e) => setHoursTrained(e.target.value)}
          />
        </label>
        <br />

        <label>
          Profile Picture URL:
          <input 
            type="text" 
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </label>
        <br />

        <button type="submit">Create Animal</button>
      </form>
    </div>
  );
};

export default CreateAnimal;
