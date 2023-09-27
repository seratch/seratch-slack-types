export interface ConversationsListConnectInvitesResponse {
    ok?:                boolean;
    error?:             string;
    arg?:               string;
    invites?:           InviteElement[];
    response_metadata?: ResponseMetadata;
    needed?:            string;
    provided?:          string;
}

export interface InviteElement {
    direction?:         string;
    status?:            string;
    date_last_updated?: number;
    invite_type?:       string;
    invite?:            InviteInvite;
    channel?:           Channel;
    acceptances?:       Acceptance[];
}

export interface Acceptance {
    approval_status?:   string;
    date_accepted?:     number;
    date_invalid?:      number;
    date_last_updated?: number;
    accepting_team?:    IngTeam;
    accepting_user?:    TingUser;
    reviews?:           Review[];
}

export interface IngTeam {
    id?:              string;
    name?:            string;
    icon?:            Icon;
    is_verified?:     boolean;
    domain?:          string;
    date_created?:    number;
    avatar_base_url?: string;
}

export interface Icon {
    image_102?:      string;
    image_132?:      string;
    image_230?:      string;
    image_34?:       string;
    image_44?:       string;
    image_68?:       string;
    image_88?:       string;
    image_default?:  boolean;
    image_original?: string;
}

export interface TingUser {
    id?:                         string;
    team_id?:                    string;
    name?:                       string;
    updated?:                    number;
    profile?:                    Profile;
    who_can_share_contact_card?: string;
}

export interface Profile {
    real_name?:               string;
    display_name?:            string;
    real_name_normalized?:    string;
    display_name_normalized?: string;
    team?:                    string;
    avatar_hash?:             string;
    email?:                   string;
    image_24?:                string;
    image_32?:                string;
    image_48?:                string;
    image_72?:                string;
    image_192?:               string;
    image_512?:               string;
    image_1024?:              string;
    image_original?:          string;
    is_custom_image?:         boolean;
}

export interface Review {
    type?:           string;
    date_review?:    number;
    reviewing_team?: IngTeam;
}

export interface Channel {
    id?:         string;
    is_im?:      boolean;
    is_private?: boolean;
    name?:       string;
}

export interface InviteInvite {
    id?:                string;
    date_created?:      number;
    date_invalid?:      number;
    inviting_team?:     IngTeam;
    inviting_user?:     TingUser;
    link?:              string;
    recipient_user_id?: string;
    recipient_email?:   string;
}

export interface ResponseMetadata {
    next_cursor?: string;
    messages?:    string[];
}
