import './design.css'
export default function SideBar({activeSection}: any){
    return(
        <section>
            <ul className="sidebar-menu">
                <li className={`sidebar-item ${activeSection == 'personal' ? 'active' : null}`}>💼 Personal</li>
                <li className={`sidebar-item ${activeSection == 'languages' ? 'active' : null}`}>✍🏻 Skills & Technologies</li>
                <li className={`sidebar-item ${activeSection == 'projects' ? 'active' : null}`}>📖 Projects</li>
                <li className={`sidebar-item ${activeSection == 'contact-me' ? 'active' : null}`}>🤳 Contact Me</li>
            </ul>
        </section>
    )
}