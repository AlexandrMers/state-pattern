import {DocumentState} from "./states/DocumentState";
import {DraftDocumentState} from "./states/DraftDocumentState";

export class Document {
    private state: DocumentState;

    constructor() {
        this.setState(new DraftDocumentState());
    }

    getState() {
        return this.state.name;
    }

    setState(state: DocumentState) {
        this.state = state;
        this.state.setContext(this)
    }

    sendToModeration() {
        this.state.moderate();
    }

    publishDoc() {
        this.state.publish();
    }

    deleteDoc() {
        this.state.delete();
    }
}