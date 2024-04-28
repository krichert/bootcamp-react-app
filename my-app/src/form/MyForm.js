import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const MyForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [comment, setComment] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handleAgeChange = (e) => setAge(e.target.value);
    const handleGenderChange = (e) => setGender(e.target.value);
    const handleCommentChange = (e) => setComment(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Wysłano: ${JSON.stringify({ name, age, gender, comment }, null, 2)}`)
    }

    return <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={handleNameChange} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={age} onChange={handleAgeChange} />
        <label htmlFor="gender">Gender</label>
        <select id="gender" value={gender} onChange={handleGenderChange}>
            <option>male</option>
            <option>female</option>
            <option>don't want to say</option>
        </select>
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" type="text" value={comment} onChange={handleCommentChange} />
        <input type="submit" value="Send" />
    </Form>
}