
import {
    Container,
    Content,
    Imagelogo,

} from './styles';

import logoSvg from '../../assets/icons/logo.svg';

export function Header(){
    return(
        <Container>
            <Content>
                <Imagelogo src= {logoSvg} alt="SStackX"/>
                    <button>
                        <img src='https://github.com/MaiaraSanto.png' />
                    </button>
                
            </Content>
        </Container>
    );
}