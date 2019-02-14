import styled from 'styled-components';

const Input = styled.input`
  display: block;
  width: 100%;
  height: 2em; /* 2em - pega o tamanho da fonte do pai (2em é o dobro da fonte) */ 
  font-weight: bold;
  background-color: transparent;
  border-bottom: 2px solid var(--color-second);
  margin-bottom: var(--specing-medium);
`;

export default Input;
