import { quotes } from '../../utils/quotes.ts';

import { Author, Quote, Title, WelcomeText } from './HomeSection.css.ts';

function HomeSection() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomMeme = `src/assets/memes/${Math.floor(Math.random() * 5)}.jpg`;

    return (
        <section>
            <WelcomeText>Welcome to the Galaxy Database</WelcomeText>

            <div>
                <Title>Random Star Wars quote</Title>
                <Quote>{`"${randomQuote.quote}"`}</Quote>
                <Author>{`— ${randomQuote.author}`}</Author>
            </div>

            <div>
                <Title>Random Star Wars meme</Title>
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
