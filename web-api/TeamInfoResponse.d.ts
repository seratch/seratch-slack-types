export interface TeamInfoResponse {
    ok?:       boolean;
    team?:     Team;
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Team {
    id?:                string;
    name?:              string;
    domain?:            string;
    email_domain?:      string;
    icon?:              Icon;
    is_verified?:       boolean;
    url?:               string;
    enterprise_id?:     string;
    enterprise_name?:   string;
    enterprise_domain?: string;
    discoverable?:      string;
    avatar_base_url?:   string;
}

export interface Icon {
    image_34?:       string;
    image_44?:       string;
    image_68?:       string;
    image_88?:       string;
    image_102?:      string;
    image_132?:      string;
    image_230?:      string;
    image_original?: string;
    image_default?:  boolean;
}
