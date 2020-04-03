export interface UsersConversationsResponse {
    ok?:                boolean;
    channels?:          Channel[];
    response_metadata?: ResponseMetadata;
    error?:             string;
    needed?:            string;
    provided?:          string;
}

export interface Channel {
    enterprise_id?:         string;
    id?:                    string;
    name?:                  string;
    created?:               string;
    creator?:               string;
    unlinked?:              number;
    name_normalized?:       string;
    last_read?:             string;
    topic?:                 Purpose;
    purpose?:               Purpose;
    num_members?:           number;
    latest?:                Latest;
    locale?:                string;
    unread_count?:          number;
    unread_count_display?:  number;
    user?:                  string;
    priority?:              number;
    parent_conversation?:   string;
    conversation_host_id?:  string;
    is_channel?:            boolean;
    is_group?:              boolean;
    is_im?:                 boolean;
    is_archived?:           boolean;
    is_general?:            boolean;
    is_read_only?:          boolean;
    is_thread_only?:        boolean;
    is_non_threadable?:     boolean;
    is_shared?:             boolean;
    is_ext_shared?:         boolean;
    is_org_shared?:         boolean;
    is_pending_ext_shared?: boolean;
    is_global_shared?:      boolean;
    is_org_default?:        boolean;
    is_org_mandatory?:      boolean;
    is_moved?:              number;
    is_member?:             boolean;
    is_open?:               boolean;
    is_private?:            boolean;
    is_mpim?:               boolean;
}

export interface Latest {
    client_msg_id?:  string;
    type?:           string;
    subtype?:        string;
    team?:           string;
    user?:           string;
    username?:       string;
    text?:           string;
    topic?:          string;
    root?:           Root;
    upload?:         boolean;
    display_as_bot?: boolean;
    bot_id?:         string;
    bot_link?:       string;
    thread_ts?:      string;
    ts?:             string;
    icons?:          Icons;
    edited?:         Edited;
}

export interface Edited {
    user?: string;
    ts?:   string;
}

export interface Icons {
    emoji?:    string;
    image_36?: string;
    image_48?: string;
    image_64?: string;
    image_72?: string;
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

export interface Purpose {
    value?:    string;
    creator?:  string;
    last_set?: number;
}

export interface ResponseMetadata {
    next_cursor?: string;
}
