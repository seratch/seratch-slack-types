export interface AppMentionPayload {
    token?:                 string;
    enterprise_id?:         string;
    team_id?:               string;
    api_app_id?:            string;
    type?:                  string;
    authed_users?:          string[];
    authed_teams?:          string[];
    authorizations?:        Authorization[];
    is_ext_shared_channel?: boolean;
    event_id?:              string;
    event_time?:            number;
    event_context?:         string;
    event?:                 Event;
}

export interface Authorization {
    enterprise_id?:         string;
    team_id?:               string;
    user_id?:               string;
    is_bot?:                boolean;
    is_enterprise_install?: boolean;
}

export interface Event {
    type?:          string;
    client_msg_id?: string;
    user?:          string;
    username?:      string;
    bot_id?:        string;
    bot_profile?:   BotProfile;
    subtype?:       string;
    text?:          string;
    blocks?:        Block[];
    ts?:            string;
    team?:          string;
    channel?:       string;
    edited?:        Edited;
    event_ts?:      string;
    thread_ts?:     string;
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
    accessibility_label?:             string;
    placeholder?:                     Text;
    initial_channel?:                 string;
    response_url_enabled?:            boolean;
    focus_on_load?:                   boolean;
    max_selected_items?:              number;
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
    type?:     Type;
    text?:     string;
    emoji?:    boolean;
    verbatim?: boolean;
}

export enum Type {
    Mrkdwn = "mrkdwn",
    PlainText = "plain_text",
}

export interface Filter {
    include?:                          string[];
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
