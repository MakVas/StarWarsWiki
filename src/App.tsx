import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home/Home.tsx';
import FilmsSection from './pages/Films/FilmsSection.tsx';
import PeopleSection from './pages/People/PeopleSection.tsx';
import PlanetsSection from './pages/Planets/PlanetsSection.tsx';
import StarshipsSection from './pages/Starships/StarshipsSection.tsx';
import VehiclesSection from './pages/Vehicles/VehiclesSection.tsx';
import RootLayout from './RootLayout.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="films" element={<FilmsSection />} />
                <Route path="people" element={<PeopleSection />} />
                <Route path="planets" element={<PlanetsSection />} />
                <Route path="starships" element={<StarshipsSection />} />
                <Route path="vehicles" element={<VehiclesSection />} />
                <Route path="*" element={<NotFound />} />
            </Route>,
        ),
    );

    return <RouterProvider router={router} />;
}

export default App;
