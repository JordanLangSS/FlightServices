import styled from 'styled-components';

export const otherErrors = styled.TextField`
    BackgroundColor: "#fff",
    "&  .MuiFormHelperText-root.Mui-error": { //<--- Here
      BackgroundColor: "red",
      Margin:0,
      PaddingLeft: 10
  }
   
`;