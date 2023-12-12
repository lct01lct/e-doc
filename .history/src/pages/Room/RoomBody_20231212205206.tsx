import * as pdfjsLib from 'pdfjs-dist';

export const RoomBody = () => {
  pdfjsLib.getDocument({ url: '../../1.pdf' });
  return <div className="room-body"></div>;
};
