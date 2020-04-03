export interface ReactionsListResponse {
    ok?:       boolean;
    items?:    Item[];
    paging?:   Paging;
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Item {
    type?:    string;
    channel?: string;
    message?: Message;
}

export interface Message {
    bot_id?:            string;
    type?:              string;
    text?:              string;
    user?:              string;
    ts?:                string;
    team?:              string;
    bot_profile?:       BotProfile;
    blocks?:            Block[];
    reactions?:         Reaction[];
    permalink?:         string;
    client_msg_id?:     string;
    user_team?:         string;
    source_team?:       string;
    user_profile?:      UserProfile;
    thread_ts?:         string;
    reply_count?:       number;
    reply_users_count?: number;
    latest_reply?:      string;
    reply_users?:       string[];
    replies?:           Reply[];
    subscribed?:        boolean;
    last_read?:         string;
}

export interface Block {
    type?:         string;
    block_id?:     string;
    elements?:     Element[];
    fallback?:     string;
    image_url?:    string;
    image_width?:  number;
    image_height?: number;
    image_bytes?:  number;
    alt_text?:     string;
    title?:        Text;
    text?:         Text;
    fields?:       Text[];
    accessory?:    Accessory;
}

export interface Accessory {
    type?:         string;
    image_url?:    string;
    alt_text?:     string;
    fallback?:     string;
    image_width?:  number;
    image_height?: number;
    image_bytes?:  number;
}

export interface Element {
    type?:                 string;
    text?:                 Text;
    action_id?:            string;
    url?:                  string;
    value?:                string;
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

export interface Reaction {
    name?:  string;
    users?: string[];
    count?: number;
    url?:   string;
}

export interface Reply {
    user?: string;
    ts?:   string;
}

export interface UserProfile {
    avatar_hash?:         string;
    image_72?:            string;
    first_name?:          string;
    real_name?:           string;
    display_name?:        string;
    team?:                string;
    name?:                string;
    is_restricted?:       boolean;
    is_ultra_restricted?: boolean;
}

export interface Paging {
    count?: number;
    total?: number;
    page?:  number;
    pages?: number;
}
