export interface GroupsResponse {
    totalResults?: number;
    itemsPerPage?: number;
    startIndex?:   number;
    schemas?:      string[];
    Resources?:    Resource[];
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
