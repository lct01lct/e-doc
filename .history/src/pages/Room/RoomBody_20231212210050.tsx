import 'pdfjs-dist/web/pdf_viewer.css';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';

pdfjsLib.GlobalWorkerOptions.workerSrc = window.pdfjsWorker;

export const RoomBody = () => {
  pdfjsLib.getDocument({ url: '../../1.pdf' }).promise.then(pdf => {
    console.log(pdf);
  });
  return <div className="room-body"></div>;
};
