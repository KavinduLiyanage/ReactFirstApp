import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts:[]
    }
  }
  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url).then(response => response.json()).then(json => this.setState({posts:json}))
  }
  render() {
    const { posts } = this.state;
    return (
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-4">Blog posts</h1>
          </div>
          {posts.map((post) => (
              <div className="card" key={post.id}>
                <div className="card-header">
                  #{post.id} {post.title}
                </div>
            <div className="card-body">
              <p className="card-text">{post.body}</p>
            </div>
          </div>
          ))}
        </div>
    )
  }
}

export default App;
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/