import { IUser } from "./Table/Table"
import AdminModal from "./AdminPage/AdminModal"


const UserData = ( {users } ) => {  // Nao sei como resolver isso agora, o código funciona porém fica esse aviso de erro;
    

    return (
        <>
            {
                users.map((user: IUser) => {
                    const {username, email, firstName, lastName, password, team, isAdmin} = user
                    

                    return (
                        <tr key={user.id}>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{password}</td>
                            <td>{team}</td>
                            <td>{isAdmin}</td>
                            <td><button className="edit-button"/></td> {/* Fazer integração para chamar o modal de edição (AdminModal)*/}
                            <td><button className="del-button"/></td>  {/* || */}
                        </tr>
                    )
                })
            }
        </>
    )
}

export default UserData
