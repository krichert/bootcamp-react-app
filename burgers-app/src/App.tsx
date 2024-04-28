import { Navigation } from './navigation';
import { Content } from './content';
import { UserContextProvider } from './contexts/user';

function App() {
    return (
        <UserContextProvider>
            <Navigation />        
            <Content />        
        </UserContextProvider>
    );
}

export default App;
