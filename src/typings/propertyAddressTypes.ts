export interface Test {
  property: Property[];
}

export interface Property {
  identifier: Identifier;
  address: Address;
  location: Location;
  vintage: Vintage;
}

export interface Address {
  country: string;
  countrySubd: string;
  line1: string;
  line2: string;
  locality: string;
  matchCode: string;
  oneLine: string;
  postal1: string;
  postal2: string;
  postal3: string;
}

export interface Identifier {
  obPropId: number;
  fips: string;
  apn: string;
  apnOrig: string;
  attomId: number;
}

export interface Location {
  accuracy: string;
  elevation: number;
  latitude: string;
  longitude: string;
  distance: number;
  geoid: string;
}

export interface Vintage {
  lastModified: string;
  pubDate: string;
}
