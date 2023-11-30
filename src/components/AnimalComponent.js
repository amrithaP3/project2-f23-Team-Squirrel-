// Animal.js

import { useAuth } from '@/hooks/useAuth';
import styles from '@/styles/Animal.module.css';

export default function Animal(props) {
  const { userId, admin, fullName, login, logout } = useAuth();
  const { animal } = props;

  return (
    <>

      <div className={`${styles.animal} animal`}>
        <div className={"animalContainer"}>
          <div className="dog_name_letter">
            <p className="first_letter">{animal.name.charAt(0).toUpperCase()}</p>
          </div>
          <img className="doggie" src={animal.profilePicture} width="350" height="250" />
        </div>
          
        <div className="info">
          <div className="animal_info_contents">
            <div className="animalNameInfo">{animal.name} - {animal.breed}</div>
            <div>{fullName} - Trained: {animal.hoursTrained} hours</div>
          </div>
        </div>
      </div>
    </>
  );
}
