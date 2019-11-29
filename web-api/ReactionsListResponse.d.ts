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
    blocks?:            Block[];
    permalink?:         string;
    reactions?:         Reaction[];
    subtype?:           string;
    username?:          string;
    attachments?:       Attachment[];
    client_msg_id?:     string;
    icons?:             Icons;
    thread_ts?:         string;
    reply_count?:       number;
    reply_users_count?: number;
    latest_reply?:      string;
    reply_users?:       string[];
    replies?:           Reply[];
    subscribed?:        boolean;
    last_read?:         string;
    inviter?:           string;
    user_team?:         string;
    source_team?:       string;
    user_profile?:      UserProfile;
    bot_profile?:       BotProfile;
}

export interface Attachment {
    msg_subtype?:           string;
    fallback?:              string;
    callback_id?:           string;
    color?:                 string;
    pretext?:               string;
    service_url?:           string;
    service_name?:          string;
    service_icon?:          string;
    author_name?:           string;
    author_link?:           string;
    author_icon?:           string;
    from_url?:              string;
    original_url?:          string;
    author_subname?:        string;
    channel_id?:            string;
    channel_name?:          string;
    id?:                    number;
    bot_id?:                string;
    indent?:                boolean;
    is_msg_unfurl?:         boolean;
    is_reply_unfurl?:       boolean;
    is_thread_root_unfurl?: boolean;
    is_app_unfurl?:         boolean;
    app_unfurl_url?:        string;
    title?:                 string;
    title_link?:            string;
    text?:                  string;
    fields?:                Field[];
    image_url?:             string;
    image_width?:           number;
    image_height?:          number;
    image_bytes?:           number;
    thumb_url?:             string;
    thumb_width?:           number;
    thumb_height?:          number;
    video_html?:            string;
    video_html_width?:      number;
    video_html_height?:     number;
    footer?:                string;
    footer_icon?:           string;
    ts?:                    string;
    mrkdwn_in?:             string[];
    actions?:               Action[];
    filename?:              string;
    size?:                  number;
    mimetype?:              string;
    url?:                   string;
    metadata?:              Metadata;
}

export interface Action {
    id?:               string;
    name?:             string;
    text?:             string;
    style?:            string;
    type?:             string;
    value?:            string;
    confirm?:          ActionConfirm;
    data_source?:      string;
    min_query_length?: number;
    url?:              string;
}

export interface ActionConfirm {
    title?:        string;
    text?:         string;
    ok_text?:      string;
    dismiss_text?: string;
}

export interface Field {
    title?: string;
    value?: string;
    short?: boolean;
}

export interface Metadata {
    thumb_64?:    boolean;
    thumb_80?:    boolean;
    thumb_160?:   boolean;
    original_w?:  number;
    original_h?:  number;
    thumb_360_w?: number;
    thumb_360_h?: number;
    format?:      string;
    extension?:   string;
    rotation?:    number;
    thumb_tiny?:  string;
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
    fallback?:     string;
    image_url?:    string;
    image_width?:  number;
    image_height?: number;
    image_bytes?:  number;
    alt_text?:     string;
}

export interface Element {
    type?:                 string;
    fallback?:             string;
    text?:                 TextElement | string;
    action_id?:            string;
    url?:                  string;
    value?:                string;
    style?:                string;
    confirm?:              ElementConfirm;
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
    verbatim?:             boolean;
}

export interface ElementConfirm {
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
