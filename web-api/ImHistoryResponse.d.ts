export interface ImHistoryResponse {
    ok?:                    boolean;
    messages?:              Message[];
    has_more?:              boolean;
    channel_actions_count?: number;
    error?:                 string;
    needed?:                string;
    provided?:              string;
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
    replies?:           Edited[];
    subscribed?:        boolean;
    client_msg_id?:     string;
    user?:              string;
    team?:              string;
    bot_link?:          string;
    bot_profile?:       BotProfile;
    edited?:            Edited;
    blocks?:            Block[];
    files?:             File[];
    upload?:            boolean;
    display_as_bot?:    boolean;
}

export interface Block {
    type?:         string;
    block_id?:     string;
    text?:         TextElement;
    elements?:     Element[];
    fallback?:     string;
    image_url?:    string;
    image_width?:  number;
    image_height?: number;
    image_bytes?:  number;
    alt_text?:     string;
    title?:        TextElement;
    fields?:       TextElement[];
    accessory?:    Accessory;
}

export interface Accessory {
    type?:         string;
    fallback?:     string;
    image_url?:    string;
    image_width?:  number;
    image_height?: number;
    image_bytes?:  number;
    alt_text?:     string;
}

export interface Element {
    type?:                 string;
    text?:                 TextElement | string;
    verbatim?:             boolean;
    action_id?:            string;
    value?:                string;
    fallback?:             string;
    url?:                  string;
    style?:                string;
    confirm?:              Confirm;
    placeholder?:          TextElement;
    initial_channel?:      string;
    initial_conversation?: string;
    initial_date?:         string;
    initial_option?:       InitialOption;
    min_query_length?:     number;
    image_url?:            string;
    image_width?:          number;
    image_height?:         number;
    image_bytes?:          number;
    alt_text?:             string;
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

export interface InitialOption {
    text?:  TextElement;
    value?: string;
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

export interface File {
    id?:                   string;
    created?:              number;
    timestamp?:            number;
    name?:                 string;
    title?:                string;
    mimetype?:             string;
    filetype?:             string;
    pretty_type?:          string;
    user?:                 string;
    editable?:             boolean;
    size?:                 number;
    mode?:                 string;
    is_external?:          boolean;
    external_type?:        string;
    is_public?:            boolean;
    public_url_shared?:    boolean;
    display_as_bot?:       boolean;
    username?:             string;
    url_private?:          string;
    url_private_download?: string;
    thumb_64?:             string;
    thumb_80?:             string;
    thumb_360?:            string;
    thumb_360_w?:          number;
    thumb_360_h?:          number;
    thumb_480?:            string;
    thumb_480_w?:          number;
    thumb_480_h?:          number;
    thumb_160?:            string;
    thumb_720?:            string;
    thumb_720_w?:          number;
    thumb_720_h?:          number;
    thumb_800?:            string;
    thumb_800_w?:          number;
    thumb_800_h?:          number;
    image_exif_rotation?:  number;
    original_w?:           number;
    original_h?:           number;
    thumb_tiny?:           string;
    permalink?:            string;
    permalink_public?:     string;
    is_starred?:           boolean;
    has_rich_preview?:     boolean;
}
