import { IUserInfoProps } from "../types";

export  function UserInfo({ user }: IUserInfoProps): JSX.Element { 
    return (
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Phone number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.phone}</td>
          </tr>
        </tbody>
      </table>
    );
  }