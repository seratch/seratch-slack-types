export interface AdminWorkflowsSearchResponse {
    ok?:                boolean;
    workflows?:         Workflow[];
    total_found?:       number;
    error?:             string;
    needed?:            string;
    provided?:          string;
    response_metadata?: ResponseMetadata;
}

export interface ResponseMetadata {
    messages?:    string[];
    next_cursor?: string;
}

export interface Workflow {
    id?:                        string;
    team_id?:                   string;
    workflow_function_id?:      string;
    callback_id?:               string;
    title?:                     string;
    description?:               string;
    input_parameters?:          { [key: string]: InputParameter };
    steps?:                     Step[];
    collaborators?:             string[];
    icons?:                     Icons;
    is_published?:              boolean;
    last_updated_by?:           string;
    unpublished_change_count?:  number;
    app_id?:                    string;
    source?:                    string;
    billing_type?:              string;
    date_updated?:              number;
    is_billable?:               boolean;
    last_published_version_id?: string;
    last_published_date?:       string;
    trigger_ids?:               string[];
    is_sales_home_workflow?:    boolean;
}

export interface Icons {
    image_96?:  string;
    image_192?: string;
}

export interface InputParameter {
    type?:        string;
    name?:        string;
    title?:       string;
    description?: string;
    is_required?: boolean;
    is_hidden?:   boolean;
}

export interface Step {
    id?:          string;
    function_id?: string;
    inputs?:      { [key: string]: Input };
    is_pristine?: boolean;
}

export interface Input {
    hidden?: boolean;
    locked?: boolean;
}
