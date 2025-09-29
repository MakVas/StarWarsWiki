import { useEffect, useState } from 'react';
import axios from 'axios';

function useApi<T>(url: string) {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const init = async () => {
            try {
                setLoading(true);
                const result: T[] = (await axios.get(url)).data;
                setData(result);
            } catch (e) {
                console.error(e);
                setError('Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        init();
    }, [url]);

    return { data, loading, error, setData };
}

export { useApi };
