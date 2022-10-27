
import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './Contexts/AuthProvider/AuthProvider';
import { routes } from './Routes/Routes';


function App() {


  return (
    <div className="App">
      
     <RouterProvider router={routes}></RouterProvider>
     
    </div>
  );
}

export default App;
