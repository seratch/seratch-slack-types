export interface ReactionsGetResponse {
    ok?:       boolean;
    type?:     string;
    channel?:  string;
    message?:  Message;
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Message {
    type?:      string;
    subtype?:   string;
    text?:      string;
    ts?:        string;
    username?:  string;
    bot_id?:    string;
    permalink?: string;
    reactions?: Reaction[];
}

export interface Reaction {
    name?:  string;
    users?: string[];
    count?: number;
}
