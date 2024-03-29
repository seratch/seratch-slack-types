export interface UsersGetPresenceResponse {
    ok?:               boolean;
    warning?:          string;
    error?:            string;
    needed?:           string;
    provided?:         string;
    presence?:         string;
    online?:           boolean;
    auto_away?:        boolean;
    manual_away?:      boolean;
    connection_count?: number;
    last_activity?:    number;
}
