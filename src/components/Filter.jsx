import React, { Component } from 'react';
import styled from 'styled-components';

const FilterLabel = styled.label`
  font-size: 16px;
  color: #323131;

  padding: 5px;
  margin: 20px 0;
`;
const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const FilterInput = styled.input`
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

export class Filter extends Component {
  render() {
    return (
      <FilterWrapper>
        <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
        <FilterInput
          type="text"
          id="filter"
          onChange={this.props.handleFilter}
        />
      </FilterWrapper>
    );
  }
}
