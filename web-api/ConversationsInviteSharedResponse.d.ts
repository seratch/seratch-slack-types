export interface ConversationsInviteSharedResponse {
    ok?:                       boolean;
    error?:                    string;
    url?:                      string;
    invite_id?:                string;
    conf_code?:                string;
    is_legacy_shared_channel?: boolean;
    needed?:                   string;
    provided?:                 string;
}
