export interface ScopeDeniedEvent {
    type?:       string;
    scopes?:     string[];
    trigger_id?: string;
}
