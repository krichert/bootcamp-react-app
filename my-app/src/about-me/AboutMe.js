import MyName from './MyName';
import { Contact } from './Contact';
import { ContactStyled } from './ContactStyled';
import { MyFavouriteDishes } from './MyFavouriteDishes';

const dishes = [
    { id: 1, name: 'bułka'},
    { id: 2, name: 'naleśniki'},
    { id: 3, name: 'spaghetti'},
];

const contactData = {
    phone: '111 222 333',
    address: { street: 'Słowackiego', city: 'Gdańsk', number: 37 }, 
    email: 'moj@mail.com'
}

export const AboutMe = () => (
    <>
        <MyName name="Kamil" />
        <MyName name="Kamil" surname="Kowalski" />
        <Contact data={contactData} />
        <ContactStyled data={contactData} />
        <MyFavouriteDishes dishes={dishes} />
    </>
)