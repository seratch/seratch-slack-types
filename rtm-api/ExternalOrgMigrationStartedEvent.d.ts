export interface ExternalOrgMigrationStartedEvent {
    type?:         string;
    team?:         Team;
    date_started?: number;
}

export interface Team {
    id?:           string;
    is_migrating?: boolean;
}
