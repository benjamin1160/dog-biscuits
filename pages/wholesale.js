/** @jsxImportSource theme-ui */
import { Heading, Text, Box, Button } from 'theme-ui'

export default function Wholesale() {
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', my: 5, p: 4, bg: 'muted', borderRadius: 16 }}>
      <Heading as="h1" sx={{ mb: 3 }}>Wholesale Dog Biscuits</Heading>
      <Text>
        Interested in carrying our dog biscuits in your shop? Get bulk pricing and exclusive flavors for Southwest Florida retailers.
      </Text>
      <Button as="a" href="mailto:your@email.com" sx={{ mt: 3 }}>
        Contact Us for Wholesale
      </Button>
    </Box>
  )
}
