import {useForm} from 'react-hook-form';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const MyBoostedForm = () => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            age: '',
            gender: "don't want to say",
            comment: '',  
        }
    });
    const onSubmit = data => {
        alert(`Wsyałano: ${JSON.stringify(data, null, 2)}`);
    };

    return <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" {...register('name')} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" {...register('age')} />
        <label htmlFor="gender">Gender</label>
        <select id="gender" {...register('gender')}>
            <option>male</option>
            <option>female</option>
            <option>don't want to say</option>
        </select>
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" type="text" {...register('comment')} />
        <input type="submit" value="Send" />
    </Form>
}