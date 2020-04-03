export interface ChannelRenameEvent {
    type?:     string;
    channel?:  Channel;
    event_ts?: string;
}

export interface Channel {
    id?:              string;
    name?:            string;
    name_normalized?: string;
    is_channel?:      boolean;
    created?:         number;
}
