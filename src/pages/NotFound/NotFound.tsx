import { useNavigate } from 'react-router-dom';

import { ImageContainer } from './NotFound.css.ts';
import Button from '../../components/Button/Button.tsx';
import errorImage from '../../assets/sad_obi_wan.png';

function NotFound() {
    const navigate = useNavigate();

    return (
        <>
            <section>
                <ImageContainer>
                    <img src={errorImage} alt={'Error Image'} />
                    <h2>404 | Page not found</h2>
                </ImageContainer>
                <Button text={'Go to homepage'} onClick={() => navigate('/')} />
            </section>
        </>
    );
}

export default NotFound;
