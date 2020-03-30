import React from "react";
import "./App.css";
import Register from "./components/views/Register/Register";
import Login from "./components/views/Login/Login";
import Choose from "./components/views/Choose/Choose";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      isLoggedIn: false,
      needsToCreateUser: false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.handleDoneWithCreatingUser = this.handleDoneWithCreatingUser.bind(
      this
    );
  }

  handleLogin(token) {
    this.setState({ token, isLoggedIn: true });
  }

  handleCreateUser() {
    this.setState({ needsToCreateUser: true });
  }

  handleDoneWithCreatingUser() {
    this.setState({ needsToCreateUser: false });
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div className="app">
          <Choose token={this.state.token} />
        </div>
      );
    } else {
      if (this.state.needsToCreateUser) {
        return (
          <div>
            <Register
              handleDoneWithCreatingUser={this.handleDoneWithCreatingUser}
            />
          </div>
        );
      } else {
        return (
          <div className="app">
            <Login handleLogin={this.handleLogin} handleCreateUser={this.handleCreateUser} />
          </div>
        );
      }
    }
  }
}

export default App;
