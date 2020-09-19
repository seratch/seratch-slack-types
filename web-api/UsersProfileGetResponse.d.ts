export interface UsersProfileGetResponse {
    ok?:       boolean;
    profile?:  Profile;
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface Profile {
    title?:                   string;
    phone?:                   string;
    skype?:                   string;
    real_name?:               string;
    real_name_normalized?:    string;
    display_name?:            string;
    display_name_normalized?: string;
    fields?:                  { [key: string]: Field };
    status_text?:             string;
    status_emoji?:            string;
    status_expiration?:       number;
    avatar_hash?:             string;
    image_original?:          string;
    is_custom_image?:         boolean;
    email?:                   string;
    first_name?:              string;
    last_name?:               string;
    image_24?:                string;
    image_32?:                string;
    image_48?:                string;
    image_72?:                string;
    image_192?:               string;
    image_512?:               string;
    image_1024?:              string;
    status_text_canonical?:   string;
}

export interface Field {
    value?: string;
    alt?:   string;
}
