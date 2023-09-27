export interface AdminRolesListAssignmentsResponse {
    ok?:                boolean;
    error?:             string;
    needed?:            string;
    provided?:          string;
    role_assignments?:  RoleAssignment[];
    response_metadata?: ResponseMetadata;
}

export interface ResponseMetadata {
    next_cursor?: string;
    messages?:    string[];
}

export interface RoleAssignment {
    role_id?:     string;
    entity_id?:   string;
    user_id?:     string;
    date_create?: number;
}
