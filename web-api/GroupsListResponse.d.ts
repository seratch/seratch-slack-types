export interface GroupsListResponse {
    ok?:       boolean;
    groups?:   Group[];
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Group {
    id?:              string;
    name?:            string;
    is_group?:        boolean;
    created?:         number;
    creator?:         string;
    is_archived?:     boolean;
    name_normalized?: string;
    is_mpim?:         boolean;
    members?:         string[];
    topic?:           Purpose;
    purpose?:         Purpose;
    priority?:        number;
    is_read_only?:    boolean;
    is_thread_only?:  boolean;
}

export interface Purpose {
    value?:    string;
    creator?:  string;
    last_set?: number;
}
