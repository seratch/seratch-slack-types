export interface GroupResponse {
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
