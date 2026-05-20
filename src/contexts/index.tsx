import {PetsProvider} from './pets/pets.tsx';
import {UsersProvider} from './users/users.tsx';
import * as React from "react";

export const Contexts = ({children}: { children: React.ReactNode }) => {
    return (
        <UsersProvider>
            <PetsProvider>{children}</PetsProvider>
        </UsersProvider>
    );
};
