import { IUserInfoProps } from "../types";

export  function UserInfo({ user }: IUserInfoProps): JSX.Element { 
  if (user === undefined) {
    return (
    <div> 
      Load
    </div>)} 
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
             <td>{user.name ? user.name: 'eror' }</td>
             <td>{user.phone ? user.phone : 'eror' }</td>
           </tr>
         </tbody>
       </table>
    );
  }