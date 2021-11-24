import React, { FC } from 'react';
import style from './Friend.module.css';
import Friend from './Friend';
import Pagination from '../Common/Pagination';
import { UserType } from '../../types/types';

type PropsType = {
  users: Array<UserType>
  totalCount: number
  pageSize: number
  currentPage: number
  isFetching: boolean
  setIsFetching: (isFetching: boolean, id: number) => void
  unfollowUser: (id: number) => void
  followUser: (id: number) => void
  changeCurrentPage: (currentPage: number) => void
}
const FriendList: FC<PropsType> = (props) => {
  const changeToggle = (id: number, follow: boolean) => {
    props.setIsFetching(true, id);
    follow ? props.unfollowUser(id) : props.followUser(id);
  }
  return (
    <div>
      <Pagination totalCount={props.totalCount} pageSize={props.pageSize} changeCurrentPage={props.changeCurrentPage} currentPage={props.currentPage} />
      <div className={style.friendList} >
        {
          props.users.map(user => <Friend key={user.id} id={user.id} photo={user.photos.small} name={user.name}
            followed={user.followed} isFetching={props.isFetching} changeToggle={changeToggle} />)
        }
      </div>
    </div>
  )
};

export default FriendList;
