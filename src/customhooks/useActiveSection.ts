import { useState, useEffect } from "react";

const useActiveSection = (sections: any) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(()=>{
        const handleScroll = ()=>{
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            for (const section of sections) {
                const element = section.ref.current;
                if(element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition){
                    setActiveSection(section.className)
                    break;
                }
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () =>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, [sections])

    return activeSection
    
}

export default useActiveSection