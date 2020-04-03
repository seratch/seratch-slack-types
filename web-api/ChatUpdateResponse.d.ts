export interface ChatUpdateResponse {
    ok?:       boolean;
    channel?:  string;
    ts?:       string;
    text?:     string;
    message?:  Message;
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Message {
    type?:              string;
    subtype?:           string;
    text?:              string;
    username?:          string;
    bot_id?:            string;
    blocks?:            Block[];
    user?:              string;
    thread_ts?:         string;
    reply_count?:       number;
    reply_users_count?: number;
    latest_reply?:      string;
    reply_users?:       string[];
    replies?:           Edited[];
    subscribed?:        boolean;
    team?:              string;
    bot_profile?:       BotProfile;
    last_read?:         string;
    edited?:            Edited;
}

export interface Block {
    type?:         string;
    block_id?:     string;
    text?:         Text;
    accessory?:    Accessory;
    elements?:     Element[];
    fallback?:     string;
    image_url?:    string;
    image_width?:  number;
    image_height?: number;
    image_bytes?:  number;
    alt_text?:     string;
    title?:        Text;
    fields?:       Text[];
}

export interface Accessory {
    fallback?:     string;
    image_url?:    string;
    image_width?:  number;
    image_height?: number;
    image_bytes?:  number;
    type?:         string;
    alt_text?:     string;
}

export interface Element {
    type?:                 string;
    action_id?:            string;
    text?:                 Text;
    value?:                string;
    url?:                  string;
    style?:                string;
    confirm?:              Confirm;
    placeholder?:          Text;
    initial_channel?:      string;
    response_url_enabled?: boolean;
    initial_conversation?: string;
    filter?:               Filter;
    initial_date?:         string;
    initial_option?:       InitialOption;
    min_query_length?:     number;
    image_url?:            string;
    alt_text?:             string;
    fallback?:             string;
    image_width?:          number;
    image_height?:         number;
    image_bytes?:          number;
    initial_user?:         string;
}

export interface Confirm {
    title?:   Text;
    text?:    Text;
    confirm?: Text;
    deny?:    Text;
}

export interface Text {
    type?:     string;
    text?:     string;
    emoji?:    boolean;
    verbatim?: boolean;
}

export interface Filter {
    exclude_external_shared_channels?: boolean;
    exclude_bot_users?:                boolean;
}

export interface InitialOption {
    text?:        Text;
    value?:       string;
    description?: Text;
    url?:         string;
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
