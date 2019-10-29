export interface AuthTestResponse {
    ok?:            boolean;
    url?:           string;
    team?:          string;
    user?:          string;
    team_id?:       string;
    user_id?:       string;
    enterprise_id?: string;
    error?:         string;
    needed?:        string;
    provided?:      string;
}
