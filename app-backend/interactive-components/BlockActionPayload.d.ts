export interface BlockActionPayload {
    type?:                  string;
    enterprise?:            Channel;
    team?:                  Team;
    user?:                  User;
    api_app_id?:            string;
    token?:                 string;
    container?:             Container;
    trigger_id?:            string;
    channel?:               Channel;
    message?:               Message;
    response_url?:          string;
    view?:                  View;
    state?:                 State;
    app_unfurl?:            AppUnfurl;
    actions?:               BlockActionPayloadAction[];
    is_enterprise_install?: boolean;
}

export interface BlockActionPayloadAction {
    action_id?:             string;
    block_id?:              string;
    text?:                  Close;
    value?:                 string;
    type?:                  string;
    style?:                 string;
    action_ts?:             string;
    placeholder?:           Close;
    confirm?:               ElementConfirm;
    url?:                   string;
    initial_option?:        InitialOption;
    selected_option?:       SelectedOption;
    selected_user?:         string;
    initial_user?:          string;
    selected_conversation?: string;
    initial_conversation?:  string;
    selected_channel?:      string;
    initial_channel?:       string;
    min_query_length?:      number;
    selected_date?:         string;
    initial_date?:          string;
    selected_time?:         string;
    initial_time?:          string;
}

export interface ElementConfirm {
    title?:   Close;
    text?:    Close;
    confirm?: Close;
    deny?:    Close;
    style?:   string;
}

