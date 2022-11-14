export interface TeamProfileGetResponse {
    ok?:       boolean;
    profile?:  Profile;
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Profile {
    fields?:   Field[];
    sections?: Section[];
}

export interface Field {
    id?:              string;
    ordering?:        number;
    field_name?:      string;
    label?:           string;
    hint?:            string;
    type?:            string;
    is_hidden?:       boolean;
    possible_values?: string[];
    options?:         Options;
    section_id?:      string;
}

export interface Options {
    is_scim?:      boolean;
    is_protected?: boolean;
}

export interface Section {
    id?:           string;
    team_id?:      string;
    section_type?: string;
    label?:        string;
    order?:        number;
    is_hidden?:    boolean;
}
