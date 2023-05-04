import { useEffect, useState } from "react"
import './Table.css'
import UserData from "../UserData"



export interface IUser {
    id?: string;
    username?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    team?: string | null;
    isAdmin?: boolean;
    isLeader?: boolean;
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
                <thead> {/* Cria o header da tabela de maneira fixa sempre com este cabeçalho; */}
                 <tr>     
                    <th>Username</th>
                    <th>Email</th>
                    <th>Primeiro Nome</th>
                    <th>Último Nome</th>
                    <th>Senha</th>
                    <th>Squad</th>
                    <th>Admin</th>
                    <th>Editar</th>
                    <th>Deletar</th> 
                </tr>  
                </thead>      
                    <tbody>
                        <UserData users={users}/> {/* Cria o corpo da tabela baseado no fetch; */}
                    </tbody>
            </table>
        </>
    )
}