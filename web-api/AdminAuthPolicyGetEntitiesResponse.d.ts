export interface AdminAuthPolicyGetEntitiesResponse {
    ok?:                 boolean;
    error?:              string;
    entities?:           Entity[];
    entity_total_count?: number;
    needed?:             string;
    provided?:           string;
}

export interface Entity {
    entity_id?:   string;
    entity_type?: string;
    date_added?:  number;
}
