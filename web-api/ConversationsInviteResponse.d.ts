export interface ConversationsInviteResponse {
    ok?:       boolean;
    channel?:  Channel;
    error?:    string;
    needed?:   string;
    provided?: string;
    errors?:   Error[];
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
    last_read?:                  string;
    topic?:                      Purpose;
    purpose?:                    Purpose;
    previous_names?:             string[];
    is_moved?:                   number;
    internal_team_ids?:          string[];
    is_open?:                    boolean;
    context_team_id?:            string;
    updated?:                    number;
}

export interface Purpose {
    value?:    string;
    creator?:  string;
    last_set?: number;
}

export interface Error {
    ok?:    boolean;
    error?: string;
}
