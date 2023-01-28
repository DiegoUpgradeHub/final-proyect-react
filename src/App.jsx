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
import { Button, ButtonGroup, Flex, Image } from '@chakra-ui/react';

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
    <Flex className="App"
      direction="column"
      justify="left"
      align="center"
    >
      <Link to="/">
          <Image className="logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" 
            alt="Rick & Morty Proyect" 
            boxSize='350px'
          />
      </Link>
      {authenticated ? (
        <>
          <Flex className="navigation"
            direction="row"
            justify="center"
            align="center"
            wrap="wrap"
            m="10px"
          >
            <Link to="/" className="link">
              <Button
                m="10px"
                p="25px"
                w="175px"
              >
              Home</Button>
            </Link>
            <Link to="/SearchEngine" className="link">
            <Button
                m="10px"
                p="25px"
                w="175px"
              >
              Buscador</Button>
            </Link>
            <Link to="/Characters" className="link">
            <Button
                m="10px"
                p="25px"
                w="175px"
              >
              Listado completo</Button>
            </Link>
            <Link to="/profile" className="link">
            <Button
                m="10px"
                p="25px"
                w="175px"
              >
              Profile</Button>
            </Link>
            <LogoutButton logout={logout} />
          </Flex>
        </>
        ) : (
          <ButtonGroup className="notLogged">
            <Link to="/login">
              <Button>Iniciar sesión</Button>
            </Link>
            <Link to="/Register">
              <Button>Registrarme</Button>
            </Link>
          </ButtonGroup>
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
    </Flex>
  );
}

export default App;
