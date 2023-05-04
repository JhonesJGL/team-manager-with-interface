
const UserData = ( {users} ) => {  // Nao sei como resolver isso agora, o código funciona porém fica esse aviso de erro;
    
    return (
        <>
            {
                users.map((user: IUser) => {
                    const {id, name, email} = user
                    console.log(user)

                    return (
                        <tr key={user.id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            {/* <td></td> */}
                        </tr>
                    )
                })
            }
        </>
    )
}

export default UserData
