import {DocumentState, DocumentStates} from "./DocumentState";
import {DraftDocumentState} from "./DraftDocumentState";
import {PublishedDocumentState} from "./PublishedDocumentState";

// state - moderation

export class ModerationDocumentState extends DocumentState {
    constructor() {
        super();
        this.name = DocumentStates.MODERATION
    }


    delete(): void {
        console.log(`Документ переведен в состояние - draft`);
        // Логика отката документа в draft...
        this.document.setState(new DraftDocumentState())
    }

    moderate(): void {
        console.log('Документ находится уже на модерации!');
    }

    publish(): void {
        console.log('Документ успешно опубликован!');
        // Логика отправления документа в state - published
        this.document.setState(new PublishedDocumentState())
    }
}