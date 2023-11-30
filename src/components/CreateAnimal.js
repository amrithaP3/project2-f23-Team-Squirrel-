import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import styles from '@/styles/CreateLog.module.css'; // Assuming CreateAnimal will use the same styles

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

    const payload = {
      name,
      breed,
      owner: userId,
      hoursTrained: Number(hoursTrained),
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
    <div className={styles.container}>
      <h1 className={styles.heading}>Create Animal</h1>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
        {success && <p style={{ color: 'green', marginBottom: '10px' }}>{success}</p>}

        <div className={styles.formGroup}>
          <label className={styles.label}>Name</label>
          <input 
            className={styles.input}
            type="text"
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Breed</label>
          <input 
            className={styles.input}
            type="text" 
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Hours Trained</label>
          <input 
            className={styles.input}
            type="number" 
            value={hoursTrained}
            onChange={(e) => setHoursTrained(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Profile Picture URL</label>
          <input 
            className={styles.input}
            type="text" 
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </div>

        <div className={styles.buttonGroup}>
          <button type="button" className={`${styles.button} ${styles.cancelButton}`} onClick={() => router.push('/animals')}>
            Cancel
          </button>
          <button type="submit" className={`${styles.button} ${styles.saveButton}`}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAnimal;
