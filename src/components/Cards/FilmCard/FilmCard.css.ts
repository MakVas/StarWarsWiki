import styled from 'styled-components';

const StyledFilmCard = styled.button<{ $expanded: boolean }>`
    width: 100%;
    padding: 16px;
    color: white;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    background: ${({ $expanded }) =>
        $expanded ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.15)'};
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border: none;
    outline: none;

    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    transition: height 2s ease;
`;

const TitleRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h2 {
        font-size: 24px;
    }
`;

const ExpandArrow = styled.img<{ $expanded: boolean }>`
    width: 48px;
    -webkit-user-drag: none;
    user-select: none;
    rotate: ${({ $expanded }) => ($expanded ? '180deg' : '0deg')};
`;

const FilmInfo = styled.div<{ $expanded: boolean }>`
    display: ${({ $expanded }) => ($expanded ? 'flex' : 'none')};
    flex-direction: column;
    text-align: start;

    p {
        font-size: 16px;
    }
`;

export { StyledFilmCard, ExpandArrow, FilmInfo, TitleRow };
