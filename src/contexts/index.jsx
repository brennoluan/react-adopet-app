import {PetsProvider} from './pets/pets.tsx';
import {UsersProvider} from './users/users.tsx';

export const Contexts = ({children}) => {
    return (
        <UsersProvider>
            <PetsProvider>{children}</PetsProvider>
        </UsersProvider>
    );
};
