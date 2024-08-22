export type DentistApiReponse = {
  dentist: DentistProfile;
}

export type DentistProfile = {
  id: number;
  picture: string;
  name: string;
  role: string;
  specialty: string;
  description: string;
  medias: MediaInfo[];
  trustStatus: TrustStatus;
}

export type MediaInfo = {
  mediaType: MEDIA_TYPE;
  url: string;
}

export type TrustStatus = {
  statusLevel: number;
  isVerified: boolean;
  secureContact: boolean;
  secureProfile: boolean;
}
