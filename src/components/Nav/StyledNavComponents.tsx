import { Typography, IconButton, TextField } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledIconButton = styled(IconButton)({
  marginLeft: -12,
  marginRight: 20,
});

const StyledTypography = styled(Typography)({
  flex: 1,
});

const StyledTextField = styled(TextField)`
  ${({ theme }) => `

  `}
`;

export { StyledIconButton, StyledTypography };
