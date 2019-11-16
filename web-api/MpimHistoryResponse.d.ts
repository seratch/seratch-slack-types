export interface MpimHistoryResponse {
    ok?:                    boolean;
    messages?:              Message[];
    has_more?:              boolean;
    channel_actions_count?: number;
    error?:                 string;
    needed?:                string;
    provided?:              string;
}

export interface Message {
    type?:     string;
    subtype?:  string;
    text?:     string;
    user?:     string;
    bot_id?:   string;
    bot_link?: string;
    ts?:       string;
}
