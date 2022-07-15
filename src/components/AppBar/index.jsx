import { useRef } from 'react';
import {
  Link as RouteLink,
} from 'react-router-dom';
import {
  useColorModeValue,
  useDisclosure,
  Container,
  Box,
  Heading,
  Avatar,
  Text,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  List,
  ListItem,
} from '@chakra-ui/react';
import {
  ChevronDownIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';
import {
  useSelector,
} from 'react-redux';

// Components
import ColorModeSwitcher from '../ColorModeSwitcher';

// Services

const AppBar = ({ ...props }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerBtnRef = useRef();
  const user = useSelector((state) => state.user.value);

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      bg={bgColor}
      zIndex="999"
    >
      <Container
        fontSize="xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={3}
        width="100%"
        {...props}
      >
        <Heading as="h1" size={['md', 'lg']}>
          Computer Science Trivia
        </Heading>

        {user && (
          <Box
            display={{ base: 'none', lg: 'flex' }}
            alignItems="center"
          >
            <Avatar name={user?.email} src={`https://ui-avatars.com/api/?background=random&name=${user?.email}`} />
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                ms={[1, 2]}
                variant="ghost"
              >
                {user?.email}
              </MenuButton>
              <MenuList>
                <MenuItem as={RouteLink} to="/logout">Log Out</MenuItem>
              </MenuList>
            </Menu>

            <ColorModeSwitcher ms="2" />
          </Box>
        )}

        <IconButton
          display={{ base: 'flex', lg: 'none' }}
          size="md"
          fontSize="lg"
          aria-label="Toggle Drawer"
          variant="ghost"
          color="current"
          marginLeft="2"
          onClick={onOpen}
          ref={drawerBtnRef}
          icon={<HamburgerIcon />}
        />

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={drawerBtnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text>Menu</Text>
              <ColorModeSwitcher me={6} />
            </DrawerHeader>
            <DrawerBody>
              {user && (
                <List spacing={3}>
                  <ListItem>
                    <Button variant="ghost" as={RouteLink} to="/logout">Log Out</Button>
                  </ListItem>
                </List>
              )}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
    </Box>
  );
};

export default AppBar;
