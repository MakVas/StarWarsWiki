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
                                details={<></>}
                            />
                        ))}
                </ColumnCardContainer>
            )}
        </section>
    );
}

export default PlanetsSection;
