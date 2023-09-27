export interface AuthTeamsListResponse {
    ok?:                boolean;
    teams?:             Team[];
    error?:             string;
    response_metadata?: ResponseMetadata;
    needed?:            string;
    provided?:          string;
}

export interface ResponseMetadata {
    next_cursor?: string;
}

export interface Team {
    id?:   string;
    name?: string;
    icon?: Icon;
}

export interface Icon {
    image_default?: boolean;
    image_34?:      string;
    image_44?:      string;
    image_68?:      string;
    image_88?:      string;
    image_102?:     string;
    image_230?:     string;
    image_132?:     string;
}
