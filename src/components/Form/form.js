/** @jsx jsx */
import { jsx, Box, Input, Button, Label } from "theme-ui";
// import { useState } from 'react';  

const Form = () => {
  return (
    <Box as="form" sx={{ width: `100%` }}>
      <Label htmlFor="name">Name</Label>
      <Input type="text" id="name" name="name" placeholder="Your name" mb={4} />
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Your email"
        mb={4}
      />
      <Button>CONTACT US</Button>
    </Box>
  )
}

export default Form
