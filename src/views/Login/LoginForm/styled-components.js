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
    margin-left: 4%;
    margin-right: 4%;
    background: white;
    height: 30rem;
    width: 30rem;
    border-radius: 5px;
    box-shadow: 0 0 25px 0 var(--primaryInputBorder);
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

const StyledInputContainer = styled.div`

.login-label{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    color:var(--primaryInputBorder);
}
}
  input {
    width: 18rem;
    height: 2.2rem;
    border-radius: 5px;
    border:none;
    border-bottom:1px solid var(--primaryInputBorder);
  }
`;

export { StyledLogin, StyledInputContainer };
