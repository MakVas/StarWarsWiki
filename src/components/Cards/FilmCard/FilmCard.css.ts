import styled from 'styled-components';

const StyledFilmCard = styled.button<{ $expanded: boolean }>`
    width: 100%;
    padding: 16px;
    color: white;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
`;

const ExpandArrow = styled.img<{ $expanded: boolean }>`
    width: 48px;
    -webkit-user-drag: none;
    user-select: none;
    rotate: ${({ $expanded }) => ($expanded ? '180deg' : '0deg')};
`;

export { StyledFilmCard, ExpandArrow };
