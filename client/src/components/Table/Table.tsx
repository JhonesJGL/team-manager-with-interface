import { useEffect, useState } from "react"
import './Table.css'
import UserData from "../UserData"

export interface IUser {
    id: number,
    name: string,
    email: string
}


export default function Table() {
    const API = 'https://jsonplaceholder.typicode.com/users'
    const [users, setUsers] = useState<IUser[]>([])

    const fetchData = async (url : string) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            if(res.ok) {
                setUsers(data);
                console.log(data)
            }
        }
        catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        fetchData(API)
    }, [])
    

    return (
        <>
            <table>
                
                    <div className="header">
                    <thead>
                        
                            <th>id</th>
                            <th>nome</th>
                            <th>email</th>
                            <th>Último Nome</th>
                            <th>Senha</th>
                            <th>Squad</th>
                            <th>Admin</th>
                            <th>Editar</th>
                            <th>Deletar</th> 
                        
                        </thead>
                    </div>
                <div className="body">
                    <tbody>
                        <UserData users={users}/>
                    </tbody>
                </div>
            </table>
        </>
    )
}