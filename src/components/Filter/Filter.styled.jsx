import styled from 'styled-components';

export const FilterLabel = styled.label`
  font-size: 16px;
  color: #323131;

  padding: 5px;
  margin: 20px 0;
`;
export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const FilterInput = styled.input`
  padding: 8px;
  border: 1px solid #a09e9e;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  width: 250px;
  justify-content: space-between;
  align-items: center;

  font-size: 18px;
`;
