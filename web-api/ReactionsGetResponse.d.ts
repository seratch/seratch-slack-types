export interface ReactionsGetResponse {
    ok?:       boolean;
    type?:     string;
    channel?:  string;
    message?:  Message;
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Message {
    bot_id?:      string;
    type?:        string;
    text?:        string;
    user?:        string;
    ts?:          string;
    team?:        string;
    bot_profile?: BotProfile;
    reactions?:   Reaction[];
    permalink?:   string;
    app_id?:      string;
    blocks?:      Block[];
    room?:        Room;
}

export interface Block {
    type?:                     string;
    block_id?:                 string;
    elements?:                 Accessory[];
    call_id?:                  string;
    api_decoration_available?: boolean;
    call?:                     Call;
    external_id?:              string;
    source?:                   string;
    file_id?:                  string;
    file?:                     File;
    text?:                     DescriptionElement;
    fallback?:                 string;
    image_url?:                string;
    image_width?:              number;
    image_height?:             number;
    image_bytes?:              number;
    alt_text?:                 string;
    title?:                    DescriptionElement;
    title_url?:                string;
    description?:              DescriptionElement;
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
    fields?:                   DescriptionElement[];
    accessory?:                Accessory;
    label?:                    DescriptionElement;
    element?:                  Accessory;
    dispatch_action?:          boolean;
    hint?:                     DescriptionElement;
    optional?:                 boolean;
}

export interface Accessory {
    type?:                            string;
    text?:                            DescriptionElement;
    action_id?:                       string;
    url?:                             string;
    value?:                           string;
    style?:                           string;
    confirm?:                         Confirm;
    accessibility_label?:             string;
    workflow?:                        Workflow;
    options?:                         Option[];
    initial_options?:                 Option[];
    focus_on_load?:                   boolean;
    initial_option?:                  Option;
    placeholder?:                     DescriptionElement;
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
    initial_date_time?:               number;
    min_query_length?:                number;
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
    title?:   DescriptionElement;
    text?:    DescriptionElement;
    confirm?: DescriptionElement;
    deny?:    DescriptionElement;
    style?:   string;
}

export interface DescriptionElement {
    type?:     DescriptionType;
    text?:     string;
    emoji?:    boolean;
    verbatim?: boolean;
}

export enum DescriptionType {
    Empty = "",
    Mrkdwn = "mrkdwn",
    PlainText = "plain_text",
}

export interface AccessoryElement {
    type?:     string;
    text?:     string;
    elements?: PurpleElement[];
    style?:    string;
    indent?:   number;
    offset?:   number;
    border?:   number;
}

export interface PurpleElement {
    type?:         ElementType;
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

export enum ElementType {
    Broadcast = "broadcast",
    Channel = "channel",
    Color = "color",
    Date = "date",
    Emoji = "emoji",
    Empty = "",
    Link = "link",
    Team = "team",
    Text = "text",
    User = "user",
    Usergroup = "usergroup",
}

export interface Filter {
    include?:                          string[];
    exclude_external_shared_channels?: boolean;
    exclude_bot_users?:                boolean;
}

export interface Option {
    text?:        DescriptionElement;
    value?:       string;
    description?: DescriptionElement;
    url?:         string;
}

export interface OptionGroup {
    label?:   DescriptionElement;
    options?: Option[];
}

export interface Workflow {
    trigger?: Trigger;
}

export interface Trigger {
    url?:                           string;
    customizable_input_parameters?: CustomizableInputParameter[];
}

export interface CustomizableInputParameter {
    name?:  string;
    value?: string;
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
    thumb_160_w?:                             string;
    thumb_480_w?:                             string;
    thumb_720?:                               string;
    thumb_720_gif?:                           string;
    thumb_720_w?:                             string;
    thumb_720_h?:                             string;
    thumb_800?:                               string;
    thumb_800_w?:                             string;
    thumb_800_h?:                             string;
    thumb_960?:                               string;
    thumb_960_gif?:                           string;
    thumb_960_w?:                             string;
    thumb_960_h?:                             string;
    thumb_video?:                             string;
    thumb_gif?:                               string;
    thumb_pdf?:                               string;
    thumb_pdf_w?:                             string;
    thumb_pdf_h?:                             string;
    thumb_tiny?:                              string;
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
    thumb_160_h?:                             string;
    thumb_360?:                               string;
    thumb_360_gif?:                           string;
    thumb_360_w?:                             string;
    thumb_360_h?:                             string;
    thumb_480?:                               string;
    thumb_480_gif?:                           string;
    thumb_480_h?:                             string;
    thumb_800_gif?:                           string;
    thumb_1024?:                              string;
    thumb_1024_gif?:                          string;
    thumb_1024_w?:                            string;
    thumb_1024_h?:                            string;
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
    channels?:                                string[];
    groups?:                                  string[];
    ims?:                                     string[];
    shares?:                                  Shares;
    has_more_shares?:                         boolean;
    to?:                                      Cc[];
    from?:                                    Cc[];
    cc?:                                      Cc[];
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
    teams_shared_with?:                       any[];
    last_read?:                               number;
    title_blocks?:                            TitleBlock[];
    private_channels_with_file_access_count?: number;
    dm_mpdm_users_with_file_access?:          DmMpdmUsersWithFileAccess[];
    org_or_workspace_access?:                 string;
    bot_id?:                                  string;
    initial_comment?:                         InitialComment;
    num_stars?:                               number;
    is_starred?:                              boolean;
    pinned_to?:                               string[];
    reactions?:                               Reaction[];
    comments_count?:                          number;
}

export interface Cc {
    address?:  string;
    name?:     string;
    original?: string;
}

export interface DmMpdmUsersWithFileAccess {
    user_id?: string;
    access?:  string;
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

export interface Reaction {
    name?:  string;
    count?: number;
    users?: string[];
    url?:   string;
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

export interface TitleBlock {
    type?:                string;
    elements?:            Accessory[];
    block_id?:            string;
    fallback?:            string;
    image_url?:           string;
    image_width?:         number;
    image_height?:        number;
    image_bytes?:         number;
    alt_text?:            string;
    title?:               DescriptionElement | string;
    text?:                DescriptionElement;
    fields?:              DescriptionElement[];
    accessory?:           Accessory;
    title_url?:           string;
    description?:         DescriptionElement | string;
    video_url?:           string;
    thumbnail_url?:       string;
    author_name?:         string;
    provider_name?:       string;
    provider_icon_url?:   string;
    function_trigger_id?: string;
    app_id?:              string;
    is_workflow_app?:     boolean;
    app_collaborators?:   string[];
    button_label?:        string;
    bot_user_id?:         string;
    url?:                 string;
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

export interface Room {
    id?:                           string;
    name?:                         string;
    media_server?:                 string;
    created_by?:                   string;
    date_start?:                   number;
    date_end?:                     number;
    participants?:                 string[];
    participant_history?:          string[];
    participants_camera_on?:       string[];
    participants_camera_off?:      string[];
    participants_screenshare_on?:  string[];
    participants_screenshare_off?: string[];
    canvas_thread_ts?:             string;
    thread_root_ts?:               string;
    channels?:                     string[];
    is_dm_call?:                   boolean;
    was_rejected?:                 boolean;
    was_missed?:                   boolean;
    was_accepted?:                 boolean;
    has_ended?:                    boolean;
    background_id?:                string;
    canvas_background?:            string;
    is_prewarmed?:                 boolean;
    is_scheduled?:                 boolean;
    attached_file_ids?:            string[];
    media_backend_type?:           string;
    display_id?:                   string;
    external_unique_id?:           string;
    app_id?:                       string;
    call_family?:                  string;
    pending_invitees?:             PendingInvitees;
}

export interface PendingInvitees {
}
