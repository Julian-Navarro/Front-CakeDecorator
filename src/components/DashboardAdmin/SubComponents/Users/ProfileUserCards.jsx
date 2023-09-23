import { Div, P } from "../../../../utils/StyledComponents/StyledComponents";
import ProfileUserCard from "./ProfileUserCard";
import s from "./ProfileUserCard.module.css"
export default function ProfileUserCards({ users, handlerBlockOrUnlockUser }) {

  return users.length ? (
    <div className={s.cardsContainerAll}>
    {users.map((user, id) => (
        <ProfileUserCard
          key={id}
          user={user}
          handlerBlockOrUnlockUser={handlerBlockOrUnlockUser}
          />
    ))}
    </div>
  ) : (
    <p>No se encontraron usuariosss</p>
  );
}
