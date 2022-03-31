import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    * {
    ::-webkit-scrollbar-thumb{
      background: #5f2c82;  /* fallback for old browsers */
      border-radius: 10px;
    }
    }
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;

         ::-webkit-scrollbar{
      width: 10px;
    }
    }
`;
export const Container = styled.div`
    background-color: #17181f;
    color: #797a81;
    min-height: 100vh;
    grid-template-columns: repeat(auto-fit, minmax(300px, 5fr));
`;
