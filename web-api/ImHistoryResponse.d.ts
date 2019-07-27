export interface ImHistoryResponse {
    ok?:       boolean;
    messages?: Message[];
    has_more?: boolean;
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Message {
    type?:              string;
    subtype?:           string;
    text?:              string;
    ts?:                string;
    username?:          string;
    bot_id?:            string;
    thread_ts?:         string;
    reply_count?:       number;
    reply_users_count?: number;
    latest_reply?:      string;
    reply_users?:       string[];
    replies?:           Reply[];
    subscribed?:        boolean;
    client_msg_id?:     string;
    user?:              string;
    team?:              string;
}

export interface Reply {
    user?: string;
    ts?:   string;
}
