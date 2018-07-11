import styled from "styled-components";

const Container = styled.div`
  display: grid;
  padding-bottom: 10px;
  min-height: 100vh;
  background-color: #eee;

  grid-template-areas: "header" "main" "aside-1" "aside-2" "footer";
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr repeat(3, 100px);
  grid-row-gap: 2px;
  grid-column-gap: 2px;

  @media screen and (min-width: 36rem) {
    /* Layout Elements */
    grid-template-areas: "header header" "main main" "aside-1 aside-2" "aside-1 aside-2" "footer footer";
  }

  @media screen and (min-width: 48rem) {
    /* Layout Elements */

    grid-template-areas: "header header" "main aside-1" "main aside-2" "main aside-2" "footer footer";
    grid-template-columns: 3fr 2fr;
  }

  @media screen and (min-width: 75rem) {
    grid-template-areas: "header header header header header" ". aside-1 main aside-2 ." ". aside-1 main aside-2 ." ". aside-1 main aside-2 ." "footer footer footer footer footer";
    grid-template-columns: 1fr minmax(0px, 200px) minmax(0px, 1000px) minmax(
        0px,
        400px
      ) 1fr;
  }
`;

export default Container;
