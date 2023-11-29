import { FC, useRef } from 'react';
import { EDocButton, EDocDialog, EDocDialogRefs, EDocForm, EDocInput } from '../../components';

export interface CreateRoomDTO {
  username: string;
  secretKey?: string;
}

export const CreateRoomForm: FC = () => {
  const dialogRef = useRef<EDocDialogRefs>(null);
  const ButtonTrigger = <EDocButton>快速开始</EDocButton>;

  const onCreateRoomButtonClick = (value: CreateRoomDTO) => {
    console.log(value);
  };

  return (
    <EDocDialog reference={ButtonTrigger} ref={dialogRef}>
      <EDocForm title="创建房间" onFinish={onCreateRoomButtonClick}>
        <EDocForm.Item label="昵称" name="username" required>
          <EDocInput placeholder="请输入昵称"></EDocInput>
        </EDocForm.Item>
        <EDocForm.Item label="房间秘钥" name="secretKey">
          <EDocInput placeholder="不填写，即公开房间"></EDocInput>
        </EDocForm.Item>
        <EDocForm.Item>
          <EDocButton themeColor="purple" type="submit">
            创建!
          </EDocButton>
        </EDocForm.Item>
      </EDocForm>
    </EDocDialog>
  );
};
