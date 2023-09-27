export interface AdminFunctionsListResponse {
    ok?:                boolean;
    error?:             string;
    response_metadata?: ResponseMetadata;
    needed?:            string;
    provided?:          string;
    functions?:         Function[];
}

export interface Function {
    id?:                string;
    callback_id?:       string;
    title?:             string;
    description?:       string;
    type?:              string;
    input_parameters?:  PutParameter[];
    output_parameters?: PutParameter[];
    app_id?:            string;
    date_created?:      number;
    date_updated?:      number;
    date_deleted?:      number;
}

export interface PutParameter {
    type?:        string;
    name?:        string;
    title?:       string;
    is_required?: boolean;
    description?: string;
}

export interface ResponseMetadata {
    messages?:    string[];
    next_cursor?: string;
}
