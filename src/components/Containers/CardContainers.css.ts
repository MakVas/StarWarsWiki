import styled from 'styled-components';

const ColumnCardContainer = styled.div`
    width: 100%;
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const GridCardContainer = styled.div`
    width: 100%;
    margin: 40px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
`;

export { ColumnCardContainer, GridCardContainer };
