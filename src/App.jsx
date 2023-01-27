import './App.css';
import React, { useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { signIn } from './utils/auth';

import Home from "./components/Home";
import SearchEngine from "./components/SearchEngine";
import Characters from './components/Characters';
import AuthRoute from './components/AuthRoute';
import LogoutButton from './components/LogoutButton';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import Register from './components/Register';

const queryClient = new QueryClient();

function App() {

  const userStringified = localStorage.getItem('uh-user');
  const lastUser = JSON.parse(userStringified);
  const [user, setUser] = useState(lastUser);
  const authenticated = user != null;

  const login = ({ email, password }) => {
    const userLogged = signIn(email, password);
    setUser(userLogged);
    localStorage.setItem('uh-user', JSON.stringify(userLogged));
  };
  const logout = () => {
    localStorage.removeItem('uh-user');
    setUser(null);
  };

  return (
    <div className="App">
      <Link to="/">
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="Rick & Morty Proyect" />
      </Link>
      {authenticated ? (
        <>
          <header className="navigation">
            <Link to="/" className="link">
              <button>Home</button>
            </Link>
            <Link to="/SearchEngine" className="link">
              <button>Buscador</button>
            </Link>
            <Link to="/Characters" className="link">
              <button>Todos los personajes</button>
            </Link>
            <Link to="/profile" className="link">
              <button>Profile</button>
            </Link>
            <LogoutButton logout={logout} />
          </header>
        </>
        ) : (
          <div className="notLogged">
            <Link to="/login">
              <button>Iniciar sesión</button>
            </Link>
            <Link to="/Register">
              <button>Registrarme</button>
            </Link>
          </div>
        )
      }
      <div className="Routes">
        <QueryClientProvider client={queryClient}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/SearchEngine" element={<SearchEngine />} />
          <Route path="/Characters" element={<Characters />} />
          <Route path="/login" element={<LoginForm authenticated={authenticated} login={login} />} />
          <Route path="/profile" element={<AuthRoute user={user} component={<Profile user={user} />} />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
