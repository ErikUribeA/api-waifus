export interface ApiResponse {
    success:     boolean;
    status:      number;
    count:       number;
    id:          string;
    colors:      Colors;
    image:       Image;
    metadata:    Metadata;
    category:    string;
    tags:        string[];
    rating:      string;
    anime:       Anime;
    source:      Source;
    attribution: Attribution;
}

export interface Anime {
    title:     null;
    character: null;
}

export interface Attribution {
    artist:    Artist;
    copyright: string;
}

export interface Artist {
    username: string;
    profile:  string;
}

export interface Colors {
    main:    string;
    palette: string[];
}

export interface Image {
    original:   ImageCompressed;
    compressed: ImageCompressed;
}

export interface ImageCompressed {
    url:       string;
    extension: string;
}

export interface Metadata {
    original:   MetadataCompressed;
    compressed: MetadataCompressed;
}

export interface MetadataCompressed {
    width:     number;
    height:    number;
    size:      number;
    extension: string;
}

export interface Source {
    url:    string;
    direct: string;
}


