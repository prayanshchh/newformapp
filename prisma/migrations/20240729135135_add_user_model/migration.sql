-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Form" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "authorid" TEXT NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "formid" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "questionid" TEXT NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Response" (
    "id" TEXT NOT NULL,
    "formid" TEXT NOT NULL,
    "userid" TEXT NOT NULL,

    CONSTRAINT "Response_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionResponse" (
    "id" TEXT NOT NULL,
    "questionid" TEXT NOT NULL,
    "responseid" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "QuestionResponse_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Form" ADD CONSTRAINT "Form_authorid_fkey" FOREIGN KEY ("authorid") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_formid_fkey" FOREIGN KEY ("formid") REFERENCES "Form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_questionid_fkey" FOREIGN KEY ("questionid") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_formid_fkey" FOREIGN KEY ("formid") REFERENCES "Form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_userid_fkey" FOREIGN KEY ("userid") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionResponse" ADD CONSTRAINT "QuestionResponse_questionid_fkey" FOREIGN KEY ("questionid") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionResponse" ADD CONSTRAINT "QuestionResponse_responseid_fkey" FOREIGN KEY ("responseid") REFERENCES "Response"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
