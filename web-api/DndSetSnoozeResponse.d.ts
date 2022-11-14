export interface DndSetSnoozeResponse {
    ok?:                   boolean;
    error?:                string;
    snooze_enabled?:       boolean;
    snooze_endtime?:       number;
    snooze_remaining?:     number;
    snooze_is_indefinite?: boolean;
    needed?:               string;
    provided?:             string;
}
