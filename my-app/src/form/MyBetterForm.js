import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const MyBetterForm = () => {
    const [data, setData] = useState({
        name: '',
        age: '',
        gender: "don't want to say",
        comment: '',
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Wysłano: ${JSON.stringify(data, null, 2)}`)
    }

    const { name, age, gender, comment } = data;

    return <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" value={name} onChange={handleChange} />
        <label htmlFor="age">Age</label>
        <input id="age" name="age" type="number" value={age} onChange={handleChange} />
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" value={gender} onChange={handleChange}>
            <option>male</option>
            <option>female</option>
            <option>don't want to say</option>
        </select>
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" name="comment" type="text" value={comment} onChange={handleChange} />
        <input type="submit" value="Send" />
    </Form>
}