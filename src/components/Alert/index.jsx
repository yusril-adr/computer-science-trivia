import {
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useEffect } from 'react';

const Alert = ({
  title = 'Notification',
  message,
  isLoading = false,
  onConfirm,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (message || isLoading) {
      onOpen();
    } else {
      onClose();
    }
  }, [message]);

  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>

          <AlertDialogBody
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            {isLoading && <Spinner size="xl" mb="8" />}
            <Text>{message}</Text>
          </AlertDialogBody>

          <AlertDialogFooter>
            {!isLoading && (
              <Button
                colorScheme="red"
                ml={3}
                onClick={() => {
                  onClose();
                  if (onConfirm) {
                    onConfirm();
                  }
                }}
              >
                Okay!
              </Button>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default Alert;
