import { useState, useEffect } from 'react';
import axios from 'axios';

import type { starshipModel } from '../../models/starshipModel.ts';

import StarshipCard from '../../components/Cards/StarshipCard/StarshipCard.tsx';

function StarshipsSection() {
    const [input, setInput] = useState<string>('');
    const [data, setData] = useState<starshipModel[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const init = async () => {
            setLoading(true);
            const result: starshipModel[] = (
                await axios.get('https://swapi.info/api/starships')
            ).data;
            setData(result);
            setLoading(false);
        };

        init();
    }, []);

    return (
        <section className={'section starships'}>
            <h1>Starships search</h1>

            {loading && <p>Loading...</p>}

            {!loading && (
                <>
                    <input
                        type={'text'}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    {data
                        .filter((starship) =>
                            starship.name
                                .toLowerCase()
                                .includes(input.toLowerCase()),
                        )
                        .map((starship) => (
                            <StarshipCard
                                key={starship.name}
                                starship={starship}
                            />
                        ))}
                </>
            )}
        </section>
    );
}

export default StarshipsSection;
