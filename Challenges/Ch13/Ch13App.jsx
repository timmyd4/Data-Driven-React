import Header from "./components/Header.jsx"
import Entry from "./components/Entry.jsx"
import data from "./data.js";

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App() {
    const HeadElements = data.map((x) => {
            return <Entry
                img={{ 
                        src: x.img.src,
                        alt: x.img.alt
                    }}
                    title={x.title}
                    country={x.country}
                    googleMapsLink={x.googleMapsLink}
                    dates={x.dates}
                    text={x.text}
            />
        })
    return (
        <>
            <Header />
            <main className="container">
                {HeadElements}
            </main>
        </>
    )
}