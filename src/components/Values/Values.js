import React from 'react';
import styled from 'styled-components';
import Value from './Value';
import T from 'prop-types';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget = 0, expenses = 0, balance = 0 }) => (
  <Container>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={expenses} />
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

Values.propTypes = {
  budget: T.number.isRequired,
  expenses: T.number.isRequired,
  balance: T.number.isRequired,
};

export default Values;

