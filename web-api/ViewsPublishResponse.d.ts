export interface ViewsPublishResponse {
    ok?:                boolean;
    warning?:           string;
    error?:             string;
    needed?:            string;
    provided?:          string;
    view?:              View;
    response_metadata?: ResponseMetadata;
}

export interface ResponseMetadata {
    messages?: string[];
}

export interface View {
    id?:                    string;
    team_id?:               string;
    type?:                  string;
    title?:                 Close;
    submit?:                Close;
    close?:                 Close;
    blocks?:                Block[];
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

export interface Block {
    type?:              string;
    block_id?:          string;
    label?:             Close;
    element?:           PurpleElement;
    dispatch_action?:   boolean;
    hint?:              Close;
    optional?:          boolean;
    elements?:          ElementElement[];
    fallback?:          string;
    image_url?:         string;
    image_width?:       number;
    image_height?:      number;
    image_bytes?:       number;
    alt_text?:          string;
    title?:             Close;
    title_url?:         string;
    description?:       Close;
    video_url?:         string;
    thumbnail_url?:     string;
    author_name?:       string;
    provider_name?:     string;
    provider_icon_url?: string;
    text?:              Close;
    fields?:            Close[];
    accessory?:         Accessory;
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

export interface PurpleElement {
    type?:                            string;
    action_id?:                       string;
    placeholder?:                     Close;
    initial_value?:                   string;
    multiline?:                       boolean;
    min_length?:                      number;
    max_length?:                      number;
    dispatch_action_config?:          DispatchActionConfig;
    focus_on_load?:                   boolean;
    options?:                         Option[];
    initial_option?:                  Option;
    confirm?:                         Confirm;
    text?:                            Close;
    url?:                             string;
    value?:                           string;
    style?:                           string;
    accessibility_label?:             string;
    initial_channel?:                 string;
    response_url_enabled?:            boolean;
    initial_conversation?:            string;
    default_to_current_conversation?: boolean;
    filter?:                          Filter;
    initial_date?:                    string;
    initial_time?:                    string;
    timezone?:                        string;
    min_query_length?:                number;
    image_url?:                       string;
    alt_text?:                        string;
    fallback?:                        string;
    image_width?:                     number;
    image_height?:                    number;
    image_bytes?:                     number;
    option_groups?:                   OptionGroup[];
    initial_user?:                    string;
}

export interface Confirm {
    title?:   Close;
    text?:    Close;
    confirm?: Close;
    deny?:    Close;
    style?:   string;
}

export interface DispatchActionConfig {
    trigger_actions_on?: string[];
}

export interface Filter {
    include?:                          any[];
    exclude_external_shared_channels?: boolean;
    exclude_bot_users?:                boolean;
}

export interface Option {
    text?:        Close;
    value?:       string;
    description?: Close;
    url?:         string;
}

export interface OptionGroup {
    label?:   Close;
    options?: Option[];
}

export interface ElementElement {
    type?:                            string;
    text?:                            Close;
    action_id?:                       string;
    url?:                             string;
    value?:                           string;
    style?:                           string;
    confirm?:                         Confirm;
    accessibility_label?:             string;
    options?:                         Option[];
    initial_options?:                 Option[];
    focus_on_load?:                   boolean;
    initial_option?:                  Option;
    placeholder?:                     Close;
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
    image_url?:                       string;
    alt_text?:                        string;
    fallback?:                        string;
    image_width?:                     number;
    image_height?:                    number;
    image_bytes?:                     number;
    option_groups?:                   OptionGroup[];
    initial_user?:                    string;
    initial_users?:                   string[];
}

export interface State {
}
