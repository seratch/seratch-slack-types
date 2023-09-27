export interface ConversationsJoinResponse {
    ok?:                boolean;
    channel?:           Channel;
    warning?:           string;
    response_metadata?: ResponseMetadata;
    error?:             string;
    needed?:            string;
    provided?:          string;
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
    pending_connected_team_ids?: string[];
    is_pending_ext_shared?:      boolean;
    is_member?:                  boolean;
    is_private?:                 boolean;
    is_mpim?:                    boolean;
    topic?:                      Purpose;
    purpose?:                    Purpose;
    previous_names?:             string[];
    last_read?:                  string;
    priority?:                   number;
    is_moved?:                   number;
    internal_team_ids?:          string[];
    is_starred?:                 boolean;
    context_team_id?:            string;
    updated?:                    number;
    properties?:                 Properties;
}

export interface Properties {
    canvas?: Canvas;
}

export interface Canvas {
    file_id?:        string;
    is_empty?:       boolean;
    quip_thread_id?: string;
}

export interface Purpose {
    value?:    string;
    creator?:  string;
    last_set?: number;
}

export interface ResponseMetadata {
    warnings?: string[];
}
