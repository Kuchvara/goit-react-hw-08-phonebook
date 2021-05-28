import { NavLink } from 'react-router-dom';

export default function HomePage() {
    return (
        <main>
        <section className=''>
            <h1 className=''>
                Your online Phonebook
            </h1>
            <NavLink
                to='/contacts'
                className=''
                title="Please Login"
            >Please login</NavLink>
        </section>
        </main>
    )
}