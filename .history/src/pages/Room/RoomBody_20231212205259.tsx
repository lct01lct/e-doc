import * as pdfjsLib from 'pdfjs-dist';

export const RoomBody = () => {
  const res = pdfjsLib.getDocument;
  console.log(res);
  return <div className="room-body"></div>;
};
