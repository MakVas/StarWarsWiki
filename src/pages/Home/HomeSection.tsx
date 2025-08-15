import { quotes } from '../../utils/quotes.ts';

import { Quote, WelcomeText } from './HomeSection.css.ts';

function HomeSection() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomMeme = `src/assets/memes/${Math.floor(Math.random() * 5)}.jpg`;

    return (
        <section>
            <WelcomeText>
                <h1>
                    Welcome to the <span>Star Wars</span> Wiki!
                </h1>
                <p>
                    Here you will find lots of interesting information about
                    <br />
                    movies, spaceships, planets, and many other things related
                    <br />
                    to the Star Wars saga.
                </p>
            </WelcomeText>

            <Quote>
                <h2>{`"${randomQuote.quote}"`}</h2>
                <p>{`— ${randomQuote.author}`}</p>
            </Quote>

            <div>
                <h2>Random Star Wars meme</h2>
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
