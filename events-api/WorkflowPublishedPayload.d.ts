export interface WorkflowPublishedPayload {
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
    type?:                             string;
    workflow_id?:                      string;
    workflow_published_configuration?: WorkflowPublishedConfiguration;
    event_ts?:                         string;
}

export interface WorkflowPublishedConfiguration {
    version_id?: string;
}
