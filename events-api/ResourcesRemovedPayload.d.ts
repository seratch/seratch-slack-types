export interface ResourcesRemovedPayload {
    token?:                 string;
    enterprise_id?:         string;
    team_id?:               string;
    api_app_id?:            string;
    type?:                  string;
    authed_users?:          string[];
    authed_teams?:          string[];
    is_ext_shared_channel?: boolean;
    event_id?:              string;
    event_time?:            number;
    event_context?:         string;
    event?:                 Event;
}

export interface Event {
    type?:      string;
    resources?: ResourceElement[];
}

export interface ResourceElement {
    resource?: ResourceResource;
    scopes?:   string[];
}

export interface ResourceResource {
    type?:  string;
    grant?: Grant;
}

export interface Grant {
    type?:        string;
    resource_id?: string;
}
