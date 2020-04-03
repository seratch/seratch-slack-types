export interface MpimOpenResponse {
    ok?:       boolean;
    group?:    Group;
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Group {
    id?:                   string;
    name?:                 string;
    is_group?:             boolean;
    created?:              number;
    creator?:              string;
    is_archived?:          boolean;
    name_normalized?:      string;
    is_mpim?:              boolean;
    is_open?:              boolean;
    last_read?:            string;
    latest?:               Latest;
    unread_count?:         number;
    unread_count_display?: number;
    members?:              string[];
    topic?:                Purpose;
    purpose?:              Purpose;
    priority?:             number;
}

export interface Latest {
    type?:      string;
    subtype?:   string;
    text?:      string;
    user?:      string;
    bot_id?:    string;
    bot_link?:  string;
    ts?:        string;
    username?:  string;
    thread_ts?: string;
    blocks?:    Block[];
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
    title?:        TextElement;
    text?:         TextElement;
    fields?:       TextElement[];
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
    text?:                 TextElement | string;
    verbatim?:             boolean;
    action_id?:            string;
    url?:                  string;
    value?:                string;
    style?:                string;
    confirm?:              Confirm;
    placeholder?:          TextElement;
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
    title?:   TextElement;
    text?:    TextElement;
    confirm?: TextElement;
    deny?:    TextElement;
}

export interface TextElement {
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
    text?:        TextElement;
    value?:       string;
    description?: TextElement;
    url?:         string;
}

export interface Purpose {
    value?:    string;
    creator?:  string;
    last_set?: number;
}
