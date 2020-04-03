export interface GroupsResponse {
    schemas?:      string[];
    id?:           string;
    displayName?:  string;
    members?:      GroupsResponseMember[];
    meta?:         Meta;
    totalResults?: number;
    itemsPerPage?: number;
    startIndex?:   number;
    Resources?:    Resource[];
}

export interface Resource {
    schemas?:     string[];
    id?:          string;
    displayName?: string;
    members?:     ResourceMember[];
    meta?:        Meta;
}

export interface ResourceMember {
    schemas?:                                     string[];
    id?:                                          string;
    externalId?:                                  string;
    meta?:                                        Meta;
    userName?:                                    string;
    nickName?:                                    string;
    name?:                                        Name;
    displayName?:                                 string;
    profileUrl?:                                  string;
    userType?:                                    string;
    title?:                                       string;
    preferredLanguage?:                           string;
    locale?:                                      string;
    timezone?:                                    string;
    active?:                                      boolean;
    password?:                                    string;
    "urn:scim:schemas:extension:enterprise:1.0"?: UrnScimSchemasExtensionEnterprise10;
}

export interface Meta {
    created?:  string;
    location?: string;
}

export interface Name {
    givenName?:       string;
    familyName?:      string;
    honorificPrefix?: string;
}

export interface UrnScimSchemasExtensionEnterprise10 {
    employeeNumber?: string;
    costCenter?:     string;
    organization?:   string;
    division?:       string;
    department?:     string;
    manager?:        Manager;
}

export interface Manager {
    managerId?: string;
}

export interface GroupsResponseMember {
    value?:   string;
    display?: string;
}
