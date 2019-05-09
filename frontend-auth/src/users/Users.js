import React from 'react';
import axios from 'axios';
import needAuth from '../authorize/needAuth';
// import axiosWithAuth from '../authorize/axiosWithAuth';

class Users extends React.Component {
    state = {
        users: [],
    };

    render() {
        return (
            <div>
                <h2>Registered Users</h2>
                <div>
                    {this.state.users.map(users => (
                        <h4 key = {users.id}>
                            Username: {users.username} | Department: {users.department}
                        </h4>
                    ))}
                </div>
            </div>
        )
    };

    // componentDidMount() {
    //     axiosWithAuth()
    //     .get('http://localhost:5000/api/users')
    //     .then(res => {
    //         this.setState({ users: res.data })
    //     })
    //     .catch(err => console.log(err))
    // };

    componentDidMount() {
        axios
        .get('http://localhost:5000/api/users')
        .then(res => {
            this.setState({ users: res.data })
        })
        .catch(err => console.log(err));
    };

}

export default needAuth(Users);