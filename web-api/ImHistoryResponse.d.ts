export interface ImHistoryResponse {
    ok?:                    boolean;
    messages?:              Message[];
    has_more?:              boolean;
    channel_actions_count?: number;
    warning?:               string;
    response_metadata?:     ResponseMetadata;
    error?:                 string;
    needed?:                string;
    provided?:              string;
}

export interface Message {
    bot_id?:            string;
    type?:              string;
    text?:              string;
    user?:              string;
    ts?:                string;
    team?:              string;
    bot_profile?:       BotProfile;
    thread_ts?:         string;
    parent_user_id?:    string;
    reply_count?:       number;
    reply_users_count?: number;
    latest_reply?:      string;
    reply_users?:       string[];
    subscribed?:        boolean;
    last_read?:         string;
    client_msg_id?:     string;
    blocks?:            Block[];
}

export interface Block {
    type?:         string;
    elements?:     Element[];
    block_id?:     string;
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
    type?:                            string;
    text?:                            Text;
    action_id?:                       string;
    url?:                             string;
    value?:                           string;
    style?:                           string;
    confirm?:                         Confirm;
    placeholder?:                     Text;
    initial_channel?:                 string;
    response_url_enabled?:            boolean;
    initial_conversation?:            string;
    default_to_current_conversation?: boolean;
    filter?:                          Filter;
    initial_date?:                    string;
    initial_option?:                  InitialOption;
    min_query_length?:                number;
    image_url?:                       string;
    alt_text?:                        string;
    fallback?:                        string;
    image_width?:                     number;
    image_height?:                    number;
    image_bytes?:                     number;
    initial_user?:                    string;
}

export interface Confirm {
    title?:   Text;
    text?:    Text;
    confirm?: Text;
    deny?:    Text;
    style?:   string;
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

export interface ResponseMetadata {
    messages?: string[];
    warnings?: string[];
}
