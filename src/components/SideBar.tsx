import './design.css'
export default function SideBar({activeSection, personal, languages, contact, projects}: any){
    function scrollToSection(ref: any): void{
        ref.current.scrollIntoView({behavior: 'smooth'})
    }
    return(
        <section>
            <ul className="sidebar-menu">
                <li onClick={()=>scrollToSection(personal)} className={`sidebar-item ${activeSection == 'personal' ? 'active' : null}`}>💼 Who?</li>
                <li onClick={()=>scrollToSection(languages)} className={`sidebar-item ${activeSection == 'languages' ? 'active' : null}`}>✍🏻 Skills</li>
                <li onClick={()=>scrollToSection(projects)} className={`sidebar-item ${activeSection == 'projects' ? 'active' : null}`}>📖 Projects</li>
                <li onClick={()=>scrollToSection(contact)} className={`sidebar-item ${activeSection == 'contact-me' ? 'active' : null}`}>🤳 Contact Me</li>
            </ul>
        </section>
    )
}