export interface ChannelsInfoResponse {
    ok?:       boolean;
    channel?:  Channel;
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Channel {
    id?:                   string;
    name?:                 string;
    is_channel?:           boolean;
    created?:              number;
    is_archived?:          boolean;
    is_general?:           boolean;
    unlinked?:             number;
    creator?:              string;
    name_normalized?:      string;
    is_shared?:            boolean;
    is_org_shared?:        boolean;
    is_member?:            boolean;
    is_private?:           boolean;
    is_mpim?:              boolean;
    last_read?:            string;
    latest?:               Latest;
    unread_count?:         number;
    unread_count_display?: number;
    members?:              string[];
    topic?:                Purpose;
    purpose?:              Purpose;
    previous_names?:       string[];
}

export interface Latest {
    type?:           string;
    text?:           string;
    files?:          File[];
    upload?:         boolean;
    user?:           string;
    display_as_bot?: boolean;
    ts?:             string;
    subtype?:        string;
    bot_id?:         string;
    thread_ts?:      string;
    root?:           Root;
    attachments?:    Attachment[];
    username?:       string;
    icons?:          Icons;
    x_files?:        string[];
}

export interface Attachment {
    text?:                  string;
    footer?:                string;
    id?:                    number;
    fallback?:              string;
    msg_subtype?:           string;
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
    bot_id?:                string;
    indent?:                boolean;
    is_msg_unfurl?:         boolean;
    is_reply_unfurl?:       boolean;
    is_thread_root_unfurl?: boolean;
    is_app_unfurl?:         boolean;
    app_unfurl_url?:        string;
    title?:                 string;
    title_link?:            string;
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
    is_starred?:           boolean;
    has_rich_preview?:     boolean;
}

export interface Icons {
    emoji?:    string;
    image_64?: string;
}

export interface Root {
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
    replies?:           Reply[];
    subscribed?:        boolean;
    last_read?:         string;
}

export interface Reply {
    user?: string;
    ts?:   string;
}

export interface Purpose {
    value?:    string;
    creator?:  string;
    last_set?: number;
}
