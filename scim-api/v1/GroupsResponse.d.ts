export interface GroupsResponse {
    totalResults?: number;
    itemsPerPage?: number;
    startIndex?:   number;
    schemas?:      string[];
    Resources?:    Resource[];
    Errors?:       Errors;
}

export interface Errors {
    description?: string;
    code?:        number;
}

export interface Resource {
    schemas?:     string[];
    id?:          string;
    displayName?: string;
    members?:     string[];
    meta?:        Meta;
}

export interface Meta {
    created?:  string;
    location?: string;
}
