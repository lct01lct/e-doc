import { FC, memo, useRef } from 'react';
import { EDocButton, EDocDialog, EDocDialogRefs, EDocForm, EDocInput } from '../../components';

export interface JoinRoomDTO {
  username: string;
  secretKey?: string;
  roomId: string;
}

export const JoinRoomForm: FC = memo(() => {
  const dialogRef = useRef<EDocDialogRefs>(null);
  const ButtonTrigger = <EDocButton themeColor="white">加入协作</EDocButton>;

  const onJoinRoomButtonClick = (value: JoinRoomDTO) => {
    console.log(value);
  };

  return (
    <EDocDialog reference={ButtonTrigger} ref={dialogRef}>
      <EDocForm title="加入协作" onFinish={onJoinRoomButtonClick}>
        <EDocForm.Item
          label="昵称"
          name="username"
          required="请输入昵称！"
          rules={[{ message: '昵称字符数不能超过10', rule: val => val.length <= 10 }]}
        >
          <EDocInput placeholder="请输入昵称"></EDocInput>
        </EDocForm.Item>
        <EDocForm.Item label="房间号" name="roomId" required="请输入房间号!">
          <EDocInput placeholder="请输入房间号"></EDocInput>
        </EDocForm.Item>
        <EDocForm.Item label="房间秘钥" name="secretKey">
          <EDocInput placeholder="不填写，即代表加入公共房间"></EDocInput>
        </EDocForm.Item>
        <EDocForm.Item>
          <EDocButton themeColor="purple" type="submit">
            加入!
          </EDocButton>
        </EDocForm.Item>
      </EDocForm>
    </EDocDialog>
  );
});
