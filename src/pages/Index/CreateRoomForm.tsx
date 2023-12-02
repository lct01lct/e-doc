import { FC, memo } from 'react';
import { EDocButton, EDocDialog, EDocForm, EDocInput } from '../../components';
import { useNavigate } from 'react-router-dom';

export interface CreateRoomDTO {
  username: string;
  secretKey?: string;
}

export const CreateRoomForm: FC = memo(() => {
  const ButtonTrigger = <EDocButton>快速开始</EDocButton>;
  const navigate = useNavigate();

  const onCreateRoomButtonClick = (value: CreateRoomDTO) => {
    console.log(value);

    navigate('/room');
  };

  return (
    <EDocDialog reference={ButtonTrigger}>
      <EDocForm title="创建房间" onFinish={onCreateRoomButtonClick}>
        <EDocForm.Item
          label="昵称"
          name="username"
          required="请输入昵称！"
          rules={[{ message: '昵称字符数不能超过10', rule: val => val.length <= 10 }]}
        >
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
});
