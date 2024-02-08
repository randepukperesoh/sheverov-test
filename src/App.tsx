// Мы ожидаем, что Вы исправите синтаксические ошибки, сделаете перехват возможных исключений и улучшите читаемость кода.
// А так же, напишите кастомный хук useThrottle и используете его там где это нужно.
// Желательно использование React.memo и React.useCallback там где это имеет смысл.
// Будет большим плюсом, если Вы сможете закэшировать получение случайного пользователя.
// Укажите правильные типы.

import { useCallback, useState } from "react";
import { User } from "./types";
import { UserInfo } from "./UserInfo/UserInfo";
import {Button} from './Button/Button'

const URL = "https://jsonplaceholder.typicode.com/users";

function App(): JSX.Element {
  const [item, setItem] = useState<User | null>(null);

  const receiveRandomUser = useCallback(async () => {
    const id = Math.floor(Math.random() * (10 - 1)) + 1;
    const response = await fetch(`${URL}/${id}`);
    const _user = (await response.json()) as User;
    setItem(_user);
  },[]);
  
  return (
    <div>
      <header>Get a random user</header>
      <Button onClick={receiveRandomUser} />
      {item == null ? null : <UserInfo user={item} />}
    </div>
  );
}

export default App;