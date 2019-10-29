export interface GroupsHistoryResponse {
    ok?:                    boolean;
    messages?:              Message[];
    has_more?:              boolean;
    channel_actions_count?: number;
    error?:                 string;
    needed?:                string;
    provided?:              string;
}

export interface Message {
    user?:    string;
    type?:    string;
    subtype?: string;
    ts?:      string;
    text?:    string;
}
