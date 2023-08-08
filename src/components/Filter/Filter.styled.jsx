import styled from '@emotion/styled';

export const FilterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FilterLabel = styled.label`
  color: ${p => p.theme.colors.primary};
  font-size: ${props => props.theme.fontSize.s};
  line-height: ${props => props.theme.spacing(4.5)};
  font-weight: 500;
  margin-bottom: ${props => props.theme.spacing(1.5)};
  margin-left: ${props => props.theme.spacing(1.25)};
`;

export const FilterInput = styled.input`
  width: 320px;
  margin-bottom: ${p => p.theme.space[4]}px;
  outline: none;
  padding: 10px;
  font-size: ${p => p.theme.fontSize.s};
  color: ${props => props.theme.colors.secondary};
  text-shadow: ${p => p.theme.boxShadow.textShadow};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: ${p => p.theme.space[2]}px;

  :focus,
  :hover {
    box-shadow: ${p => p.theme.boxShadow.boxShadow};
  }
`;
