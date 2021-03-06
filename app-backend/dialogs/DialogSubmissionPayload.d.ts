export interface DialogSubmissionPayload {
    type?:                  string;
    callback_id?:           string;
    submission?:            Submission;
    state?:                 string;
    enterprise?:            Channel;
    team?:                  Team;
    user?:                  User;
    channel?:               Channel;
    action_ts?:             string;
    token?:                 string;
    response_url?:          string;
    is_enterprise_install?: boolean;
}

export interface Channel {
    id?:   string;
    name?: string;
}

export interface Submission {
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
