import { FC, useRef } from 'react';
import { EDocButton, EDocDialog, EDocDialogRefs } from '../../components';

export const JoinRoomForm: FC = () => {
  const dialogRef = useRef<EDocDialogRefs>(null);
  const ButtonTrigger = <EDocButton themeColor="white">加入协作</EDocButton>;

  return <EDocDialog reference={ButtonTrigger} ref={dialogRef}></EDocDialog>;
};
