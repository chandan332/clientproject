import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <div className="m-auto bg-white p-8 rounded shadow-md max-w-md w-full">
      <h2 className="text-2xl font-semibold text-green-600 mb-4">
        Form Submission Successful!
      </h2>
      <p className="text-gray-700 mb-4">
        Thank you for submitting the form. Your information has been received.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back to homepage
      </Link>
    </div>
  );
};

export default SuccessPage;
