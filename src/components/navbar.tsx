import './design.css'

export default function NavBar({personal, languages, contact, projects}: any){
    function scrollToSection(ref: any): void{
        ref.current.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <ul className="nav-items">
            <li className="nav-item" onClick={()=>scrollToSection(personal)}>Who? 💼</li>
            <li className="nav-item" onClick={()=>scrollToSection(languages)}>Skills ✍🏻</li>
            <li className="nav-item" onClick={()=>scrollToSection(projects)}>Projects 📖</li>
            <li className="nav-item" onClick={()=>scrollToSection(contact)}>Contact Me 🤳</li>
        </ul>
)
}