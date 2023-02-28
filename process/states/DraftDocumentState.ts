import { DocumentState, DocumentStates } from "./DocumentState";
import {ModerationDocumentState} from "./ModerationDocumentState";

// state - draft
export class DraftDocumentState extends DocumentState {
    constructor() {
        super();
        this.name = DocumentStates.DRAFT
    }


    delete(): void {
        console.log(`Нельзя удалить документ в состоянии - draft`);
    }

    moderate(): void {
        console.log('Документ отправлен на модерацию');
        this.document.setState(new ModerationDocumentState())
    }

    publish(): void {
        console.log('Нельзя отправить в публикацию документ в состоянии - draft');
    }
}