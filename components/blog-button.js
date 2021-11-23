import { FaBloggerB } from 'react-icons/fa'
import { Icon, useColorModeValue, Link } from '@chakra-ui/react'

const BlogIconButton = () => {
  const hoverColor = useColorModeValue('black', 'white')
  return (
    <Link href="https://github.com/Oizys18" target="_blank">
      <Icon
        display="block"
        w={6}
        h={6}
        as={FaBloggerB}
        transition="0.5s"
        color={useColorModeValue('#00000050', '#ffffff50')}
        _hover={{ color: hoverColor }}
      />
    </Link>
  )
}

export default BlogIconButton
