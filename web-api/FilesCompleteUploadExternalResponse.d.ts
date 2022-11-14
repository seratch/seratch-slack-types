export interface FilesCompleteUploadExternalResponse {
    ok?:       boolean;
    files?:    File[];
    error?:    string;
    needed?:   string;
    provided?: string;
}

export interface File {
    id?:    string;
    title?: string;
}
