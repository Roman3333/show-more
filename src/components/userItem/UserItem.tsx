import { FC } from 'react';
import { IUser } from '../../types/user';
import cl from './userItem.module.scss';

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div className={cl.parent}>
      <div className={cl.parentLeft}>
        <img src={user.avatar} alt="user" loading="lazy" />
      </div>
      <div className={cl.parentRight}>
        <div className={cl.parentName}>
          <span>{user.first_name}</span>
          <span>{user.last_name}</span>
        </div>
        <div className={cl.parentEmail}>{user.email}</div>
      </div>
    </div>
  );
};

export default UserItem;
