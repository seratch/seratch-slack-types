export interface ExternalOrgMigrationFinishedEvent {
    type?:          string;
    team?:          Team;
    date_started?:  number;
    date_finished?: number;
}

export interface Team {
    id?:           string;
    is_migrating?: boolean;
}
