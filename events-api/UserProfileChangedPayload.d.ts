export interface UserProfileChangedPayload {
    token?:                 string;
    enterprise_id?:         string;
    team_id?:               string;
    api_app_id?:            string;
    type?:                  string;
    authed_users?:          string[];
    authed_teams?:          string[];
    authorizations?:        Authorization[];
    is_ext_shared_channel?: boolean;
    event_id?:              string;
    event_time?:            number;
    event_context?:         string;
    event?:                 Event;
}

export interface Authorization {
    enterprise_id?:         string;
    team_id?:               string;
    user_id?:               string;
    is_bot?:                boolean;
    is_enterprise_install?: boolean;
}

export interface Event {
    type?:     string;
    user?:     User;
    cache_ts?: number;
    event_ts?: string;
}

export interface User {
    id?:                         string;
    team_id?:                    string;
    name?:                       string;
    deleted?:                    boolean;
    color?:                      string;
    real_name?:                  string;
    tz?:                         string;
    tz_label?:                   string;
    tz_offset?:                  number;
    profile?:                    Profile;
    is_admin?:                   boolean;
    is_owner?:                   boolean;
    is_primary_owner?:           boolean;
    is_invited_user?:            boolean;
    is_restricted?:              boolean;
    is_ultra_restricted?:        boolean;
    is_bot?:                     boolean;
    is_stranger?:                boolean;
    is_app_user?:                boolean;
    updated?:                    number;
    has_2fa?:                    boolean;
    is_email_confirmed?:         boolean;
    presence?:                   string;
    enterprise_user?:            EnterpriseUser;
    two_factor_type?:            string;
    has_files?:                  boolean;
    locale?:                     string;
    is_workflow_bot?:            boolean;
    who_can_share_contact_card?: string;
}

export interface EnterpriseUser {
    id?:               string;
    enterprise_id?:    string;
    enterprise_name?:  string;
    is_primary_owner?: boolean;
    is_admin?:         boolean;
    is_owner?:         boolean;
}

export interface Profile {
    guest_channels?:             string;
    guest_invited_by?:           string;
    guest_expiration_ts?:        number;
    avatar_hash?:                string;
    status_text?:                string;
    status_text_canonical?:      string;
    status_emoji?:               string;
    status_emoji_url?:           string;
    status_expiration?:          number;
    display_name?:               string;
    display_name_normalized?:    string;
    real_name?:                  string;
    real_name_normalized?:       string;
    bot_id?:                     string;
    title?:                      string;
    email?:                      string;
    skype?:                      string;
    phone?:                      string;
    team?:                       string;
    api_app_id?:                 string;
    always_active?:              boolean;
    image_original?:             string;
    image_24?:                   string;
    image_32?:                   string;
    image_48?:                   string;
    image_72?:                   string;
    image_192?:                  string;
    image_512?:                  string;
    image_1024?:                 string;
    is_custom_image?:            boolean;
    pronouns?:                   string;
    huddle_state?:               string;
    huddle_state_expiration_ts?: number;
    first_name?:                 string;
    last_name?:                  string;
}
