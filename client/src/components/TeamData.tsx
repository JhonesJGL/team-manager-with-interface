import { ITeams } from "./Table/TeamsTable"
import AdminModal from "./AdminPage/AdminModal"


const TeamData = ({teams}) => {  // Nao sei como resolver isso agora, o código funciona porém fica esse aviso de erro;
    

    return (
        <>
            {
                teams.map((team: ITeams) => {
                    const {id, squadName, leader} = team
                    

                    return (
                        <tr key={team.id}>
                            <td>{squadName}</td>
                            <td>{leader}</td>
                            <td><button className="members-button"/></td>
                            <td><button className="edit-button"/></td>{/* Fazer integração para chamar o modal de edição (AdminModal)*/}
                            <td><button className="del-button"/></td>{/* || */}
                        </tr>
                    )
                })
            }
        </>
    )
}

export default TeamData
