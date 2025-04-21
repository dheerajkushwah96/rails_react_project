
const COMMON = {
  primary: '#0a76e2',
  white: '#ffffff',
};

export const OVERRIDES = {
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: COMMON.white,
          backgroundColor: COMMON.primary,
        }
      }
    },
  }
};