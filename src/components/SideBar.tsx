import './design.css'
import { BsPersonVideo3 } from "react-icons/bs";
import { TbBriefcase } from "react-icons/tb";
import { BsTools } from "react-icons/bs";
import { GrContact } from "react-icons/gr";
export default function SideBar({activeSection, personal, languages, contact, projects}: any){
    function scrollToSection(ref: any): void{
        ref.current.scrollIntoView({behavior: 'smooth'})
    }
    return(
        <section>
            <ul className="sidebar-menu">
                <li onClick={()=>scrollToSection(personal)} className={`sidebar-item ${activeSection == 'personal' ? 'active' : null}`}><BsPersonVideo3 size={20}/> Who?</li>
                <li onClick={()=>scrollToSection(languages)} className={`sidebar-item ${activeSection == 'languages' ? 'active' : null}`}><BsTools size={20}/> Skills</li>
                <li onClick={()=>scrollToSection(projects)} className={`sidebar-item ${activeSection == 'projects' ? 'active' : null}`}><TbBriefcase size={20}/> Projects</li>
                <li onClick={()=>scrollToSection(contact)} className={`sidebar-item ${activeSection == 'contact-me' ? 'active' : null}`}><GrContact size={20}/> Contact Me</li>
            </ul>
        </section>
    )
}