import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    }; 
    
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul> {users.map((user) => (<li key={user.id}>{user.name}</li>))} </ul>
    </div>
  );
}

export default App; 