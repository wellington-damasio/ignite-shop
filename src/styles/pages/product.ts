import { styled } from "..";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: '1180px',
  margin: '0 auto'
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '576px',
  height: '656px',
  padding: '0.25rem',
  borderRadius: 0,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  img: {
    objectFit: 'cover'
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300'
  },

  span: {
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
    marginTop: '1rem',
  },

  p: {
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
    marginTop: '2.5rem'
  },

  button: {
    fontSize: '$md',
    fontWeight: 'bold',
    padding: '1.25rem',
    color: '$white',
    backgroundColor: '$green500',
    border: 0,
    borderRadius: 0,
    marginTop: 'auto',
    cursor: 'pointer',

    '&:not(:disabled):hover': {
      backgroundColor: '$green300'
    },

    '&:disabled': {
      opacity: 0.7,
      cursor: 'not-allowed'
    }
  },
})