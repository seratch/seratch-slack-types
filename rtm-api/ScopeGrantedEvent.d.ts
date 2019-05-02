export interface ScopeGrantedEvent {
    type?:       string;
    scopes?:     string[];
    trigger_id?: string;
}
