import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress'
import { Game } from '../game/Game';
import { GameClass } from '../game/GameClass';
import { UserDetails } from '../users/UserDetails';
import { MyForm } from '../form/MyForm';
import { MyBetterForm } from '../form/MyBetterForm';
import { MyBoostedForm } from '../form/MyBoostedForm';
import { Sign } from '../sign/Sign';
import { Wrapper } from '../Wrapper';

const LazyAboutMe = lazy(() => import("../about-me/AboutMe")
    .then(module => ({ default: module.AboutMe })));

const LazyUsers = lazy(() => import('../users/Users')
    .then(module => ({ default: module.Users })));

export const Content = () => (
    <Wrapper>
        <Suspense fallback={<CircularProgress />}>
            <Routes>
                <Route path="/" element={<h1>Witaj na naszej stronie!</h1>} />
                <Route path="/about-me" element={<LazyAboutMe />} />
                <Route path="/game" element={<>
                        <Game name="Splatoon 3" />
                        <GameClass name="Ori and the will of the wisps" />
                    </>} />
                <Route path="/form" element={<>
                        <MyForm />
                        <MyBetterForm />
                        <MyBoostedForm />
                    </>} />
                <Route path="/users" element={<LazyUsers />} />
                <Route path="/users/:id" element={<UserDetails />} />
                <Route path="/sign" element={<Sign />} />
            </Routes>
        </Suspense>
    </Wrapper>
)