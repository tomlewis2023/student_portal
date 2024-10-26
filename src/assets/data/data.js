// src/assets/data/data.js
import sunImg from '../icons/sun.png';
import textImg from '../icons/text.png';
import camImg from '../icons/cam.png';
import groupMessageImg from '../images/groupmessag.png';
import noLiveClassImg from '../images/noliveclass.png';
import bookImg from '../icons/book.png';
import contactImg from '../icons/contact.png';
import whtsImg from '../icons/whts.png';
import circleImg from '../icons/circle.png';
import groupImg from '../images/group.png';
import frameImg from '../images/Frame1.png';

export const Announcement = [
  {
    id: 1,
    img: sunImg,
    note: "On account of Independence Day, August 15th will be a holiday",
  },
  {
    id: 2,
    img: textImg,
    note: "Reminder to finish your assignments and submit them on Monday",
  },
];

export const Schedule = [
  {
    id: 1,
    img: camImg,
    class: "Class 7, Science | Live Class",
    time: "Tuesday, 5:00 - 5:50 PM",
    day: "Yesterday",
    color: "#4749B3",
    background: "#F2F2FF",
    popupImage: groupMessageImg,
    alternateImage: noLiveClassImg,
  },
  {
    id: 2,
    img: camImg,
    class: "Class 7, Science | Live Class",
    time: "Tuesday, 6:30 - 7:15 PM",
    day: "Today",
    color: "#FFFFFF",
    background: "#E66DFF",
    popupImage: groupMessageImg,
    alternateImage: noLiveClassImg,
  },
  {
    id: 3,
    img: camImg,
    class: "Class 7, Science | Live Class",
    time: "Tuesday, 5:00 - 5:50 PM",
    day: "Tomorrow",
    color: "#4749B3",
    background: "#F2F2FF",
    popupImage: groupMessageImg,
    alternateImage: noLiveClassImg,
  },
  {
    id: 4,
    img: camImg,
    class: "Class 7, Science | Live Class",
    time: "Tuesday, 5:00 - 5:50 PM",
    day: "23rd Sept 2024",
    color: "#E66DFF",
    background: "#FDF5FF",
    popupImage: groupMessageImg,
    alternateImage: noLiveClassImg,
  },
];

export const Links = [
  {
    id: 1,
    img: bookImg,
    title: "Canvas LMS",
    para: "Click here to access your LMS portal for assignments, class recordings, and notes",
    background: "#4749B3",
    hovercolor: "#6669FE",
    hoverbackground: "#FFFFFF",
    color: "#FFFFFF",
  },
  {
    id: 2,
    img: contactImg,
    title: "Join Live Class",
    para: "Class 7 Math is starting in 1 hour, 35 minutes",
    background: "#E66DFF",
    hovercolor: "#E66DFF",
    hoverbackground: "#FFFFFF",
    color: "#FFFFFF",
  },
  {
    id: 3,
    img: whtsImg,
    title: "Contact Teacher",
    para: "Click here to contact your teacher for any doubts or concerns",
    background: "#6669FE",
    hovercolor: "#6669FE",
    hoverbackground: "#FFFFFF",
    color: "#FFFFFF",
  },
];

export const Recordings = [
  {
    id: 1,
    img1: circleImg,
    img2: groupImg,
    title: "Class 7 Math",
    para: "Algebraic Equations",
    date: "24th October 2024",
    color: "#000000",
    note: "play now",
    hovercolortitle: "#A3A4D9",
    hovercolorpara: "#4749B3",
    borderbottom: "#6669FE",
    frameImage: frameImg,
  },
  {
    id: 2,
    img1: circleImg,
    img2: groupImg,
    title: "Class 7 Math",
    para: "Inert Gases",
    date: "24th October 2024",
    color: "#000000",
    note: "play now",
    hovercolortitle: "#A3A4D9",
    hovercolorpara: "#4749B3",
    borderbottom: "#6669FE",
    frameImage: frameImg,
  },
  {
    id: 3,
    img1: circleImg,
    img2: groupImg,
    title: "Class 7 Science",
    para: "Fundamentals of Organic Chemistry",
    date: "24th October 2024",
    color: "#000000",
    note: "play now",
    hovercolortitle: "#E66DFF",
    hovercolorpara: "#E66DFF",
    borderbottom: "#6669FE",
    frameImage: frameImg,
  },
  {
    id: 4,
    img1: circleImg,
    img2: groupImg,
    title: "Class 7 Math",
    para: "Trigonometry 101",
    date: "24th October 2024",
    color: "#000000",
    note: "play now",
    hovercolortitle: "#A3A4D9",
    hovercolorpara: "#4749B3",
    borderbottom: "#6669FE",
    frameImage: frameImg,
  },
];
