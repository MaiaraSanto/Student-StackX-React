export type UserData = {
    gender: string;
    name: NamePerson,
    location: Location;
    email: string;
    login: LoginI;
    dob: {
        date: string;
        age: number;
    };
    registered: {
        date: string;
        age: number;
    };
    phone: string;
    cell: string;
    id: {
        name: string;
        value: string;
    };
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    },
    nat: string;
}

type NamePerson = {
    title: string;
    first: string;
    last: string;
}

type Location = {
    street: {
        number: number;
        name: string;
    },
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
        latitude: string;
        longitude: string;
    },
    timezone: {
        offset: string;
        description: string;
    }
}

type LoginI = {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}