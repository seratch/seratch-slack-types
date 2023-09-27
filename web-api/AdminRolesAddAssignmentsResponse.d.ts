export interface AdminRolesAddAssignmentsResponse {
    ok?:             boolean;
    error?:          string;
    rejected_users?: RejectedUser[];
    needed?:         string;
    provided?:       string;
}

export interface RejectedUser {
    id?:    string;
    error?: string;
}
