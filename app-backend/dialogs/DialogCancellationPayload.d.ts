export interface DialogCancellationPayload {
    type?:                  string;
    token?:                 string;
    action_ts?:             string;
    enterprise?:            Channel;
    team?:                  Team;
    user?:                  User;
    channel?:               Channel;
    callback_id?:           string;
    response_url?:          string;
    state?:                 string;
    is_enterprise_install?: boolean;
}

export interface Channel {
    id?:   string;
    name?: string;
}

export interface Team {
    id?:              string;
    domain?:          string;
    enterprise_id?:   string;
    enterprise_name?: string;
}

export interface User {
    id?:      string;
    name?:    string;
    team_id?: string;
}
