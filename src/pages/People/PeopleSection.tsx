import { useState, useEffect } from 'react';
import axios from 'axios';

import type { peopleModel } from '../../models/peopleModel.ts';

import Search from '../../components/Search/Search.tsx';
import type { planetModel } from '../../models/planetModel.ts';
import Card from '../../components/Card/Card.tsx';
import { useApi } from '../../hooks/useApi.ts';
import { GridCardContainer } from '../../components/Containers/CardContainers.css.ts';

function PeopleSection() {
    const [input, setInput] = useState<string>('');
    const { data, loading } = useApi<peopleModel>(
        'https://swapi.info/api/people',
    );
    const [planet, setPlanet] = useState<planetModel[]>([]);

    useEffect(() => {
        const init = async () => {
            const planetRes: planetModel[] = (
                await axios.get('https://swapi.info/api/planets')
            ).data;
            setPlanet(planetRes);
        };

        init();
    }, []);

    return (
        <section className={'section people'}>
            <h1>People search</h1>

            <Search value={input} onChange={setInput} />

            {loading && <p>Loading...</p>}

            {!loading && (
                <GridCardContainer>
                    {data
                        .filter((people) =>
                            people.name
                                .toLowerCase()
                                .includes(input.toLowerCase()),
                        )
                        .map((people) => (
                            <Card
                                key={people.name}
                                title={people.name}
                                details={
                                    <>
                                        <p>
                                            <b>Birth:</b> {people.birth_year}
                                        </p>
                                        <p>
                                            <b>Gender:</b> {people.gender}
                                        </p>
                                        <p>
                                            <b>Height (cm):</b> {people.height}
                                        </p>
                                        <p>
                                            <b>Mass (kg):</b> {people.mass}
                                        </p>
                                        <p>
                                            <b>Skin color:</b>{' '}
                                            {people.skin_color}
                                        </p>
                                        <p>
                                            <b>Hair color:</b>{' '}
                                            {people.hair_color}
                                        </p>
                                        <p>
                                            <b>Eye color:</b> {people.eye_color}
                                        </p>
                                        <p>
                                            <b>Home planet:</b>{' '}
                                            {planet.filter(
                                                (x) =>
                                                    x.url === people.homeworld,
                                            )[0]?.name || 'unknown'}
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

export default PeopleSection;
