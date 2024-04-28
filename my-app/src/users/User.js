import { Link } from 'react-router-dom';

export const User = ({ user }) => {
    const endOfAreaPhoneIndex = user.phone.indexOf(")");
    const areaPhone = user.phone.slice(0, endOfAreaPhoneIndex + 1);

    return <li>
        <Link to={`/users/${user.id}`}>{user.name}</Link> works in {user.company.name}
        <br /> <i>{areaPhone}</i> {user.phone.slice(endOfAreaPhoneIndex + 1)}
    </li>
}