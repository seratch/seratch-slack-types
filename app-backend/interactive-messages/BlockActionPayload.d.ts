export interface BlockActionPayload {
    type?:         string;
    team?:         Team;
    user?:         User;
    api_app_id?:   string;
    token?:        string;
    container?:    Container;
    trigger_id?:   string;
    channel?:      Channel;
    message?:      Message;
    response_url?: string;
    actions?:      BlockActionPayloadAction[];
}

export interface BlockActionPayloadAction {
    action_id?:             string;
    block_id?:              string;
    text?:                  Placeholder;
    value?:                 string;
    type?:                  string;
    action_ts?:             string;
    url?:                   string;
    placeholder?:           Placeholder;
    selected_option?:       Option;
    selected_user?:         string;
    initial_user?:          string;
    selected_conversation?: string;
    initial_conversation?:  string;
    selected_channel?:      string;
    initial_channel?:       string;
    min_query_length?:      number;
    selected_date?:         string;
    initial_date?:          string;
}

export interface Placeholder {
    type?:     Type;
    text?:     string;
    emoji?:    boolean;
    verbatim?: boolean;
}

export enum Type {
    Empty = "",
    Mrkdwn = "mrkdwn",
    PlainText = "plain_text",
}

export interface Option {
    text?:  Placeholder;
    value?: string;
}

export interface Channel {
    id?:   string;
    name?: string;
}

export interface Container {
    type?:          string;
    message_ts?:    string;
    attachment_id?: number;
    channel_id?:    string;
    text?:          string;
    is_ephemeral?:  boolean;
    is_app_unfurl?: boolean;
}

export interface Message {
    type?:                string;
    subtype?:             string;
    channel?:             string;
    user?:                string;
    username?:            string;
    text?:                string;
    blocks?:              Block[];
    attachments?:         Attachment[];
    ts?:                  string;
    thread_ts?:           string;
    is_intro?:            boolean;
    is_starred?:          boolean;
    wibblr?:              boolean;
    pinned_to?:           string[];
    reactions?:           Reaction[];
    bot_id?:              string;
    bot_link?:            string;
    display_as_bot?:      boolean;
    icons?:               Icons;
    file?:                File;
    files?:               File[];
    upload?:              boolean;
    parent_user_id?:      string;
    inviter?:             string;
    client_msg_id?:       string;
    comment?:             Comment;
    topic?:               string;
    purpose?:             string;
    edited?:              Edited;
    unfurl_links?:        boolean;
    unfurl_media?:        boolean;
    is_thread_broadcast?: boolean;
    reply_count?:         number;
    reply_users?:         string[];
    reply_users_count?:   number;
    latest_reply?:        string;
    subscribed?:          boolean;
    last_read?:           string;
    root?:                Root;
    item_type?:           string;
    item?:                Comment;
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
    actions?:               AttachmentAction[];
    filename?:              string;
    size?:                  number;
    mimetype?:              string;
    url?:                   string;
    metadata?:              string;
}

export interface AttachmentAction {
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
    title?:        Placeholder;
    text?:         Placeholder;
    fields?:       Placeholder[];
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
    text?:                 Placeholder;
    action_id?:            string;
    url?:                  string;
    value?:                string;
    style?:                string;
    confirm?:              Confirm;
    placeholder?:          Placeholder;
    initial_channel?:      string;
    initial_conversation?: string;
    initial_date?:         string;
    initial_option?:       Option;
    min_query_length?:     number;
    image_url?:            string;
    image_width?:          number;
    image_height?:         number;
    image_bytes?:          number;
    alt_text?:             string;
    initial_user?:         string;
}

export interface Confirm {
    title?:   Placeholder;
    text?:    Placeholder;
    confirm?: Placeholder;
    deny?:    Placeholder;
}

