export interface ImListResponse {
    ok?:                boolean;
    ims?:               Im[];
    response_metadata?: ResponseMetadata;
    error?:             string;
    needed?:            string;
    provided?:          string;
}

export interface Im {
    id?:              string;
    created?:         number;
    is_im?:           boolean;
    is_org_shared?:   boolean;
    user?:            string;
    is_user_deleted?: boolean;
    priority?:        number;
    is_archived?:     boolean;
}

export interface ResponseMetadata {
    next_cursor?: string;
}
