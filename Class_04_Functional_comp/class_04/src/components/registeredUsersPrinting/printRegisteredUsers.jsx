
import '../registeredUsersPrinting/printRegisteredUsers.css'
export const PrintRegisteredUsers = (props) => {


    return (


        <div className="print-registered-users">
            <h2>Registered Users</h2>
            <div className="user-container">
                {props.users.map((user) => (
                    <div key={user.id}>
                        <h4 className="user-name">Name: {user.userFullName}</h4>
                    </div>
                ))}
            </div>

            <button className="remove-button" onClick={props.removeAllUsers}> Remove Users</button>

        </div>

    )
}