export interface Comment {
    id?:                   string;
    name?:                 string;
    title?:                string;
    created?:              string;
    timestamp?:            string;
    user?:                 string;
    username?:             string;
    is_intro?:             boolean;
    is_public?:            boolean;
    is_starred?:           boolean;
    public_url_shared?:    boolean;
    url_private?:          string;
    url_private_download?: boolean;
    permalink?:            string;
    permalink_public?:     boolean;
    edit_link?:            string;
    preview?:              string;
    preview_highlight?:    string;
    lines?:                number;
    lines_more?:           number;
    preview_is_truncated?: boolean;
    has_rich_preview?:     boolean;
    mimetype?:             string;
    filetype?:             string;
    pretty_type?:          string;
    is_external?:          boolean;
    external_type?:        string;
    editable?:             boolean;
    display_as_bot?:       boolean;
    size?:                 number;
    mode?:                 string;
    comment?:              string;
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
    subject?:              string;
    mimetype?:             string;
    filetype?:             string;
    pretty_type?:          string;
    user?:                 string;
    mode?:                 string;
    editable?:             boolean;
    is_external?:          boolean;
    external_type?:        string;
    username?:             string;
    size?:                 number;
    url_private?:          string;
    url_private_download?: string;
    thumb_64?:             string;
    thumb_64_gif?:         string;
    thumb_64_w?:           string;
    thumb_64_h?:           string;
    thumb_80?:             string;
    thumb_80_gif?:         string;
    thumb_80_w?:           string;
    thumb_80_h?:           string;
    thumb_160?:            string;
    thumb_160_gif?:        string;
    thumb_160_w?:          string;
    thumb_160_h?:          string;
    thumb_360?:            string;
    thumb_360_gif?:        string;
    thumb_360_w?:          string;
    thumb_360_h?:          string;
    thumb_480?:            string;
    thumb_480_gif?:        string;
    thumb_480_w?:          string;
    thumb_480_h?:          string;
    thumb_720?:            string;
    thumb_720_gif?:        string;
    thumb_720_w?:          string;
    thumb_720_h?:          string;
    thumb_800?:            string;
    thumb_800_gif?:        string;
    thumb_800_w?:          string;
    thumb_800_h?:          string;
    thumb_960?:            string;
    thumb_960_gif?:        string;
    thumb_960_w?:          string;
    thumb_960_h?:          string;
    thumb_1024?:           string;
    thumb_1024_gif?:       string;
    thumb_1024_w?:         string;
    thumb_1024_h?:         string;
    thumb_video?:          string;
    image_exif_rotation?:  number;
    original_w?:           string;
    original_h?:           string;
    deanimate_gif?:        string;
    pjpeg?:                string;
    permalink?:            string;
    permalink_public?:     string;
    edit_link?:            string;
    has_rich_preview?:     boolean;
    preview_is_truncated?: boolean;
    preview?:              string;
    preview_highlight?:    string;
    plain_text?:           string;
    preview_plain_text?:   string;
    has_more?:             boolean;
    sent_to_self?:         boolean;
    bot_id?:               string;
    lines?:                number;
    lines_more?:           number;
    is_public?:            boolean;
    public_url_shared?:    boolean;
    display_as_bot?:       boolean;
    num_stars?:            number;
    is_starred?:           boolean;
    comments_count?:       number;
    shares?:               Shares;
}

export interface Shares {
    public?:  { [key: string]: Private[] };
    private?: { [key: string]: Private[] };
}

export interface Private {
    reply_users?:       string[];
    reply_users_count?: number;
    reply_count?:       number;
    ts?:                string;
    thread_ts?:         string;
    latest_reply?:      string;
    channel_name?:      string;
    team_id?:           string;
}

export interface Icons {
    emoji?:    string;
    image_36?: string;
    image_48?: string;
    image_64?: string;
    image_72?: string;
}

export interface Reaction {
    name?:  string;
    count?: number;
}

export interface Root {
    text?:              string;
    username?:          string;
    bot_id?:            string;
    mrkdwn?:            boolean;
    type?:              string;
    subtype?:           string;
    thread_ts?:         string;
    reply_count?:       number;
    reply_users_count?: number;
    latest_reply?:      string;
    subscribed?:        boolean;
    last_read?:         string;
    unread_count?:      number;
    ts?:                string;
}

export interface Team {
    id?:              string;
    domain?:          string;
    enterprise_id?:   string;
    enterprise_name?: string;
}

export interface User {
    id?:       string;
    username?: string;
    name?:     string;
    team_id?:  string;
}
