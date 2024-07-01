import { ReactNode } from "react"
import './design.css'

type SkillProps = {
    skillName: string
    iconUrl: string
}

export default function Skill(props: SkillProps): ReactNode{
    return(
        <div className="skill">
            <img src={props.iconUrl} className="skill-image" alt={props.skillName}/>
        </div>
    )
}
