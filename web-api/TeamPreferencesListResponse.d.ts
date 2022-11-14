export interface TeamPreferencesListResponse {
    ok?:                     boolean;
    msg_edit_window_mins?:   number;
    allow_message_deletion?: boolean;
    display_real_names?:     boolean;
    disable_file_uploads?:   string;
    who_can_post_general?:   string;
    error?:                  string;
    needed?:                 string;
    provided?:               string;
}
