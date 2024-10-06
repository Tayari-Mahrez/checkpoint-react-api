import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css"

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users")
                setListOfUsers(response.data)
                console.log(listOfUsers)

            } catch (error) {
                console.log("error fetched ", error)
            }
        }
        fetchUsers()

    },[])
    return (
        <div className="user-list-container">
          <h1>List of Users</h1>
            <ul>
              {listOfUsers.map((user) => (
                <li key={user.id} className="user-item">
                  <h2>{user.name}</h2>
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                  <p>Website: {user.website}</p>
                </li>
              ))}
            </ul>
        </div>
      );
    };
    
    export default UserList;

