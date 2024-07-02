type Project = {
    homepage: string
    url: string
    forks: string
    description: string
    starCount: string
    language: string
    name: string
    issues: string
}

interface DarkModeState {
    darkMode: boolean;
}

type DarkModeAction = { 
    type: 'TOGGLE_DARK_MODE' 
};