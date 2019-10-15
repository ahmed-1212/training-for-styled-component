import React, {useState} from 'react';
import './App.css';
import {Image, Container, Button, Footer} from './component/Component'

function App() {

  const [theme, setTheme] = useState('light');

  const changeThemeHandler = () => {

    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    
        <Container>
          <Image alt={theme} src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <Footer theme={theme}>
            <Button theme={theme} onClick={changeThemeHandler}> {theme}</Button>
          </Footer>
        </Container>
    
  );
}

export default App;
