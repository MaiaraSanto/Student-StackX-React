import { Icons } from "../Icons"
import { ContainerClick } from "./styles"
import brazil from "../../../assets/images/iconbrasil.png"
import spain from "../../../assets/images/iconspain.png"
import english from "../../../assets/images/iconusa.png"
import { IClick, IProps } from "../../../stylesimport"
import { ContainerLogo } from "../Header/styles"



export const Click = ({ languages}:IClick) => {
    return(
        <ContainerClick>
            <Icons image={brazil} text="Português" languages={ languages} />
            <Icons image={ english}  text="English" languages={ languages}/>
            <Icons image={ spain}  text="Español" languages={ languages}/>
        </ContainerClick>

    )
}