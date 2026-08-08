import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import Games from './pages/Games';
import Timeline from './pages/Timeline';
import Theories from './pages/Theories';
import GameDetail from './pages/GameDetail';

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/"                        element={<Layout><Home /></Layout>} />
                <Route path="/games"                   element={<Layout><Games /></Layout>} />
                <Route path="/games/:slug"             element={<Layout><GameDetail /></Layout>} />
                <Route path="/timeline"                element={<Layout><Timeline /></Layout>} />
                <Route path="/theories"                element={<Layout><Theories /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}
