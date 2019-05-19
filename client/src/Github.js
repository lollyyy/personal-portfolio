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
        <div class='gh-repo' key={repo.id}>
          <p key={repo.name}>{repo.name}</p>
          <a key={repo.url} href={repo.url}>Link to repo</a>
        </div>
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
