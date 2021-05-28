import { NavLink } from 'react-router-dom';
import styles from './HomePage.module.css';

export default function HomePage() {
    return (        
        <main className={styles.container}>
            <h1>
                Your online Phonebook
            </h1>
            <NavLink
                to='/contacts'
                className={styles.button}
                title="Please Login"
            >Please login</NavLink>
        </main>        
    )
}