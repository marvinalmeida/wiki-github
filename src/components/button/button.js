import { ButtonContainer } from './style.button'

const Button = ({onClick}) => {
    return (
        <ButtonContainer onClick={onClick}>
            buscar
        </ButtonContainer>
    )
}

export default Button;