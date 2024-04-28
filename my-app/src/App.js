import { Navigation } from './navigation/Navigation'
import { Content } from './content/Content'
import { LanguageContextProvider } from './contexts/language/LanguageContext';

function App() {
    return (
        <LanguageContextProvider>
            <Navigation />
            <Content />
        </LanguageContextProvider>
    );
}

export default App;
