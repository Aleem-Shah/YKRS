// client.tsx
import { Client, Databases, Account,ID } from 'appwrite';

// Initialize the Appwrite client
type CreateUserAccount={
    email:string,
    password:string,
    name:string
}

type LoginUserAccount={
    email:string,
    password:string,

}

const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('664d705f0009be3c1b10');

// Initialize the Appwrite services
const databases = new Databases(client);
const account = new Account(client);

export { client, databases, account };