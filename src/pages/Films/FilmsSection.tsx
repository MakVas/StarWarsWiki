import { useState } from 'react';

import { type filmModel } from '../../models/filmModel.ts';
import { useApi } from '../../hooks/useApi.ts';

import Search from '../../components/Search/Search.tsx';
import Card from '../../components/Card/Card.tsx';
import { ColumnCardContainer } from '../../components/Containers/CardContainers.css.ts';

function FilmsSection() {
    const [input, setInput] = useState<string>('');
    const { data, loading } = useApi<filmModel>('https://swapi.info/api/films');

    return (
        <>
            <section>
                <h1>Films search</h1>

                <Search value={input} onChange={setInput} />

                {loading && <p>Loading...</p>}

                {!loading && (
                    <ColumnCardContainer>
                        {data
                            .filter((film) => {
                                const searchString =
                                    `Episode ${film.episode_id}: ${film.title} (
                                    ${film.release_date.slice(0, 4)})`.toLowerCase();
                                return searchString.includes(
                                    input.toLowerCase(),
                                );
                            })
                            .map((film) => (
                                <Card
                                    key={film.episode_id}
                                    title={`Episode ${film.episode_id}: ${film.title} (${film.release_date.slice(0, 4)})`}
                                    details={
                                        <>
                                            <p>{film.opening_crawl}</p>
                                            <br />
                                            <p>
                                                <b>Directed by: </b>{' '}
                                                {film.director},{' '}
                                                <b>Produced by: </b>{' '}
                                                {film.producer}
                                            </p>
                                        </>
                                    }
                                />
                            ))}
                    </ColumnCardContainer>
                )}
            </section>
        </>
    );
}

export default FilmsSection;
