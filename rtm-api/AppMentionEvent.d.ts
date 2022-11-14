export interface AppMentionEvent {
    type?:          string;
    client_msg_id?: string;
    user?:          string;
    username?:      string;
    bot_id?:        string;
    bot_profile?:   BotProfile;
    subtype?:       string;
    text?:          string;
    blocks?:        any[];
    attachments?:   any[];
    ts?:            string;
    team?:          string;
    channel?:       string;
    edited?:        Edited;
    event_ts?:      string;
    thread_ts?:     string;
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

export interface Edited {
    user?: string;
    ts?:   string;
}
