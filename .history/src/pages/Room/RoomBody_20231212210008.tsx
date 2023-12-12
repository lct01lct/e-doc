import { getDocument } from 'pdfjs-dist';

export const RoomBody = () => {
  getDocument({ url: '../../1.pdf' }).promise.then(pdf => {
    console.log(pdf);
  });
  return <div className="room-body"></div>;
};
