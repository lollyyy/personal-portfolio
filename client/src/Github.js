import React from 'react';

export default class Github extends React.Component {
  constructor() {
    super()
    this.state = {
      response: [],
    }
  }

componentDidMount() {

  fetch('https://api.github.com/users/lollyyy/repos', {
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Lollyyy',
    }
  })
  .then(results => results.json())
  .then(data => {
    const repos = data.map((repo) => {
      return (
        <>
        <a class='gh-link' key={repo.html_url} href={repo.html_url}>
        <div class='gh-repo' key={repo.id}>
          <p key={repo.name}>{repo.name}</p>
          <p>Created at {repo.created_at}</p>
          <p>Language: {repo.language}</p>
          <p>{repo.description}</p>
        </div>
        </a>
        </>
      )
    })
  this.setState({response: repos})
  console.log("state", this.state.response)
})
}

render() {
  return (
    <div class='repo-wrap'>
    <h2>Github Repos</h2>
        {this.state.response}
    </div>
  )
}
}
