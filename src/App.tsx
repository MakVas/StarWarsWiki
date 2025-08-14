import { useState } from 'react';

import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';

import HomeSection from './pages/Home/HomeSection.tsx';
import FilmsSection from './pages/Films/FilmsSection.tsx';
import PeopleSection from './pages/People/PeopleSection.tsx';
import PlanetsSection from './pages/Planets/PlanetsSection.tsx';
import VehiclesSection from './pages/Vehicles/VehiclesSection.tsx';
import StarshipsSection from './pages/Starships/StarshipsSection.tsx';

function App() {
    const [tab, setTab] = useState<string>('home');

    return (
        <>
            <Header onClick={(tab) => setTab(tab)} active={tab} />
            <main>
                {tab === 'home' && <HomeSection />}
                {tab === 'films' && <FilmsSection />}
                {tab === 'people' && <PeopleSection />}
                {tab === 'planets' && <PlanetsSection />}
                {tab === 'vehicles' && <VehiclesSection />}
                {tab === 'starships' && <StarshipsSection />}
            </main>
            <Footer
                onClick={(tab) => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setTab(tab);
                }}
                active={tab}
            />
        </>
    );
}

export default App;
