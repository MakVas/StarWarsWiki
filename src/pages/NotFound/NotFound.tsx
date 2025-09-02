import { useNavigate } from 'react-router-dom';

import { ImageContainer } from './NotFound.css.ts';
import errorImage from '../../../public/sad_obi_wan.png';

function NotFound() {
    const navigate = useNavigate();

    return (
        <>
            <section>
                <ImageContainer>
                    <img src={errorImage} alt={'Error Image'} />
                    <h2>404 | Page not found</h2>
                </ImageContainer>
                <button onClick={() => navigate('/')}>Go to homepage</button>
            </section>
        </>
    );
}

export default NotFound;
