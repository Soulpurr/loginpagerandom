import styled from "styled-components";

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  max-width: 800px;
  height: fit-content;
  @media (min-width: 640px) {
    height: 32rem;
  }
  overflow: hidden;
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const LeftPart = styled.div`
  background-color: #ff6600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
  padding: 2rem;
  @media (min-width: 640px) {
    transform: ${({ isLogin }) =>
      isLogin ? "translateX(100%)" : "translateX(0)"};
  }

  transition: transform 0.3s ease-in-out;
  @media (min-width: 640px) {
    width: 50%;
  }
`;

export const RightPart = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
  padding: 2rem;
  @media (min-width: 640px) {
    transform: ${({ isLogin }) =>
      isLogin ? "translateX(-100%)" : "translateX(0)"};
  }

  transition: transform 0.3s ease-in-out;
  @media (min-width: 640px) {
    width: 50%;
  }
`;

export const ToggleButton = styled.button`
  background-color: #ff6600;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #fff;
  cursor: pointer;
  outline: none;
  margin-top: 1rem;
  &:hover {
    background-color: #ff7733;
  }
`;
