export interface LogsResponse {
    ok?:                boolean;
    warning?:           string;
    error?:             string;
    needed?:            string;
    provided?:          string;
    response_metadata?: ResponseMetadata;
    entries?:           Entry[];
}

export interface Entry {
    id?:          string;
    date_create?: number;
    action?:      string;
    actor?:       Actor;
    entity?:      Entity;
    context?:     Context;
    details?:     Details;
}

export interface Actor {
    type?: string;
    user?: User;
}

export interface User {
    id?:    string;
    name?:  string;
    email?: string;
    team?:  string;
}

export interface Context {
    session_id?: string;
    location?:   Location;
    ua?:         string;
    ip_address?: string;
    app?:        App;
}

export interface App {
    id?:                    string;
    name?:                  string;
    is_distributed?:        boolean;
    is_directory_approved?: boolean;
    is_workflow_app?:       boolean;
    scopes?:                string[];
    scopes_bot?:            any[];
    creator?:               string;
    team?:                  string;
}

export interface Location {
    type?:   string;
    id?:     string;
    name?:   string;
    domain?: string;
}

export interface Details {
    type?:                          string;
    app_owner_id?:                  string;
    scopes?:                        string[];
    bot_scopes?:                    string[];
    new_scopes?:                    string[];
    previous_scopes?:               string[];
    inviter?:                       Inviter;
    kicker?:                        Inviter;
    installer_user_id?:             string;
    approver_id?:                   string;
    approval_type?:                 string;
    app_previously_approved?:       boolean;
    old_scopes?:                    string[];
    name?:                          string;
    bot_id?:                        string;
    channels?:                      string[];
    permissions?:                   Permission[];
    shared_to?:                     string;
    reason?:                        string;
    is_internal_integration?:       boolean;
    cleared_resolution?:            string;
    is_workflow?:                   boolean;
    mobile_only?:                   boolean;
    web_only?:                      boolean;
    non_sso_only?:                  boolean;
    expires_on?:                    number;
    new_version_id?:                string;
    trigger?:                       string;
    granular_bot_token?:            boolean;
    origin_team?:                   string;
    target_team?:                   string;
    resolution?:                    string;
    app_previously_resolved?:       boolean;
    admin_app_id?:                  string;
    export_type?:                   string;
    export_start_ts?:               string;
    export_end_ts?:                 string;
    barrier_id?:                    string;
    primary_usergroup_id?:          string;
    barriered_from_usergroup_ids?:  string[];
    restricted_subjects?:           string[];
    duration?:                      number;
    desktop_app_browser_quit?:      boolean;
    invite_id?:                     string;
    external_organization_id?:      string;
    external_organization_name?:    string;
    external_user_id?:              string;
    external_user_email?:           string;
    channel_id?:                    string;
    added_team_id?:                 string;
    is_token_rotation_enabled_app?: boolean;
    old_retention_policy?:          RetentionPolicy;
    new_retention_policy?:          RetentionPolicy;
    who_can_post?:                  CanThread;
    can_thread?:                    CanThread;
    is_external_limited?:           boolean;
    exporting_team_id?:             number;
    session_search_start?:          number;
    deprecation_search_end?:        number;
    is_error?:                      boolean;
    app_id?:                        string;
    enable_at_here?:                CanHuddle;
    enable_at_channel?:             CanHuddle;
    can_huddle?:                    CanHuddle;
    url_private?:                   string;
    shared_with?:                   SharedWith;
    initiated_by?:                  string;
    source_team?:                   string;
    destination_team?:              string;
    succeeded_users?:               any[];
    failed_users?:                  any[];
    enterprise?:                    string;
    team?:                          string;
    subteam?:                       string;
    action?:                        string;
    idp_group_member_count?:        number;
    workspace_member_count?:        number;
    added_user_count?:              number;
    added_user_error_count?:        number;
    reactivated_user_count?:        number;
    removed_user_count?:            number;
    removed_user_error_count?:      number;
    total_removal_count?:           number;
    is_flagged?:                    string;
    target_user?:                   string;
    target_entity?:                 string;
    idp_config_id?:                 string;
    config_type?:                   string;
    idp_entity_id?:                 string;
    idp_entity_id_hash?:            string;
    label?:                         string;
    previous_profile?:              Profile;
    new_profile?:                   Profile;
    target_user_id?:                string;
    space_file_id?:                 SpaceFileid;
    target_entity_id?:              string;
    changed_permissions?:           any[];
    datastore_name?:                string;
    attributes?:                    any[];
}

export interface CanHuddle {
    enabled?: boolean;
}

export interface CanThread {
    type?: string[];
    user?: string[];
}

export interface Inviter {
    type?:  string;
    user?:  User;
    id?:    string;
    name?:  string;
    email?: string;
    team?:  string;
}

export interface Profile {
    real_name?:      string;
    first_name?:     string;
    last_name?:      string;
    display_name?:   string;
    image_original?: string;
    image_24?:       string;
    image_32?:       string;
    image_48?:       string;
    image_72?:       string;
    image_192?:      string;
    image_512?:      string;
    image_1024?:     string;
}

export interface RetentionPolicy {
    type?:          string;
    duration_days?: number;
}

export interface Permission {
    resource?: Resource;
    scopes?:   string[];
}

export interface Resource {
    type?:  string;
    grant?: Grant;
}

export interface Grant {
    type?:        string;
    resource_id?: string;
    wildcard?:    Wildcard;
}

export interface Wildcard {
    type?: string;
}

export interface SharedWith {
    channel_id?: string;
}

export interface SpaceFileid {
    payload?: string;
}

export interface Entity {
    type?:              string;
    app?:               App;
    user?:              User;
    usergroup?:         AccountTypeRole;
    workspace?:         Location;
    enterprise?:        Location;
    file?:              File;
    channel?:           Channel;
    huddle?:            Huddle;
    role?:              Location;
    account_type_role?: AccountTypeRole;
    workflow?:          AccountTypeRole;
    barrier?:           Barrier;
}

export interface AccountTypeRole {
    id?:   string;
    name?: string;
}

export interface Barrier {
    id?:                        string;
    primary_usergroup?:         string;
    barriered_from_usergroups?: string[];
    restricted_subjects?:       string[];
}

export interface Channel {
    id?:                            string;
    name?:                          string;
    privacy?:                       string;
    is_shared?:                     boolean;
    is_org_shared?:                 boolean;
    teams_shared_with?:             string[];
    original_connected_channel_id?: string;
}

export interface File {
    id?:       string;
    name?:     string;
    filetype?: string;
    title?:    string;
}

export interface Huddle {
    id?:           string;
    date_start?:   number;
    date_end?:     number;
    participants?: any[];
}

export interface ResponseMetadata {
    next_cursor?: string;
    messages?:    any[];
    warnings?:    any[];
}
