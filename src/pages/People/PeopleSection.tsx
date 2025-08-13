import { useState, useEffect } from 'react';
import axios from 'axios';
import type { peopleModel } from '../../models/peopleModel.ts';
import PeopleCard from '../../components/Cards/PeopleCard/PeopleCard.tsx';
import './PeopleSection.css';

function PeopleSection() {
    const [input, setInput] = useState<string>('');
    const [data, setData] = useState<peopleModel[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const init = async () => {
            setLoading(true);
            const result: peopleModel[] = (
                await axios.get('https://swapi.info/api/people')
            ).data;
            setData(result);
            setLoading(false);
        };

        init();
    }, []);

    return (
        <section className={'section people'}>
            <h1>People search</h1>

            {loading && <p>Loading...</p>}

            {!loading && (
                <>
                    <div className={'section_search'}>
                        <div className={'section__lightsaber'}></div>
                        <input
                            className={'section__input'}
                            type={'text'}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>

                    {data
                        .filter((people) =>
                            people.name
                                .toLowerCase()
                                .includes(input.toLowerCase())
                        )
                        .map((people) => (
                            <PeopleCard key={people.name} people={people} />
                        ))}
                </>
            )}
        </section>
    );
}

export default PeopleSection;
