import { useState } from 'react';

import type { starshipModel } from '../../models/starshipModel.ts';
import { useApi } from '../../hooks/useApi.ts';

import Search from '../../components/Search/Search.tsx';
import Card from '../../components/Card/Card.tsx';
import { GridCardContainer } from '../../components/Containers/CardContainers.css.ts';

function StarshipsSection() {
    const [input, setInput] = useState<string>('');

    const { data, loading } = useApi<starshipModel>(
        'https://swapi.info/api/starships',
    );

    return (
        <section>
            <h1>Starships search</h1>

            <Search value={input} onChange={setInput} />

            {loading && <p>Loading...</p>}

            {!loading && (
                <GridCardContainer>
                    {data
                        .filter((starship) =>
                            starship.name
                                .toLowerCase()
                                .includes(input.toLowerCase()),
                        )
                        .map((starship) => (
                            <Card
                                key={starship.name}
                                title={starship.name}
                                details={<></>}
                            />
                        ))}
                </GridCardContainer>
            )}
        </section>
    );
}

export default StarshipsSection;
