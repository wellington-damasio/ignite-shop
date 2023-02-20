import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: '656px',

  h1: {
    fontSize: '$2xl',
    color: '$gray100'
  },

  p: {
    fontSize: '$xl',
    textAlign: 'center',
    lineHeight: 1.4,
    maxWidth: '560px',
    color: '$gray300',
    marginTop: '4rem',
  },

  a: {
    marginTop: '5rem',
    display: 'block',
    color: '$green500',
    fontSize: '$lg',

    '&:hover': {
      color: '$green300'
    }
  }
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '145px',
  width: '100%',
  maxWidth: '130px',
  padding: '0.25rem',
  borderRadius: '6px',
  background: 'linear-gradient(180deg,  #1ea483 0%, #7465d4 100%)',
  marginTop: '4rem',

  img: {
    objectFit: 'cover'
  }
})