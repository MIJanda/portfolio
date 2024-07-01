import { Octokit } from "@octokit/rest";

type APIType = {
    fetchMyRepos: Function
}

export const API: APIType= {
    fetchMyRepos : async () => {

        const octokit = new Octokit({auth: import.meta.env.VITE_GITHUB_AUTH_TOKEN});

        let response = await octokit.request('GET /users/IannnnnW/repos', {
            username: 'IannnnnW',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        return response.data
    }
}
