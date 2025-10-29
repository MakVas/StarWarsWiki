import { quotes } from '../../utils/quotes.ts';

import { Quote, WelcomeText } from './Home.css.ts';
import { StyledButton } from '../../components/Button/Button.css.ts';

function Home() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomMeme = `src/assets/memes/${Math.floor(Math.random() * 5)}.jpg`;

    return (
        <>
            <section>
                <WelcomeText>
                    <h1>
                        Welcome to the <span>Star Wars</span> Wiki!
                    </h1>

                    <Quote>
                        <p>
                            *тут має бути кілька фото, які мають самі гортатись*
                        </p>
                    </Quote>
                </WelcomeText>
            </section>

            <section>
                <Quote>
                    <img src={randomQuote.pic} alt="" />
                    <h3>
                        *а цей блок можна прив'язати до картинки* <br />
                        (як варіант знайти картинки до цих цитат)
                    </h3>
                    <h2>{`"${randomQuote.quote}"`}</h2>
                    <p>{`— ${randomQuote.author}`}</p>
                </Quote>

                <StyledButton>Get random Star Wars meme</StyledButton>
            </section>
        </>
    );
}

export default Home;
