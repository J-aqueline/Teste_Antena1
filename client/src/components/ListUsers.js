import React, {Fragment, useEffect, useState} from 'react';
import EditUser from './EditUsers';

const ListUsers = () => {
    
    const [users, setUsers] = useState([])

    const deleteUsers = async (id) => {
      try {
        console.log(id);
        const deleteUsers = await fetch(`http://localhost:5000/api/users/${id}`,
        {method: "DELETE"
      });
      //deletar da tela
      setUsers(users.filter(users => users.id !== id));
      } catch (err) {
        console.error(err.message)
      }
    }
  
    const getUsers = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/users`);
          const jsonData = await response.json();
          console.log(jsonData);
          setUsers(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };

    useEffect(() => {
        getUsers();
    }, []);
    
    return (
    <Fragment>
        {" "}
        <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Idade</th>
        <th></th>
        <th></th>

      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.age}</td>
          <td>
            <EditUser user={user}/>
            </td>
          <td>
            <button className="btn btn-danger" onClick={() => deleteUsers(user.id)}> Excluir </button>
            </td>
        </tr>
      ))}
    </tbody>
  </table> 
    </Fragment>
)};

export default ListUsers;