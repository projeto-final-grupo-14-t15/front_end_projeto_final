import styled from "styled-components";

const StyledHome = styled.main`
  section {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  aside {
    width: 20%;
    height: 100%;
    margin-left: 20px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    width: 74%;
    gap: 45px;
  }

  .no-announcements-found-box {
    display: flex;
    width: 100%;
    justify-content: center;
    h2 {
      margin-top: 70px;
      font-family: "Lexend";
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 45px;
    }
  }
`;
export default StyledHome;
