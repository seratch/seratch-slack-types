export interface AuthTestResponse {
    ok?:                    boolean;
    url?:                   string;
    team?:                  string;
    user?:                  string;
    team_id?:               string;
    user_id?:               string;
    bot_id?:                string;
    is_enterprise_install?: boolean;
    app_name?:              string;
    app_id?:                string;
    enterprise_id?:         string;
    error?:                 string;
    needed?:                string;
    provided?:              string;
}
