export interface MessageEvent {
    client_msg_id?:  string;
    type?:           string;
    team?:           string;
    channel?:        string;
    user?:           string;
    bot_id?:         string;
    bot_profile?:    BotProfile;
    text?:           string;
    blocks?:         Block[];
    attachments?:    Attachment[];
    files?:          any[];
    ts?:             string;
    parent_user_id?: string;
    thread_ts?:      string;
    event_ts?:       string;
    channel_type?:   string;
    edited?:         Edited;
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
    actions?:               Action[];
    blocks?:                Block[];
    preview?:               Preview;
    files?:                 any[];
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
    options?:          SelectedOptionElement[];
    selected_options?: SelectedOptionElement[];
    data_source?:      string;
    min_query_length?: number;
    option_groups?:    ActionOptionGroup[];
    url?:              string;
}

export interface ActionConfirm {
    title?:        string;
    text?:         string;
    ok_text?:      string;
    dismiss_text?: string;
}

export interface ActionOptionGroup {
    text?:    string;
    options?: SelectedOptionElement[];
}

export interface SelectedOptionElement {
    text?:  string;
    value?: string;
}

export interface Block {
    type?:                string;
    elements?:            Accessory[];
    block_id?:            string;
    fallback?:            string;
    image_url?:           string;
    image_width?:         number;
    image_height?:        number;
    image_bytes?:         number;
    alt_text?:            string;
    title?:               Text | string;
    text?:                Text;
    fields?:              Text[];
    accessory?:           Accessory;
    title_url?:           string;
    description?:         Text | string;
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

export interface Accessory {
    type?:                            string;
    image_url?:                       string;
    alt_text?:                        string;
    fallback?:                        string;
    image_width?:                     number;
    image_height?:                    number;
    image_bytes?:                     number;
    text?:                            Text;
    action_id?:                       string;
    url?:                             string;
    value?:                           string;
    style?:                           string;
    confirm?:                         AccessoryConfirm;
    accessibility_label?:             string;
    options?:                         InitialOptionElement[];
    initial_options?:                 InitialOptionElement[];
    focus_on_load?:                   boolean;
    initial_option?:                  InitialOptionElement;
    placeholder?:                     Text;
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
    min_query_length?:                number;
    option_groups?:                   AccessoryOptionGroup[];
    initial_user?:                    string;
    initial_users?:                   string[];
    elements?:                        AccessoryElement[];
    indent?:                          number;
    offset?:                          number;
    border?:                          number;
}

export interface AccessoryConfirm {
    title?:   Text;
    text?:    Text;
    confirm?: Text;
    deny?:    Text;
    style?:   string;
}

export interface Text {
    type?:     TextType;
    text?:     string;
    emoji?:    boolean;
    verbatim?: boolean;
}

export enum TextType {
    Mrkdwn = "mrkdwn",
    PlainText = "plain_text",
}

export interface AccessoryElement {
    type?:     FluffyType;
    elements?: PurpleElement[];
    style?:    string;
    indent?:   number;
    offset?:   number;
    border?:   number;
}

export interface PurpleElement {
    type?:         PurpleType;
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

export enum PurpleType {
    Broadcast = "broadcast",
    Channel = "channel",
    Color = "color",
    Date = "date",
    Emoji = "emoji",
    Link = "link",
    Team = "team",
    Text = "text",
    User = "user",
    Usergroup = "usergroup",
}

export enum FluffyType {
    RichTextList = "rich_text_list",
    RichTextPreformatted = "rich_text_preformatted",
    RichTextQuote = "rich_text_quote",
    RichTextSection = "rich_text_section",
}

export interface Filter {
    include?:                          any[];
    exclude_external_shared_channels?: boolean;
    exclude_bot_users?:                boolean;
}

export interface InitialOptionElement {
    text?:        Text;
    value?:       string;
    description?: Text;
    url?:         string;
}

export interface AccessoryOptionGroup {
    label?:   Text;
    options?: InitialOptionElement[];
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

export interface Preview {
    type?:       string;
    can_remove?: boolean;
    title?:      Text;
    subtitle?:   Text;
    icon_url?:   string;
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
