export interface ConversationsInfoResponse {
    ok?:       boolean;
    channel?:  Channel;
    error?:    string;
    needed?:   string;
    provided?: string;
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
    is_read_only?:               boolean;
    is_thread_only?:             boolean;
    is_non_threadable?:          boolean;
    is_ext_shared?:              boolean;
    is_org_shared?:              boolean;
    pending_shared?:             string[];
    pending_connected_team_ids?: string[];
    is_pending_ext_shared?:      boolean;
    conversation_host_id?:       string;
    is_member?:                  boolean;
    is_private?:                 boolean;
    is_mpim?:                    boolean;
    last_read?:                  string;
    topic?:                      Purpose;
    purpose?:                    Purpose;
    previous_names?:             string[];
    shared_team_ids?:            string[];
    locale?:                     string;
    internal_team_ids?:          string[];
    connected_team_ids?:         string[];
}

export interface Purpose {
    value?:    string;
    creator?:  string;
    last_set?: number;
}
