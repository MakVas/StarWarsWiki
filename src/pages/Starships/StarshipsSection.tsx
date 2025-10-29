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
                                details={
                                    <>
                                        <p>
                                            <b>Model: </b>
                                            {starship.model}
                                        </p>
                                        <p>
                                            <b>Length: </b>
                                            {starship.length}
                                        </p>
                                        <p>
                                            <b>Crew: </b>
                                            {starship.crew}
                                        </p>
                                        <p>
                                            <b>Cargo capacity: </b>
                                            {starship.cargo_capacity}
                                        </p>
                                        <p>
                                            <b>Cost in credits: </b>
                                            {starship.cost_in_credits}
                                        </p>
                                        <p>
                                            <b>Manufacturer: </b>
                                            {starship.manufacturer}
                                        </p>
                                        <p>
                                            <b>Starship class: </b>
                                            {starship.starship_class}
                                        </p>
                                        <p>
                                            <b>Hyperdrive rating: </b>
                                            {starship.hyperdrive_rating}
                                        </p>
                                        <p>
                                            <b>Passengers: </b>
                                            {starship.passengers}
                                        </p>
                                        <p>
                                            <b>Max speed: </b>
                                            {starship.max_atmosphering_speed}
                                        </p>
                                    </>
                                }
                            />
                        ))}
                </GridCardContainer>
            )}
        </section>
    );
}

export default StarshipsSection;
