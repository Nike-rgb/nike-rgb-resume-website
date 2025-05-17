"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import Island from "./Island";

function Container({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="px-2 md:px-8 flex items-center bg-[#f5f4eb30] justify-center">
        <div className="px-4 md:px-16 py-8 rounded-lg bg-white shadow-xl">
          {children}
        </div>
      </div>
    </>
  );
}

export type Props = {
  extraClasses?: string;
  title: string;
  description: string;
  comments: {
    name: string;
    comment: string;
    time: string;
    avatarUrl: string;
  }[];
  names: string[];
};

const WhatTheySayAboutUs: React.FC<Props> = ({
  extraClasses,
  title,
  description,
  comments,
  names,
}) => {
  const [commentsList, setCommentsList] = React.useState(comments);
  const [newComment, setNewComment] = React.useState("");
  const [commented, setCommented] = React.useState(false);
  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };
  const addComment = () => {
    setCommentsList([
      ...commentsList,
      {
        name: "Nice person",
        comment: newComment != "" ? newComment : "Alas! he had nothing to say",
        time: "Just now",
        avatarUrl: "https://i.pravatar.cc/40?img=4",
      },
    ]);
    setCommented(true);
  };
  return (
    <div className={`${extraClasses}`}>
      <div className="flex flex-col md:flex-row items-center px-0 md:px-24 py-8 md:py-24 gap-12 md:gap-24">
        <div className="flex flex-col gap-4 md:gap-8 md:pr-[10%] w-full md:w-1/2">
          <p className="text-2xl md:text-4xl font-bold text-[#18181B]">
            {title}
          </p>
          <p className="text-md md:text-lg text-[#3F3F46]">{description}</p>
        </div>
        <div className="w-full md:w-1/2 relative min-h-[370px]">
          <div className="w-full md:w-[297px] relative shadow-sm rounded-[20px] px-4 py-4 md:px-[19px] md:py-[17px]">
            <div className="absolute w-full h-full backdrop-blur-[3px] left-0 top-0 bg-white/30 "></div>
            <h3 className="font-bold text-[10px] md:text-[11px] tracking-[1px] mb-4 text-[#3F3F46]">
              Customers
            </h3>
            <ul className="space-y-4">
              {names.map((name, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Image
                    src={`https://i.pravatar.cc/40?img=${index + 1}`}
                    alt={name}
                    width={50}
                    height={50}
                    className="w-[35px] h-[35px] rounded-full"
                  />
                  <span className="font-medium text-[#18181B] text-sm md:text-base">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute top-12 md:top-24 w-[80%] md:w-[360px] p-4 md:p-[17px] left-1/2 transform -translate-x-1/2 bg-white border-[0.94px] border-[#E4E4E7] rounded-[20px]">
            <div>
              {commentsList.map((comment, index) => (
                <div key={index} className="flex gap-4 mb-[22px]">
                  <Image
                    src={comment.avatarUrl}
                    width={50}
                    height={50}
                    alt={comment.name}
                    className="w-[33px] h-[33px] rounded-full mt-[5px]"
                  />
                  <div>
                    <p className="text-[#18181B] text-[15px] font-bold">
                      {comment.name}
                    </p>
                    <p className="text-sm text-[#52525B] mt-1">
                      {comment.comment}
                    </p>
                    <div className="flex gap-4 text-xs text-[#A1A1AA] font-medium mt-[7.3px]">
                      <span>{comment.time}</span>
                      <button>Reply</button>
                    </div>
                  </div>
                </div>
              ))}
              {!commented && (
                <div className="flex gap-2 md:gap-4 md:px-4">
                  <input
                    onChange={handleCommentChange}
                    className="w-full border-[0.94px] border-[#c6c6c8] rounded-[20px] px-4 py-2 text-sm"
                  />
                  <button
                    onClick={addComment}
                    className="bg-[#3B82F6] text-white rounded-[20px] px-4 py-2 text-sm">
                    Send
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ShowCase() {
  return (
    <>
      <div className="mb-10 md:my-40">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#212529] mb-2 md:mb-16">
          {" "}
          I build components such as
        </h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mx-auto my-12">
          <Container>
            <WhatTheySayAboutUs
              title="What our customers say about us"
              description="We have a very loyal customer base. Our customers are our biggest asset."
              comments={[
                {
                  name: "John Doe",
                  comment: "Great service!",
                  time: "2 hours ago",
                  avatarUrl: "https://i.pravatar.cc/40?img=1",
                },
                {
                  name: "Jane Smith",
                  comment: "Highly recommend!",
                  time: "3 hours ago",
                  avatarUrl: "https://i.pravatar.cc/40?img=2",
                },
                {
                  name: "Alice Johnson",
                  comment: "Will use again!",
                  time: "4 hours ago",
                  avatarUrl: "https://i.pravatar.cc/40?img=3",
                },
              ]}
              names={["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"]}
            />
          </Container>
          <p className="font-[Indie_Flower] text-md md:text-xl font-medium w-48 self-end">
            {
              "Go ahead, add a comment of your own. Don't worry, I won't know what you've written"
            }
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-[#212529] mt-12 mb-2">
          {" "}
          Or something creative
        </h2>
        <div className="mt-8 md:mt-48">
          <div className="md:max-w-[70vw] mx-auto">
            <div className="flex justify-between ">
              <div className="flex">
                <Image
                  src="/cloud.png"
                  alt="cloud"
                  width={500}
                  height={500}
                  className="w-40 md:w-98 -rotate-16"
                />
                <Image
                  src="/cloud.png"
                  alt="cloud"
                  width={500}
                  height={500}
                  className="w-40 relative -left-1/2 md:-left-80 -rotate-16 opacity-90"
                />
                <Image
                  src="/cloud.png"
                  alt="cloud"
                  width={500}
                  height={500}
                  className="w-98 relative opacity-95 hidden md:inline md:-left-100 -rotate-16"
                />
              </div>
              <Image
                src="/bird.gif"
                alt="BIRD"
                unoptimized
                width={500}
                height={500}
                className="fly size-24 md:size-48 -rotate-10"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-16">
              <p className="font-[Indie_Flower] text-lg md:text-2xl font-medium -rotate-6 relative md:-top-16">
                {"This is not a picture. Try spinning the island"}
              </p>
              <Island />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
