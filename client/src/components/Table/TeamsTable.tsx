import { useEffect, useState } from "react"
import './TeamsTable.css'
import TeamData from "../TeamData"



export interface ITeams {
    id: number;
    squadName: string;
    leader: string;
}


export default function TeamsTable() {
    const API = 'https://jsonplaceholder.typicode.com/users'
    const [teams, setTeams] = useState<ITeams[]>([])

    const fetchData = async (url : string) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            if(res.ok) {
                setTeams(data);
                
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
                <thead>{/* Cria o header da tabela de maneira fixa sempre com este cabeçalho; */}
                    <tr>
                        <th>Nome do Squad</th>
                        <th>Líder</th>
                        <th>Participantes</th>
                        <th>Editar</th>
                        <th>Deletar</th>
                    </tr>
                </thead>      
                    <tbody>
                        <TeamData teams={teams}/>{/* Cria o corpo da tabela baseado no fetch; */}
                    </tbody>
            </table>
        </>
    )
}