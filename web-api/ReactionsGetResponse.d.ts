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
    type?:        string;
    subtype?:     string;
    text?:        string;
    ts?:          string;
    username?:    string;
    bot_id?:      string;
    reactions?:   Reaction[];
    permalink?:   string;
    user?:        string;
    team?:        string;
    bot_profile?: BotProfile;
}

export interface BotProfile {
    id?:      string;
    deleted?: boolean;
    name?:    string;
    updated?: number;
    app_id?:  string;
    icons?:   Icons;
    team_id?: string;
}

export interface Icons {
    image_36?: string;
    image_48?: string;
    image_72?: string;
}

export interface Reaction {
    name?:  string;
    users?: string[];
    count?: number;
}
