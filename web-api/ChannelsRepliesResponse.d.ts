export interface ChannelsRepliesResponse {
    messages?: Message[];
    has_more?: boolean;
    ok?:       boolean;
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Message {
    type?:              string;
    subtype?:           string;
    ts?:                string;
    user?:              string;
    text?:              string;
    topic?:             string;
    username?:          string;
    bot_id?:            string;
    thread_ts?:         string;
    reply_count?:       number;
    reply_users_count?: number;
    latest_reply?:      string;
    reply_users?:       string[];
    replies?:           Reply[];
    subscribed?:        boolean;
    team?:              string;
    bot_profile?:       BotProfile;
    parent_user_id?:    string;
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

export interface Reply {
    user?: string;
    ts?:   string;
}
