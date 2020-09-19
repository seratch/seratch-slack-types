export interface GroupRenameEvent {
    type?:     string;
    channel?:  Channel;
    event_ts?: string;
}

export interface Channel {
    id?:              string;
    name?:            string;
    name_normalized?: string;
    is_group?:        boolean;
    is_mpim?:         boolean;
    created?:         number;
}
