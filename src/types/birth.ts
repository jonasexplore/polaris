type Model = {
  term: string;
  collection: string;
  registrationDate: string; // dd/MM/yyyy
  registration: string;
  book: {
    number: string;
    type: string;
    sheetNumber: string;
  };
  missingFields: {
    code: string;
    description: string;
  };
  comments: string;
  isCourtRecord: boolean;
  serviceType: string;
  Content: Birth;
};

export type Birth = {
  county: string;
  complementAddressAffiliation: string;
  dnv: string;
  nonDnv: string;
  affiliation: Affiliation[];
  birthTime: string; // hh:mm
  securityPrint: {
    date: string;
    number: string;
    isSecondWay: boolean;
  };
  birthDate: string; // dd/MM/yyyy
  affilitionAddress: {
    county: string;
    address: string;
    number: string;
    complement: string;
  };
  name: string;
  twins: {
    hasTwins: boolean;
    count: number;
  };
  sex: Sex;
  endorsements: {
    date: string;
    reason: string;
    judicialProcess: string;
    dateJudgment: string;
    comments: string;
  };
  notes: {
    date: string;
    reason: string;
    comments: string;
  };
  rectifications: {
    date: string;
    judicialProcess: string;
    dateJudgment: string;
    comments: string;
  };
  documents: DocumentsType;
  occupation: string;
  nationality: string;
  country: string;
  city: string;
  birthPlace: BirthPlace;
};

type Affiliation = {
  birthDate: string;
  birthPlace: string;
  occupation?: string;
  documents: Documents[];
  nationality: string;
  name: string;
  countryBirth: string;
  parents: Parents[];
  sex: Sex;
};

type Parents = {
  name: string;
  sex: string;
};

type Documents = {
  owner: string;
  number: string;
  type: DocumentsType;
};

enum DocumentsType {
  CPF = "CPF",
  NIT = "NIT",
  CNH = "CNH",
}

enum Sex {
  MALE = "MASCULINO",
  FEMALE = "FERMININO",
  IGNORED = "IGNORADO",
}

enum BirthPlace {
  HEALTH_UNIT = "Unidade de Saúde",
  OUTSIDE_HEALTH_UNIT = " Fora de Unidade de Saúde",
}
