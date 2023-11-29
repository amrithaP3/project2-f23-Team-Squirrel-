import { useAuth } from '@/hooks/useAuth'


export default function Animal(props) {
    const { userId, admin, fullName, login, logout } = useAuth();
    const { animal } = props;
    // const animal = {
    //     "name": "Lucy",
    //     "breed": "Golden Retriever",
    //     "hoursTrained": 100,
    //     "profilePicture": "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg"
    // };   
    return (
        <div className="animal">
             <div className={"dog_name_letter"}>
                    <p className={"first_letter"}>{animal.name.charAt(0).toUpperCase()}</p>
                </div>
            <img className={"doggie"} src={animal.profilePicture} width="350" height="250"></img>
            <div className={"info"}>
                <div className="animal_info_contents">
                    <div className={"animalNameInfo"}>{animal.name} - {animal.breed}</div>
                    <div>{fullName} - Trained: {animal.hoursTrained} hours</div>
                </div>
            </div>
        </div>
    )
}
