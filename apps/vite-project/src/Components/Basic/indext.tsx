import styled from "styled-components";
// ...existing imports...

export const StyledButton = styled.button`
  padding: 0.5rem;
  transition: all 0.2s;
  background: #f97316;
  color: white;
  border-radius: 0.375rem;
  min-width: 100px;
  cursor: pointer;
  &:active {
    background: #ffedd5;
    color: #000;
    scale: 0.95;
  }
`;

export const StyledButtonOutlined = styled.button`
  padding: 0.5rem;
  transition: all 0.2s;
  background: transparent;
  color: #f97316;
  border: 2px solid #f97316;
  border-radius: 0.375rem;
  min-width: 100px;
  cursor: pointer;
  &:active {
    background: none;
    border: none;
    color: #000;
    scale: 0.95;
  }
`;

export const StyledTd = styled.td`
  padding: 0.5rem;
  text-align: left;
`;

export const StyledInput = styled.input`
  border: ${({ error }: any) =>
    error ? "1px solid red" : "1px solid #d1d5db"};
  padding: 0.5rem;
  border-radius: 0.375rem;
  outline: none;
`;

export const StyledTr = styled.tr`
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s;
  background: transparent;
  color: #f97316;

  &:hover {
    color: white;
    background: #f97316;
  }

  &:active {
    background: #fb923c;
  }
`;
