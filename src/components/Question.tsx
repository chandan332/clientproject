import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface QuestionProps {
  title: string;
  description: string;
}

const Question = ({ title, description }: QuestionProps) => {
  return (
    <Card className="mx-4 my-2 shadow-lg ">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <span className="font-semibold">Answer:</span> {description}
          regulations.
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default Question;
