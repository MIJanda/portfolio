import {useState, useEffect } from 'react'

const useNavBarVisibility = (navBarRef: any) => {
    const [isNavbarVisible, setIsNavBarVisible] = useState(true);

    useEffect(()=> {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsNavBarVisible(entry.isIntersecting);
            },
            { threshold: [0, 1] }
        );
        if(navBarRef.current){
            observer.observe(navBarRef.current)
        }
        return () => {
            if(navBarRef.current){
                observer.unobserve(navBarRef.current)
            }
        }
    }, [navBarRef])

    return isNavbarVisible
}

export default useNavBarVisibility