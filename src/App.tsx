// Мы ожидаем, что Вы исправите синтаксические ошибки, сделаете перехват возможных исключений и улучшите читаемость кода.
// А так же, напишите кастомный хук useThrottle и используете его там где это нужно.
// Желательно использование React.memo и React.useCallback там где это имеет смысл.
// Будет большим плюсом, если Вы сможете закэшировать получение случайного пользователя.
// Укажите правильные типы.

import React, { memo, useCallback, useState } from "react";
import { IButtonProps, IUserInfoProps, User } from "./types";
import useThrottle from './hooks'

const URL = "https://jsonplaceholder.typicode.com/users";

const Button = memo(
  function Button({ onClick }: IButtonProps): JSX.Element {
  console.log('BTN rerender', new Date().toLocaleTimeString())
  return (
    <button type="button" onClick={onClick}>
      get random user
    </button>
  );
}
)

function UserInfo({ user }: IUserInfoProps): JSX.Element {
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

function App(): JSX.Element {
  const [item, setItem] = useState<User | null>(null);

  const receiveRandomUser = async () => {
    const id = Math.floor(Math.random() * (10 - 1)) + 1;
    const response = await fetch(`${URL}/${id}`);
    const _user = (await response.json()) as User;
    setItem(_user);
  };

  const handleButtonClick = useThrottle(() => receiveRandomUser(), 1000);

  return (
    <div>
      <header>Get a random user</header>
      <Button onClick={handleButtonClick} />
      {item == null ? null : <UserInfo user={item} />}
    </div>
  );
}

export default App;