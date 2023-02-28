import {Document} from "../index";

export enum DocumentStates {
    DRAFT = 'draft',
    MODERATION = 'moderation',
    PUBLISHED = 'published'
}

export abstract class DocumentState {
    public name: DocumentStates;
    public document: Document;

    public setContext(document: Document) {
        this.document = document;
    }

    public abstract moderate(): void;
    public abstract publish(): void;
    public abstract delete(): void;
}