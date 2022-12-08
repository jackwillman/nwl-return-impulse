import { useState } from 'react';

import PageHeader from './PageHeader';
import CurrentPage from './Pages';

import { MainDiv } from './styled';


export type ExistingPage = 'Home' | 'About' | 'Dashboard' | 'Login';

export interface PageProps {
    setCurrentPage : (page : ExistingPage) => void;
};

const MainPage = function MainPageComponent() {
    const [currentPage, setCurrentPage] = useState<ExistingPage>('Home');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <MainDiv>
            <PageHeader setCurrentPage={ setCurrentPage } />
            <CurrentPage 
                currentPage={ currentPage }
                setCurrentPage={ setCurrentPage }
                setIsLoggedIn={ setIsLoggedIn }
            />
        </MainDiv>
    );
};

export default MainPage;