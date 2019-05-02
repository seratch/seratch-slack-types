export interface TeamProfileReorderEvent {
    type?:    string;
    profile?: Profile;
}

export interface Profile {
    fields?: Field[];
}

export interface Field {
    id?:       string;
    ordering?: number;
}
