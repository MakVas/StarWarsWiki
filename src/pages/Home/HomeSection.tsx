import { quotes } from '../../utils/quotes.ts';
import './HomeSection.css';

function HomeSection() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomMeme = `src/assets/memes/${Math.floor(Math.random() * 5)}.jpg`;

    return (
        <section className={'section home'}>
            <h1 className={'home__welcome-text'}>
                Welcome to the Galaxy Database
            </h1>

            <div className={'home__cite'}>
                <h2 className={'home__title'}>Random Star Wars quote</h2>
                <p className={'home__quote'}>{`"${randomQuote.quote}"`}</p>
                <p className={'home__author'}>{`— ${randomQuote.author}`}</p>
            </div>

            <div className={'home__meme'}>
                <h2 className={'home__title'}>Random Star Wars meme</h2>
                <img
                    className={'home__image'}
                    src={randomMeme}
                    alt={'random star wars meme'}
                />
            </div>
        </section>
    );
}

export default HomeSection;
