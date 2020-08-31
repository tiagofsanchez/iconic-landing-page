/** @jsx jsx */
import { jsx, Box, Input, Button } from "theme-ui"

const Form = () => {
  return (
    <Box as="form" sx={{width: `100%`}}>
      <Input />
      <Input />
      <Button>CONTACT US</Button>
    </Box>
  )
}

export default Form
