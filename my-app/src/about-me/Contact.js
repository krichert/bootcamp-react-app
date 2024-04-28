import './Contact.css';

export function Contact({ data: { phone, address, email } }) {
    const handleClick = () => {
        alert(`Dziękuję! Zapraszam do mnie przy ${address.street} ${address.number}, ${address.city}!`)
    }

    return <div className="contact-container">
        <h6>Phone</h6>
        <p>{phone}</p>
        <h6>Address</h6>
        <p>{address.street} {address.number}, {address.city}</p>
        <h6>Email</h6>
        <p>{email}</p>
        <button onClick={handleClick}>Wyślij</button>
    </div>
}