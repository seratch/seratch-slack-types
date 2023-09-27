export interface AdminFunctionsPermissionsLookupResponse {
    ok?:                boolean;
    permissions?:       { [key: string]: Permission };
    errors?:            Errors;
    error?:             string;
    needed?:            string;
    provided?:          string;
    response_metadata?: ResponseMetadata;
}

export interface Errors {
}

export interface Permission {
    distribution?:     AllowedByAdmin;
    allowed_entities?: AllowedByAdmin;
    allowed_by_admin?: AllowedByAdmin;
}

export interface AllowedByAdmin {
    type?:     string;
    user_ids?: string[];
}

export interface ResponseMetadata {
    messages?: string[];
}
