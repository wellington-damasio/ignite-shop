import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: '656px'
})

export const Product = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  borderRadius: '8px',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  img: {
    objectFit: 'cover'
  },

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',
    borderRadius: '6px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    bottom: '-100%',
    opacity: 0,
    transition: 'bottom ease-in 0.25s, opacity ease-out 0.2s',
    overflow: 'hidden',

    strong: {
      fontSize: '$lg',
      color: '$gray100'
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300'
    }
  },

  '&:hover': {
    footer: {
      bottom: '0.25rem',
      opacity: 1,
    }
  }
})