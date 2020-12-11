import React from 'react';
import NavBar from './NavBar';
import Title from './Title';

const MainPageLayout = ({ children }) => {
    return (
        <>
            <Title
                title="Box Office"
                subtitle="Are you looking for a movie or an actor?"
            />
            <NavBar />

            <div>{children}</div>
        </>
    );
};

export default MainPageLayout;
