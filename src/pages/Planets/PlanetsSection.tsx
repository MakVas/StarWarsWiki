import { useState } from 'react';

import type { planetModel } from '../../models/planetModel.ts';
import { useApi } from '../../hooks/useApi.ts';

import Search from '../../components/Search/Search.tsx';
import Card from '../../components/Card/Card.tsx';
import { ColumnCardContainer } from '../../components/Containers/CardContainers.css.ts';

function PlanetsSection() {
    const [input, setInput] = useState<string>('');

    const { data, loading } = useApi<planetModel>(
        'https://swapi.info/api/planets',
    );

    return (
        <section>
            <h1>Planets search</h1>

            <Search value={input} onChange={setInput} />

            {loading && <p>Loading...</p>}

            {!loading && (
                <ColumnCardContainer>
                    {data
                        .filter((planet) =>
                            planet.name
                                .toLowerCase()
                                .includes(input.toLowerCase()),
                        )
                        .map((planet) => (
                            <Card
                                key={planet.name}
                                title={planet.name}
                                details={
                                    <>
                                        <div>
                                            <p>
                                                <b>Diameter:</b>
                                                <br />
                                                {planet.diameter}
                                            </p>
                                            <p>
                                                <b>Terrain:</b>
                                                <br />
                                                {planet.terrain}
                                            </p>
                                            <p>
                                                <b>Population:</b>
                                                <br />
                                                {planet.population}
                                            </p>
                                            <p>
                                                <b>Orbital period:</b>
                                                <br />
                                                {planet.orbital_period}
                                            </p>
                                            <p>
                                                <b>Rotation period:</b>
                                                <br />
                                                {planet.rotation_period}
                                            </p>
                                            <p>
                                                <b>Diameter:</b>
                                                <br />
                                                {planet.diameter}
                                            </p>
                                        </div>
                                    </>
                                }
                            />
                        ))}
                </ColumnCardContainer>
            )}
        </section>
    );
}

export default PlanetsSection;
