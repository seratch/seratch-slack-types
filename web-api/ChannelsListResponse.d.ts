export interface ChannelsListResponse {
    ok?:                boolean;
    channels?:          Channel[];
    response_metadata?: ResponseMetadata;
    error?:             string;
    needed?:            string;
    provided?:          string;
}

export interface Channel {
    id?:               string;
    name?:             string;
    is_channel?:       boolean;
    created?:          number;
    is_archived?:      boolean;
    is_general?:       boolean;
    unlinked?:         number;
    creator?:          string;
    name_normalized?:  string;
    is_shared?:        boolean;
    is_org_shared?:    boolean;
    is_member?:        boolean;
    is_private?:       boolean;
    is_mpim?:          boolean;
    members?:          string[];
    topic?:            Purpose;
    purpose?:          Purpose;
    previous_names?:   string[];
    num_members?:      number;
    is_moved?:         number;
    enterprise_id?:    string;
    is_global_shared?: boolean;
    is_org_default?:   boolean;
    is_org_mandatory?: boolean;
}

export interface Purpose {
    value?:    string;
    creator?:  string;
    last_set?: number;
}

export interface ResponseMetadata {
    next_cursor?: string;
}
