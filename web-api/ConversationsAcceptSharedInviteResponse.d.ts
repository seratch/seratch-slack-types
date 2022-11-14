export interface ConversationsAcceptSharedInviteResponse {
    ok?:                boolean;
    error?:             string;
    implicit_approval?: boolean;
    channel_id?:        string;
    invite_id?:         string;
    can_open_scdm?:     boolean;
    needed?:            string;
    provided?:          string;
}
