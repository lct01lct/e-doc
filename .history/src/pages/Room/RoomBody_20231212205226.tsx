import * as pdfjsLib from 'pdfjs-dist';

export const RoomBody = () => {
  pdfjsLib.getDocument({ url: '../../1.pdf' }).promise.then(pdf => {
    console.log(pdf);
  });
  return <div className="room-body"></div>;
};
