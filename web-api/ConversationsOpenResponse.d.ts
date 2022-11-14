export interface ConversationsOpenResponse {
    ok?:           boolean;
    channel?:      Channel;
    no_op?:        boolean;
    already_open?: boolean;
    error?:        string;
    needed?:       string;
    provided?:     string;
}

export interface Channel {
    id?:                   string;
    created?:              number;
    is_archived?:          boolean;
    is_im?:                boolean;
    is_org_shared?:        boolean;
    user?:                 string;
    last_read?:            string;
    latest?:               Latest;
    unread_count?:         number;
    unread_count_display?: number;
    is_open?:              boolean;
    priority?:             number;
    context_team_id?:      string;
}

export interface Latest {
    type?:          string;
    subtype?:       string;
    text?:          string;
    ts?:            string;
    bot_id?:        string;
    blocks?:        Block[];
    client_msg_id?: string;
    user?:          string;
    team?:          string;
    bot_profile?:   BotProfile;
}

export interface Block {
    type?:                     string;
    block_id?:                 string;
    elements?:                 Accessory[];
    text?:                     Description;
    accessory?:                Accessory;
    call_id?:                  string;
    api_decoration_available?: boolean;
    call?:                     Call;
    external_id?:              string;
    source?:                   string;
    file_id?:                  string;
    file?:                     File;
    fallback?:                 string;
    image_url?:                string;
    image_width?:              number;
    image_height?:             number;
    image_bytes?:              number;
    alt_text?:                 string;
    title?:                    Description;
    title_url?:                string;
    description?:              Description;
    video_url?:                string;
    thumbnail_url?:            string;
    author_name?:              string;
    provider_name?:            string;
    provider_icon_url?:        string;
    function_trigger_id?:      string;
    app_id?:                   string;
    is_workflow_app?:          boolean;
    app_collaborators?:        string[];
    button_label?:             string;
    bot_user_id?:              string;
    url?:                      string;
    fields?:                   Description[];
    label?:                    Description;
    element?:                  Accessory;
    dispatch_action?:          boolean;
    hint?:                     Description;
    optional?:                 boolean;
}

export interface Accessory {
    type?:                            string;
    action_id?:                       string;
    options?:                         Option[];
    min_query_length?:                number;
    text?:                            Description;
    url?:                             string;
    value?:                           string;
    style?:                           string;
    confirm?:                         Confirm;
    accessibility_label?:             string;
    initial_options?:                 Option[];
    focus_on_load?:                   boolean;
    initial_option?:                  Option;
    placeholder?:                     Description;
    initial_channel?:                 string;
    response_url_enabled?:            boolean;
    initial_channels?:                string[];
    max_selected_items?:              number;
    initial_conversation?:            string;
    default_to_current_conversation?: boolean;
    filter?:                          Filter;
    initial_conversations?:           string[];
    initial_date?:                    string;
    initial_time?:                    string;
    timezone?:                        string;
    image_url?:                       string;
    alt_text?:                        string;
    fallback?:                        string;
    image_width?:                     number;
    image_height?:                    number;
    image_bytes?:                     number;
    option_groups?:                   OptionGroup[];
    initial_user?:                    string;
    initial_users?:                   string[];
    elements?:                        AccessoryElement[];
    indent?:                          number;
    offset?:                          number;
    border?:                          number;
}

export interface Confirm {
    title?:   Description;
    text?:    Description;
    confirm?: Description;
    deny?:    Description;
    style?:   string;
}

export interface Description {
    type?:     string;
    text?:     string;
    emoji?:    boolean;
    verbatim?: boolean;
}

export interface AccessoryElement {
    type?:     string;
    elements?: PurpleElement[];
    style?:    string;
    indent?:   number;
    offset?:   number;
    border?:   number;
}

export interface PurpleElement {
    type?:         string;
    range?:        string;
    text?:         string;
    style?:        Style;
    channel_id?:   string;
    value?:        string;
    timestamp?:    string;
    url?:          string;
    team_id?:      string;
    user_id?:      string;
    usergroup_id?: string;
    name?:         string;
    skin_tone?:    number;
    unicode?:      string;
}

export interface Style {
    bold?:   boolean;
    italic?: boolean;
    strike?: boolean;
    code?:   boolean;
}

export interface Filter {
    include?:                          string[];
    exclude_external_shared_channels?: boolean;
    exclude_bot_users?:                boolean;
}

export interface Option {
    text?:        Description;
    value?:       string;
    description?: Description;
    url?:         string;
}

export interface OptionGroup {
    label?:   Description;
    options?: Option[];
}

export interface Call {
    v1?:                 V1;
    media_backend_type?: string;
}

