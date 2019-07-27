export interface FilesRemoteAddResponse {
    ok?:       boolean;
    error?:    string;
    file?:     File;
    needed?:   string;
    provided?: string;
}

export interface File {
    id?:                string;
    created?:           number;
    timestamp?:         number;
    name?:              string;
    title?:             string;
    mimetype?:          string;
    filetype?:          string;
    pretty_type?:       string;
    user?:              string;
    editable?:          boolean;
    size?:              number;
    mode?:              string;
    is_external?:       boolean;
    external_type?:     string;
    is_public?:         boolean;
    public_url_shared?: boolean;
    display_as_bot?:    boolean;
    username?:          string;
    url_private?:       string;
    permalink?:         string;
    comments_count?:    number;
    is_starred?:        boolean;
    shares?:            Shares;
    channels?:          string[];
    groups?:            string[];
    ims?:               string[];
    external_id?:       string;
    external_url?:      string;
    has_rich_preview?:  boolean;
}

export interface Shares {
}
