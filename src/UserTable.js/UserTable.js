import React from "react"

function UserTable(props) {
    const { data, onSort } = props;
    return (
        <>
            <div className="container">
                <table>
                    <thead>
                        <tr>

                            <th ><button onClick={() => onSort("API")}>API</button>
                            </th>
                            <th><button onClick={() => onSort("Description")}>Description</button>
                            </th>
                            <th>Auth</th>
                            <th>Cors</th>
                            <th>Link</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, key) => (
                            <tr key={key}>
                                <td>{user.API}</td>
                                <td>{user.Description}</td>
                                <td>{user.Auth}</td>
                                <td>{user.Cors}</td>
                                <td>{user.Link}</td>
                                <td>{user.Category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default UserTable;
