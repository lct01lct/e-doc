import 'pdfjs-dist/web/pdf_viewer.css';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';
import pdfPath from '@/1.pdf';

pdfjsLib.GlobalWorkerOptions.workerSrc = window.pdfjsWorker;

export const RoomBody = () => {
  pdfjsLib.getDocument({ url: pdfPath }).promise.then(pdf => {
    console.log(pdf);
  });
  return <div className="room-body"></div>;
};
