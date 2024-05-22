// types.ts
import { Models } from 'appwrite';

export interface DocumentData extends Models.Document {
    name: string;
    title: string;
    department: string;
    institution: string;
    gender: string;
    bio: string;
}
