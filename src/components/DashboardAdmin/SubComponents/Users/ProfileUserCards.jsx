import { Div, P } from "../../../../utils/StyledComponents/StyledComponents";
import ProfileUserCard from "./ProfileUserCard";
export default function ProfileUserCards ({users}) {
    return (
        users.length
        ? users.map((user) => <ProfileUserCard user={user}/>)
        : <P>No se encontraron usuariosss</P>
    )
}