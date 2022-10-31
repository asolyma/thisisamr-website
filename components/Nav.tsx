import NextLink from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'
import Logo from './Logo'

import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { Url } from 'url'
import ThemeToggleButton from './ThemeButton'

const LinkItem: FC<{
  href: Url | String
  children: string | (JSX.Element | JSX.Element[])
  path: any
  target?: string
  style?: React.CSSProperties
}> = ({ href, path, children, style, target }) => {
  const active = path == href
  const inactiveColor = useColorModeValue('gray.900', 'whiteAlpha.900')
  return (
    <NextLink href={href as Url} passHref>
      <Link
        p={2}
        // bg={active ? 'grassTeal' : undefined}
        color={active ? 'gray.500' : inactiveColor}
        style={style}
        target={target}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Nav: FC<{ path: string }> = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      h={75}
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        sx={{ flexWrap: 'nowrap' }}
        p={2}
        maxW="container.md"
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/thisisamr/thisisamr-website"
            path={path}
            style={{
              gap: 4,
              display: 'inline-flex',
              alignItems: 'center',
              paddingLeft: 2,
            }}
          >
            <IoLogoGithub />
            <p>Source</p>
          </LinkItem>
          <LinkItem
            path={path}
            href={'/resume'}
            style={{ textDecoration: 'none' }}
          >
            <Button
              bg={'transparent'}
              _hover={{
                border: '1px',
                transform: 'scale(1.1)',
                transition: 'all .2s ease-in-out;',
              }}
              size="sm"
            >
              Resume
            </Button>
          </LinkItem>
        </Stack>
        <Box display={['flex']}>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <NextLink href="/resume" passHref>
                  <MenuItem as={Link}>Resume</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/thisisamr/thisisamr-website"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Nav
