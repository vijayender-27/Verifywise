export const styles = {
  BpIcon: {
    borderRadius: '50%',
    width: 20,
    height: 20,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#ffffff',
    '.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#fbfbfb',
    }
  },
  BpCheckedIcon: {
    backgroundColor: '#13715B',
    boxShadow: 'inset 0 0 0 1px #297af2, inset 0 -1px 0 #297af2',
    '&::before': {
      display: 'block',
      width: 20,
      height: 20,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#13715B',
    }
  }
}