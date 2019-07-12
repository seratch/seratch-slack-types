export interface ConversationsInfoResponse {
    ok?:       boolean;
    channel?:  Channel;
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Channel {
    id?:                         string;
    name?:                       string;
    is_channel?:                 boolean;
    is_group?:                   boolean;
    is_im?:                      boolean;
    created?:                    number;
    is_archived?:                boolean;
    is_general?:                 boolean;
    unlinked?:                   number;
    name_normalized?:            string;
    is_shared?:                  boolean;
    creator?:                    string;
    is_ext_shared?:              boolean;
    is_org_shared?:              boolean;
    shared_team_ids?:            string[];
    pending_shared?:             string[];
    is_pending_ext_shared?:      boolean;
    is_member?:                  boolean;
    is_private?:                 boolean;
    is_mpim?:                    boolean;
    last_read?:                  string;
    topic?:                      Purpose;
    purpose?:                    Purpose;
    previous_names?:             string[];
    locale?:                     string;
    pending_connected_team_ids?: string[];
    is_read_only?:               boolean;
    conversation_host_id?:       string;
    is_moved?:                   number;
    is_global_shared?:           boolean;
    is_org_default?:             boolean;
    is_org_mandatory?:           boolean;
    is_open?:                    boolean;
    user?:                       string;
    latest?:                     Latest;
    unread_count?:               number;
    unread_count_display?:       number;
    priority?:                   number;
    connected_team_ids?:         string[];
}

export interface Latest {
    type?:        string;
    subtype?:     string;
    text?:        string;
    ts?:          string;
    user?:        string;
    username?:    string;
    bot_id?:      string;
    attachments?: Attachment[];
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

export interface Purpose {
    value?:    string;
    creator?:  string;
    last_set?: number;
}
