export interface AttachmentActionPayload {
    type?:             string;
    actions?:          Action[];
    callback_id?:      string;
    team?:             Team;
    channel?:          Channel;
    user?:             User;
    action_ts?:        string;
    message_ts?:       string;
    attachment_id?:    string;
    token?:            string;
    is_app_unfurl?:    boolean;
    original_message?: OriginalMessage;
    response_url?:     string;
    trigger_id?:       string;
}

export interface Action {
    name?:  string;
    type?:  string;
    value?: string;
    text?:  string;
}

export interface Channel {
    id?:   string;
    name?: string;
}

export interface OriginalMessage {
    bot_id?:         string;
    type?:           string;
    text?:           string;
    user?:           string;
    username?:       string;
    ts?:             string;
    attachments?:    Attachment[];
    subtype?:        string;
    thread_ts?:      string;
    parent_user_id?: string;
}

export interface Attachment {
    id?:              number;
    callback_id?:     string;
    title?:           string;
    text?:            string;
    fallback?:        string;
    color?:           string;
    attachment_type?: string;
    actions?:         Action[];
    fields?:          Field[];
    author_name?:     string;
    author_icon?:     string;
    image_url?:       string;
}

export interface Field {
    title?: string;
    value?: string;
    short?: boolean;
}

export interface Team {
    id?:              string;
    domain?:          string;
    enterprise_id?:   string;
    enterprise_name?: string;
}

export interface User {
    id?:      string;
    name?:    string;
    team_id?: string;
}
