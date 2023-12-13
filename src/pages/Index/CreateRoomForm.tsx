import { FC, memo } from 'react';
import { EDocButton, EDocDialog, EDocForm, EDocInput } from '../../components';
import { useNavigate } from 'react-router-dom';
import { CreateRoomDto, createRoomApi } from '@/apis';
import { useRoomInfoStore } from '@/store';

export const CreateRoomForm: FC = memo(() => {
  const navigate = useNavigate();
  const { setLocalRoomId, setLocalUserId } = useRoomInfoStore();

  const onCreateRoomButtonClick = async (value: CreateRoomDto) => {
    const { data } = await createRoomApi(value);

    setLocalRoomId(data.id);
    setLocalUserId(data.ownId);

    navigate('/room');
  };

  return (
    <EDocDialog reference={<EDocButton>快速开始</EDocButton>}>
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
