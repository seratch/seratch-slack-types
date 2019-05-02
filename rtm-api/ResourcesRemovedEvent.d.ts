export interface ResourcesRemovedEvent {
    type?:      string;
    resources?: ResourceElement[];
}

export interface ResourceElement {
    resource?: ResourceResource;
    scopes?:   string[];
}

export interface ResourceResource {
    type?:  string;
    grant?: Grant;
}

export interface Grant {
    type?:        string;
    resource_id?: string;
}
