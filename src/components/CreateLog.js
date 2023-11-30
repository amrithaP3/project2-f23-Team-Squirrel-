import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth'
import styles from '@/styles/CreateLog.module.css';

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

  const handleCancel = () => {
    router.push('/traininglogs');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Create Training Log Form</h1>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
        {success && <p style={{ color: 'green', marginBottom: '10px' }}>{success}</p>} {/* Success message */}
  
        <div className={styles.formGroup}>
          <label className={styles.label}>Title</label>
          <input 
            className={styles.input}
            type="text"
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
  
        <div className={styles.formGroup}>
          <label className={styles.label}>Select Animal</label>
          <select
            className={styles.select}
            value={selectedAnimal}
            onChange={(e) => setSelectedAnimal(e.target.value)}
          >
            {animals.map((animal) => (
              <option key={animal._id} value={animal._id}>
                {animal.name} - {animal.breed}
              </option>
            ))}
          </select>
        </div>
  
        <div className={styles.formGroup}>
          <label className={styles.label}>Total hours trained</label>
          <input 
            className={styles.input}
            type="number" 
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </div>
  
        <div className={styles.formGroup}>
          <label className={styles.label}>Date</label>
          <input 
            className={styles.input}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
  
        <div className={styles.formGroup}>
          <label className={styles.label}>Note</label>
          <textarea 
            className={styles.textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
  
        <div className={styles.buttonGroup}>
          <button type="button" className={`${styles.button} ${styles.cancelButton}`} onClick={() => router.push('/traininglogs')}>
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

export default CreateLog;