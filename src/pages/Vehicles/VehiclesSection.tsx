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
                                details={
                                    <>
                                        <p>
                                            <b>Model: </b>
                                            {vehicle.model}
                                        </p>
                                        <p>
                                            <b>Length: </b>
                                            {vehicle.length}
                                        </p>
                                        <p>
                                            <b>Crew: </b>
                                            {vehicle.crew}
                                        </p>
                                        <p>
                                            <b>Cargo capacity: </b>
                                            {vehicle.cargo_capacity}
                                        </p>
                                        <p>
                                            <b>Cost in credits: </b>
                                            {vehicle.cost_in_credits}
                                        </p>
                                        <p>
                                            <b>Manufacturer: </b>
                                            {vehicle.manufacturer}
                                        </p>
                                        <p>
                                            <b>Starship class: </b>
                                            {vehicle.vehicle_class}
                                        </p>
                                        <p>
                                            <b>Passengers: </b>
                                            {vehicle.passengers}
                                        </p>
                                        <p>
                                            <b>Max speed: </b>
                                            {vehicle.max_atmosphering_speed}
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

export default VehiclesSection;
