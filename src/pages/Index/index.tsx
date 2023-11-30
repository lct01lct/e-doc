import { memo } from 'react';
import { CreateRoomForm } from './CreateRoomForm';
import { JoinRoomForm } from './JoinRoomForm';
import './index.css';
import LogoImg from '@/assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

export const Index = memo(() => {
  const navigate = useNavigate();

  return (
    <div className="main-wrapper flex flex-col">
      <header className="index-header main-container h-20 flex items-center">
        <div
          className="logo text-2xl font-bold flex items-center cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img src={LogoImg} className="h-10 w-10 mr-3" alt="" />
          e-doc
        </div>
      </header>
      <section className="index-module flex-1 flex flex-col items-center pt-20">
        <div className="banner ">在线共享文档协作平台</div>
        <div className="introduce ">面向个人和团队，提供快捷流畅的工作协同</div>
        <div className="start mt-20 flex gap-3">
          <CreateRoomForm></CreateRoomForm>
          <JoinRoomForm></JoinRoomForm>
        </div>
      </section>
    </div>
  );
});
