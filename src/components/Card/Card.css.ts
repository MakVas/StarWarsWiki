import styled from 'styled-components';

const StyledCard = styled.div<{ $expanded: boolean }>`
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

    p {
        margin: 0;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
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

const ExpandableContent = styled.div<{ $expanded: boolean }>`
    overflow: hidden;
    max-height: ${({ $expanded }) => ($expanded ? '500px' : '0')};
    opacity: ${({ $expanded }) => ($expanded ? 1 : 0)};
    transition: all 0.3s ease;
`;

export { StyledCard, TitleRow, ExpandArrow, ExpandableContent };
