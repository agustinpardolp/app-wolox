import styled from "styled-components";

const StyledLogin = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    to top left,
    var(--primaryConfirm),
    var(--primary)
  );
  h2 {
    font-size: 2rem;
    padding: 2%;
    color: var(--primary);
  }
  label {
    padding: 2%;
    margin: 2%;
  }
  form {
    margin: 0% 4% 5% 4%;
    background: white;
    height: 30rem;
    width: 30rem;
    border-radius: 5px;
    box-shadow: 0 0 25px 0 var(--primaryInputBorder);
  }

  .login_checkbox-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--primaryInputBorder);
  }
  .login-container {
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 2%;
    height: 100%;
    text-align: center;
  }
`;

export { StyledLogin };
