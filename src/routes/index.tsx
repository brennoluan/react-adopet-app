import {createBrowserRouter} from 'react-router';
import Header from '../components/Header/Header.tsx';
import Footer from '../components/Footer/Footer.tsx';
import NotFound from '../pages/NotFound/index.tsx';
import React from 'react';
import Profile from '../pages/Profile/index.tsx';
import Home from '../pages/Home/index.tsx';
import Contact from '../pages/Contact/index.tsx';
import SignInUp from '../pages/SignInUp/index.tsx';

const Wrapper = ({children}: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col min-h-screen bg-white'>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Wrapper>
                <Home/>
            </Wrapper>
        ),
    },
    {
        path: '/signinup',
        element: (
            <Wrapper>
                <SignInUp/>
            </Wrapper>
        ),
    },
    {
        path: '/contact',
        element: (
            <Wrapper>
                <Contact/>
            </Wrapper>
        ),
    },
    {
        path: '/profile',
        element: (
            <Wrapper>
                <Profile/>
            </Wrapper>
        ),
    },
    {
        path: '*',
        element: (
            <Wrapper>
                <NotFound/>
            </Wrapper>
        ),
    },
]);

export default router;