export interface V1 {
    id?:                   string;
    app_id?:               string;
    app_icon_urls?:        AppIconUrls;
    date_start?:           number;
    active_participants?:  Participant[];
    all_participants?:     Participant[];
    display_id?:           string;
    join_url?:             string;
    desktop_app_join_url?: string;
    name?:                 string;
    created_by?:           string;
    date_end?:             number;
    channels?:             string[];
    is_dm_call?:           boolean;
    was_rejected?:         boolean;
    was_missed?:           boolean;
    was_accepted?:         boolean;
    has_ended?:            boolean;
}

export interface Participant {
    slack_id?:     string;
    external_id?:  string;
    display_name?: string;
    avatar_url?:   string;
}

export interface AppIconUrls {
    image_32?:       string;
    image_36?:       string;
    image_48?:       string;
    image_64?:       string;
    image_72?:       string;
    image_96?:       string;
    image_128?:      string;
    image_192?:      string;
    image_512?:      string;
    image_1024?:     string;
    image_original?: string;
}

export interface File {
    id?:                        string;
    created?:                   number;
    timestamp?:                 number;
    name?:                      string;
    title?:                     string;
    subject?:                   string;
    mimetype?:                  string;
    filetype?:                  string;
    pretty_type?:               string;
    user?:                      string;
    user_team?:                 string;
    mode?:                      string;
    editable?:                  boolean;
    non_owner_editable?:        boolean;
    editor?:                    string;
    last_editor?:               string;
    updated?:                   number;
    file_access?:               string;
    alt_txt?:                   string;
    subtype?:                   string;
    transcription?:             Transcription;
    mp4?:                       string;
    vtt?:                       string;
    hls?:                       string;
    hls_embed?:                 string;
    duration_ms?:               number;
    thumb_video_w?:             number;
    thumb_video_h?:             number;
    original_attachment_count?: number;
    is_external?:               boolean;
    external_type?:             string;
    external_id?:               string;
    external_url?:              string;
    username?:                  string;
    size?:                      number;
    url_private?:               string;
    url_private_download?:      string;
    app_id?:                    string;
    app_name?:                  string;
    thumb_64?:                  string;
    thumb_64_gif?:              string;
    thumb_64_w?:                string;
    thumb_64_h?:                string;
    thumb_80?:                  string;
    thumb_80_gif?:              string;
    thumb_80_w?:                string;
    thumb_80_h?:                string;
    thumb_160?:                 string;
    thumb_160_gif?:             string;
    thumb_160_w?:               string;
    thumb_160_h?:               string;
    thumb_360?:                 string;
    thumb_360_gif?:             string;
    thumb_360_w?:               string;
    thumb_360_h?:               string;
    thumb_480?:                 string;
    thumb_480_gif?:             string;
    thumb_480_w?:               string;
    thumb_480_h?:               string;
    thumb_720?:                 string;
    thumb_720_gif?:             string;
    thumb_720_w?:               string;
    thumb_720_h?:               string;
    thumb_800?:                 string;
    thumb_800_gif?:             string;
    thumb_800_w?:               string;
    thumb_800_h?:               string;
    thumb_960?:                 string;
    thumb_960_gif?:             string;
    thumb_960_w?:               string;
    thumb_960_h?:               string;
    thumb_1024?:                string;
    thumb_1024_gif?:            string;
    thumb_1024_w?:              string;
    thumb_1024_h?:              string;
    thumb_video?:               string;
    thumb_gif?:                 string;
    thumb_pdf?:                 string;
    thumb_pdf_w?:               string;
    thumb_pdf_h?:               string;
    thumb_tiny?:                string;
    converted_pdf?:             string;
    image_exif_rotation?:       number;
    original_w?:                string;
    original_h?:                string;
    deanimate?:                 string;
    deanimate_gif?:             string;
    pjpeg?:                     string;
    permalink?:                 string;
    permalink_public?:          string;
    edit_link?:                 string;
    has_rich_preview?:          boolean;
    media_display_type?:        string;
    preview_is_truncated?:      boolean;
    preview?:                   string;
    preview_highlight?:         string;
    plain_text?:                string;
    preview_plain_text?:        string;
    has_more?:                  boolean;
    sent_to_self?:              boolean;
    lines?:                     number;
    lines_more?:                number;
    is_public?:                 boolean;
    public_url_shared?:         boolean;
    display_as_bot?:            boolean;
    channels?:                  string[];
    groups?:                    string[];
    ims?:                       string[];
    shares?:                    Shares;
    to?:                        Cc[];
    from?:                      Cc[];
    cc?:                        Cc[];
    channel_actions_ts?:        string;
    channel_actions_count?:     number;
    headers?:                   Headers;
    simplified_html?:           string;
    bot_id?:                    string;
    initial_comment?:           InitialComment;
    num_stars?:                 number;
    is_starred?:                boolean;
    pinned_to?:                 string[];
    reactions?:                 Reaction[];
    comments_count?:            number;
}

export interface Cc {
    address?:  string;
    name?:     string;
    original?: string;
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

export interface Reaction {
    name?:  string;
    count?: number;
    users?: string[];
    url?:   string;
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
