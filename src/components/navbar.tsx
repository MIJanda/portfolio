import './design.css'
import { BsPersonVideo3 } from "react-icons/bs";
import { TbBriefcase } from "react-icons/tb";
import { BsTools } from "react-icons/bs";
import { GrContact } from "react-icons/gr";

export default function NavBar({personal, languages, contact, projects}: any){
    function scrollToSection(ref: any): void{
        ref.current.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <ul className="nav-items">
            <li className="nav-item" onClick={()=>scrollToSection(personal)}><BsPersonVideo3 size={20}/> Who? </li>
            <li className="nav-item" onClick={()=>scrollToSection(languages)}><BsTools size={20}/> Skills</li>
            <li className="nav-item" onClick={()=>scrollToSection(projects)}><TbBriefcase size={20}/> Projects</li>
            <li className="nav-item" onClick={()=>scrollToSection(contact)}><GrContact size={20}/> Contact</li>
        </ul>
)
}