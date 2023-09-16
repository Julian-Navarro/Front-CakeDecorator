import { Div, P } from "../../../../utils/StyledComponents/StyledComponents"
import s from "./DashboardStats.module.css"
export default function DashboardStats() {
    return (
        <Div className={s.container}>
            <P fSize="3rem">Dashboard stats</P>
        </Div>
    )
}