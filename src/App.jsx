import React, { useContext, useEffect, useState } from 'react'
import Login from './componenets/Auth/Login'
import EmployeeDashboard from './componenets/Dashboard/EmployeeDashboard'
import AdminDashboard from './componenets/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'



function App() {

  // useEffect(() => {
  //   setLocalStorage()
  //   // getLocalStorage()
  // },[])

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)


    }
  },[])

  // ✅ Wait for authData to be available
  // if (!authData) {
  //   return <div>Loading...</div>;
  // }
  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))

    }
    else if (userData) {
      const employee = userData.find((e) => e.email == email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data:employee }))
      }

    }
    else {
      alert("Invalid Credentials")
    }
  }



  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}

    </>
  )
}

export default App