import http from "./axios"


const apis = {
  github: (username: string, year?: number):Promise<GithubContributionData> => {
    year = year || new Date().getFullYear()
    const url = `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`
    return http.get(url, {
      cache: {
        enabled: true,
        ttl: 60 * 60 * 24 * 7
      }
    }).then(res => res.data)
  }
}

export default apis