export interface Close {
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

export interface InitialOption {
    text?:        Close;
    value?:       string;
    description?: Close;
    url?:         string;
}

export interface SelectedOption {
    text?:  Close;
    value?: string;
}

export interface AppUnfurl {
    id?:             number;
    fallback?:       string;
    bot_id?:         string;
    app_unfurl_url?: string;
    is_app_unfurl?:  boolean;
    app_id?:         string;
}

export interface Channel {
    id?:   string;
    name?: string;
}

export interface Container {
    type?:           string;
    message_ts?:     string;
    attachment_id?:  number;
    channel_id?:     string;
    view_id?:        string;
    text?:           string;
    is_ephemeral?:   boolean;
    is_app_unfurl?:  boolean;
    app_unfurl_url?: string;
    thread_ts?:      string;
}

export interface Message {
    type?:                string;
    subtype?:             string;
    team?:                string;
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
    app_id?:              string;
    bot_id?:              string;
    bot_link?:            string;
    display_as_bot?:      boolean;
    bot_profile?:         BotProfile;
    icons?:               MessageIcons;
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
    is_locked?:           boolean;
    reply_count?:         number;
    reply_users?:         string[];
    reply_users_count?:   number;
    latest_reply?:        string;
    subscribed?:          boolean;
    hidden?:              boolean;
    last_read?:           string;
    root?:                Root;
    item_type?:           string;
    item?:                Comment;
    metadata?:            MessageMetadata;
    room?:                Room;
    no_notifications?:    boolean;
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
    author_id?:             string;
    author_name?:           string;
    author_link?:           string;
    author_icon?:           string;
    from_url?:              string;
    original_url?:          string;
    author_subname?:        string;
    channel_id?:            string;
    channel_name?:          string;
    channel_team?:          string;
    id?:                    number;
    app_id?:                string;
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
    video_url?:             string;
    video_html?:            string;
    video_html_width?:      number;
    video_html_height?:     number;
    footer?:                string;
    footer_icon?:           string;
    ts?:                    string;
    mrkdwn_in?:             string[];
    actions?:               AttachmentAction[];
    preview?:               Preview;
    filename?:              string;
    size?:                  number;
    mimetype?:              string;
    url?:                   string;
    metadata?:              AttachmentMetadata;
}

export interface AttachmentAction {
    id?:               string;
    name?:             string;
    text?:             string;
    style?:            string;
    type?:             string;
    value?:            string;
    confirm?:          PurpleConfirm;
    options?:          any[];
    selected_options?: any[];
    data_source?:      string;
    min_query_length?: number;
    url?:              string;
}

export interface PurpleConfirm {
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

export interface AttachmentMetadata {
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

export interface Preview {
    type?:       string;
    can_remove?: boolean;
    title?:      Close;
    subtitle?:   Close;
    icon_url?:   string;
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
    title?:        Close;
    text?:         Close;
    fields?:       Close[];
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
    text?:                            Close;
    action_id?:                       string;
    url?:                             string;
    value?:                           string;
    style?:                           string;
    confirm?:                         ElementConfirm;
    accessibility_label?:             string;
    placeholder?:                     Close;
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

export interface Filter {
    include?:                          string[];
    exclude_external_shared_channels?: boolean;
    exclude_bot_users?:                boolean;
}

export interface BotProfile {
    id?:      string;
    deleted?: boolean;
    name?:    string;
    updated?: number;
    app_id?:  string;
    icons?:   BotProfileIcons;
    team_id?: string;
}

export interface BotProfileIcons {
    image_36?: string;
    image_48?: string;
    image_72?: string;
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
    media_display_type?:   string;
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
    id?:                                      string;
    created?:                                 number;
    timestamp?:                               number;
    name?:                                    string;
    title?:                                   string;
    subject?:                                 string;
    mimetype?:                                string;
    filetype?:                                string;
    pretty_type?:                             string;
    user?:                                    string;
    user_team?:                               string;
    source_team?:                             string;
    mode?:                                    string;
    editable?:                                boolean;
    non_owner_editable?:                      boolean;
    editor?:                                  string;
    last_editor?:                             string;
    updated?:                                 number;
    file_access?:                             string;
    alt_txt?:                                 string;
    subtype?:                                 string;
    transcription?:                           Transcription;
    mp4?:                                     string;
    mp4_low?:                                 string;
    vtt?:                                     string;
    hls?:                                     string;
    hls_embed?:                               string;
    duration_ms?:                             number;
    thumb_video_w?:                           number;
    thumb_video_h?:                           number;
    original_attachment_count?:               number;
    is_external?:                             boolean;
    external_type?:                           string;
    external_id?:                             string;
    external_url?:                            string;
    username?:                                string;
    size?:                                    number;
    url_private?:                             string;
    url_private_download?:                    string;
    url_static_preview?:                      string;
    app_id?:                                  string;
    app_name?:                                string;
    thumb_64?:                                string;
    thumb_64_gif?:                            string;
    thumb_64_w?:                              string;
    thumb_64_h?:                              string;
    thumb_80?:                                string;
    thumb_80_gif?:                            string;
    thumb_80_w?:                              string;
    thumb_80_h?:                              string;
    thumb_160?:                               string;
    thumb_160_gif?:                           string;
    thumb_160_w?:                             string;
    thumb_160_h?:                             string;
    thumb_360?:                               string;
    thumb_360_gif?:                           string;
    thumb_360_w?:                             string;
    thumb_360_h?:                             string;
    thumb_480?:                               string;
    thumb_480_gif?:                           string;
    thumb_480_w?:                             string;
    thumb_480_h?:                             string;
    thumb_720?:                               string;
    thumb_720_gif?:                           string;
    thumb_720_w?:                             string;
    thumb_720_h?:                             string;
    thumb_800?:                               string;
    thumb_800_gif?:                           string;
    thumb_800_w?:                             string;
    thumb_800_h?:                             string;
    thumb_960?:                               string;
    thumb_960_gif?:                           string;
    thumb_960_w?:                             string;
    thumb_960_h?:                             string;
    thumb_1024?:                              string;
    thumb_1024_gif?:                          string;
    thumb_1024_w?:                            string;
    thumb_1024_h?:                            string;
    thumb_video?:                             string;
    thumb_gif?:                               string;
    thumb_pdf?:                               string;
    thumb_pdf_w?:                             string;
    thumb_pdf_h?:                             string;
    thumb_tiny?:                              string;
    converted_pdf?:                           string;
    image_exif_rotation?:                     number;
    original_w?:                              string;
    original_h?:                              string;
    deanimate?:                               string;
    deanimate_gif?:                           string;
    pjpeg?:                                   string;
    permalink?:                               string;
    permalink_public?:                        string;
    edit_link?:                               string;
    has_rich_preview?:                        boolean;
    media_display_type?:                      string;
    preview_is_truncated?:                    boolean;
    preview?:                                 string;
    preview_highlight?:                       string;
    plain_text?:                              string;
    preview_plain_text?:                      string;
    has_more?:                                boolean;
    sent_to_self?:                            boolean;
    lines?:                                   number;
    lines_more?:                              number;
    is_public?:                               boolean;
    public_url_shared?:                       boolean;
    display_as_bot?:                          boolean;
    shares?:                                  Shares;
    has_more_shares?:                         boolean;
    channel_actions_ts?:                      string;
    channel_actions_count?:                   number;
    headers?:                                 Headers;
    simplified_html?:                         string;
    media_progress?:                          MediaProgress;
    saved?:                                   Saved;
    quip_thread_id?:                          string;
    is_channel_space?:                        boolean;
    linked_channel_id?:                       string;
    access?:                                  string;
    last_read?:                               number;
    private_channels_with_file_access_count?: number;
    org_or_workspace_access?:                 string;
    bot_id?:                                  string;
    initial_comment?:                         InitialComment;
    num_stars?:                               number;
    is_starred?:                              boolean;
    comments_count?:                          number;
}

export interface Headers {
    date?:        string;
    in_reply_to?: string;
    reply_to?:    string;
    message_id?:  string;
}

export interface InitialComment {
    id?:        string;
    created?:   number;
    timestamp?: number;
    user?:      string;
    comment?:   string;
    channel?:   string;
    is_intro?:  boolean;
}

export interface MediaProgress {
    offset_ms?:     number;
    max_offset_ms?: number;
    duration_ms?:   number;
}

export interface Saved {
    is_archived?:    boolean;
    date_completed?: number;
    date_due?:       number;
    state?:          string;
}

export interface Shares {
    public?:  { [key: string]: Private[] };
    private?: { [key: string]: Private[] };
}

export interface Private {
    share_user_id?:     string;
    reply_users?:       string[];
    reply_users_count?: number;
    reply_count?:       number;
    ts?:                string;
    thread_ts?:         string;
    latest_reply?:      string;
    channel_name?:      string;
    team_id?:           string;
}

export interface Transcription {
    status?: string;
    locale?: string;
}

export interface MessageIcons {
    emoji?:    string;
    image_36?: string;
    image_48?: string;
    image_64?: string;
    image_72?: string;
}

export interface MessageMetadata {
    event_type?:    string;
    event_payload?: State;
}

export interface State {
}

export interface Reaction {
    name?:  string;
    count?: number;
    url?:   string;
}

export interface Room {
    id?:                 string;
    name?:               string;
    media_server?:       string;
    created_by?:         string;
    date_start?:         number;
    date_end?:           number;
    canvas_thread_ts?:   string;
    thread_root_ts?:     string;
    is_dm_call?:         boolean;
    was_rejected?:       boolean;
    was_missed?:         boolean;
    was_accepted?:       boolean;
    has_ended?:          boolean;
    background_id?:      string;
    canvas_background?:  string;
    is_prewarmed?:       boolean;
    is_scheduled?:       boolean;
    media_backend_type?: string;
    display_id?:         string;
    external_unique_id?: string;
    app_id?:             string;
    call_family?:        string;
}

export interface Root {
    text?:              string;
    user?:              string;
    parent_user_id?:    string;
    username?:          string;
    team?:              string;
    bot_id?:            string;
    mrkdwn?:            boolean;
    type?:              string;
    subtype?:           string;
    thread_ts?:         string;
    icons?:             MessageIcons;
    bot_profile?:       BotProfile;
    edited?:            Edited;
    reply_count?:       number;
    reply_users_count?: number;
    latest_reply?:      string;
    subscribed?:        boolean;
    last_read?:         string;
    unread_count?:      number;
    ts?:                string;
    room?:              Room;
    no_notifications?:  boolean;
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

export interface View {
    id?:                    string;
    team_id?:               string;
    type?:                  string;
    title?:                 Close;
    submit?:                Close;
    close?:                 Close;
    private_metadata?:      string;
    callback_id?:           string;
    external_id?:           string;
    state?:                 State;
    hash?:                  string;
    clear_on_close?:        boolean;
    notify_on_close?:       boolean;
    submit_disabled?:       boolean;
    root_view_id?:          string;
    previous_view_id?:      string;
    app_id?:                string;
    app_installed_team_id?: string;
    bot_id?:                string;
}
