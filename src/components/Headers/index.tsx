

import logoImg from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

export function Headers() {
    return (
        <HeaderContainer>
            <HeaderContent>

                <img src={logoImg} alt="" />

                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>


        </HeaderContainer>
    )
}