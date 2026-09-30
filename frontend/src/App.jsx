import './App.css';
import './index.css';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { useState, useContext } from 'react';
import { getLocalStorage } from './utils/localStorage.jsx';
import { AuthContext } from './context/AuthProvider.jsx';

function App() {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)


  const handleLogin = (email, password) => {
    //we took admin email and password from the login page
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      //this will get you admin data from localStorage
      const { admin } = getLocalStorage()
      setLoggedInUserData(admin[0]) // here we are Passing the admin data
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }
    else if(userData){ //agar userData hai toh yeh run hoga
      const employee = userData.find((e)=> email == e.email && password == e.password)
      if(employee){ 
        setUser('employee')
        setLoggedInUserData(employee)     
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
      }
    }
    else{
      alert('Invalid Credentials')
    }
  }
    
  return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : ''}
    {user === 'admin' ? <AdminDashboard data={loggedInUserData} changeUser={setUser} /> : user == 'employee' ? <EmployeeDashboard data={loggedInUserData} changeUser={setUser} /> : null} 
    </>
  );
}

export default App;
