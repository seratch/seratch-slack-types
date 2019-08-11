export interface UserResponse {
    schemas?:                                     string[];
    id?:                                          string;
    externalId?:                                  string;
    meta?:                                        Meta;
    userName?:                                    string;
    nickName?:                                    string;
    name?:                                        Name;
    displayName?:                                 string;
    profileUrl?:                                  string;
    title?:                                       string;
    timezone?:                                    string;
    active?:                                      boolean;
    emails?:                                      Email[];
    photos?:                                      Photo[];
    groups?:                                      string[];
    addresses?:                                   Address[];
    phoneNumbers?:                                PhoneNumber[];
    roles?:                                       Role[];
    "urn:scim:schemas:extension:enterprise:1.0"?: UrnScimSchemasExtensionEnterprise10;
}

export interface Address {
}

export interface Email {
    value?:   string;
    primary?: boolean;
}

export interface Meta {
    created?:  string;
    location?: string;
}

export interface Name {
    givenName?:  string;
    familyName?: string;
}

export interface PhoneNumber {
    type?:    string;
    primary?: boolean;
}

export interface Photo {
    value?: string;
    type?:  string;
}

export interface Role {
    primary?: boolean;
}

export interface UrnScimSchemasExtensionEnterprise10 {
    manager?: Address;
}
