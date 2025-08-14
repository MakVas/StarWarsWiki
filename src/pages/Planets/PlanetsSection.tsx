import { useState, useEffect } from 'react';
import axios from 'axios';

import type { planetModel } from '../../models/planetModel.ts';

import PlanetCard from '../../components/Cards/PlanetCard/PlanetCard.tsx';

function PlanetsSection() {
    const [input, setInput] = useState<string>('');
    const [data, setData] = useState<planetModel[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const init = async () => {
            setLoading(true);
            const result: planetModel[] = (
                await axios.get('https://swapi.info/api/planets')
            ).data;
            setData(result);
            setLoading(false);
        };

        init();
    }, []);

    return (
        <section className={'section planets'}>
            <h1>Planets search</h1>

            {loading && <p>Loading...</p>}

            {!loading && (
                <>
                    <input
                        type={'text'}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    {data
                        .filter((planet) =>
                            planet.name
                                .toLowerCase()
                                .includes(input.toLowerCase()),
                        )
                        .map((planet) => (
                            <PlanetCard key={planet.name} planet={planet} />
                        ))}
                </>
            )}
        </section>
    );
}

export default PlanetsSection;
