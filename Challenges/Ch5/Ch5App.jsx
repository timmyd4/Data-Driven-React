/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */
import ContactCard from "./Ch5Contact.jsx";
export default function App() {
    return (
        <div className="contacts">
            <ContactCard/>
            <ContactCard/>
            <ContactCard/>
            <ContactCard/>
        </div>
    )
}

