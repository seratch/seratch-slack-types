export interface ConversationsCloseResponse {
    ok?:             boolean;
    already_closed?: boolean;
    no_op?:          boolean;
    error?:          string;
    needed?:         string;
    provided?:       string;
}
