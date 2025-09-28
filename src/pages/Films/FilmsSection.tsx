import { useState, useEffect } from 'react';
import axios from 'axios';

import { type filmModel } from '../../models/filmModel.ts';

import FilmCard from '../../components/Cards/FilmCard/FilmCard.tsx';
import Search from '../../components/Search/Search.tsx';
import { FilmCardContainer } from './FilmSection.css.ts';

function FilmsSection() {
    const [input, setInput] = useState<string>('');
    const [data, setData] = useState<filmModel[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const init = async () => {
            setLoading(true);
            const result: filmModel[] = (
                await axios.get('https://swapi.info/api/films')
            ).data;
            setData(result);
            setLoading(false);
        };

        init();
    }, []);

    return (
        <>
            <section>
                <h1>Films search</h1>

                <Search value={input} onChange={setInput} />

                {loading && <p>Loading...</p>}

                {!loading && (
                    <FilmCardContainer>
                        {data
                            .filter((film) => {
                                const searchString =
                                    `Episode ${film.episode_id}: ${film.title}`.toLowerCase();
                                return searchString.includes(
                                    input.toLowerCase(),
                                );
                            })
                            .map((film) => (
                                <FilmCard key={film.episode_id} film={film} />
                            ))}
                    </FilmCardContainer>
                )}
            </section>
        </>
    );
}

export default FilmsSection;
