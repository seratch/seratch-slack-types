export interface ConversationsListResponse {
    ok?:                boolean;
    channels?:          Channel[];
    response_metadata?: ResponseMetadata;
    error?:             string;
    needed?:            string;
    provided?:          string;
}

export interface Channel {
    id?:                         string;
    created?:                    number;
    is_archived?:                boolean;
    is_im?:                      boolean;
    is_org_shared?:              boolean;
    user?:                       string;
    is_user_deleted?:            boolean;
    priority?:                   number;
    name?:                       string;
    is_channel?:                 boolean;
    is_group?:                   boolean;
    is_mpim?:                    boolean;
    is_private?:                 boolean;
    is_general?:                 boolean;
    unlinked?:                   number;
    name_normalized?:            string;
    is_shared?:                  boolean;
    is_pending_ext_shared?:      boolean;
    pending_shared?:             string[];
    creator?:                    string;
    is_ext_shared?:              boolean;
    shared_team_ids?:            string[];
    pending_connected_team_ids?: string[];
    is_member?:                  boolean;
    topic?:                      Purpose;
    purpose?:                    Purpose;
    previous_names?:             string[];
    num_members?:                number;
    is_moved?:                   number;
    is_global_shared?:           boolean;
    is_org_default?:             boolean;
    is_org_mandatory?:           boolean;
    conversation_host_id?:       string;
    internal_team_ids?:          string[];
    context_team_id?:            string;
    updated?:                    number;
    properties?:                 Properties;
}

export interface Properties {
    posting_restricted_to?: RestrictedTo;
    threads_restricted_to?: RestrictedTo;
    canvas?:                Canvas;
}

export interface Canvas {
    file_id?:        string;
    is_empty?:       boolean;
    quip_thread_id?: string;
}

export interface RestrictedTo {
    type?: string[];
    user?: string[];
}

export interface Purpose {
    value?:    string;
    creator?:  string;
    last_set?: number;
}

export interface ResponseMetadata {
    next_cursor?: string;
}
