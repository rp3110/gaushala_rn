interface Donor {
    // ... your existing Donor properties
  }
  
  interface Mediator {
    Id: string;
    FirstNameM: string;
    LastNameM: string;
    EmailM: string;
    MobileM: string;
    CityM: string;
  }
  
  interface ListEntry {
    Donor: Donor;
    Mediator: Mediator; // Mediator is now its own concrete type
  }
  
  interface DonationResult {
    TotalRecords: number;
    list: ListEntry[]; 
  }
  
  export interface DonationResponse { 
    StatusCode: number; 
    Message: string;
    Result: DonationResult;
  }
  