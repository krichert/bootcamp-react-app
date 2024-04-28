import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Title= styled.h6`
    color: orange;
    text-transform: uppercase;
    font-weight: 700;
`;

const Text = styled.p`
    margin: 0;
`;

const Button = styled.button`
    margin-top: 15px;
    background-color: orange;
`;

export function ContactStyled({ data: { phone, address, email } }) {
    const handleClick = () => {
        alert(`Dziękuję! Zapraszam do mnie przy ${address.street} ${address.number}, ${address.city}!`)
    }

    return <Container>
        <Title>Phone</Title>
        <Text>{phone}</Text>
        <Title>Address</Title>
        <Text>{address.street} {address.number}, {address.city}</Text>
        <Title>Email</Title>
        <Text>{email}</Text>
        <Button onClick={handleClick}>Wyślij</Button>
    </Container>
}