import { useState } from 'react';

import type { vehicleModel } from '../../models/vehicleModel.ts';
import { useApi } from '../../hooks/useApi.ts';

import Search from '../../components/Search/Search.tsx';
import Card from '../../components/Card/Card.tsx';
import { GridCardContainer } from '../../components/Containers/CardContainers.css.ts';

function VehiclesSection() {
    const [input, setInput] = useState<string>('');
    const { data, loading } = useApi<vehicleModel>(
        'https://swapi.info/api/vehicles',
    );

    return (
        <section>
            <h1>Vehicles search</h1>

            <Search value={input} onChange={setInput} />

            {loading && <p>Loading...</p>}

            {!loading && (
                <GridCardContainer>
                    {data
                        .filter((vehicle) =>
                            vehicle.name
                                .toLowerCase()
                                .includes(input.toLowerCase()),
                        )
                        .map((vehicle) => (
                            <Card
                                key={vehicle.name}
                                title={vehicle.name}
                                details={<></>}
                            />
                        ))}
                </GridCardContainer>
            )}
        </section>
    );
}

export default VehiclesSection;
