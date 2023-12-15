import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs";

const f = createUploadthing();

const handelAuth = () => {
  const { userId } = auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  return { userId };
};

export const ourFileRouter = {
  courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handelAuth())
    .onUploadComplete(() => {}),
  courseAttachment: f(["text", "image", "video", "audio", "pdf"])
    .middleware(() => handelAuth())
    .onUploadComplete(() => {}),
  chapterVideo: f({ video: { maxFileSize: "512GB", maxFileCount: 1 } })
    .middleware(() => handelAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
