import { Div, P } from "../../../../utils/StyledComponents/StyledComponents";
import ProfileUserCard from "./ProfileUserCard";
export default function ProfileUserCards ({users, handlerBlockOrUnlockUser}) {
    return (
        users.length
        ? users.map((user) => <ProfileUserCard user={user}handlerBlockOrUnlockUser={handlerBlockOrUnlockUser}/>)
        : <P>No se encontraron usuariosss</P>
    )
}