import Modal from "react-modal";
import { UserData } from "../../types";
import {
    Container,
    ImageUser,
    InfoUserContaier
} from './styles'
import {X} from 'phosphor-react'

interface UserInfoModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    userSelected: UserData | undefined;
}

export function ModalInfo({isOpen, onRequestClose, userSelected} : UserInfoModalProps) {
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        ariaHideApp={false}
        contentLabel="Informações do usuário selecionado"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <X  size={24} color="#A8A8B3" weight="bold"/>
            </button>
            <Container>
                <ImageUser>
                    <img src={userSelected?.picture.medium} />
                </ImageUser>
                <InfoUserContaier>
                    <p><strong>Nome</strong> {`${userSelected?.name.first} ${userSelected?.name.last}`}</p>
                    <p><strong>E-mail</strong>{userSelected?.email}</p>
                    <p><strong>Celular</strong>{userSelected?.cell}</p>
                    <p><strong>Idade</strong>{userSelected?.dob.age}</p>
                </InfoUserContaier>
            </Container>

        </Modal>
    )
}