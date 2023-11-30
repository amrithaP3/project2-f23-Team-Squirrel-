import styles from "@/styles/SearchHeader.module.css";
import Image from "next/image";
import progressLogo from "@/images/Progress.png";

export default function SearchHeaderComponent() {

    return (
        <div className={styles.SearchHeader}>
            <Image src={progressLogo} alt="Progress Logo" id={styles.progress}/>
        </div>
    );
}
