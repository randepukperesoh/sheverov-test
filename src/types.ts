type Company = {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  
  export  type User = {
    id: number;
    email: string;
    name: string;
    phone: string;
    username: string;
    website: string;
    company: Company;
    address: any;
  };
  
  export  interface IButtonProps {
    onClick: any;
  }
  export  interface IUserInfoProps {
    user: User;
  }