export interface StarsListResponse {
    ok?:       boolean;
    items?:    Item[];
    paging?:   Paging;
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Item {
    type?:        string;
    channel?:     string;
    message?:     Message;
    date_create?: number;
    file?:        File;
    comment?:     Comment;
}

export interface Comment {
    id?:         string;
    created?:    number;
    timestamp?:  number;
    user?:       string;
    is_intro?:   boolean;
    comment?:    string;
    num_stars?:  number;
    is_starred?: boolean;
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
    permalink?:            string;
    permalink_public?:     string;
    edit_link?:            string;
    preview?:              string;
    preview_highlight?:    string;
    lines?:                number;
    lines_more?:           number;
    preview_is_truncated?: boolean;
    comments_count?:       number;
    initial_comment?:      Comment;
    is_starred?:           boolean;
    shares?:               Shares;
    channels?:             string[];
    groups?:               string[];
    ims?:                  string[];
    has_rich_preview?:     boolean;
}

export interface Shares {
}

export interface Message {
    type?:              string;
    subtype?:           string;
    text?:              string;
    ts?:                string;
    bot_id?:            string;
    attachments?:       Attachment[];
    permalink?:         string;
    is_starred?:        boolean;
    client_msg_id?:     string;
    user?:              string;
    thread_ts?:         string;
    reply_count?:       number;
    reply_users_count?: number;
    latest_reply?:      string;
    reply_users?:       string[];
    replies?:           Reply[];
    subscribed?:        boolean;
    last_read?:         string;
    reactions?:         Reaction[];
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
    is_msg_unfurl?:         boolean;
    is_reply_unfurl?:       boolean;
    is_thread_root_unfurl?: boolean;
    app_unfurl_url?:        string;
    is_app_unfurl?:         boolean;
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
    metadata?:              string;
}

export interface Action {
    id?:               string;
    name?:             string;
    text?:             string;
    style?:            string;
    type?:             string;
    value?:            string;
    data_source?:      string;
    min_query_length?: number;
    url?:              string;
}

export interface Field {
    title?: string;
    value?: string;
    short?: boolean;
}

export interface Reaction {
    name?:  string;
    users?: string[];
    count?: number;
}

export interface Reply {
    user?: string;
    ts?:   string;
}

export interface Paging {
    per_page?: number;
    spill?:    number;
    page?:     number;
    total?:    number;
    pages?:    number;
}
