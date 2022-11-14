export interface AdminAuthPolicyRemoveEntitiesResponse {
    ok?:                 boolean;
    entity_total_count?: number;
    error?:              string;
    needed?:             string;
    provided?:           string;
}
