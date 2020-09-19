export interface StarRemovedPayload {
    token?:         string;
    team_id?:       string;
    enterprise_id?: string;
    api_app_id?:    string;
    event?:         Event;
    type?:          string;
    event_id?:      string;
    event_time?:    number;
    authed_users?:  string[];
}

export interface Event {
    type?:     string;
    user?:     string;
    item?:     Item;
    event_ts?: string;
}

export interface Item {
    type?:        string;
    channel?:     string;
    message?:     Message;
    date_create?: number;
}

export interface Message {
    bot_id?:      string;
    type?:        string;
    text?:        string;
    user?:        string;
    ts?:          string;
    team?:        string;
    bot_profile?: BotProfile;
    edited?:      Edited;
    attachments?: Attachment[];
    permalink?:   string;
}

export interface Attachment {
    service_name?:          string;
    service_url?:           string;
    title?:                 string;
    title_link?:            string;
    author_name?:           string;
    author_link?:           string;
    thumb_url?:             string;
    thumb_width?:           number;
    thumb_height?:          number;
    fallback?:              string;
    video_html?:            string;
    video_html_width?:      number;
    video_html_height?:     number;
    from_url?:              string;
    service_icon?:          string;
    id?:                    number;
    original_url?:          string;
    msg_subtype?:           string;
    callback_id?:           string;
    color?:                 string;
    pretext?:               string;
    author_id?:             string;
    author_icon?:           string;
    author_subname?:        string;
    channel_id?:            string;
    channel_name?:          string;
    bot_id?:                string;
    indent?:                boolean;
    is_msg_unfurl?:         boolean;
    is_reply_unfurl?:       boolean;
    is_thread_root_unfurl?: boolean;
    is_app_unfurl?:         boolean;
    app_unfurl_url?:        string;
    text?:                  string;
    fields?:                Field[];
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
    confirm?:          Confirm;
    options?:          Option[];
    selected_options?: Option[];
    data_source?:      string;
    min_query_length?: number;
    option_groups?:    OptionGroup[];
    url?:              string;
}

export interface Confirm {
    title?:        string;
    text?:         string;
    ok_text?:      string;
    dismiss_text?: string;
}

export interface OptionGroup {
    text?: string;
}

export interface Option {
    text?:  string;
    value?: string;
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
