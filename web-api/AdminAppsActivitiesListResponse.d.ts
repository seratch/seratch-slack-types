export interface AdminAppsActivitiesListResponse {
    ok?:                boolean;
    activities?:        Activity[];
    response_metadata?: ResponseMetadata;
    error?:             string;
    needed?:            string;
    provided?:          string;
}

export interface Activity {
    app_id?:         string;
    level?:          string;
    event_type?:     string;
    source?:         string;
    component_type?: string;
    component_id?:   string;
    team_id?:        string;
    enterprise_id?:  string;
    payload?:        Payload;
    created?:        number;
    trace_id?:       string;
}

export interface Payload {
    exec_outcome?:          string;
    workflow_name?:         string;
    function_name?:         string;
    function_type?:         string;
    function_id?:           string;
    function_execution_id?: string;
    total_steps?:           number;
    current_step?:          number;
    actor?:                 string;
    error?:                 string;
    log?:                   string;
    type?:                  string;
    billing_reason?:        string[];
    is_billing_excluded?:   boolean;
    trigger?:               Trigger;
}

export interface Trigger {
    id?:               string;
    type?:             string;
    config?:           Config;
    trip_information?: TripInformation;
}

export interface Config {
    name?:        string;
    description?: string;
}

export interface TripInformation {
    user_id?:    string;
    channel_id?: string;
}

export interface ResponseMetadata {
    next_cursor?: string;
}
