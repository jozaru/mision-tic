// context
import { useGoogleAuth } from 'providers/authentication.provider';
import { useApi } from 'providers/api.provider';

const useUsers = () => {
  const { signOut } = useGoogleAuth();
  const { serviceCall, setTokenId } = useApi();
  const signInUser = (tokenId) => {
    serviceCall('/users/signin', 'GET', tokenId)
    .then(() => console.log('User signed in'))
    .catch(() => {
      signOut();
      setTokenId();
    });
  };

  return {
    signInUser,
  }
};

export default useUsers;