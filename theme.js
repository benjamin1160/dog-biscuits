// theme.js
export default {
  colors: {
    text: '#544238', // brown from your label
    background: '#fff', // white background
    primary: '#f9d648', // gold/yellow (main accent)
    secondary: '#2962ff', // deep blue (bottom wave)
    accent: '#b3734c', // brown/tan for headings
    muted: '#f6f6f6', // light gray for backgrounds/cards
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Poppins, Arial, sans-serif',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 900,
  },
  radii: {
    card: 16,
    button: 12,
  },
  buttons: {
    primary: {
      bg: 'primary',
      color: 'text',
      fontWeight: 'bold',
      borderRadius: 'button',
      px: 4,
      py: 2,
      fontSize: 2,
      cursor: 'pointer',
    },
    secondary: {
      bg: 'secondary',
      color: 'background',
      fontWeight: 'bold',
      borderRadius: 'button',
      px: 4,
      py: 2,
      fontSize: 2,
      cursor: 'pointer',
    }
  },
  styles: {
    h1: {
      color: 'accent',
      fontWeight: 'bold',
    },
    h2: {
      color: 'secondary',
      fontWeight: 'bold',
    },
    h3: {
      color: 'primary',
    }
  }
}
