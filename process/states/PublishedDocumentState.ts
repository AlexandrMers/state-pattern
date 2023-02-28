import { DocumentState, DocumentStates } from "./DocumentState";
import {DraftDocumentState} from "./DraftDocumentState";
import {ModerationDocumentState} from "./ModerationDocumentState";

// state - published

export class PublishedDocumentState extends DocumentState {
    constructor() {
        super();
        this.name = DocumentStates.PUBLISHED
    }


    delete(): void {
        console.log(`Документ переведен в состояние - draft`);
        // Логика отката документа в draft...
        this.document.setState(new DraftDocumentState())
    }

    moderate(): void {
        console.log('Документ переведен в состояние - moderation');
        // Логика отката документа в draft...
        this.document.setState(new ModerationDocumentState())
    }

    publish(): void {
        console.log('Документ уже опубликован!');
    }
}