export interface FileCreatedPayload {
    token?:                 string;
    team_id?:               string;
    enterprise_id?:         string;
    api_app_id?:            string;
    event?:                 Event;
    type?:                  string;
    event_id?:              string;
    event_time?:            number;
    authorizations?:        Authorization[];
    is_ext_shared_channel?: boolean;
    event_context?:         string;
}

export interface Authorization {
    enterprise_id?:         string;
    team_id?:               string;
    user_id?:               string;
    is_bot?:                boolean;
    is_enterprise_install?: boolean;
}

export interface Event {
    type?:     string;
    file?:     File;
    file_id?:  string;
    user_id?:  string;
    event_ts?: string;
}

export interface File {
    id?: string;
}
